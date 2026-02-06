<?php

use Automattic\WooCommerce\Blocks\Integrations\IntegrationInterface;

define('CQOC_BLOCK_VERSION', '1.0.0' );

class Blocks_Integration_Lite implements IntegrationInterface {

    /**
	 * The name of the integration.
	 *
	 * @return string
	 */
	public function get_name() {
		return 'cqoc-order-summary-block';
	}

	/**
	 * When called invokes any initialization/setup for the integration.
	 */
	public function initialize() {
		$this->register_block_frontend_scripts();
		$this->register_block_editor_scripts();
		 
	}

	/**
	 * Returns an array of script handles to enqueue in the frontend context.
	 *
	 * @return string[]
	 */
	public function get_script_handles() {
		return array( 'cqoc-order-summary-block-frontend' );
	}

	/**
	 * Returns an array of script handles to enqueue in the editor context.
	 *
	 * @return string[]
	 */
	public function get_editor_script_handles() {
		return array( 'cqoc-order-summary-block-editor' );
	}

	/**
	 * An array of key, value pairs of data made available to the block on the client side.
	 *
	 * @return array
	 */
	public function get_script_data() {
		return array();
	}

	public function register_block_editor_scripts() {
		$script_path       = '/build/index.js';
		$style_path        = '/build/style-index.css';
        
		$script_url        = plugins_url( 'change-quantity-on-checkout-for-woocommerce' . $script_path );
		$script_asset_path = plugins_url( 'change-quantity-on-checkout-for-woocommerce/build/index.asset.php' );
		$style_url         = plugins_url( 'change-quantity-on-checkout-for-woocommerce' . $style_path );

		$script_asset      = file_exists( $script_asset_path )
			? require $script_asset_path
			: array(
				'dependencies' => array(),
				'version'      => $this->get_file_version( $script_asset_path ),
			);

			// Register and enqueue the CSS
			wp_register_style(
				'cqoc-order-summary-block-editor-style',
				$style_url,
				array(),
				$script_asset['version']
			);
			wp_enqueue_style( 'cqoc-order-summary-block-editor-style' );

		wp_register_script(
			'cqoc-order-summary-block-editor',
			$script_url,
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}

	/**
	 * Register scripts for frontend block.
	 *
	 * @return void
	 */
	public function register_block_frontend_scripts() {
		$script_path       = '/build/cqoc-order-summary-block-frontend.js';
		$style_path        = '/build/style-index.css';

		$script_url        = plugins_url( '/change-quantity-on-checkout-for-woocommerce' . $script_path );
		$style_url         = plugins_url( '/change-quantity-on-checkout-for-woocommerce' . $style_path );

		$script_asset_path = WP_PLUGIN_DIR . '/change-quantity-on-checkout-for-woocommerce/build/cqoc-order-summary-block-frontend.asset';

		$script_asset = file_exists( $script_asset_path )
			? require $script_asset_path
			: array(
				'dependencies' => array(),
				'version'      => $this->get_file_version( $script_asset_path ),
			);

		// Register and enqueue the CSS
		wp_register_style(
			'cqoc-order-summary-block-frontend-style',
			$style_url,
			array(),
			$script_asset['version']
		);
		wp_enqueue_style( 'cqoc-order-summary-block-frontend-style' );

		wp_register_script(
			'cqoc-order-summary-block-frontend',
			$script_url,
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}


	/**
	 * Get the file modified time as a cache buster if we're in dev mode.
	 *
	 * @param string $file Local path to the file.
	 * @return string The cache buster value to use for the given file.
	 */
	protected function get_file_version( $file ) {
		if ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG && file_exists( $file ) ) {
			return filemtime( $file );
		}
		return CQOC_BLOCK_VERSION;
	}

}