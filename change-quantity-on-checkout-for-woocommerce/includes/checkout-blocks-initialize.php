<?php

/**
 * 
 * Initializes checkout blocks
 **/

add_action( 'woocommerce_blocks_loaded', 'cqoc_init_checkout_blocks' );

/**
 * Initializes the checkout blocks.
 *
 * This function is responsible for initializing the checkout blocks by requiring the 'class-block-integration.php' file and registering the necessary actions and endpoints.
 *
 * @return void
 */
function cqoc_init_checkout_blocks () {
    require_once 'class-block-integration.php';
    add_action(
        'woocommerce_blocks_checkout_block_registration',
        function( $integration_registry ) {
            $integration_registry->register( new Blocks_Integration_Lite() );
        }
    );
} 