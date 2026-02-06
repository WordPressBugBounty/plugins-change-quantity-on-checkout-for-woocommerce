<?php

if (!class_exists('CQOC_Admin')) {
    class CQOC_Admin
    {
        public static function cqoc_add_menu()
        {
            add_menu_page(
                __('Change Quantity on Checkout For WooCommerce', 'cqoc'),
                __('CQOC', 'cqoc'),
                'manage_options',
                'cqoc-settings-page',
                array( __CLASS__, 'cqocSettingsPage' ),
                'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJyA/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHdpZHRoPScxMDI0JyBoZWlnaHQ9JzEwMjQnPgoKPGcgdHJhbnNmb3JtPSdtYXRyaXgoMTEuNjggMCAwIDkuODEgNTEyIDY4NC4zNSknICA+CjxnIHN0eWxlPScnIHZlY3Rvci1lZmZlY3Q9J25vbi1zY2FsaW5nLXN0cm9rZScgICA+CgkJPGcgdHJhbnNmb3JtPSdtYXRyaXgoMSAwIDAgMSA5LjgxIC0xMS40MiknICA+Cjxwb2x5Z29uIHN0eWxlPSdzdHJva2U6IG5vbmU7IHN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTsgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7IHN0cm9rZS1kYXNob2Zmc2V0OiAwOyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogNDsgZmlsbDogcmdiKDEwMSwxMDEsMTAxKTsgZmlsbC1ydWxlOiBub256ZXJvOyBvcGFjaXR5OiAxOycgdmVjdG9yLWVmZmVjdD0nbm9uLXNjYWxpbmctc3Ryb2tlJyAgcG9pbnRzPScxMy4yLDEyLjM5IC0yMC42NCwxMi4zOSAtMjQuNzgsLTEyLjM5IDI0Ljc4LC0xMi4zOSAnIC8+CjwvZz4KCQk8ZyB0cmFuc2Zvcm09J21hdHJpeCgxIDAgMCAxIC0yLjQ2IC05LjIyKScgID4KPHBhdGggc3R5bGU9J3N0cm9rZTogbm9uZTsgc3Ryb2tlLXdpZHRoOiAxOyBzdHJva2UtZGFzaGFycmF5OiBub25lOyBzdHJva2UtbGluZWNhcDogYnV0dDsgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7IHN0cm9rZS1saW5lam9pbjogbWl0ZXI7IHN0cm9rZS1taXRlcmxpbWl0OiA0OyBmaWxsOiByZ2IoMTAxLDEwMSwxMDEpOyBmaWxsLXJ1bGU6IG5vbnplcm87IG9wYWNpdHk6IDE7JyB2ZWN0b3ItZWZmZWN0PSdub24tc2NhbGluZy1zdHJva2UnICB0cmFuc2Zvcm09JyB0cmFuc2xhdGUoLTQ1LjEzLCAtNDAuNzgpJyBkPSdNIDE0LjI0MyAyMS40NzcgQyAxMy4wMzcgMjAuNzQ1IDEyLjY2OSAxOS4yMjUgMTMuMzUxIDE4LjAxOSBDIDE0LjA4NDAwMDAwMDAwMDAwMSAxNi44MTMgMTUuNjU0IDE2LjM5NSAxNi44NiAxNy4xMjcgQyAyMi42NzQgMjAuNTg1IDI2LjY1NSAyNi43MTMgMjkuMzggMzQuNzI5IEMgMzEuNzkxIDQxLjggMzMuMjAyIDUwLjMzOSAzNC4wOTQgNTkuNzE3IEwgNzQuNzQgNTkuNzE3IEMgNzYuMTA0IDU5LjcxNyA3Ny4yNTYgNjAuODY3IDc3LjI1NiA2Mi4yODIgQyA3Ny4yNTYgNjMuNjk2OTk5OTk5OTk5OTk2IDc2LjEwNSA2NC43OTU5OTk5OTk5OTk5OSA3NC43NCA2NC43OTU5OTk5OTk5OTk5OSBMIDMyIDY0Ljc5NTk5OTk5OTk5OTk5IEMgMzAuNTg1IDY0Ljg5OTk5OTk5OTk5OTk5IDI5LjM4IDYzLjkwNTk5OTk5OTk5OTk5IDI5LjI3NSA2Mi40OTE5OTk5OTk5OTk5OSBDIDI4LjQzOCA1Mi41Mzg5OTk5OTk5OTk5OSAyNy4wMjMgNDMuNTc5OTk5OTk5OTk5OTkgMjQuNTYxOTk5OTk5OTk5OTk4IDM2LjM1Mjk5OTk5OTk5OTk5NCBDIDIyLjIwNSAyOS40OTEgMTguOTU2IDI0LjI1MiAxNC4yNDMgMjEuNDc3IHonIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgLz4KPC9nPgoJCTxnIHRyYW5zZm9ybT0nbWF0cml4KDEgMCAwIDEgLTEzLjYxIDI2LjA2KScgID4KPGNpcmNsZSBzdHlsZT0nc3Ryb2tlOiBub25lOyBzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtZGFzaG9mZnNldDogMDsgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjsgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7IGZpbGw6IHJnYigxMDEsMTAxLDEwMSk7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTsnIHZlY3Rvci1lZmZlY3Q9J25vbi1zY2FsaW5nLXN0cm9rZScgIGN4PScwJyBjeT0nMCcgcj0nNy4xNzYnIC8+CjwvZz4KCQk8ZyB0cmFuc2Zvcm09J21hdHJpeCgxIDAgMCAxIDIxLjkxIDI2LjA2KScgID4KPGNpcmNsZSBzdHlsZT0nc3Ryb2tlOiBub25lOyBzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtZGFzaG9mZnNldDogMDsgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjsgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7IGZpbGw6IHJnYigxMDEsMTAxLDEwMSk7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTsnIHZlY3Rvci1lZmZlY3Q9J25vbi1zY2FsaW5nLXN0cm9rZScgIGN4PScwJyBjeT0nMCcgcj0nNy4xNzYnIC8+CjwvZz4KPC9nPgo8L2c+CjxnIHRyYW5zZm9ybT0nbWF0cml4KDQuMzkgMCAwIDMuODkgMjg0LjU1IDE2MC42MSknIGlkPSc1MzllYWMzNC05MWY1LTRkZDYtYTIxYy1mY2Q0MjI3NTgwYmEnICA+CjxwYXRoIHN0eWxlPSdzdHJva2U6IHJnYigwLDAsMCk7IHN0cm9rZS13aWR0aDogMDsgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTsgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7IHN0cm9rZS1kYXNob2Zmc2V0OiAwOyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogNDsgZmlsbDogcmdiKDEwMSwxMDEsMTAxKTsgZmlsbC1ydWxlOiBub256ZXJvOyBvcGFjaXR5OiAxOycgdmVjdG9yLWVmZmVjdD0nbm9uLXNjYWxpbmctc3Ryb2tlJyAgdHJhbnNmb3JtPScgdHJhbnNsYXRlKC01MCwgLTUwKScgZD0nTSA0MC43NDcgMTMuOTU1IEwgNTkuMjU0MDAwMDAwMDAwMDA1IDEzLjk1NSBDIDYwLjM1MyAxMy45NTUgNjEuMjQyMDAwMDAwMDAwMDA0IDE0Ljg0NSA2MS4yNDIwMDAwMDAwMDAwMDQgMTUuOTQxIEwgNjEuMjQyMDAwMDAwMDAwMDA0IDM4Ljc4NyBMIDg0LjA4NjAwMDAwMDAwMDAxIDM4Ljc4NyBDIDg1LjE4NDAwMDAwMDAwMDAxIDM4Ljc4NyA4Ni4wNzAwMDAwMDAwMDAwMSAzOS42NzUgODYuMDcwMDAwMDAwMDAwMDEgNDAuNzcyOTk5OTk5OTk5OTk2IEwgODYuMDcwMDAwMDAwMDAwMDEgNTkuMjI2IEMgODYuMDcwMDAwMDAwMDAwMDEgNjAuMzI0OTk5OTk5OTk5OTk2IDg1LjE4MyA2MS4yMTE5OTk5OTk5OTk5OTYgODQuMDg2MDAwMDAwMDAwMDEgNjEuMjExOTk5OTk5OTk5OTk2IEwgNjEuMjQyIDYxLjIxMTk5OTk5OTk5OTk5NiBMIDYxLjI0MiA4NC4wNTc5OTk5OTk5OTk5OSBDIDYxLjI0MiA4NS4xNTcgNjAuMzUyIDg2LjA0NCA1OS4yNTQgODYuMDQ0IEwgNDAuNzQ3IDg2LjA0NCBDIDM5LjY1MiA4Ni4wNDQgMzguNzYyIDg1LjE1NTk5OTk5OTk5OTk5IDM4Ljc2MiA4NC4wNTc5OTk5OTk5OTk5OSBMIDM4Ljc2MiA2MS4yMTMgTCAxNS45MTUgNjEuMjEzIEMgMTQuODE5OTk5OTk5OTk5OTk5IDYxLjIxMyAxMy45MyA2MC4zMjUgMTMuOTMgNTkuMjI3MDAwMDAwMDAwMDA0IEwgMTMuOTMgNDAuNzczIEMgMTMuOTMgMzkuNjc0MDAwMDAwMDAwMDEgMTQuODIgMzguNzg3MDAwMDAwMDAwMDA2IDE1LjkxNSAzOC43ODcwMDAwMDAwMDAwMDYgTCAzOC43NjIgMzguNzg3MDAwMDAwMDAwMDA2IEwgMzguNzYyIDE1Ljk0MSBDIDM4Ljc2MiAxNC44NDUgMzkuNjUxIDEzLjk1NSA0MC43NDcgMTMuOTU1IHonIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgLz4KPC9nPgo8ZyB0cmFuc2Zvcm09J21hdHJpeCg0LjA1IDAgMCA0LjU4IDc1MC43MyAxNTAuMzYpJyBpZD0nOWFjMTZiOTctYzQ3ZC00NjViLWFkNjItNDE5NGU3OTEyNzBkJyAgPgo8cGF0aCBzdHlsZT0nc3Ryb2tlOiByZ2IoMCwwLDApOyBzdHJva2Utd2lkdGg6IDA7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtZGFzaG9mZnNldDogMDsgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjsgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7IGZpbGw6IHJnYigxMDEsMTAxLDEwMSk7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTsnIHZlY3Rvci1lZmZlY3Q9J25vbi1zY2FsaW5nLXN0cm9rZScgIHRyYW5zZm9ybT0nIHRyYW5zbGF0ZSgtNTAsIC01MCknIGQ9J00gOTQuNzUgNTAgQyA5NC43NSA1Ni4yMTMgODkuNTE0IDYxLjI1IDgzLjA1NCA2MS4yNSBMIDE2Ljk0NiA2MS4yNSBDIDEwLjQ4NiA2MS4yNSA1LjI1IDU2LjIxMyA1LjI1IDUwIEwgNS4yNSA1MCBDIDUuMjUgNDMuNzg3IDEwLjQ4NiAzOC43NSAxNi45NDU5OTk5OTk5OTk5OTggMzguNzUgTCA4My4wNTMgMzguNzUgQyA4OS41MTQgMzguNzUgOTQuNzUgNDMuNzg3IDk0Ljc1IDUwIEwgOTQuNzUgNTAgeicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyAvPgo8L2c+Cjwvc3ZnPg==',
                '55.6'
            );
            
            add_action('admin_init', array(__CLASS__, 'registerSettings'));
            add_action('admin_enqueue_scripts', array(__CLASS__, 'enqueue_admin_scripts'));
        }

        public static function enqueue_admin_scripts($hook) {
            // Only load on your settings page - adjust the hook name according to your menu setup
            if (strpos($hook, 'cqoc') === false) {
                return;
            }
            
            // Add inline CSS and JS for tabs
            wp_add_inline_style('wp-admin', self::get_tab_styles());
            wp_add_inline_script('jquery', self::get_tab_scripts());
  
        }

        // Tab Styles and Scripts
        private static function get_tab_styles() {
            return '
            .cqoc-nav-tab-wrapper {
                margin-bottom: 20px;
            }
            .cqoc-nav-tab-wrapper .nav-tab {
                outline: none;
            }
            .cqoc-nav-tab-wrapper .nav-tab:focus {
                box-shadow: none;
            }
            .cqoc-pro-field {
                position: relative;
                background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                border: 2px dashed #dee2e6;
                border-radius: 8px;
                padding: 15px;
                margin: 10px 0;
            }
            .cqoc-pro-badge {
                display: inline-block;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 3px 8px;
                border-radius: 12px;
                font-size: 11px;
                font-weight: bold;
                margin-left: 10px;
                text-shadow: 0 1px 2px rgba(0,0,0,0.2);
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .cqoc-pro-field input[disabled] {
                cursor: not-allowed;
            }
            .cqoc-pro-field label {
                cursor: not-allowed;
            }
            ';
        }
        
        private static function get_tab_scripts() {
            return '
            jQuery(document).ready(function($) {
                $(".cqoc-nav-tab-wrapper .nav-tab").on("click", function(e) {
                    e.preventDefault();
                    window.location.href = $(this).attr("href");
                });
            });
            ';
        }

        public static function cqocSettingsPage()
        {
            $active_tab = isset($_GET['tab']) ? sanitize_text_field($_GET['tab']) : 'block';
            ?>
            <div class="wrap">
                <h1>Change Quantity on Checkout For WooCommerce</h1>
                
                <!-- Tab Navigation -->
                <nav class="nav-tab-wrapper cqoc-nav-tab-wrapper">
                    <a href="?page=<?php echo $_GET['page']; ?>&tab=block" 
                    class="nav-tab <?php echo $active_tab == 'block' ? 'nav-tab-active' : ''; ?>">
                    Block Checkout
                    </a>
                    <a href="?page=<?php echo $_GET['page']; ?>&tab=classic" 
                    class="nav-tab <?php echo $active_tab == 'classic' ? 'nav-tab-active' : ''; ?>">
                    Classic Checkout
                    </a>
                </nav>
                
                <?php settings_errors(); ?>
                
                <form action="options.php" method="POST">
                    <?php
                    settings_fields('cqocplugin');
                    
                    // Show different sections based on active tab
                    if ($active_tab == 'classic') {
                        do_settings_sections('cqoc-general-settings');
                    } elseif ($active_tab == 'block') {
                        do_settings_sections('cqoc-block-settings');
                    }
                    submit_button();
                    ?>
                </form>
            </div>
            <?php
        }

        public static function registerSettings()
        {
            // Initialize existing options with defaults
            if (empty(get_option('cqoc_addQuantityField'))){
                add_option('cqoc_addQuantityField', '1');
            }
            if (empty(get_option('cqoc_hideDeleteIcon'))){
                add_option('cqoc_hideDeleteIcon', '0');
            }
            
            // Register existing settings (maintain backward compatibility)
            register_setting('cqocplugin', 'cqoc_addQuantityField', array('sanitize_callback'=> array(__CLASS__,'sanitizeAddQantityField' ), 'default'=> '1'));
            register_setting('cqocplugin', 'cqoc_hideDeleteIcon', array('sanitize_callback'=> array(__CLASS__,'sanitizeDeleteIcon' ), 'default'=> '0'));
            
            // NEW SETTINGS for different tabs
            // Block Checkout Settings  
            register_setting('cqocplugin', 'cqoc_enableBlock', array('sanitize_callback'=> array(__CLASS__,'sanitizeCheckbox' ), 'default'=> '0'));
            register_setting('cqocplugin', 'cqoc_addDeleteIconBlock', array('sanitize_callback'=> array(__CLASS__,'sanitizeCheckbox' ), 'default'=> '0'));

            // CLASSIC SETTINGS SECTION (existing settings)
            add_settings_section('cqoc_general_section', __('Classic Checkout Configuration', 'cqoc'), array(__CLASS__, 'generalSectionCallback'), 'cqoc-general-settings');
            add_settings_field('cqoc_addQuantityField', __('Add Quantity Field On Checkout', 'cqoc'), array(__CLASS__, 'checkboxHTML'), 'cqoc-general-settings', 'cqoc_general_section', array('theName' => 'cqoc_addQuantityField', 'desc'=>'Activate the functionality for classic checkout. It will add Quantity selector automatically.'));
            add_settings_field('cqoc_hideDeleteIcon', __('Hide Delete Button', 'cqoc'), array(__CLASS__, 'checkboxHTML'), 'cqoc-general-settings', 'cqoc_general_section', array('theName' => 'cqoc_hideDeleteIcon', 'desc'=>'Turn on this option to hide the delete symbol for products.'));

            // Pro fields for classic checkout
            add_settings_field('cqocp_hideProductImage', __('Hide Product Image', 'cqocp'), array(__CLASS__, 'checkboxProHTML'), 'cqoc-general-settings', 'cqoc_general_section', array('theName' => 'cqocp_hideProductImage', 'desc'=>'Turn on this feature to make the product thumbnail disappear.'));
            add_settings_field('cqocp_addQtyButton', __('Add Quantity(+ & -) as Button', 'cqocp'), array(__CLASS__, 'checkboxProHTML'), 'cqoc-general-settings', 'cqoc_general_section', array('theName' => 'cqocp_addQtyButton', 'desc'=>'Activate this option if your theme incorporates a custom button for the quantity field. This will introduce plus (+) and minus (-) icons as buttons to control the quantity.','pro_feature' => true));
            add_settings_field('cqocp_addEmptyCartButton', __('Add Empty cart button', 'cqocp'), array(__CLASS__, 'checkboxProHTML'), 'cqoc-general-settings', 'cqoc_general_section', array('theName' => 'cqocp_addEmptyCartButton', 'desc'=>'Activate this option to include an "Empty Cart" button following the order review section on the checkout page.','pro_feature' => true ));
            add_settings_field('cqocp_enablelProductCategory', __('Enable Product Category', 'cqocp'), array(__CLASS__, 'checkboxProHTML'), 'cqoc-general-settings', 'cqoc_general_section', array('theName' => 'cqocp_enablelProductCategory', 'desc'=>'Activate this option to show the quantity field according to the chosen category.','pro_feature' => true ));
            add_settings_field('cqocp_selectProductCategory', __('Show quantity for selected category', 'cqocp'), array(__CLASS__, 'selectCategoryProHTML'), 'cqoc-general-settings', 'cqoc_general_section', array('theName' => 'cqocp_selectProductCategory', 'desc'=>'The quantity fields on the checkout page will only appear for the chosen category.', 'pro_feature' => true));
            
        
            // BLOCK CHECKOUT SETTINGS SECTION
            add_settings_section('cqoc_block_section', __('Block Checkout Configuration', 'cqoc'), array(__CLASS__, 'blockSectionCallback'), 'cqoc-block-settings');
            add_settings_field('cqoc_enableBlock', __('Enable Block Checkout', 'cqoc'), array(__CLASS__, 'checkboxHTML'), 'cqoc-block-settings', 'cqoc_block_section', array('theName' => 'cqoc_enableBlock', 'desc'=>'Enable the WooCommerce block-based checkout experience. Requires <b>“Allow users to remove products”</b> to be enabled.'));
            add_settings_field('cqoc_addDeleteIconBlock', __('Allow Users to Remove Products', 'cqoc'), array(__CLASS__, 'checkboxHTML'), 'cqoc-block-settings', 'cqoc_block_section', array('theName' => 'cqoc_addDeleteIconBlock', 'desc'=>'Allow customers to remove products from the cart during checkout.'));
            add_settings_field('cqoc_addQuantityFieldBlock', __('Enable Quantity Editing (PRO)', 'cqoc'), array(__CLASS__, 'checkboxProHTML'), 'cqoc-block-settings', 'cqoc_block_section', array('theName' => 'cqoc_addQuantityFieldBlock', 'desc'=>'Allow customers to update product quantities in the block-based checkout.', 'pro_feature' => true));
        }

        // Section Callbacks
        public static function generalSectionCallback() {
            echo '<p>' . __('Settings specific to WooCommerce Classic checkout.', 'cqoc') . '</p>';
        }
        
        
        public static function blockSectionCallback() {
            echo '<p>' . __('Settings specific to WooCommerce Block based checkout.', 'cqoc') . '</p>';
        }

        // Field HTML Callbacks
        public static function checkboxHTML($args)
        {
            ?>
                <input type="checkbox" name="<?php echo $args['theName'] ?>" id="<?php echo $args['theName'] ?>" value="1" <?php checked(get_option($args['theName']), '1') ?> > 
            <?php
            if (!empty($args['desc'])) {
                ?>
                    <label class="desc" for="<?php echo $args['theName'] ?>" > <?php echo $args['desc']; ?> </label>
                <?php
            }   
        }

         public static function checkboxProHTML($args)
        {
            ?>
            <div class="cqoc-pro-field">
                <input type="checkbox" name="<?php echo $args['theName'] ?>" id="<?php echo $args['theName'] ?>" value="1" disabled style="opacity: 0.5;" > 
                <?php if (!empty($args['desc'])): ?>
                    <label class="desc" for="<?php echo $args['theName'] ?>" style="opacity: 0.7;"> <?php echo $args['desc']; ?> </label>
                <?php endif; ?>
                <span class="cqoc-pro-badge">✨ PRO</span>
                <p class="description" style="color: #e67e22; font-weight: 500;">
                    🔓 This feature is available in the <strong>PRO version</strong>. 
                    <a href="https://www.navonmeshsolution.com/checkout/?add-to-cart=11634&utm_source=cqocupgradetopro&amp;utm_medium=link&amp;utm_campaign=CQOCLite" target="_blank" style="color: #e67e22; text-decoration: none; font-weight: bold;">Upgrade now</a> 
                    and use code <strong>CQOCP25</strong> for 25% off! 🚀
                </p>
            </div>
            <?php
        }

        public static function selectCategoryProHTML($args){
            $allProdCategory = array();
            $taxonomy     = 'product_cat';
            $orderby      = 'name';  
            $show_count   = 0;      // 1 for yes, 0 for no
            $pad_counts   = 0;      // 1 for yes, 0 for no
            $hierarchical = 1;      // 1 for yes, 0 for no  
            $title        = '';  
            $empty        = 0;

            $cat_args = array(
                    'taxonomy'     => $taxonomy,
                    'orderby'      => $orderby,
                    'show_count'   => $show_count,
                    'pad_counts'   => $pad_counts,
                    'hierarchical' => $hierarchical,
                    'title_li'     => $title,
                    'hide_empty'   => $empty
            );
            $all_categories = get_categories( $cat_args );
            foreach ($all_categories as $cat) {
                if($cat->category_parent == 0) {
                    $category_id = $cat->term_id;       
                    $allProdCategory [$category_id] = $cat->name;
                    $args2 = array(
                            'taxonomy'     => $taxonomy,
                            'child_of'     => 0,
                            'parent'       => $category_id,
                            'orderby'      => $orderby,
                            'show_count'   => $show_count,
                            'pad_counts'   => $pad_counts,
                            'hierarchical' => $hierarchical,
                            'title_li'     => $title,
                            'hide_empty'   => $empty
                    );
                    $sub_cats = get_categories( $args2 );
                    if($sub_cats) {
                        foreach($sub_cats as $sub_category) {
                            $category_id = $sub_category->term_id; 
                            $allProdCategory [$category_id] = '- ' . $sub_category->name;
                        }   
                    }
                }       
            }

            // this return = false
            $option = get_option('cqoc_selectProductCategory'); 

            ?>
            <div class="cqoc-pro-field">
                <select multiple="multiple" name="cqoc_selectProductCategory[category][]" disabled style="opacity: 0.5; cursor: not-allowed; width: 300px; height: 120px;">
                <?php
                foreach ($allProdCategory as $catID => $catName) { ?>
                <?php 
                    $selected = ''; 
                    if( !empty($option)){
                        $selected = in_array( $catID, $option['category'] ) ? ' selected="selected" ' : '';     
                    }
                    ?>
                    <option value="<?php echo $catID; ?>" <?php echo $selected; ?> >
                        <?php echo $catName; ?>
                    </option>
                <?php } //endforeach ?>
                </select>
                <span class="cqoc-pro-badge">✨ PRO</span>
                
                <?php if (!empty($args['desc'])): ?>
                    <p class="description" style="opacity: 0.7; margin-top: 8px;">
                        <?php echo $args['desc']; ?>
                    </p>
                <?php endif; ?>
                
                <p class="description" style="color: #e67e22; font-weight: 500; margin-top: 10px;">
                    🔓 This feature is available in the <strong>PRO version</strong>. 
                    <a href="https://www.navonmeshsolution.com/checkout/?add-to-cart=11634&utm_source=cqocupgradetopro&amp;utm_medium=link&amp;utm_campaign=CQOCLite" target="_blank" style="color: #e67e22; text-decoration: none; font-weight: bold;">Upgrade now</a> 
                    and use code <strong>CQOCP25</strong> for 25% off! 🚀
                </p>
            </div>
            <?php
        }

        // Sanitization Callbacks (existing + new)
        public static function sanitizeAddQantityField($input)
        {
            if ($input != 0 and $input != 1) {
                add_settings_error('cqoc_addQuantityField', 'cqoc_addQuantityField_error', 'Add Quantity Field should be enable or disable');
                return get_option('cqoc_addQuantityField');
            }
            return $input;
        }

        public static function sanitizeDeleteIcon($input)
        {
            if ($input != 0 and $input != 1) {
                add_settings_error('cqoc_hideDeleteIcon', 'cqoc_hideDeleteIcon_error', 'Delete Icons should be enable or disable');
                return get_option('cqoc_hideDeleteIcon');
            }
            return $input;
        }
        
        public static function sanitizeCheckbox($input)
        {
            return ($input == 1) ? 1 : 0;
        }
        
        /**
		 * Add Settings link to WP->Plugins page.
		 *
		 * @param array $links - Links to be displayed.
		 * @return array $links - Includes custom links.
		 * @since 3.0.0
		 */
        public static function cqoc_settings_link( $links ){
            $settings_link = '<a href="admin.php?page=cqoc-settings-page">' . __( 'Settings', 'cqoc' ) . '</a>';
			array_push( $links, $settings_link );
			return $links;
        }
    }
}
new CQOC_Admin();