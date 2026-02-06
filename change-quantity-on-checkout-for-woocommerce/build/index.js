/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps}                                 props icon is the SVG component to render
 *                                                          size is a number specifiying the icon size in pixels
 *                                                          Other props will be passed to wrapped SVG component
 * @param {import('react').ForwardedRef<HTMLElement>} ref   The forwarded ref to the SVG element.
 *
 * @return {JSX.Element}  Icon component
 */
function Icon({
  icon,
  size = 24,
  ...props
}, ref) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props,
    ref
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Icon));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-down.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-down.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const chevronDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronDown);
//# sourceMappingURL=chevron-down.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-up.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-up.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const chevronUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronUp);
//# sourceMappingURL=chevron-up.js.map

/***/ }),

/***/ "./src/block.tsx":
/*!***********************!*\
  !*** ./src/block.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wc_components_js_base_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wc_components/js/base/components */ "./wc_components/js/base/components/index.ts");
/* harmony import */ var _wc_components_packages_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wc_components/packages/components */ "./wc_components/packages/components/index.ts");
/* harmony import */ var _wc_components_js_base_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wc_components/js/base/context */ "./wc_components/js/base/context/index.ts");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");

/**
 * External dependencies
 */





const Block = ({
  className
}) => {
  const {
    cartItems
  } = (0,_wc_components_js_base_context__WEBPACK_IMPORTED_MODULE_3__.useStoreCart)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wc_components_packages_components__WEBPACK_IMPORTED_MODULE_2__.TotalsWrapper, {
    className: className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wc_components_js_base_components__WEBPACK_IMPORTED_MODULE_1__.OrderSummary, {
    cartItems: cartItems
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Block);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Edit: () => (/* binding */ Edit),
/* harmony export */   Save: () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wc_components_js_base_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wc_components/js/base/context */ "./wc_components/js/base/context/index.ts");
/* harmony import */ var _wc_components_js_previews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wc_components/js/previews */ "./wc_components/js/previews/index.js");
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block */ "./src/block.tsx");

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

const Edit = ({
  attributes,
  setAttributes
}) => {
  const {
    className
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wc_components_js_base_context__WEBPACK_IMPORTED_MODULE_2__.EditorProvider, {
    isPreview: true,
    previewData: {
      previewCart: _wc_components_js_previews__WEBPACK_IMPORTED_MODULE_3__.previewCart,
      previewSavedPaymentMethods: _wc_components_js_previews__WEBPACK_IMPORTED_MODULE_3__.previewSavedPaymentMethods
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: className
  })));
};
const Save = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  });
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");

//import registerCheckoutBlock from '@woocommerce/blocks-checkout';




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__, {
  icon: {
    src: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SVG, {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "surface1"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(39.607843%,39.607843%,39.607843%)",
        fillOpacity: 1
      },
      d: "M 195.1875 173.464844 L 96.375 173.464844 L 84.289062 112.695312 L 229.003906 112.695312 Z M 195.1875 173.464844 "
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(39.607843%,39.607843%,39.607843%)",
        fillOpacity: 1
      },
      d: "M 30.625 101.136719 C 27.105469 99.339844 26.03125 95.613281 28.023438 92.652344 C 30.164062 89.695312 34.746094 88.671875 38.269531 90.464844 C 55.246094 98.945312 66.871094 113.976562 74.828125 133.636719 C 81.867188 150.976562 85.988281 171.917969 88.589844 194.917969 L 207.277344 194.917969 C 211.261719 194.917969 214.625 197.738281 214.625 201.210938 C 214.625 204.679688 211.265625 207.375 207.277344 207.375 L 82.476562 207.375 C 78.34375 207.628906 74.828125 205.191406 74.519531 201.722656 C 72.074219 177.3125 67.945312 155.34375 60.757812 137.617188 C 53.875 120.789062 44.390625 107.941406 30.625 101.136719 Z M 30.625 101.136719 "
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(39.607843%,39.607843%,39.607843%)",
        fillOpacity: 1
      },
      d: "M 109.210938 235 C 109.210938 244.71875 99.832031 252.597656 88.257812 252.597656 C 76.6875 252.597656 67.304688 244.71875 67.304688 235 C 67.304688 225.28125 76.6875 217.402344 88.257812 217.402344 C 99.832031 217.402344 109.210938 225.28125 109.210938 235 Z M 109.210938 235 "
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(39.607843%,39.607843%,39.607843%)",
        fillOpacity: 1
      },
      d: "M 212.929688 235 C 212.929688 244.71875 203.550781 252.597656 191.976562 252.597656 C 180.40625 252.597656 171.023438 244.71875 171.023438 235 C 171.023438 225.28125 180.40625 217.402344 191.976562 217.402344 C 203.550781 217.402344 212.929688 225.28125 212.929688 235 Z M 212.929688 235 "
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(39.607843%,39.607843%,39.607843%)",
        fillOpacity: 1
      },
      d: "M 60.980469 5.097656 L 81.292969 5.097656 C 82.5 5.097656 83.476562 5.964844 83.476562 7.03125 L 83.476562 29.246094 L 108.546875 29.246094 C 109.75 29.246094 110.722656 30.113281 110.722656 31.179688 L 110.722656 49.125 C 110.722656 50.195312 109.75 51.054688 108.546875 51.054688 L 83.476562 51.054688 L 83.476562 73.273438 C 83.476562 74.34375 82.5 75.207031 81.292969 75.207031 L 60.980469 75.207031 C 59.78125 75.207031 58.804688 74.339844 58.804688 73.273438 L 58.804688 51.058594 L 33.730469 51.058594 C 32.527344 51.058594 31.550781 50.195312 31.550781 49.125 L 31.550781 31.179688 C 31.550781 30.109375 32.527344 29.246094 33.730469 29.246094 L 58.804688 29.246094 L 58.804688 7.03125 C 58.804688 5.964844 59.78125 5.097656 60.980469 5.097656 Z M 60.980469 5.097656 "
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(39.607843%,39.607843%,39.607843%)",
        fillOpacity: 1
      },
      d: "M 232.992188 37.589844 C 232.992188 44.703125 227.691406 50.472656 221.148438 50.472656 L 154.214844 50.472656 C 147.675781 50.472656 142.375 44.703125 142.375 37.589844 C 142.375 30.476562 147.675781 24.707031 154.214844 24.707031 L 221.148438 24.707031 C 227.691406 24.707031 232.992188 30.476562 232.992188 37.589844 Z M 232.992188 37.589844 "
    }))),
    foreground: '#874FB9'
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__.Edit,
  save: _edit__WEBPACK_IMPORTED_MODULE_3__.Save
});

/***/ }),

/***/ "./wc_components/js/base/components/cart-checkout/address-form/address-form.tsx":
/*!**************************************************************************************!*\
  !*** ./wc_components/js/base/components/cart-checkout/address-form/address-form.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _packages_checkout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../packages/checkout */ "./wc_components/packages/checkout/index.js");
/* harmony import */ var _packages_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../packages/components */ "./wc_components/packages/components/index.ts");
/* harmony import */ var _country_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../country-input */ "./wc_components/js/base/components/country-input/index.ts");
/* harmony import */ var _state_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state-input */ "./wc_components/js/base/components/state-input/index.ts");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks */ "./wc_components/js/base/hooks/index.js");
/* harmony import */ var _settings_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../settings/shared */ "./wc_components/js/settings/shared/index.ts");
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/is-shallow-equal */ "@wordpress/is-shallow-equal");
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _prepare_address_fields__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./prepare-address-fields */ "./wc_components/js/base/components/cart-checkout/address-form/prepare-address-fields.ts");
/* harmony import */ var _validate_shipping_country__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./validate-shipping-country */ "./wc_components/js/base/components/cart-checkout/address-form/validate-shipping-country.ts");
/* harmony import */ var _custom_validation_handler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./custom-validation-handler */ "./wc_components/js/base/components/cart-checkout/address-form/custom-validation-handler.ts");

/**
 * External dependencies
 */
// import { isPostcode } from '@woocommerce/blocks-checkout';


// import {
// 	ValidatedTextInput,
// 	type ValidatedTextInputHandle,
// } from '@woocommerce/blocks-components';



// import {
// 	BillingCountryInput,
// 	ShippingCountryInput,
// } from '@woocommerce/base-components/country-input';



// import {
// 	BillingStateInput,
// 	ShippingStateInput,
// } from '@woocommerce/base-components/state-input';




// import { useShallowEqual } from '@woocommerce/base-hooks';


// import { defaultAddressFields } from '@woocommerce/settings';



/**
 * Internal dependencies
 */




const defaultFields = Object.keys(_settings_shared__WEBPACK_IMPORTED_MODULE_8__.defaultAddressFields);

/**
 * Checkout address form.
 */
const AddressForm = ({
  id = '',
  fields = defaultFields,
  fieldConfig = {},
  onChange,
  type = 'shipping',
  values
}) => {
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.useInstanceId)(AddressForm);

  // Track incoming props.
  const currentFields = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useShallowEqual)(fields);
  const currentFieldConfig = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useShallowEqual)(fieldConfig);
  const currentCountry = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useShallowEqual)(values.country);

  // Memoize the address form fields passed in from the parent component.
  const addressFormFields = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    const preparedFields = (0,_prepare_address_fields__WEBPACK_IMPORTED_MODULE_10__["default"])(currentFields, currentFieldConfig, currentCountry);
    return {
      fields: preparedFields,
      type,
      required: preparedFields.filter(field => field.required),
      hidden: preparedFields.filter(field => field.hidden)
    };
  }, [currentFields, currentFieldConfig, currentCountry, type]);

  // Stores refs for rendered fields so we can access them later.
  const fieldsRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useRef)({});

  // Clear values for hidden fields.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    const newValues = {
      ...values,
      ...Object.fromEntries(addressFormFields.hidden.map(field => [field.key, '']))
    };
    if (!_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_9___default()(values, newValues)) {
      onChange(newValues);
    }
  }, [onChange, addressFormFields, values]);

  // Maybe validate country when other fields change so user is notified that it's required.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (type === 'shipping') {
      (0,_validate_shipping_country__WEBPACK_IMPORTED_MODULE_11__["default"])(values);
    }
  }, [values, type]);

  // Changing country may change format for postcodes.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    fieldsRef.current?.postcode?.revalidate();
  }, [currentCountry]);
  id = id || `${instanceId}`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: "wc-block-components-address-form"
  }, addressFormFields.fields.map(field => {
    if (field.hidden) {
      return null;
    }
    const fieldProps = {
      id: `${id}-${field.key}`,
      errorId: `${type}_${field.key}`,
      label: field.required ? field.label : field.optionalLabel,
      autoCapitalize: field.autocapitalize,
      autoComplete: field.autocomplete,
      errorMessage: field.errorMessage,
      required: field.required,
      className: `wc-block-components-address-form__${field.key}`
    };
    if (field.key === 'country') {
      const Tag = type === 'shipping' ? _country_input__WEBPACK_IMPORTED_MODULE_3__.ShippingCountryInput : _country_input__WEBPACK_IMPORTED_MODULE_3__.BillingCountryInput;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, {
        key: field.key,
        ...fieldProps,
        value: values.country,
        onChange: newCountry => {
          const newValues = {
            ...values,
            country: newCountry,
            state: ''
          };
          // Country will impact postcode too. Do we need to clear it?
          if (values.postcode && !(0,_packages_checkout__WEBPACK_IMPORTED_MODULE_1__.isPostcode)({
            postcode: values.postcode,
            country: newCountry
          })) {
            newValues.postcode = '';
          }
          onChange(newValues);
        }
      });
    }
    if (field.key === 'state') {
      const Tag = type === 'shipping' ? _state_input__WEBPACK_IMPORTED_MODULE_4__.ShippingStateInput : _state_input__WEBPACK_IMPORTED_MODULE_4__.BillingStateInput;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, {
        key: field.key,
        ...fieldProps,
        country: values.country,
        value: values.state,
        onChange: newValue => onChange({
          ...values,
          state: newValue
        })
      });
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_packages_components__WEBPACK_IMPORTED_MODULE_2__.ValidatedTextInput, {
      key: field.key,
      ref: el => fieldsRef.current[field.key] = el,
      ...fieldProps,
      type: field.type,
      value: values[field.key],
      onChange: newValue => onChange({
        ...values,
        [field.key]: newValue
      }),
      customFormatter: value => {
        if (field.key === 'postcode') {
          return value.trimStart().toUpperCase();
        }
        return value;
      },
      customValidation: inputObject => (0,_custom_validation_handler__WEBPACK_IMPORTED_MODULE_12__["default"])(inputObject, field.key, values)
    });
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddressForm);

/***/ }),

/***/ "./wc_components/js/base/components/cart-checkout/address-form/custom-validation-handler.ts":
/*!**************************************************************************************************!*\
  !*** ./wc_components/js/base/components/cart-checkout/address-form/custom-validation-handler.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @woocommerce/blocks-checkout */ "@woocommerce/blocks-checkout");
/* harmony import */ var _woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */



/**
 * Custom validation handler for fields with field specific handling.
 */
const customValidationHandler = (inputObject, field, customValues) => {
  // Pass validation if the field is not required and is empty.
  if (!inputObject.required && !inputObject.value) {
    return true;
  }
  if (field === 'postcode' && customValues.country && !(0,_woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_1__.isPostcode)({
    postcode: inputObject.value,
    country: customValues.country
  })) {
    inputObject.setCustomValidity((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Please enter a valid postcode', 'woo-gutenberg-products-block'));
    return false;
  }
  return true;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customValidationHandler);

/***/ }),

/***/ "./wc_components/js/base/components/cart-checkout/address-form/index.ts":
/*!******************************************************************************!*\
  !*** ./wc_components/js/base/components/cart-checkout/address-form/index.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressForm: () => (/* reexport safe */ _address_form__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _address_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address-form */ "./wc_components/js/base/components/cart-checkout/address-form/address-form.tsx");


/***/ }),

/***/ "./wc_components/js/base/components/cart-checkout/address-form/prepare-address-fields.ts":
/*!***********************************************************************************************!*\
  !*** ./wc_components/js/base/components/cart-checkout/address-form/prepare-address-fields.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settings_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../settings/shared */ "./wc_components/js/settings/shared/index.ts");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../types */ "./wc_components/js/types/index.ts");
/* harmony import */ var _settings_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../settings/blocks */ "./wc_components/js/settings/blocks/index.ts");
/** @typedef { import('@woocommerce/type-defs/address-fields').CountryAddressFields } CountryAddressFields */

/**
 * External dependencies
 */
// import {
// 	AddressField,
// 	AddressFields,
// 	CountryAddressFields,
// 	defaultAddressFields,
// 	KeyedAddressField,
// 	LocaleSpecificAddressField,
// } from '@woocommerce/settings';



// import { isNumber, isString } from '@woocommerce/types';

// import { COUNTRY_LOCALE } from '@woocommerce/block-settings';



/**
 * Gets props from the core locale, then maps them to the shape we require in the client.
 *
 * Ignores "class", "type", "placeholder", and "autocomplete" props from core.
 *
 * @param {Object} localeField Locale fields from WooCommerce.
 * @return {Object} Supported locale fields.
 */
const getSupportedCoreLocaleProps = localeField => {
  const fields = {};
  if (localeField.label !== undefined) {
    fields.label = localeField.label;
  }
  if (localeField.required !== undefined) {
    fields.required = localeField.required;
  }
  if (localeField.hidden !== undefined) {
    fields.hidden = localeField.hidden;
  }
  if (localeField.label !== undefined && !localeField.optionalLabel) {
    fields.optionalLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %s Field label. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%s (optional)', 'woo-gutenberg-products-block'), localeField.label);
  }
  if (localeField.priority) {
    if ((0,_types__WEBPACK_IMPORTED_MODULE_2__.isNumber)(localeField.priority)) {
      fields.index = localeField.priority;
    }
    if ((0,_types__WEBPACK_IMPORTED_MODULE_2__.isString)(localeField.priority)) {
      fields.index = parseInt(localeField.priority, 10);
    }
  }
  if (localeField.hidden) {
    fields.required = false;
  }
  return fields;
};

/**
 * COUNTRY_LOCALE is locale data from WooCommerce countries class. This doesn't match the shape of the new field data blocks uses,
 * but we can import part of it to set which fields are required.
 *
 * This supports new properties such as optionalLabel which are not used by core (yet).
 */
const countryAddressFields = Object.entries(_settings_blocks__WEBPACK_IMPORTED_MODULE_3__.COUNTRY_LOCALE).map(([country, countryLocale]) => [country, Object.entries(countryLocale).map(([localeFieldKey, localeField]) => [localeFieldKey, getSupportedCoreLocaleProps(localeField)]).reduce((obj, [key, val]) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Ignoring because it should be fine as long as the data from the server is correct. TS won't catch it anyway if it's not.
  obj[key] = val;
  return obj;
}, {})]).reduce((obj, [key, val]) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Ignoring because it should be fine as long as the data from the server is correct. TS won't catch it anyway if it's not.
  obj[key] = val;
  return obj;
}, {});

/**
 * Combines address fields, including fields from the locale, and sorts them by index.
 *
 * @param {Array}  fields         List of field keys--only address fields matching these will be returned.
 * @param {Object} fieldConfigs   Fields config contains field specific overrides at block level which may, for example, hide a field.
 * @param {string} addressCountry Address country code. If unknown, locale fields will not be merged.
 * @return {CountryAddressFields} Object containing address fields.
 */
const prepareAddressFields = (fields, fieldConfigs, addressCountry = '') => {
  const localeConfigs = addressCountry && countryAddressFields[addressCountry] !== undefined ? countryAddressFields[addressCountry] : {};
  return fields.map(field => {
    const defaultConfig = _settings_shared__WEBPACK_IMPORTED_MODULE_0__.defaultAddressFields[field] || {};
    const localeConfig = localeConfigs[field] || {};
    const fieldConfig = fieldConfigs[field] || {};
    return {
      key: field,
      ...defaultConfig,
      ...localeConfig,
      ...fieldConfig
    };
  }).sort((a, b) => a.index - b.index);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prepareAddressFields);

/***/ }),

/***/ "./wc_components/js/base/components/cart-checkout/address-form/validate-shipping-country.ts":
/*!**************************************************************************************************!*\
  !*** ./wc_components/js/base/components/cart-checkout/address-form/validate-shipping-country.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @woocommerce/block-data */ "@woocommerce/block-data");
/* harmony import */ var _woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */




// If it's the shipping address form and the user starts entering address
// values without having set the country first, show an error.
const validateShippingCountry = values => {
  const validationErrorId = 'shipping_country';
  const hasValidationError = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)(_woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2__.VALIDATION_STORE_KEY).getValidationError(validationErrorId);
  if (!values.country && (values.city || values.state || values.postcode)) {
    if (hasValidationError) {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(_woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2__.VALIDATION_STORE_KEY).showValidationError(validationErrorId);
    } else {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(_woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2__.VALIDATION_STORE_KEY).setValidationErrors({
        [validationErrorId]: {
          message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Please select your country', 'woo-gutenberg-products-block'),
          hidden: false
        }
      });
    }
  }
  if (hasValidationError && values.country) {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(_woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2__.VALIDATION_STORE_KEY).clearValidationError(validationErrorId);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateShippingCountry);

/***/ }),

/***/ "./wc_components/js/base/components/cart-checkout/index.js":
/*!*****************************************************************!*\
  !*** ./wc_components/js/base/components/cart-checkout/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressForm: () => (/* reexport safe */ _address_form__WEBPACK_IMPORTED_MODULE_0__.AddressForm),
/* harmony export */   OrderSummary: () => (/* reexport safe */ _order_summary__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _address_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address-form */ "./wc_components/js/base/components/cart-checkout/address-form/index.ts");
/* harmony import */ var _order_summary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-summary */ "./wc_components/js/base/components/cart-checkout/order-summary/index.tsx");

// export { default as CartLineItemsTable } from './cart-line-items-table';
 //
// export { default as PlaceOrderButton } from './place-order-button';
// export { default as Policies } from './policies';
// export { default as ProductBackorderBadge } from './product-backorder-badge';
// export { default as ProductDetails } from './product-details';
// export { default as ProductImage } from './product-image';
// export { default as ProductLowStockBadge } from './product-low-stock-badge';
// export { default as ProductSummary } from './product-summary';
// export { default as ProductMetadata } from './product-metadata';
// export { default as ProductSaleBadge } from './product-sale-badge';
// export { default as ReturnToCartButton } from './return-to-cart-button';
// export { default as ShippingCalculator } from './shipping-calculator';
// export { default as ShippingLocation } from './shipping-location';
// export { default as ShippingRatesControl } from './shipping-rates-control';
// export { default as ShippingRatesControlPackage } from './shipping-rates-control-package';
// export { default as PaymentMethodIcons } from './payment-method-icons';
// export { default as PaymentMethodLabel } from './payment-method-label';
// export * from './totals';

/***/ }),

/***/ "./wc_components/js/base/components/cart-checkout/order-summary/index.tsx":
/*!********************************************************************************!*\
  !*** ./wc_components/js/base/components/cart-checkout/order-summary/index.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context */ "./wc_components/js/base/context/index.ts");
/* harmony import */ var _packages_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../packages/components */ "./wc_components/packages/components/index.ts");
/* harmony import */ var _order_summary_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-summary-item */ "./wc_components/js/base/components/cart-checkout/order-summary/order-summary-item.tsx");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./wc_components/js/base/components/cart-checkout/order-summary/style.scss");

/**
 * External dependencies
 */


// import { useContainerWidthContext } from '@woocommerce/base-context';
// import { Panel } from '@woocommerce/blocks-components';
// import type { CartItem } from '@woocommerce/types';



/**
 * Internal dependencies
 */



// import { CartResponseItem } from '../../../../../../old_wc_components/types/type-defs/cart-response';

const setRefs = lineItems => {
  const refs = {};
  lineItems.forEach(({
    key
  }) => {
    refs[key] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.createRef)();
  });
  return refs;
};
const OrderSummary = ({
  cartItems = []
}) => {
  const {
    isLarge,
    hasContainerWidth
  } = (0,_context__WEBPACK_IMPORTED_MODULE_2__.useContainerWidthContext)();

  // isLarge = true;
  if (!hasContainerWidth) {
    return null;
  }
  const tableRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  const rowRefs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useRef)(setRefs(cartItems));
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    rowRefs.current = setRefs(cartItems);
  }, [cartItems]);
  const onRemoveRow = nextItemKey => () => {
    if (rowRefs?.current && nextItemKey && rowRefs.current[nextItemKey].current instanceof HTMLElement) {
      rowRefs.current[nextItemKey].current.focus();
    } else if (tableRef.current instanceof HTMLElement) {
      tableRef.current.focus();
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_packages_components__WEBPACK_IMPORTED_MODULE_3__.Panel, {
    className: "wc-block-components-order-summary",
    initialOpen: isLarge,
    hasBorder: false,
    title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "wc-block-components-order-summary__button-text"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('CQOCP Order Summary', 'woo-gutenberg-products-block'))
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wc-block-components-order-summary__content"
  }, cartItems.map((cartItem, i) => {
    const nextItemKey = cartItems.length > i + 1 ? cartItems[i + 1].key : null;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_order_summary_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: cartItem.key,
      cartItem: cartItem,
      onRemove: onRemoveRow(nextItemKey)
    });
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderSummary);

/***/ }),

/***/ "./wc_components/js/base/components/cart-checkout/order-summary/order-summary-item.tsx":
/*!*********************************************************************************************!*\
  !*** ./wc_components/js/base/components/cart-checkout/order-summary/order-summary-item.tsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _packages_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../packages/components */ "./wc_components/packages/components/index.ts");
/* harmony import */ var _base_components_product_price__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../base/components/product-price */ "./wc_components/js/base/components/product-price/index.tsx");
/* harmony import */ var _base_components_product_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../base/components/product-name */ "./wc_components/js/base/components/product-name/index.tsx");
/* harmony import */ var _packages_prices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../packages/prices */ "./wc_components/packages/prices/index.js");
/* harmony import */ var _packages_checkout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../packages/checkout */ "./wc_components/packages/checkout/index.js");
/* harmony import */ var dinero_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dinero.js */ "./node_modules/dinero.js/build/esm/dinero.js");
/* harmony import */ var _settings_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../settings/shared */ "./wc_components/js/settings/shared/index.ts");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _context_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../context/hooks */ "./wc_components/js/base/context/hooks/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../types */ "./wc_components/js/types/index.ts");
/* harmony import */ var _product_backorder_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../product-backorder-badge */ "./wc_components/js/base/components/cart-checkout/product-backorder-badge/index.tsx");
/* harmony import */ var _product_image__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../product-image */ "./wc_components/js/base/components/cart-checkout/product-image/index.tsx");
/* harmony import */ var _product_low_stock_badge__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../product-low-stock-badge */ "./wc_components/js/base/components/cart-checkout/product-low-stock-badge/index.tsx");
/* harmony import */ var _product_metadata__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../product-metadata */ "./wc_components/js/base/components/cart-checkout/product-metadata/index.tsx");

/**
 * External dependencies
 */





// import { Label } from '@woocommerce/blocks-components';


// import ProductPrice from '@woocommerce/base-components/product-price';

// import ProductName from '@woocommerce/base-components/product-name';

// import {
// 	getCurrencyFromPriceResponse,
// 	formatPrice,
// } from '@woocommerce/price-format';



// import { applyCheckoutFilter, mustContain } from '@woocommerce/blocks-checkout';



// import { getSetting } from '@woocommerce/settings';


// import { useStoreCart } from '@woocommerce/base-context/hooks';


// import { CartItem, isString } from '@woocommerce/types';



/**
 * Internal dependencies
 */





// import QuantitySelector from '@woocommerce/base-components/quantity-selector';

const productPriceValidation = value => (0,_packages_checkout__WEBPACK_IMPORTED_MODULE_8__.mustContain)(value, '<price/>');
const OrderSummaryItem = ({
  cartItem,
  onRemove = () => void null
}) => {
  const {
    images,
    low_stock_remaining: lowStockRemaining,
    show_backorder_badge: showBackorderBadge,
    name: initialName,
    permalink,
    prices,
    quantity,
    short_description: shortDescription,
    description: fullDescription,
    item_data: itemData,
    variation,
    totals,
    extensions,
    /// @todo bhavik
    sold_individually: soldIndividually = false,
    quantity_limits: quantityLimits = {
      minimum: 1,
      maximum: 99,
      multiple_of: 1,
      editable: true
    }
  } = cartItem;

  // Prepare props to pass to the applyCheckoutFilter filter.
  // We need to pluck out receiveCart.
  // eslint-disable-next-line no-unused-vars
  const {
    receiveCart,
    ...cart
  } = (0,_context_hooks__WEBPACK_IMPORTED_MODULE_12__.useStoreCart)();
  const arg = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_11__.useMemo)(() => ({
    context: 'summary',
    cartItem,
    cart
  }), [cartItem, cart]);
  const priceCurrency = (0,_packages_prices__WEBPACK_IMPORTED_MODULE_7__.getCurrencyFromPriceResponse)(prices);
  const name = (0,_packages_checkout__WEBPACK_IMPORTED_MODULE_8__.applyCheckoutFilter)({
    filterName: 'itemName',
    defaultValue: initialName,
    extensions,
    arg
  });
  const regularPriceSingle = (0,dinero_js__WEBPACK_IMPORTED_MODULE_9__["default"])({
    amount: parseInt(prices.raw_prices.regular_price, 10),
    precision: (0,_types__WEBPACK_IMPORTED_MODULE_13__.isString)(prices.raw_prices.precision) ? parseInt(prices.raw_prices.precision, 10) : prices.raw_prices.precision
  }).convertPrecision(priceCurrency.minorUnit).getAmount();
  const priceSingle = (0,dinero_js__WEBPACK_IMPORTED_MODULE_9__["default"])({
    amount: parseInt(prices.raw_prices.price, 10),
    precision: (0,_types__WEBPACK_IMPORTED_MODULE_13__.isString)(prices.raw_prices.precision) ? parseInt(prices.raw_prices.precision, 10) : prices.raw_prices.precision
  }).convertPrecision(priceCurrency.minorUnit).getAmount();
  const totalsCurrency = (0,_packages_prices__WEBPACK_IMPORTED_MODULE_7__.getCurrencyFromPriceResponse)(totals);
  let lineSubtotal = parseInt(totals.line_subtotal, 10);
  if ((0,_settings_shared__WEBPACK_IMPORTED_MODULE_10__.getSetting)('displayCartPricesIncludingTax', false)) {
    lineSubtotal += parseInt(totals.line_subtotal_tax, 10);
  }
  const subtotalPrice = (0,dinero_js__WEBPACK_IMPORTED_MODULE_9__["default"])({
    amount: lineSubtotal,
    precision: totalsCurrency.minorUnit
  }).getAmount();
  const subtotalPriceFormat = (0,_packages_checkout__WEBPACK_IMPORTED_MODULE_8__.applyCheckoutFilter)({
    filterName: 'subtotalPriceFormat',
    defaultValue: '<price/>',
    extensions,
    arg,
    validation: productPriceValidation
  });

  // Allow extensions to filter how the price is displayed. Ie: prepending or appending some values.
  const productPriceFormat = (0,_packages_checkout__WEBPACK_IMPORTED_MODULE_8__.applyCheckoutFilter)({
    filterName: 'cartItemPrice',
    defaultValue: '<price/>',
    extensions,
    arg,
    validation: productPriceValidation
  });
  const cartItemClassNameFilter = (0,_packages_checkout__WEBPACK_IMPORTED_MODULE_8__.applyCheckoutFilter)({
    filterName: 'cartItemClass',
    defaultValue: '',
    extensions,
    arg
  });

  // @todo bhavik
  const {
    setItemQuantity,
    removeItem,
    isPendingDelete
  } = (0,_context_hooks__WEBPACK_IMPORTED_MODULE_12__.useStoreCartItemQuantity)(cartItem);
  const {
    dispatchStoreEvent
  } = (0,_context_hooks__WEBPACK_IMPORTED_MODULE_12__.useStoreEvents)();
  const showRemoveItemLink = (0,_packages_checkout__WEBPACK_IMPORTED_MODULE_8__.applyCheckoutFilter)({
    filterName: 'showRemoveItemLink',
    defaultValue: true,
    extensions,
    arg
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('wc-block-components-order-summary-item', cartItemClassNameFilter)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wc-block-components-order-summary-item__image"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wc-block-components-order-summary-item__quantity"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_packages_components__WEBPACK_IMPORTED_MODULE_4__.Label, {
    label: quantity.toString(),
    screenReaderLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(/* translators: %d number of products of the same type in the cart */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('%d item', '%d items', quantity, 'woo-gutenberg-products-block'), quantity)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_product_image__WEBPACK_IMPORTED_MODULE_15__["default"], {
    image: images.length ? images[0] : {},
    fallbackAlt: name
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wc-block-components-order-summary-item__description"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_base_components_product_name__WEBPACK_IMPORTED_MODULE_6__["default"], {
    disabled: true,
    name: name,
    permalink: permalink
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_base_components_product_price__WEBPACK_IMPORTED_MODULE_5__["default"], {
    currency: priceCurrency,
    price: priceSingle,
    regularPrice: regularPriceSingle,
    className: "wc-block-components-order-summary-item__individual-prices",
    priceClassName: "wc-block-components-order-summary-item__individual-price",
    regularPriceClassName: "wc-block-components-order-summary-item__regular-individual-price",
    format: subtotalPriceFormat
  }), showBackorderBadge ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_product_backorder_badge__WEBPACK_IMPORTED_MODULE_14__["default"], null) : !!lowStockRemaining && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_product_low_stock_badge__WEBPACK_IMPORTED_MODULE_16__["default"], {
    lowStockRemaining: lowStockRemaining
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_product_metadata__WEBPACK_IMPORTED_MODULE_17__["default"], {
    shortDescription: shortDescription,
    fullDescription: fullDescription,
    itemData: itemData,
    variation: variation
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wc-block-cart-item__quantity"
  }, showRemoveItemLink && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "wc-block-cart-item__remove-link",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(/* translators: %s refers to the item's name in the cart. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove %s from cart', 'woo-gutenberg-products-block'), name),
    onClick: () => {
      onRemove();
      removeItem();
      dispatchStoreEvent('cart-remove-item', {
        product: cartItem,
        quantity
      });
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_3__.speak)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(/* translators: %s refers to the item name in the cart. */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%s has been removed from your cart.', 'woo-gutenberg-products-block'), name));
    },
    disabled: isPendingDelete
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove item', 'woo-gutenberg-products-block'))), " "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "screen-reader-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(/* translators: %1$d is the number of items, %2$s is the item name and %3$s is the total price including the currency symbol. */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('Total price for %1$d %2$s item: %3$s', 'Total price for %1$d %2$s items: %3$s', quantity, 'woo-gutenberg-products-block'), quantity, name, (0,_packages_prices__WEBPACK_IMPORTED_MODULE_7__.formatPrice)(subtotalPrice, totalsCurrency))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wc-block-components-order-summary-item__total-price",
    "aria-hidden": "true"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_base_components_product_price__WEBPACK_IMPORTED_MODULE_5__["default"], {
    currency: totalsCurrency,
    format: productPriceFormat,
    price: subtotalPrice
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderSummaryItem);

/***/ }),

/***/ "./wc_components/js/base/components/cart-checkout/product-backorder-badge/index.tsx":
/*!******************************************************************************************!*\
  !*** ./wc_components/js/base/components/cart-checkout/product-backorder-badge/index.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-badge */ "./wc_components/js/base/components/cart-checkout/product-badge/index.tsx");

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Returns a backorder badge.
 */
const ProductBackorderBadge = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_product_badge__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "wc-block-components-product-backorder-badge"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Available on backorder', 'woo-gutenberg-products-block'));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductBackorderBadge);

/***/ }),

/***/ "./wc_components/js/base/components/cart-checkout/product-badge/index.tsx":
/*!********************************************************************************!*\
  !*** ./wc_components/js/base/components/cart-checkout/product-badge/index.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./wc_components/js/base/components/cart-checkout/product-badge/style.scss");

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

const ProductBadge = ({
  children,
  className
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('wc-block-components-product-badge', className)
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductBadge);

/***/ }),

/***/ "./wc_components/js/base/components/cart-checkout/product-details/index.tsx":
/*!**********************************************************************************!*\
  !*** ./wc_components/js/base/components/cart-checkout/product-details/index.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var change_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! change-case */ "./node_modules/param-case/dist.es2015/index.js");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./wc_components/js/base/components/cart-checkout/product-details/style.scss");

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

// Component to display cart item data and variations.
const ProductDetails = ({
  details = []
}) => {
  if (!Array.isArray(details)) {
    return null;
  }
  details = details.filter(detail => !detail.hidden);
  if (details.length === 0) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "wc-block-components-product-details"
  }, details.map(detail => {
    // Support both `key` and `name` props
    const name = detail?.key || detail.name || '';
    const className = detail?.className || (name ? `wc-block-components-product-details__${(0,change_case__WEBPACK_IMPORTED_MODULE_3__.paramCase)(name)}` : '');
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: name + (detail.display || detail.value),
      className: className
    }, name && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "wc-block-components-product-details__name"
    }, (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__.decodeEntities)(name), ":"), ' '), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "wc-block-components-product-details__value"
    }, (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__.decodeEntities)(detail.display || detail.value)));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetails);

/***/ }),

/***/ "./wc_components/js/base/components/cart-checkout/product-image/index.tsx":
/*!********************************************************************************!*\
  !*** ./wc_components/js/base/components/cart-checkout/product-image/index.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @woocommerce/settings */ "@woocommerce/settings");
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_2__);

/**
 * External dependencies
 */


/**
 * Formats and returns an image element.
 *
 * @param {Object} props       Incoming props for the component.
 * @param {Object} props.image Image properties.
 */

const ProductImage = ({
  image = {},
  fallbackAlt = ''
}) => {
  const imageProps = image.thumbnail ? {
    src: image.thumbnail,
    alt: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__.decodeEntities)(image.alt) || fallbackAlt || 'Product Image'
  } : {
    src: _woocommerce_settings__WEBPACK_IMPORTED_MODULE_2__.PLACEHOLDER_IMG_SRC,
    alt: ''
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    ...imageProps,
    alt: imageProps.alt
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductImage);

/***/ }),

/***/ "./wc_components/js/base/components/cart-checkout/product-low-stock-badge/index.tsx":
/*!******************************************************************************************!*\
  !*** ./wc_components/js/base/components/cart-checkout/product-low-stock-badge/index.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-badge */ "./wc_components/js/base/components/cart-checkout/product-badge/index.tsx");

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

/**
 * Returns a low stock badge.
 *
 * @param {Object} props                   Incoming props for the component.
 * @param {number} props.lowStockRemaining Whether or not there is low stock remaining.
 */
const ProductLowStockBadge = ({
  lowStockRemaining
}) => {
  if (!lowStockRemaining) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_product_badge__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "wc-block-components-product-low-stock-badge"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %d stock amount (number of items in stock for product) */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%d left in stock', 'woo-gutenberg-products-block'), lowStockRemaining));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductLowStockBadge);

/***/ }),

/***/ "./wc_components/js/base/components/cart-checkout/product-metadata/index.tsx":
/*!***********************************************************************************!*\
  !*** ./wc_components/js/base/components/cart-checkout/product-metadata/index.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-details */ "./wc_components/js/base/components/cart-checkout/product-details/index.tsx");
/* harmony import */ var _product_summary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-summary */ "./wc_components/js/base/components/cart-checkout/product-summary/index.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./wc_components/js/base/components/cart-checkout/product-metadata/style.scss");

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



const ProductMetadata = ({
  shortDescription = '',
  fullDescription = '',
  itemData = [],
  variation = []
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wc-block-components-product-metadata"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_product_summary__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "wc-block-components-product-metadata__description",
    shortDescription: shortDescription,
    fullDescription: fullDescription
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_product_details__WEBPACK_IMPORTED_MODULE_1__["default"], {
    details: itemData
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_product_details__WEBPACK_IMPORTED_MODULE_1__["default"], {
    details: variation.map(({
      attribute = '',
      value
    }) => ({
      key: attribute,
      value
    }))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductMetadata);

/***/ }),

/***/ "./wc_components/js/base/components/cart-checkout/product-summary/index.tsx":
/*!**********************************************************************************!*\
  !*** ./wc_components/js/base/components/cart-checkout/product-summary/index.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_summary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/summary */ "./wc_components/js/base/components/summary/index.tsx");
/* harmony import */ var _settings_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../settings/blocks */ "./wc_components/js/settings/blocks/index.ts");

/**
 * External dependencies
 */
// import Summary from '@woocommerce/base-components/summary';

// import { blocksConfig } from '@woocommerce/block-settings';


/**
 * Returns an element containing a summary of the product.
 *
 * @param {Object} props                  Incoming props for the component.
 * @param {string} props.className        CSS class name used.
 * @param {string} props.shortDescription Short description for the product.
 * @param {string} props.fullDescription  Full description for the product.
 */
const ProductSummary = ({
  className,
  shortDescription = '',
  fullDescription = ''
}) => {
  const source = shortDescription ? shortDescription : fullDescription;
  if (!source) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_summary__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: className,
    source: source,
    maxLength: 15,
    countType: _settings_blocks__WEBPACK_IMPORTED_MODULE_2__.blocksConfig.wordCountType || 'words'
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductSummary);

/***/ }),

/***/ "./wc_components/js/base/components/combobox/index.tsx":
/*!*************************************************************!*\
  !*** ./wc_components/js/base/components/combobox/index.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _packages_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../packages/components */ "./wc_components/packages/components/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../types */ "./wc_components/js/types/index.ts");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data */ "./wc_components/js/data/index.ts");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.scss */ "./wc_components/js/base/components/combobox/style.scss");

/**
 * External dependencies
 */




// import { ComboboxControl } from 'wordpress-components';


// import { ValidationInputError } from '@woocommerce/blocks-components';

// import { isObject } from '@woocommerce/types';


// import { VALIDATION_STORE_KEY } from '@woocommerce/block-data';


/**
 * Internal dependencies
 */

/**
 * Wrapper for the WordPress ComboboxControl which supports validation.
 */
const Combobox = ({
  id,
  className,
  label,
  onChange,
  options,
  value,
  required = false,
  errorMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Please select a value.', 'woo-gutenberg-products-block'),
  errorId: incomingErrorId,
  instanceId = '0',
  autoComplete = 'off'
}) => {
  const controlRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const controlId = id || 'control-' + instanceId;
  const errorId = incomingErrorId || controlId;
  const {
    setValidationErrors,
    clearValidationError
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_8__.useDispatch)(_data__WEBPACK_IMPORTED_MODULE_9__.VALIDATION_STORE_KEY);
  const error = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_8__.useSelect)(select => {
    const store = select(_data__WEBPACK_IMPORTED_MODULE_9__.VALIDATION_STORE_KEY);
    return store.getValidationError(errorId);
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!required || value) {
      clearValidationError(errorId);
    } else {
      setValidationErrors({
        [errorId]: {
          message: errorMessage,
          hidden: true
        }
      });
    }
    return () => {
      clearValidationError(errorId);
    };
  }, [clearValidationError, value, errorId, errorMessage, required, setValidationErrors]);

  // @todo Remove patch for ComboboxControl once https://github.com/WordPress/gutenberg/pull/33928 is released
  // Also see https://github.com/WordPress/gutenberg/pull/34090
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: controlId,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('wc-block-components-combobox', className, {
      'is-active': value,
      'has-error': error?.message && !error?.hidden
    }),
    ref: controlRef
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ComboboxControl, {
    className: 'wc-block-components-combobox-control',
    label: label,
    onChange: onChange,
    onFilterValueChange: filterValue => {
      if (filterValue.length) {
        // If we have a value and the combobox is not focussed, this could be from browser autofill.
        const activeElement = (0,_types__WEBPACK_IMPORTED_MODULE_7__.isObject)(controlRef.current) ? controlRef.current.ownerDocument.activeElement : undefined;
        if (activeElement && (0,_types__WEBPACK_IMPORTED_MODULE_7__.isObject)(controlRef.current) && controlRef.current.contains(activeElement)) {
          return;
        }

        // Try to match.
        const normalizedFilterValue = filterValue.toLocaleUpperCase();

        // Try to find an exact match first using values.
        const foundValue = options.find(option => option.value.toLocaleUpperCase() === normalizedFilterValue);
        if (foundValue) {
          onChange(foundValue.value);
          return;
        }

        // Fallback to a label match.
        const foundOption = options.find(option => option.label.toLocaleUpperCase().startsWith(normalizedFilterValue));
        if (foundOption) {
          onChange(foundOption.value);
        }
      }
    },
    options: options,
    value: value || '',
    allowReset: false,
    autoComplete: autoComplete,
    "aria-invalid": error?.message && !error?.hidden
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_packages_components__WEBPACK_IMPORTED_MODULE_6__.ValidationInputError, {
    propertyName: errorId
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.withInstanceId)(Combobox));

/***/ }),

/***/ "./wc_components/js/base/components/country-input/billing-country-input.tsx":
/*!**********************************************************************************!*\
  !*** ./wc_components/js/base/components/country-input/billing-country-input.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../settings/blocks */ "./wc_components/js/settings/blocks/index.ts");
/* harmony import */ var _country_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country-input */ "./wc_components/js/base/components/country-input/country-input.tsx");

/**
 * External dependencies
 */
// import { ALLOWED_COUNTRIES } from '@woocommerce/block-settings';


/**
 * Internal dependencies
 */

const BillingCountryInput = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_country_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    countries: _settings_blocks__WEBPACK_IMPORTED_MODULE_1__.ALLOWED_COUNTRIES,
    ...props
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BillingCountryInput);

/***/ }),

/***/ "./wc_components/js/base/components/country-input/country-input.tsx":
/*!**************************************************************************!*\
  !*** ./wc_components/js/base/components/country-input/country-input.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountryInput: () => (/* binding */ CountryInput),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _combobox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../combobox */ "./wc_components/js/base/components/combobox/index.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./wc_components/js/base/components/country-input/style.scss");

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */


const CountryInput = ({
  className,
  countries,
  id,
  label,
  onChange,
  value = '',
  autoComplete = 'off',
  required = false,
  errorId,
  errorMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Please select a country', 'woo-gutenberg-products-block')
}) => {
  const options = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => Object.entries(countries).map(([countryCode, countryName]) => ({
    value: countryCode,
    label: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(countryName)
  })), [countries]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'wc-block-components-country-input')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_combobox__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: id,
    label: label,
    onChange: onChange,
    options: options,
    value: value,
    errorId: errorId,
    errorMessage: errorMessage,
    required: required,
    autoComplete: autoComplete
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountryInput);

/***/ }),

/***/ "./wc_components/js/base/components/country-input/index.ts":
/*!*****************************************************************!*\
  !*** ./wc_components/js/base/components/country-input/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingCountryInput: () => (/* reexport safe */ _billing_country_input__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   ShippingCountryInput: () => (/* reexport safe */ _shipping_country_input__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _billing_country_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./billing-country-input */ "./wc_components/js/base/components/country-input/billing-country-input.tsx");
/* harmony import */ var _shipping_country_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipping-country-input */ "./wc_components/js/base/components/country-input/shipping-country-input.tsx");
// export type {
// 	CountryInputProps,
// 	CountryInputWithCountriesProps,
// } from './CountryInputProps';
// export { CountryInput } from './country-input';



/***/ }),

/***/ "./wc_components/js/base/components/country-input/shipping-country-input.tsx":
/*!***********************************************************************************!*\
  !*** ./wc_components/js/base/components/country-input/shipping-country-input.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../settings/blocks */ "./wc_components/js/settings/blocks/index.ts");
/* harmony import */ var _country_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country-input */ "./wc_components/js/base/components/country-input/country-input.tsx");

/**
 * External dependencies
 */

// import { SHIPPING_COUNTRIES } from '@woocommerce/block-settings';

/**
 * Internal dependencies
 */

const ShippingCountryInput = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_country_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    countries: _settings_blocks__WEBPACK_IMPORTED_MODULE_1__.SHIPPING_COUNTRIES,
    ...props
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShippingCountryInput);

/***/ }),

/***/ "./wc_components/js/base/components/index.ts":
/*!***************************************************!*\
  !*** ./wc_components/js/base/components/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressForm: () => (/* reexport safe */ _cart_checkout__WEBPACK_IMPORTED_MODULE_0__.AddressForm),
/* harmony export */   BillingCountryInput: () => (/* reexport safe */ _country_input__WEBPACK_IMPORTED_MODULE_1__.BillingCountryInput),
/* harmony export */   BillingStateInput: () => (/* reexport safe */ _state_input__WEBPACK_IMPORTED_MODULE_4__.BillingStateInput),
/* harmony export */   OrderSummary: () => (/* reexport safe */ _cart_checkout__WEBPACK_IMPORTED_MODULE_0__.OrderSummary),
/* harmony export */   ShippingCountryInput: () => (/* reexport safe */ _country_input__WEBPACK_IMPORTED_MODULE_1__.ShippingCountryInput),
/* harmony export */   ShippingStateInput: () => (/* reexport safe */ _state_input__WEBPACK_IMPORTED_MODULE_4__.ShippingStateInput),
/* harmony export */   Summary: () => (/* reexport safe */ _summary__WEBPACK_IMPORTED_MODULE_5__.Summary)
/* harmony export */ });
/* harmony import */ var _cart_checkout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-checkout */ "./wc_components/js/base/components/cart-checkout/index.js");
/* harmony import */ var _country_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country-input */ "./wc_components/js/base/components/country-input/index.ts");
/* harmony import */ var _product_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-price */ "./wc_components/js/base/components/product-price/index.tsx");
/* harmony import */ var _quantity_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quantity-selector */ "./wc_components/js/base/components/quantity-selector/index.tsx");
/* harmony import */ var _state_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state-input */ "./wc_components/js/base/components/state-input/index.ts");
/* harmony import */ var _summary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./summary */ "./wc_components/js/base/components/summary/index.tsx");
// export * from './block-error-boundary';
// export * from './button';

// export * from './combobox';

// export * from './drawer';
// export * from './filter-element-label';
// export * from './filter-placeholder';
// export * from './filter-reset-button';
// export * from './filter-submit-button';
// export * from './form';
// export * from './form-token-field';
// export * from './load-more-button';
// export * from './loading-mask';
// export * from './noninteractive';
// export * from './notice-banner';
// export * from './pagination';
// export * from './price-slider';
// export * from './product-list';
// export * from './product-name';

// export * from './product-rating';

// export * from './read-more';
// export * from './reviews';
// export * from './sidebar-layout';
// export * from './snackbar-list';


// export * from './tabs';

/***/ }),

/***/ "./wc_components/js/base/components/product-name/index.tsx":
/*!*****************************************************************!*\
  !*** ./wc_components/js/base/components/product-name/index.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductName: () => (/* binding */ ProductName),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./wc_components/js/base/components/product-name/style.scss");

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

/**
 * Render the Product name.
 *
 * The store API runs titles through `wp_kses_post()` which removes dangerous HTML tags, so using it inside `dangerouslySetInnerHTML` is considered safe.
 */
const ProductName = ({
  className = '',
  disabled = false,
  name,
  permalink = '',
  target,
  rel,
  style,
  onClick,
  ...props
}) => {
  const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wc-block-components-product-name', className);
  if (disabled) {
    // Cast the props as type HTMLSpanElement.
    const disabledProps = props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: classes,
      ...disabledProps,
      dangerouslySetInnerHTML: {
        __html: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__.decodeEntities)(name)
      }
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: classes,
    href: permalink,
    target: target,
    ...props,
    dangerouslySetInnerHTML: {
      __html: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__.decodeEntities)(name)
    },
    style: style
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductName);

/***/ }),

/***/ "./wc_components/js/base/components/product-price/index.tsx":
/*!******************************************************************!*\
  !*** ./wc_components/js/base/components/product-price/index.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../packages/components */ "./wc_components/packages/components/index.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _packages_prices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../packages/prices */ "./wc_components/packages/prices/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./wc_components/js/base/components/product-price/style.scss");

/**
 * External dependencies
 */


// import { FormattedMonetaryAmount } from '@woocommerce/blocks-components';


// import { formatPrice } from '@woocommerce/price-format';


// import type { Currency } from '@woocommerce/types';

/**
 * Internal dependencies
 */


const PriceRange = ({
  currency,
  maxPrice,
  minPrice,
  priceClassName,
  priceStyle = {}
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "screen-reader-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %1$s min price, %2$s max price */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Price between %1$s and %2$s', 'woo-gutenberg-products-block'), (0,_packages_prices__WEBPACK_IMPORTED_MODULE_4__.formatPrice)(minPrice), (0,_packages_prices__WEBPACK_IMPORTED_MODULE_4__.formatPrice)(maxPrice))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_packages_components__WEBPACK_IMPORTED_MODULE_2__.FormattedMonetaryAmount, {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('wc-block-components-product-price__value', priceClassName),
    currency: currency,
    value: minPrice,
    style: priceStyle
  }), "\xA0\u2014\xA0", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_packages_components__WEBPACK_IMPORTED_MODULE_2__.FormattedMonetaryAmount, {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('wc-block-components-product-price__value', priceClassName),
    currency: currency,
    value: maxPrice,
    style: priceStyle
  })));
};
const SalePrice = ({
  currency,
  regularPriceClassName,
  regularPriceStyle,
  regularPrice,
  priceClassName,
  priceStyle,
  price
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "screen-reader-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Previous price:', 'woo-gutenberg-products-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_packages_components__WEBPACK_IMPORTED_MODULE_2__.FormattedMonetaryAmount, {
    currency: currency,
    renderText: value => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("del", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('wc-block-components-product-price__regular', regularPriceClassName),
      style: regularPriceStyle
    }, value),
    value: regularPrice
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "screen-reader-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Discounted price:', 'woo-gutenberg-products-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_packages_components__WEBPACK_IMPORTED_MODULE_2__.FormattedMonetaryAmount, {
    currency: currency,
    renderText: value => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ins", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('wc-block-components-product-price__value', 'is-discounted', priceClassName),
      style: priceStyle
    }, value),
    value: price
  }));
};
const ProductPrice = ({
  align,
  className,
  currency,
  format = '<price/>',
  maxPrice,
  minPrice,
  price,
  priceClassName,
  priceStyle,
  regularPrice,
  regularPriceClassName,
  regularPriceStyle,
  style
}) => {
  const wrapperClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'price', 'wc-block-components-product-price', {
    [`wc-block-components-product-price--align-${align}`]: align
  });
  if (!format.includes('<price/>')) {
    format = '<price/>';
    // eslint-disable-next-line no-console
    console.error('Price formats need to include the `<price/>` tag.');
  }
  const isDiscounted = regularPrice && price && price < regularPrice;
  let priceComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('wc-block-components-product-price__value', priceClassName)
  });
  if (isDiscounted) {
    priceComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SalePrice, {
      currency: currency,
      price: price,
      priceClassName: priceClassName,
      priceStyle: priceStyle,
      regularPrice: regularPrice,
      regularPriceClassName: regularPriceClassName,
      regularPriceStyle: regularPriceStyle
    });
  } else if (minPrice !== undefined && maxPrice !== undefined) {
    priceComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PriceRange, {
      currency: currency,
      maxPrice: maxPrice,
      minPrice: minPrice,
      priceClassName: priceClassName,
      priceStyle: priceStyle
    });
  } else if (price) {
    priceComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_packages_components__WEBPACK_IMPORTED_MODULE_2__.FormattedMonetaryAmount, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('wc-block-components-product-price__value', priceClassName),
      currency: currency,
      value: price,
      style: priceStyle
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: wrapperClassName,
    style: style
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.createInterpolateElement)(format, {
    price: priceComponent
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPrice);

/***/ }),

/***/ "./wc_components/js/base/components/quantity-selector/index.tsx":
/*!**********************************************************************!*\
  !*** ./wc_components/js/base/components/quantity-selector/index.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! use-debounce */ "./node_modules/use-debounce/dist/index.module.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./wc_components/js/base/components/quantity-selector/style.scss");

/**
 * External dependencies
 */







/**
 * Internal dependencies
 */

const QuantitySelector = ({
  className,
  quantity = 1,
  minimum = 1,
  maximum,
  onChange = () => void 0,
  step = 1,
  itemName = '',
  disabled
}) => {
  const classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()('wc-block-components-quantity-selector', className);
  const inputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const decreaseButtonRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const increaseButtonRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const hasMaximum = typeof maximum !== 'undefined';
  const canDecrease = !disabled && quantity - step >= minimum;
  const canIncrease = !disabled && (!hasMaximum || quantity + step <= maximum);

  /**
   * The goal of this function is to normalize what was inserted,
   * but after the customer has stopped typing.
   */
  const normalizeQuantity = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useCallback)(initialValue => {
    // We copy the starting value.
    let value = initialValue;

    // We check if we have a maximum value, and select the lowest between what was inserted and the maximum.
    if (hasMaximum) {
      value = Math.min(value,
      // the maximum possible value in step increments.
      Math.floor(maximum / step) * step);
    }

    // Select the biggest between what's inserted, the the minimum value in steps.
    value = Math.max(value, Math.ceil(minimum / step) * step);

    // We round off the value to our steps.
    value = Math.floor(value / step) * step;

    // Only commit if the value has changed
    if (value !== initialValue) {
      onChange(value);
    }
  }, [hasMaximum, maximum, minimum, onChange, step]);

  /*
   * It's important to wait before normalizing or we end up with
   * a frustrating experience, for example, if the minimum is 2 and
   * the customer is trying to type "10", premature normalizing would
   * always kick in at "1" and turn that into 2.
   */
  const debouncedNormalizeQuantity = (0,use_debounce__WEBPACK_IMPORTED_MODULE_7__.useDebouncedCallback)(normalizeQuantity,
  // This value is deliberately smaller than what's in useStoreCartItemQuantity so we don't end up with two requests.
  300);

  /**
   * Normalize qty on mount before render.
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useLayoutEffect)(() => {
    normalizeQuantity(quantity);
  }, [quantity, normalizeQuantity]);

  /**
   * Handles keyboard up and down keys to change quantity value.
   *
   * @param {Object} event event data.
   */
  const quantityInputOnKeyDown = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useCallback)(event => {
    const isArrowDown = typeof event.key !== undefined ? event.key === 'ArrowDown' : event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__.DOWN;
    const isArrowUp = typeof event.key !== undefined ? event.key === 'ArrowUp' : event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__.UP;
    if (isArrowDown && canDecrease) {
      event.preventDefault();
      onChange(quantity - step);
    }
    if (isArrowUp && canIncrease) {
      event.preventDefault();
      onChange(quantity + step);
    }
  }, [quantity, onChange, canIncrease, canDecrease, step]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    ref: inputRef,
    className: "wc-block-components-quantity-selector__input",
    disabled: disabled,
    type: "number",
    step: step,
    min: minimum,
    max: maximum,
    value: quantity,
    onKeyDown: quantityInputOnKeyDown,
    onChange: event => {
      // Inputs values are strings, we parse them here.
      let value = parseInt(event.target.value, 10);
      // parseInt would throw NaN for anything not a number,
      // so we revert value to the quantity value.
      value = isNaN(value) ? quantity : value;
      if (value !== quantity) {
        // we commit this value immediately.
        onChange(value);
        // but once the customer has stopped typing, we make sure his value is respecting the bounds (maximum value, minimum value, step value), and commit the normalized value.
        debouncedNormalizeQuantity(value);
      }
    },
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %s refers to the item name in the cart. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Quantity of %s in your cart.', 'woo-gutenberg-products-block'), itemName)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    ref: decreaseButtonRef,
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %s refers to the item name in the cart. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reduce quantity of %s', 'woo-gutenberg-products-block'), itemName),
    className: "wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--minus",
    disabled: !canDecrease,
    onClick: () => {
      const newQuantity = quantity - step;
      onChange(newQuantity);
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_2__.speak)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %s refers to the item's new quantity in the cart. */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Quantity reduced to %s.', 'woo-gutenberg-products-block'), newQuantity));
      normalizeQuantity(newQuantity);
    }
  }, "\uFF0D"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    ref: increaseButtonRef,
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %s refers to the item's name in the cart. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Increase quantity of %s', 'woo-gutenberg-products-block'), itemName),
    disabled: !canIncrease,
    className: "wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--plus",
    onClick: () => {
      const newQuantity = quantity + step;
      onChange(newQuantity);
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_2__.speak)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %s refers to the item's new quantity in the cart. */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Quantity increased to %s.', 'woo-gutenberg-products-block'), newQuantity));
      normalizeQuantity(newQuantity);
    }
  }, "\uFF0B"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuantitySelector);

/***/ }),

/***/ "./wc_components/js/base/components/state-input/billing-state-input.tsx":
/*!******************************************************************************!*\
  !*** ./wc_components/js/base/components/state-input/billing-state-input.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../settings/blocks */ "./wc_components/js/settings/blocks/index.ts");
/* harmony import */ var _state_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state-input */ "./wc_components/js/base/components/state-input/state-input.tsx");

/**
 * External dependencies
 */

// import { ALLOWED_STATES } from '@woocommerce/block-settings';

/**
 * Internal dependencies
 */

const BillingStateInput = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_state_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    states: _settings_blocks__WEBPACK_IMPORTED_MODULE_1__.ALLOWED_STATES,
    ...props
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BillingStateInput);

/***/ }),

/***/ "./wc_components/js/base/components/state-input/index.ts":
/*!***************************************************************!*\
  !*** ./wc_components/js/base/components/state-input/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingStateInput: () => (/* reexport safe */ _billing_state_input__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   ShippingStateInput: () => (/* reexport safe */ _shipping_state_input__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _billing_state_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./billing-state-input */ "./wc_components/js/base/components/state-input/billing-state-input.tsx");
/* harmony import */ var _shipping_state_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipping-state-input */ "./wc_components/js/base/components/state-input/shipping-state-input.tsx");
// export { default as StateInput } from './state-input';



/***/ }),

/***/ "./wc_components/js/base/components/state-input/shipping-state-input.tsx":
/*!*******************************************************************************!*\
  !*** ./wc_components/js/base/components/state-input/shipping-state-input.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../settings/blocks */ "./wc_components/js/settings/blocks/index.ts");
/* harmony import */ var _state_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state-input */ "./wc_components/js/base/components/state-input/state-input.tsx");

/**
 * External dependencies
 */

// import { SHIPPING_STATES } from '@woocommerce/block-settings';


/**
 * Internal dependencies
 */

const ShippingStateInput = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_state_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    states: _settings_blocks__WEBPACK_IMPORTED_MODULE_1__.SHIPPING_STATES,
    ...props
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShippingStateInput);

/***/ }),

/***/ "./wc_components/js/base/components/state-input/state-input.tsx":
/*!**********************************************************************!*\
  !*** ./wc_components/js/base/components/state-input/state-input.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_blocks_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @woocommerce/blocks-components */ "@woocommerce/blocks-components");
/* harmony import */ var _woocommerce_blocks_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _combobox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../combobox */ "./wc_components/js/base/components/combobox/index.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./wc_components/js/base/components/state-input/style.scss");

/**
 * External dependencies
 */






/**
 * Internal dependencies
 */


const optionMatcher = (value, options) => {
  const foundOption = options.find(option => option.label.toLocaleUpperCase() === value.toLocaleUpperCase() || option.value.toLocaleUpperCase() === value.toLocaleUpperCase());
  return foundOption ? foundOption.value : '';
};
const StateInput = ({
  className,
  id,
  states,
  country,
  label,
  onChange,
  autoComplete = 'off',
  value = '',
  required = false,
  errorId = ''
}) => {
  const countryStates = states[country];
  const options = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => countryStates ? Object.keys(countryStates).map(key => ({
    value: key,
    label: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__.decodeEntities)(countryStates[key])
  })) : [], [countryStates]);

  /**
   * Handles state selection onChange events. Finds a matching state by key or value.
   */
  const onChangeState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(stateValue => {
    const newValue = options.length > 0 ? optionMatcher(stateValue, options) : stateValue;
    if (newValue !== value) {
      onChange(newValue);
    }
  }, [onChange, options, value]);

  /**
   * Track value changes.
   */
  const valueRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(value);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (valueRef.current !== value) {
      valueRef.current = value;
    }
  }, [value]);

  /**
   * If given a list of options, ensure the value matches those options or trigger change.
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (options.length > 0 && valueRef.current) {
      const match = optionMatcher(valueRef.current, options);
      if (match !== valueRef.current) {
        onChangeState(match);
      }
    }
  }, [options, onChangeState]);
  if (options.length > 0) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_combobox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'wc-block-components-state-input'),
      id: id,
      label: label,
      onChange: onChangeState,
      options: options,
      value: value,
      errorMessage: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Please select a state.', 'woo-gutenberg-products-block'),
      errorId: errorId,
      required: required,
      autoComplete: autoComplete
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_blocks_components__WEBPACK_IMPORTED_MODULE_5__.ValidatedTextInput, {
    className: className,
    id: id,
    label: label,
    onChange: onChangeState,
    autoComplete: autoComplete,
    value: value,
    required: required
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StateInput);

/***/ }),

/***/ "./wc_components/js/base/components/summary/index.tsx":
/*!************************************************************!*\
  !*** ./wc_components/js/base/components/summary/index.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Summary: () => (/* binding */ Summary),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./wc_components/js/base/components/summary/utils.ts");

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

/**
 * Summary component.
 *
 * @param {Object}        props           Component props.
 * @param {string}        props.source    Source text.
 * @param {number}        props.maxLength Max length of the summary, using countType.
 * @param {string}        props.countType One of words, characters_excluding_spaces, or characters_including_spaces.
 * @param {string}        props.className Class name for rendered component.
 * @param {CSSProperties} props.style     Style Object for rendered component.
 *
 */
const Summary = ({
  source,
  maxLength = 15,
  countType = 'words',
  className = '',
  style = {}
}) => {
  const summaryText = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.generateSummary)(source, maxLength, countType);
  }, [source, maxLength, countType]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const cartItemsBlock = document.querySelector('.wp-block-woocommerce-checkout-order-summary-cart-items-block');
    if (cartItemsBlock) {
      cartItemsBlock.style.display = 'none'; // just hide it safely
    }
  }, []);
  // useEffect(() => {
  // 	const cartItemsBlock = document.querySelector(
  // 		'.wp-block-woocommerce-checkout-order-summary-cart-items-block'
  // 	);
  // 	if (cartItemsBlock) {
  // 		cartItemsBlock.innerHTML = '';
  // 	}
  // }, []); // empty deps means it runs once on mount

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.RawHTML, {
    style: style,
    className: className
  }, summaryText);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Summary);

/***/ }),

/***/ "./wc_components/js/base/components/summary/utils.ts":
/*!***********************************************************!*\
  !*** ./wc_components/js/base/components/summary/utils.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateSummary: () => (/* binding */ generateSummary)
/* harmony export */ });
/* harmony import */ var _wordpress_autop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/autop */ "@wordpress/autop");
/* harmony import */ var _wordpress_autop__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_autop__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_wordcount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/wordcount */ "@wordpress/wordcount");
/* harmony import */ var _wordpress_wordcount__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_wordcount__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./wc_components/js/utils/index.ts");
/**
 * External dependencies
 */

// import { trimCharacters, trimWords } from '@woocommerce/utils';



/**
 * Get first paragraph from some HTML text, or return whole string.
 *
 * @param {string} source Source text.
 * @return {string} First paragraph found in string.
 */
const getFirstParagraph = source => {
  const pIndex = source.indexOf('</p>');
  if (pIndex === -1) {
    return source;
  }
  return source.substr(0, pIndex + 4);
};

/**
 * Generates the summary text from a string of text.
 *
 * @param {string} source    Source text.
 * @param {number} maxLength Limit number of countType returned if text has multiple paragraphs.
 * @param {string} countType What is being counted. One of words, characters_excluding_spaces, or characters_including_spaces.
 * @return {string} Generated summary.
 */
const generateSummary = (source, maxLength = 15, countType = 'words') => {
  const sourceWithParagraphs = (0,_wordpress_autop__WEBPACK_IMPORTED_MODULE_0__.autop)(source);
  const sourceWordCount = (0,_wordpress_wordcount__WEBPACK_IMPORTED_MODULE_1__.count)(sourceWithParagraphs, countType);
  if (sourceWordCount <= maxLength) {
    return sourceWithParagraphs;
  }
  const firstParagraph = getFirstParagraph(sourceWithParagraphs);
  const firstParagraphWordCount = (0,_wordpress_wordcount__WEBPACK_IMPORTED_MODULE_1__.count)(firstParagraph, countType);
  if (firstParagraphWordCount <= maxLength) {
    return firstParagraph;
  }
  if (countType === 'words') {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.trimWords)(firstParagraph, maxLength);
  }
  return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.trimCharacters)(firstParagraph, maxLength, countType === 'characters_including_spaces');
};

/***/ }),

/***/ "./wc_components/js/base/context/event-emit/emitter-callback.ts":
/*!**********************************************************************!*\
  !*** ./wc_components/js/base/context/event-emit/emitter-callback.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emitterCallback: () => (/* binding */ emitterCallback)
/* harmony export */ });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./wc_components/js/base/context/event-emit/reducer.ts");
/**
 * Internal dependencies
 */

const emitterCallback = (type, observerDispatch) => (callback, priority = 10) => {
  const action = _reducer__WEBPACK_IMPORTED_MODULE_0__.actions.addEventCallback(type, callback, priority);
  observerDispatch(action);
  return () => {
    observerDispatch(_reducer__WEBPACK_IMPORTED_MODULE_0__.actions.removeEventCallback(type, action.id));
  };
};

/***/ }),

/***/ "./wc_components/js/base/context/event-emit/emitters.ts":
/*!**************************************************************!*\
  !*** ./wc_components/js/base/context/event-emit/emitters.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emitEvent: () => (/* binding */ emitEvent),
/* harmony export */   emitEventWithAbort: () => (/* binding */ emitEventWithAbort)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./wc_components/js/base/context/event-emit/utils.ts");
/* harmony import */ var _types_type_guards_observers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../types/type-guards/observers */ "./wc_components/js/types/type-guards/observers.ts");
/**
 * Internal dependencies
 */



/**
 * Emits events on registered observers for the provided type and passes along
 * the provided data.
 *
 * This event emitter will silently catch promise errors, but doesn't care
 * otherwise if any errors are caused by observers. So events that do care
 * should use `emitEventWithAbort` instead.
 *
 * @param {Object} observers The registered observers to omit to.
 * @param {string} eventType The event type being emitted.
 * @param {*}      data      Data passed along to the observer when it is invoked.
 *
 * @return {Promise} A promise that resolves to true after all observers have executed.
 */
const emitEvent = async (observers, eventType, data) => {
  const observersByType = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getObserversByPriority)(observers, eventType);
  const observerResponses = [];
  for (const observer of observersByType) {
    try {
      const observerResponse = await Promise.resolve(observer.callback(data));
      if (typeof observerResponse === 'object') {
        observerResponses.push(observerResponse);
      }
    } catch (e) {
      // we don't care about errors blocking execution, but will console.error for troubleshooting.
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }
  return observerResponses.length ? observerResponses : true;
};

/**
 * Emits events on registered observers for the provided type and passes along
 * the provided data. This event emitter will abort if an observer throws an
 * error or if the response includes an object with an error type property.
 *
 * Any successful observer responses before abort will be included in the returned package.
 *
 * @param {Object} observers The registered observers to omit to.
 * @param {string} eventType The event type being emitted.
 * @param {*}      data      Data passed along to the observer when it is invoked.
 *
 * @return {Promise} Returns a promise that resolves to either boolean, or an array of responses
 *                   from registered observers that were invoked up to the point of an error.
 */
const emitEventWithAbort = async (observers, eventType, data) => {
  const observerResponses = [];
  const observersByType = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getObserversByPriority)(observers, eventType);
  for (const observer of observersByType) {
    try {
      const response = await Promise.resolve(observer.callback(data));
      if (!(0,_types_type_guards_observers__WEBPACK_IMPORTED_MODULE_1__.isObserverResponse)(response)) {
        continue;
      }
      if (!response.hasOwnProperty('type')) {
        throw new Error('Returned objects from event emitter observers must return an object with a type property');
      }
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isErrorResponse)(response) || (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isFailResponse)(response)) {
        observerResponses.push(response);
        // early abort.
        return observerResponses;
      }
      // all potential abort conditions have been considered push the
      // response to the array.
      observerResponses.push(response);
    } catch (e) {
      // We don't handle thrown errors but just console.log for troubleshooting.
      // eslint-disable-next-line no-console
      console.error(e);
      observerResponses.push({
        type: _utils__WEBPACK_IMPORTED_MODULE_0__.responseTypes.ERROR
      });
      return observerResponses;
    }
  }
  return observerResponses;
};

/***/ }),

/***/ "./wc_components/js/base/context/event-emit/index.ts":
/*!***********************************************************!*\
  !*** ./wc_components/js/base/context/event-emit/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTION: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_3__.ACTION),
/* harmony export */   actions: () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_0__.actions),
/* harmony export */   emitEvent: () => (/* reexport safe */ _emitters__WEBPACK_IMPORTED_MODULE_1__.emitEvent),
/* harmony export */   emitEventWithAbort: () => (/* reexport safe */ _emitters__WEBPACK_IMPORTED_MODULE_1__.emitEventWithAbort),
/* harmony export */   emitterCallback: () => (/* reexport safe */ _emitter_callback__WEBPACK_IMPORTED_MODULE_2__.emitterCallback),
/* harmony export */   generateUniqueId: () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_0__.generateUniqueId),
/* harmony export */   getObserversByPriority: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.getObserversByPriority),
/* harmony export */   isErrorResponse: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.isErrorResponse),
/* harmony export */   isFailResponse: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.isFailResponse),
/* harmony export */   isSuccessResponse: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.isSuccessResponse),
/* harmony export */   noticeContexts: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.noticeContexts),
/* harmony export */   reducer: () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_0__.reducer),
/* harmony export */   responseTypes: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.responseTypes),
/* harmony export */   shouldRetry: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.shouldRetry)
/* harmony export */ });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./wc_components/js/base/context/event-emit/reducer.ts");
/* harmony import */ var _emitters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emitters */ "./wc_components/js/base/context/event-emit/emitters.ts");
/* harmony import */ var _emitter_callback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emitter-callback */ "./wc_components/js/base/context/event-emit/emitter-callback.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./wc_components/js/base/context/event-emit/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./wc_components/js/base/context/event-emit/utils.ts");






/***/ }),

/***/ "./wc_components/js/base/context/event-emit/reducer.ts":
/*!*************************************************************!*\
  !*** ./wc_components/js/base/context/event-emit/reducer.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actions: () => (/* binding */ actions),
/* harmony export */   generateUniqueId: () => (/* binding */ generateUniqueId),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./wc_components/js/base/context/event-emit/types.ts");
/**
 * Internal dependencies
 */

function generateUniqueId() {
  return Math.floor(Math.random() * Date.now()).toString();
}
const actions = {
  addEventCallback: (eventType, callback, priority = 10) => {
    return {
      id: generateUniqueId(),
      type: _types__WEBPACK_IMPORTED_MODULE_0__.ACTION.ADD_EVENT_CALLBACK,
      eventType,
      callback,
      priority
    };
  },
  removeEventCallback: (eventType, id) => {
    return {
      id,
      type: _types__WEBPACK_IMPORTED_MODULE_0__.ACTION.REMOVE_EVENT_CALLBACK,
      eventType
    };
  }
};
const initialState = {};

/**
 * Handles actions for emitters
 */
const reducer = (state = initialState, {
  type,
  eventType,
  id,
  callback,
  priority
}) => {
  const newEvents = state.hasOwnProperty(eventType) ? new Map(state[eventType]) : new Map();
  switch (type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__.ACTION.ADD_EVENT_CALLBACK:
      newEvents.set(id, {
        priority,
        callback
      });
      return {
        ...state,
        [eventType]: newEvents
      };
    case _types__WEBPACK_IMPORTED_MODULE_0__.ACTION.REMOVE_EVENT_CALLBACK:
      newEvents.delete(id);
      return {
        ...state,
        [eventType]: newEvents
      };
  }
};

/***/ }),

/***/ "./wc_components/js/base/context/event-emit/types.ts":
/*!***********************************************************!*\
  !*** ./wc_components/js/base/context/event-emit/types.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTION: () => (/* binding */ ACTION)
/* harmony export */ });
let ACTION = /*#__PURE__*/function (ACTION) {
  ACTION["ADD_EVENT_CALLBACK"] = "add_event_callback";
  ACTION["REMOVE_EVENT_CALLBACK"] = "remove_event_callback";
  return ACTION;
}({});

/***/ }),

/***/ "./wc_components/js/base/context/event-emit/utils.ts":
/*!***********************************************************!*\
  !*** ./wc_components/js/base/context/event-emit/utils.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getObserversByPriority: () => (/* binding */ getObserversByPriority),
/* harmony export */   isErrorResponse: () => (/* binding */ isErrorResponse),
/* harmony export */   isFailResponse: () => (/* binding */ isFailResponse),
/* harmony export */   isSuccessResponse: () => (/* binding */ isSuccessResponse),
/* harmony export */   noticeContexts: () => (/* binding */ noticeContexts),
/* harmony export */   responseTypes: () => (/* binding */ responseTypes),
/* harmony export */   shouldRetry: () => (/* binding */ shouldRetry)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../types */ "./wc_components/js/types/index.ts");
/**
 * External dependencies
 */
// import { FieldValidationStatus, isObject } from '@woocommerce/types';



/**
 * Internal dependencies
 */

const getObserversByPriority = (observers, eventType) => {
  return observers[eventType] ? Array.from(observers[eventType].values()).sort((a, b) => {
    return a.priority - b.priority;
  }) : [];
};
let responseTypes = /*#__PURE__*/function (responseTypes) {
  responseTypes["SUCCESS"] = "success";
  responseTypes["FAIL"] = "failure";
  responseTypes["ERROR"] = "error";
  return responseTypes;
}({});
let noticeContexts = /*#__PURE__*/function (noticeContexts) {
  noticeContexts["CART"] = "wc/cart";
  noticeContexts["CHECKOUT"] = "wc/checkout";
  noticeContexts["PAYMENTS"] = "wc/checkout/payments";
  noticeContexts["EXPRESS_PAYMENTS"] = "wc/checkout/express-payments";
  noticeContexts["CONTACT_INFORMATION"] = "wc/checkout/contact-information";
  noticeContexts["SHIPPING_ADDRESS"] = "wc/checkout/shipping-address";
  noticeContexts["BILLING_ADDRESS"] = "wc/checkout/billing-address";
  noticeContexts["SHIPPING_METHODS"] = "wc/checkout/shipping-methods";
  noticeContexts["CHECKOUT_ACTIONS"] = "wc/checkout/checkout-actions";
  return noticeContexts;
}({});

/**
 * Observers of checkout/cart events can return a response object to indicate success/error/failure. They may also
 * optionally pass metadata.
 */

const isResponseOf = (response, type) => {
  return (0,_types__WEBPACK_IMPORTED_MODULE_0__.isObject)(response) && 'type' in response && response.type === type;
};
const isSuccessResponse = response => {
  return isResponseOf(response, responseTypes.SUCCESS);
};
const isErrorResponse = response => {
  return isResponseOf(response, responseTypes.ERROR);
};
const isFailResponse = response => {
  return isResponseOf(response, responseTypes.FAIL);
};
const shouldRetry = response => {
  return !(0,_types__WEBPACK_IMPORTED_MODULE_0__.isObject)(response) || typeof response.retry === 'undefined' || response.retry === true;
};

/***/ }),

/***/ "./wc_components/js/base/context/hooks/cart/index.ts":
/*!***********************************************************!*\
  !*** ./wc_components/js/base/context/hooks/cart/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultCartData: () => (/* reexport safe */ _use_store_cart__WEBPACK_IMPORTED_MODULE_0__.defaultCartData),
/* harmony export */   useStoreCart: () => (/* reexport safe */ _use_store_cart__WEBPACK_IMPORTED_MODULE_0__.useStoreCart),
/* harmony export */   useStoreCartItemQuantity: () => (/* reexport safe */ _use_store_cart_item_quantity__WEBPACK_IMPORTED_MODULE_1__.useStoreCartItemQuantity)
/* harmony export */ });
/* harmony import */ var _use_store_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-store-cart */ "./wc_components/js/base/context/hooks/cart/use-store-cart.ts");
/* harmony import */ var _use_store_cart_item_quantity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-store-cart-item-quantity */ "./wc_components/js/base/context/hooks/cart/use-store-cart-item-quantity.ts");

// export * from './use-store-cart-coupons';


/***/ }),

/***/ "./wc_components/js/base/context/hooks/cart/use-store-cart-event-listeners.ts":
/*!************************************************************************************!*\
  !*** ./wc_components/js/base/context/hooks/cart/use-store-cart-event-listeners.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStoreCartEventListeners: () => (/* binding */ useStoreCartEventListeners)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data */ "./wc_components/js/data/index.ts");
/* harmony import */ var _utils_legacy_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/legacy-events */ "./wc_components/js/base/utils/legacy-events.ts");
/* harmony import */ var _utils_get_navigation_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/get-navigation-type */ "./wc_components/js/base/utils/get-navigation-type.ts");
/**
 * External dependencies
 */

// import { CART_STORE_KEY } from '@woocommerce/block-data';

// import {
// 	translateJQueryEventToNative,
// 	getNavigationType,
// } from '@woocommerce/base-utils';




const refreshData = event => {
  const eventDetail = event?.detail;
  if (!eventDetail || !eventDetail.preserveCartData) {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(_data__WEBPACK_IMPORTED_MODULE_2__.CART_STORE_KEY).invalidateResolutionForStore();
  }
};

/**
 * Refreshes data if the pageshow event is triggered by the browser history.
 *
 * - In Chrome, `back_forward` will be returned by getNavigationType() when the browser history is used.
 * - In safari we instead need to use `event.persisted` which is true when page cache is used.
 */
const refreshCachedCartData = event => {
  if (event?.persisted || (0,_utils_get_navigation_type__WEBPACK_IMPORTED_MODULE_4__["default"])() === 'back_forward') {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(_data__WEBPACK_IMPORTED_MODULE_2__.CART_STORE_KEY).invalidateResolutionForStore();
  }
};
const setUp = () => {
  if (!window.wcBlocksStoreCartListeners) {
    window.wcBlocksStoreCartListeners = {
      count: 0,
      remove: () => void null
    };
  }
};

// Checks if there are any listeners registered.
const hasListeners = () => {
  return window.wcBlocksStoreCartListeners?.count > 0;
};

// Add listeners if there are none, otherwise just increment the count.
const addListeners = () => {
  setUp();
  if (hasListeners()) {
    window.wcBlocksStoreCartListeners.count++;
    return;
  }
  document.body.addEventListener('wc-blocks_added_to_cart', refreshData);
  document.body.addEventListener('wc-blocks_removed_from_cart', refreshData);
  window.addEventListener('pageshow', refreshCachedCartData);
  const removeJQueryAddedToCartEvent = (0,_utils_legacy_events__WEBPACK_IMPORTED_MODULE_3__.translateJQueryEventToNative)('added_to_cart', `wc-blocks_added_to_cart`);
  const removeJQueryRemovedFromCartEvent = (0,_utils_legacy_events__WEBPACK_IMPORTED_MODULE_3__.translateJQueryEventToNative)('removed_from_cart', `wc-blocks_removed_from_cart`);
  window.wcBlocksStoreCartListeners.count = 1;
  window.wcBlocksStoreCartListeners.remove = () => {
    document.body.removeEventListener('wc-blocks_added_to_cart', refreshData);
    document.body.removeEventListener('wc-blocks_removed_from_cart', refreshData);
    window.removeEventListener('pageshow', refreshCachedCartData);
    removeJQueryAddedToCartEvent();
    removeJQueryRemovedFromCartEvent();
  };
};
const removeListeners = () => {
  if (window.wcBlocksStoreCartListeners.count === 1) {
    window.wcBlocksStoreCartListeners.remove();
  }
  window.wcBlocksStoreCartListeners.count--;
};

/**
 * This will keep track of jQuery and DOM events that invalidate the store resolution.
 */
const useStoreCartEventListeners = () => {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    addListeners();
    return removeListeners;
  }, []);
};

/***/ }),

/***/ "./wc_components/js/base/context/hooks/cart/use-store-cart-item-quantity.ts":
/*!**********************************************************************************!*\
  !*** ./wc_components/js/base/context/hooks/cart/use-store-cart-item-quantity.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStoreCartItemQuantity: () => (/* binding */ useStoreCartItemQuantity)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data */ "./wc_components/js/data/index.ts");
/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! use-debounce */ "./node_modules/use-debounce/dist/index.module.js");
/* harmony import */ var _hooks_use_previous__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/use-previous */ "./wc_components/js/base/hooks/use-previous.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../types */ "./wc_components/js/types/index.ts");
/* harmony import */ var _use_store_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-store-cart */ "./wc_components/js/base/context/hooks/cart/use-store-cart.ts");
/**
 * External dependencies
 */


// import {
// 	CART_STORE_KEY,
// 	CHECKOUT_STORE_KEY,
// 	processErrorResponse,
// } from '@woocommerce/block-data';


// import { usePrevious } from '@woocommerce/base-hooks';


// import usePrevious
// import {
// 	CartItem,
// 	StoreCartItemQuantity,
// 	isNumber,
// 	isObject,
// 	isString,
// 	objectHasProp,
// } from '@woocommerce/types';


/**
 * Internal dependencies
 */


/**
 * Ensures the object passed has props key: string and quantity: number
 */
const cartItemHasQuantityAndKey = cartItem => (0,_types__WEBPACK_IMPORTED_MODULE_4__.isObject)(cartItem) && (0,_types__WEBPACK_IMPORTED_MODULE_4__.objectHasProp)(cartItem, 'key') && (0,_types__WEBPACK_IMPORTED_MODULE_4__.objectHasProp)(cartItem, 'quantity') && (0,_types__WEBPACK_IMPORTED_MODULE_4__.isString)(cartItem.key) && (0,_types__WEBPACK_IMPORTED_MODULE_4__.isNumber)(cartItem.quantity);

/**
 * This is a custom hook for loading the Store API /cart/ endpoint and actions for removing or changing item quantity.
 *
 * @see https://github.com/woocommerce/woocommerce-gutenberg-products-block/tree/trunk/src/RestApi/StoreApi
 *
 * @param {CartItem} cartItem The cartItem to get quantity info from and will have quantity updated on.
 * @return {StoreCartItemQuantity} An object exposing data and actions relating to cart items.
 */
const useStoreCartItemQuantity = cartItem => {
  const verifiedCartItem = {
    key: '',
    quantity: 1
  };
  if (cartItemHasQuantityAndKey(cartItem)) {
    verifiedCartItem.key = cartItem.key;
    verifiedCartItem.quantity = cartItem.quantity;
  }
  const {
    key: cartItemKey = '',
    quantity: cartItemQuantity = 1
  } = verifiedCartItem;
  const {
    cartErrors
  } = (0,_use_store_cart__WEBPACK_IMPORTED_MODULE_5__.useStoreCart)();
  const {
    __internalIncrementCalculating,
    __internalDecrementCalculating
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_data__WEBPACK_IMPORTED_MODULE_2__.CHECKOUT_STORE_KEY);

  // Store quantity in hook state. This is used to keep the UI updated while server request is updated.
  const [quantity, setQuantity] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(cartItemQuantity);
  const [debouncedQuantity] = (0,use_debounce__WEBPACK_IMPORTED_MODULE_6__.useDebounce)(quantity, 400);
  const previousDebouncedQuantity = (0,_hooks_use_previous__WEBPACK_IMPORTED_MODULE_3__.usePrevious)(debouncedQuantity);
  const {
    removeItemFromCart,
    changeCartItemQuantity
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_data__WEBPACK_IMPORTED_MODULE_2__.CART_STORE_KEY);

  // Update local state when server updates.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => setQuantity(cartItemQuantity), [cartItemQuantity]);

  // Track when things are already pending updates.
  const isPending = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    if (!cartItemKey) {
      return {
        quantity: false,
        delete: false
      };
    }
    const store = select(_data__WEBPACK_IMPORTED_MODULE_2__.CART_STORE_KEY);
    return {
      quantity: store.isItemPendingQuantity(cartItemKey),
      delete: store.isItemPendingDelete(cartItemKey)
    };
  }, [cartItemKey]);
  const removeItem = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (cartItemKey) {
      return removeItemFromCart(cartItemKey).catch(error => {
        (0,_data__WEBPACK_IMPORTED_MODULE_2__.processErrorResponse)(error);
      });
    }
    return Promise.resolve(false);
  }, [cartItemKey, removeItemFromCart]);

  // Observe debounced quantity value, fire action to update server on change.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (cartItemKey && (0,_types__WEBPACK_IMPORTED_MODULE_4__.isNumber)(previousDebouncedQuantity) && Number.isFinite(previousDebouncedQuantity) && previousDebouncedQuantity !== debouncedQuantity) {
      changeCartItemQuantity(cartItemKey, debouncedQuantity).catch(error => {
        (0,_data__WEBPACK_IMPORTED_MODULE_2__.processErrorResponse)(error);
      });
    }
  }, [cartItemKey, changeCartItemQuantity, debouncedQuantity, previousDebouncedQuantity]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isPending.delete) {
      __internalIncrementCalculating();
    } else {
      __internalDecrementCalculating();
    }
    return () => {
      if (isPending.delete) {
        __internalDecrementCalculating();
      }
    };
  }, [__internalDecrementCalculating, __internalIncrementCalculating, isPending.delete]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isPending.quantity || debouncedQuantity !== quantity) {
      __internalIncrementCalculating();
    } else {
      __internalDecrementCalculating();
    }
    return () => {
      if (isPending.quantity || debouncedQuantity !== quantity) {
        __internalDecrementCalculating();
      }
    };
  }, [__internalIncrementCalculating, __internalDecrementCalculating, isPending.quantity, debouncedQuantity, quantity]);
  return {
    isPendingDelete: isPending.delete,
    quantity,
    setItemQuantity: setQuantity,
    removeItem,
    cartItemQuantityErrors: cartErrors
  };
};

/***/ }),

/***/ "./wc_components/js/base/context/hooks/cart/use-store-cart.ts":
/*!********************************************************************!*\
  !*** ./wc_components/js/base/context/hooks/cart/use-store-cart.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultCartData: () => (/* binding */ defaultCartData),
/* harmony export */   useStoreCart: () => (/* binding */ useStoreCart)
/* harmony export */ });
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal/es6 */ "./node_modules/fast-deep-equal/es6/index.js");
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data */ "./wc_components/js/data/index.ts");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../base/utils */ "./wc_components/js/base/utils/index.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers */ "./wc_components/js/base/context/providers/index.js");
/* harmony import */ var _use_store_cart_event_listeners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use-store-cart-event-listeners */ "./wc_components/js/base/context/hooks/cart/use-store-cart-event-listeners.ts");
/** @typedef { import('@woocommerce/type-defs/hooks').StoreCart } StoreCart */

/**
 * External dependencies
 */





// import { emptyHiddenAddressFields } from '@woocommerce/base-utils';



// import type { CartResponseTotals } from '../../../../types/type-defs'

/**
 * Internal dependencies
 */


// import { CART_STORE_KEY } from '../../../../data/cart/';
// import { ContainerWidthContextProvider } from '../../providers/';
// import ContainerWidthContextProvider

const defaultShippingAddress = {
  first_name: '',
  last_name: '',
  company: '',
  address_1: '',
  address_2: '',
  city: '',
  state: '',
  postcode: '',
  country: '',
  phone: ''
};
const defaultBillingAddress = {
  ...defaultShippingAddress,
  email: ''
};
const defaultCartTotals = {
  total_items: '',
  total_items_tax: '',
  total_fees: '',
  total_fees_tax: '',
  total_discount: '',
  total_discount_tax: '',
  total_shipping: '',
  total_shipping_tax: '',
  total_price: '',
  total_tax: '',
  tax_lines: _data__WEBPACK_IMPORTED_MODULE_2__.EMPTY_TAX_LINES,
  currency_code: '',
  currency_symbol: '',
  currency_minor_unit: 2,
  currency_decimal_separator: '',
  currency_thousand_separator: '',
  currency_prefix: '',
  currency_suffix: ''
};
const decodeValues = object => Object.fromEntries(Object.entries(object).map(([key, value]) => [key, (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__.decodeEntities)(value)]));

/**
 * @constant
 * @type  {StoreCart} Object containing cart data.
 */
const defaultCartData = {
  cartCoupons: _data__WEBPACK_IMPORTED_MODULE_2__.EMPTY_CART_COUPONS,
  cartItems: _data__WEBPACK_IMPORTED_MODULE_2__.EMPTY_CART_ITEMS,
  cartFees: _data__WEBPACK_IMPORTED_MODULE_2__.EMPTY_CART_FEES,
  cartItemsCount: 0,
  cartItemsWeight: 0,
  crossSellsProducts: _data__WEBPACK_IMPORTED_MODULE_2__.EMPTY_CART_CROSS_SELLS,
  cartNeedsPayment: true,
  cartNeedsShipping: true,
  cartItemErrors: _data__WEBPACK_IMPORTED_MODULE_2__.EMPTY_CART_ITEM_ERRORS,
  cartTotals: defaultCartTotals,
  cartIsLoading: true,
  cartErrors: _data__WEBPACK_IMPORTED_MODULE_2__.EMPTY_CART_ERRORS,
  billingAddress: defaultBillingAddress,
  shippingAddress: defaultShippingAddress,
  shippingRates: _data__WEBPACK_IMPORTED_MODULE_2__.EMPTY_SHIPPING_RATES,
  isLoadingRates: false,
  cartHasCalculatedShipping: false,
  paymentMethods: _data__WEBPACK_IMPORTED_MODULE_2__.EMPTY_PAYMENT_METHODS,
  paymentRequirements: _data__WEBPACK_IMPORTED_MODULE_2__.EMPTY_PAYMENT_REQUIREMENTS,
  receiveCart: () => undefined,
  receiveCartContents: () => undefined,
  extensions: _data__WEBPACK_IMPORTED_MODULE_2__.EMPTY_EXTENSIONS
};

/**
 * This is a custom hook that is wired up to the `wc/store/cart` data
 * store.
 *
 * @param {Object}  options              An object declaring the various
 *                                       collection arguments.
 * @param {boolean} options.shouldSelect If false, the previous results will be
 *                                       returned and internal selects will not
 *                                       fire.
 *
 * @return {StoreCart} Object containing cart data.
 */

const useStoreCart = (options = {
  shouldSelect: true
}) => {
  const {
    isEditor,
    previewData
  } = (0,_providers__WEBPACK_IMPORTED_MODULE_6__.useEditorContext)();
  const previewCart = previewData?.previewCart;
  const {
    shouldSelect
  } = options;
  const currentResults = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  // console.log(isEditor);
  // This will keep track of jQuery and DOM events that invalidate the store resolution.
  (0,_use_store_cart_event_listeners__WEBPACK_IMPORTED_MODULE_7__.useStoreCartEventListeners)();
  const results = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)((select, {
    dispatch
  }) => {
    if (!shouldSelect) {
      return defaultCartData;
    }
    if (isEditor) {
      return {
        cartCoupons: previewCart.coupons,
        cartItems: previewCart.items,
        crossSellsProducts: previewCart.cross_sells,
        cartFees: previewCart.fees,
        cartItemsCount: previewCart.items_count,
        cartItemsWeight: previewCart.items_weight,
        cartNeedsPayment: previewCart.needs_payment,
        cartNeedsShipping: previewCart.needs_shipping,
        cartItemErrors: _data__WEBPACK_IMPORTED_MODULE_2__.EMPTY_CART_ITEM_ERRORS,
        cartTotals: previewCart.totals,
        cartIsLoading: false,
        cartErrors: _data__WEBPACK_IMPORTED_MODULE_2__.EMPTY_CART_ERRORS,
        billingData: defaultBillingAddress,
        billingAddress: defaultBillingAddress,
        shippingAddress: defaultShippingAddress,
        extensions: _data__WEBPACK_IMPORTED_MODULE_2__.EMPTY_EXTENSIONS,
        shippingRates: previewCart.shipping_rates,
        isLoadingRates: false,
        cartHasCalculatedShipping: previewCart.has_calculated_shipping,
        paymentRequirements: previewCart.paymentRequirements,
        receiveCart: typeof previewCart?.receiveCart === 'function' ? previewCart.receiveCart : () => undefined,
        receiveCartContents: typeof previewCart?.receiveCartContents === 'function' ? previewCart.receiveCartContents : () => undefined
      };
    }
    const store = select(_data__WEBPACK_IMPORTED_MODULE_2__.CART_STORE_KEY);
    const cartData = store.getCartData();
    const cartErrors = store.getCartErrors();
    const cartTotals = store.getCartTotals();
    const cartIsLoading = !store.hasFinishedResolution('getCartData');
    const isLoadingRates = store.isCustomerDataUpdating();
    const {
      receiveCart,
      receiveCartContents
    } = dispatch(_data__WEBPACK_IMPORTED_MODULE_2__.CART_STORE_KEY);
    const billingAddress = decodeValues(cartData.billingAddress);
    const shippingAddress = cartData.needsShipping ? decodeValues(cartData.shippingAddress) : billingAddress;
    const cartFees = cartData.fees.length > 0 ? cartData.fees.map(fee => decodeValues(fee)) : _data__WEBPACK_IMPORTED_MODULE_2__.EMPTY_CART_FEES;

    // Add a text property to the coupon to allow extensions to modify
    // the text used to display the coupon, without affecting the
    // functionality when it comes to removing the coupon.
    const cartCoupons = cartData.coupons.length > 0 ? cartData.coupons.map(coupon => ({
      ...coupon,
      label: coupon.code
    })) : _data__WEBPACK_IMPORTED_MODULE_2__.EMPTY_CART_COUPONS;
    return {
      cartCoupons,
      cartItems: cartData.items,
      crossSellsProducts: cartData.crossSells,
      cartFees,
      cartItemsCount: cartData.itemsCount,
      cartItemsWeight: cartData.itemsWeight,
      cartNeedsPayment: cartData.needsPayment,
      cartNeedsShipping: cartData.needsShipping,
      cartItemErrors: cartData.errors,
      cartTotals,
      cartIsLoading,
      cartErrors,
      billingData: (0,_base_utils__WEBPACK_IMPORTED_MODULE_5__.emptyHiddenAddressFields)(billingAddress),
      billingAddress: (0,_base_utils__WEBPACK_IMPORTED_MODULE_5__.emptyHiddenAddressFields)(billingAddress),
      shippingAddress: (0,_base_utils__WEBPACK_IMPORTED_MODULE_5__.emptyHiddenAddressFields)(shippingAddress),
      extensions: cartData.extensions,
      shippingRates: cartData.shippingRates,
      isLoadingRates,
      cartHasCalculatedShipping: cartData.hasCalculatedShipping,
      paymentRequirements: cartData.paymentRequirements,
      receiveCart,
      receiveCartContents
    };
  }, [shouldSelect]);
  if (!currentResults.current || !fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0___default()(currentResults.current, results)) {
    currentResults.current = results;
  }
  return currentResults.current;
};

/***/ }),

/***/ "./wc_components/js/base/context/hooks/index.js":
/*!******************************************************!*\
  !*** ./wc_components/js/base/context/hooks/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultCartData: () => (/* reexport safe */ _cart__WEBPACK_IMPORTED_MODULE_0__.defaultCartData),
/* harmony export */   useStoreCart: () => (/* reexport safe */ _cart__WEBPACK_IMPORTED_MODULE_0__.useStoreCart),
/* harmony export */   useStoreCartItemQuantity: () => (/* reexport safe */ _cart__WEBPACK_IMPORTED_MODULE_0__.useStoreCartItemQuantity),
/* harmony export */   useStoreEvents: () => (/* reexport safe */ _use_store_events__WEBPACK_IMPORTED_MODULE_1__.useStoreEvents)
/* harmony export */ });
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ "./wc_components/js/base/context/hooks/cart/index.ts");
/* harmony import */ var _use_store_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-store-events */ "./wc_components/js/base/context/hooks/use-store-events.ts");

// export * from './collections';
// export * from './shipping';
// export * from './payment-methods';

// export * from './use-query-state';
// export * from './use-store-products';
// export * from './use-store-add-to-cart';
// export * from './use-customer-data';
// export * from './use-checkout-address';
// export * from './use-checkout-submit';
// export * from './use-checkout-extension-data';
// export * from './use-show-shipping-total-warning';
// export * from './use-validation';

/***/ }),

/***/ "./wc_components/js/base/context/hooks/use-store-events.ts":
/*!*****************************************************************!*\
  !*** ./wc_components/js/base/context/hooks/use-store-events.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStoreEvents: () => (/* binding */ useStoreEvents)
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */



/**
 * Abstraction on top of @wordpress/hooks for dispatching events via doAction for 3rd parties to hook into.
 */
const useStoreEvents = () => {
  const dispatchStoreEvent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)((eventName, eventParams = {}) => {
    try {
      (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.doAction)(`experimental__woocommerce_blocks-${eventName}`, eventParams);
    } catch (e) {
      // We don't handle thrown errors but just console.log for troubleshooting.
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }, []);
  const dispatchCheckoutEvent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)((eventName, eventParams = {}) => {
    try {
      (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.doAction)(`experimental__woocommerce_blocks-checkout-${eventName}`, {
        ...eventParams,
        storeCart: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)('wc/store/cart').getCartData()
      });
    } catch (e) {
      // We don't handle thrown errors but just console.log for troubleshooting.
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }, []);
  return {
    dispatchStoreEvent,
    dispatchCheckoutEvent
  };
};

/***/ }),

/***/ "./wc_components/js/base/context/index.ts":
/*!************************************************!*\
  !*** ./wc_components/js/base/context/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTION: () => (/* reexport safe */ _event_emit__WEBPACK_IMPORTED_MODULE_0__.ACTION),
/* harmony export */   ContainerWidthContextProvider: () => (/* reexport safe */ _providers__WEBPACK_IMPORTED_MODULE_2__.ContainerWidthContextProvider),
/* harmony export */   EditorProvider: () => (/* reexport safe */ _providers__WEBPACK_IMPORTED_MODULE_2__.EditorProvider),
/* harmony export */   actions: () => (/* reexport safe */ _event_emit__WEBPACK_IMPORTED_MODULE_0__.actions),
/* harmony export */   defaultCartData: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.defaultCartData),
/* harmony export */   emitEvent: () => (/* reexport safe */ _event_emit__WEBPACK_IMPORTED_MODULE_0__.emitEvent),
/* harmony export */   emitEventWithAbort: () => (/* reexport safe */ _event_emit__WEBPACK_IMPORTED_MODULE_0__.emitEventWithAbort),
/* harmony export */   emitterCallback: () => (/* reexport safe */ _event_emit__WEBPACK_IMPORTED_MODULE_0__.emitterCallback),
/* harmony export */   generateUniqueId: () => (/* reexport safe */ _event_emit__WEBPACK_IMPORTED_MODULE_0__.generateUniqueId),
/* harmony export */   getObserversByPriority: () => (/* reexport safe */ _event_emit__WEBPACK_IMPORTED_MODULE_0__.getObserversByPriority),
/* harmony export */   isErrorResponse: () => (/* reexport safe */ _event_emit__WEBPACK_IMPORTED_MODULE_0__.isErrorResponse),
/* harmony export */   isFailResponse: () => (/* reexport safe */ _event_emit__WEBPACK_IMPORTED_MODULE_0__.isFailResponse),
/* harmony export */   isSuccessResponse: () => (/* reexport safe */ _event_emit__WEBPACK_IMPORTED_MODULE_0__.isSuccessResponse),
/* harmony export */   noticeContexts: () => (/* reexport safe */ _event_emit__WEBPACK_IMPORTED_MODULE_0__.noticeContexts),
/* harmony export */   reducer: () => (/* reexport safe */ _event_emit__WEBPACK_IMPORTED_MODULE_0__.reducer),
/* harmony export */   responseTypes: () => (/* reexport safe */ _event_emit__WEBPACK_IMPORTED_MODULE_0__.responseTypes),
/* harmony export */   shouldRetry: () => (/* reexport safe */ _event_emit__WEBPACK_IMPORTED_MODULE_0__.shouldRetry),
/* harmony export */   useContainerWidthContext: () => (/* reexport safe */ _providers__WEBPACK_IMPORTED_MODULE_2__.useContainerWidthContext),
/* harmony export */   useEditorContext: () => (/* reexport safe */ _providers__WEBPACK_IMPORTED_MODULE_2__.useEditorContext),
/* harmony export */   useStoreCart: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.useStoreCart),
/* harmony export */   useStoreCartItemQuantity: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.useStoreCartItemQuantity),
/* harmony export */   useStoreEvents: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.useStoreEvents)
/* harmony export */ });
/* harmony import */ var _event_emit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-emit */ "./wc_components/js/base/context/event-emit/index.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks */ "./wc_components/js/base/context/hooks/index.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers */ "./wc_components/js/base/context/providers/index.js");

 //


/***/ }),

/***/ "./wc_components/js/base/context/providers/cart-checkout/checkout-events/event-emit.ts":
/*!*********************************************************************************************!*\
  !*** ./wc_components/js/base/context/providers/cart-checkout/checkout-events/event-emit.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EVENTS: () => (/* binding */ EVENTS),
/* harmony export */   emitEvent: () => (/* reexport safe */ _event_emit__WEBPACK_IMPORTED_MODULE_1__.emitEvent),
/* harmony export */   emitEventWithAbort: () => (/* reexport safe */ _event_emit__WEBPACK_IMPORTED_MODULE_1__.emitEventWithAbort),
/* harmony export */   reducer: () => (/* reexport safe */ _event_emit__WEBPACK_IMPORTED_MODULE_1__.reducer),
/* harmony export */   useEventEmitters: () => (/* binding */ useEventEmitters)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_emit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../event-emit */ "./wc_components/js/base/context/event-emit/index.ts");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


// These events are emitted when the Checkout status is BEFORE_PROCESSING and AFTER_PROCESSING
// to enable third parties to hook into the checkout process
const EVENTS = {
  CHECKOUT_SUCCESS: 'checkout_success',
  CHECKOUT_FAIL: 'checkout_fail',
  CHECKOUT_VALIDATION: 'checkout_validation'
};
/**
 * Receives a reducer dispatcher and returns an object with the
 * various event emitters for the payment processing events.
 *
 * Calling the event registration function with the callback will register it
 * for the event emitter and will return a dispatcher for removing the
 * registered callback (useful for implementation in `useEffect`).
 *
 * @param {Function} observerDispatch The emitter reducer dispatcher.
 * @return {Object} An object with the various payment event emitter registration functions
 */
const useEventEmitters = observerDispatch => {
  const eventEmitters = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    onCheckoutSuccess: (0,_event_emit__WEBPACK_IMPORTED_MODULE_1__.emitterCallback)(EVENTS.CHECKOUT_SUCCESS, observerDispatch),
    onCheckoutFail: (0,_event_emit__WEBPACK_IMPORTED_MODULE_1__.emitterCallback)(EVENTS.CHECKOUT_FAIL, observerDispatch),
    onCheckoutValidation: (0,_event_emit__WEBPACK_IMPORTED_MODULE_1__.emitterCallback)(EVENTS.CHECKOUT_VALIDATION, observerDispatch)
  }), [observerDispatch]);
  return eventEmitters;
};


/***/ }),

/***/ "./wc_components/js/base/context/providers/cart-checkout/payment-events/event-emit.ts":
/*!********************************************************************************************!*\
  !*** ./wc_components/js/base/context/providers/cart-checkout/payment-events/event-emit.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMIT_TYPES: () => (/* binding */ EMIT_TYPES),
/* harmony export */   emitEvent: () => (/* reexport safe */ _event_emit__WEBPACK_IMPORTED_MODULE_1__.emitEvent),
/* harmony export */   emitEventWithAbort: () => (/* reexport safe */ _event_emit__WEBPACK_IMPORTED_MODULE_1__.emitEventWithAbort),
/* harmony export */   reducer: () => (/* reexport safe */ _event_emit__WEBPACK_IMPORTED_MODULE_1__.reducer),
/* harmony export */   useEventEmitters: () => (/* binding */ useEventEmitters)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_emit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../event-emit */ "./wc_components/js/base/context/event-emit/index.ts");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

const EMIT_TYPES = {
  PAYMENT_SETUP: 'payment_setup'
};
/**
 * Receives a reducer dispatcher and returns an object with the
 * various event emitters for the payment processing events.
 *
 * Calling the event registration function with the callback will register it
 * for the event emitter and will return a dispatcher for removing the
 * registered callback (useful for implementation in `useEffect`).
 *
 * @param {Function} observerDispatch The emitter reducer dispatcher.
 * @return {Object} An object with the various payment event emitter registration functions
 */
const useEventEmitters = observerDispatch => {
  const eventEmitters = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    onPaymentSetup: (0,_event_emit__WEBPACK_IMPORTED_MODULE_1__.emitterCallback)(EMIT_TYPES.PAYMENT_SETUP, observerDispatch)
  }), [observerDispatch]);
  return eventEmitters;
};


/***/ }),

/***/ "./wc_components/js/base/context/providers/container-width-context.tsx":
/*!*****************************************************************************!*\
  !*** ./wc_components/js/base/context/providers/container-width-context.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContainerWidthContextProvider: () => (/* binding */ ContainerWidthContextProvider),
/* harmony export */   useContainerWidthContext: () => (/* binding */ useContainerWidthContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks */ "./wc_components/js/base/hooks/index.js");

/**
 * External dependencies
 */
// import React from 'react';


// import { useContainerQueries } from '@woocommerce/base-hooks';



const ContainerWidthContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)({
  // hasContainerWidth: false, /// @todo:  CHECK THIS: bhavik
  hasContainerWidth: true,
  containerClassName: '',
  isMobile: false,
  isSmall: false,
  isMedium: false,
  // isLarge: false, /// @todo:  CHECK THIS: bhavik
  isLarge: true
});
const useContainerWidthContext = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(ContainerWidthContext);
};
/**
 * Provides an interface to useContainerQueries so children can see what size is being used by the
 * container.
 */
const ContainerWidthContextProvider = ({
  children,
  className = ''
}) => {
  const [resizeListener, containerClassName] = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useContainerQueries)();
  console.log(containerClassName);
  const contextValue = {
    hasContainerWidth: containerClassName !== '',
    containerClassName,
    isMobile: containerClassName === 'is-mobile',
    isSmall: containerClassName === 'is-small',
    isMedium: containerClassName === 'is-medium',
    isLarge: containerClassName === 'is-large'
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContainerWidthContext.Provider, {
    value: contextValue
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, containerClassName)
  }, resizeListener, children));
};

/***/ }),

/***/ "./wc_components/js/base/context/providers/editor-context.tsx":
/*!********************************************************************!*\
  !*** ./wc_components/js/base/context/providers/editor-context.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorProvider: () => (/* binding */ EditorProvider),
/* harmony export */   useEditorContext: () => (/* binding */ useEditorContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);

/**
 * External dependencies
 */




const EditorContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)({
  isEditor: false,
  currentPostId: 0,
  currentView: '',
  previewData: {},
  getPreviewData: () => ({})
});
const useEditorContext = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(EditorContext);
};
const EditorProvider = ({
  children,
  currentPostId = 0,
  previewData = {},
  currentView = '',
  isPreview = false
}) => {
  const editingPostId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => currentPostId ? currentPostId : select('core/editor').getCurrentPostId(), [currentPostId]);
  const getPreviewData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(name => {
    if (previewData && name in previewData) {
      return previewData[name];
    }
    return {};
  }, [previewData]);
  const editorData = {
    isEditor: true,
    currentPostId: editingPostId,
    currentView,
    previewData,
    getPreviewData,
    isPreview
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(EditorContext.Provider, {
    value: editorData
  }, children);
};

/***/ }),

/***/ "./wc_components/js/base/context/providers/index.js":
/*!**********************************************************!*\
  !*** ./wc_components/js/base/context/providers/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContainerWidthContextProvider: () => (/* reexport safe */ _container_width_context__WEBPACK_IMPORTED_MODULE_1__.ContainerWidthContextProvider),
/* harmony export */   EditorProvider: () => (/* reexport safe */ _editor_context__WEBPACK_IMPORTED_MODULE_0__.EditorProvider),
/* harmony export */   useContainerWidthContext: () => (/* reexport safe */ _container_width_context__WEBPACK_IMPORTED_MODULE_1__.useContainerWidthContext),
/* harmony export */   useEditorContext: () => (/* reexport safe */ _editor_context__WEBPACK_IMPORTED_MODULE_0__.useEditorContext)
/* harmony export */ });
/* harmony import */ var _editor_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-context */ "./wc_components/js/base/context/providers/editor-context.tsx");
/* harmony import */ var _container_width_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container-width-context */ "./wc_components/js/base/context/providers/container-width-context.tsx");

// export * from './add-to-cart-form';
// export * from './cart-checkout';

// export * from './editor-context';
// export * from './query-state-context';

/***/ }),

/***/ "./wc_components/js/base/hooks/index.js":
/*!**********************************************!*\
  !*** ./wc_components/js/base/hooks/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useContainerQueries: () => (/* reexport safe */ _use_container_queries__WEBPACK_IMPORTED_MODULE_0__.useContainerQueries),
/* harmony export */   usePrevious: () => (/* reexport safe */ _use_previous__WEBPACK_IMPORTED_MODULE_1__.usePrevious),
/* harmony export */   useShallowEqual: () => (/* reexport safe */ _use_shallow_equal__WEBPACK_IMPORTED_MODULE_2__.useShallowEqual)
/* harmony export */ });
/* harmony import */ var _use_container_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-container-queries */ "./wc_components/js/base/hooks/use-container-queries.ts");
/* harmony import */ var _use_previous__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-previous */ "./wc_components/js/base/hooks/use-previous.ts");
/* harmony import */ var _use_shallow_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-shallow-equal */ "./wc_components/js/base/hooks/use-shallow-equal.ts");

// export * from './use-local-storage-state';
// export * from './use-position-relative-to-viewport';


// export * from './use-throw-error';
// export * from './use-typography-props';
// export * from './use-is-mounted';
// export * from './use-spoken-message';
// export * from './use-style-props';

/***/ }),

/***/ "./wc_components/js/base/hooks/use-container-queries.ts":
/*!**************************************************************!*\
  !*** ./wc_components/js/base/hooks/use-container-queries.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useContainerQueries: () => (/* binding */ useContainerQueries)
/* harmony export */ });
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Returns a resizeListener element and a class name based on its width.
 * Class names are based on the smaller of the breakpoints:
 * https://github.com/WordPress/gutenberg/tree/master/packages/viewport#usage
 * Values are also based on those breakpoints minus ~80px which is approximately
 * the left + right margin in Storefront with a font-size of 16px.
 * _Note: `useContainerQueries` will return an empty class name `` until after
 * first render_
 *
 * @return {Array} An array of {Element} `resizeListener` and {string} `className`.
 *
 * @example
 *
 * ```js
 * const App = () => {
 * 	const [ resizeListener, containerClassName ] = useContainerQueries();
 *
 * 	return (
 * 		<div className={ containerClassName }>
 * 			{ resizeListener }
 * 			Your content here
 * 		</div>
 * 	);
 * };
 * ```
 */
const useContainerQueries = () => {
  const [resizeListener, {
    width
  }] = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.useResizeObserver)();
  let className = '';
  if (width > 700) {
    className = 'is-large';
  } else if (width > 520) {
    className = 'is-medium';
  } else if (width > 400) {
    className = 'is-small';
  } else if (width) {
    className = 'is-mobile';
  }
  return [resizeListener, className];
};

/***/ }),

/***/ "./wc_components/js/base/hooks/use-previous.ts":
/*!*****************************************************!*\
  !*** ./wc_components/js/base/hooks/use-previous.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePrevious: () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Use Previous based on https://usehooks.com/useprevious/.
 *
 * @param {*}        value
 * @param {Function} [validation] Function that needs to validate for the value
 *                                to be updated.
 */
function usePrevious(value, validation) {
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (ref.current !== value && (!validation || validation(value, ref.current))) {
      ref.current = value;
    }
  }, [value, validation]);
  return ref.current;
}

/***/ }),

/***/ "./wc_components/js/base/hooks/use-shallow-equal.ts":
/*!**********************************************************!*\
  !*** ./wc_components/js/base/hooks/use-shallow-equal.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useShallowEqual: () => (/* binding */ useShallowEqual)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/is-shallow-equal */ "@wordpress/is-shallow-equal");
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */



/**
 * A custom hook that compares the provided value across renders and returns the
 * previous instance if shallow equality with previous instance exists.
 *
 * This is particularly useful when non-primitive types are used as
 * dependencies for react hooks.
 *
 * @param {*} value Value to keep the same if satisfies shallow equality.
 *
 * @return {*} The previous cached instance of the value if the current has  shallow equality with it.
 */
function useShallowEqual(value) {
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  if (!_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_1___default()(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
}

/***/ }),

/***/ "./wc_components/js/base/utils/address.ts":
/*!************************************************!*\
  !*** ./wc_components/js/base/utils/address.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emptyHiddenAddressFields: () => (/* binding */ emptyHiddenAddressFields),
/* harmony export */   formatShippingAddress: () => (/* binding */ formatShippingAddress),
/* harmony export */   isAddressComplete: () => (/* binding */ isAddressComplete),
/* harmony export */   isSameAddress: () => (/* binding */ isSameAddress),
/* harmony export */   pluckAddress: () => (/* binding */ pluckAddress),
/* harmony export */   pluckEmail: () => (/* binding */ pluckEmail)
/* harmony export */ });
/* harmony import */ var _components_cart_checkout_address_form_prepare_address_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/cart-checkout/address-form/prepare-address-fields */ "./wc_components/js/base/components/cart-checkout/address-form/prepare-address-fields.ts");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../settings/shared */ "./wc_components/js/settings/shared/index.ts");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _settings_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../settings/blocks */ "./wc_components/js/settings/blocks/index.ts");
/**
 * External dependencies
 */
// import prepareAddressFields from '@woocommerce/base-components/cart-checkout/address-form/prepare-address-fields';



// import type {
// 	CartResponseBillingAddress,
// 	CartResponseShippingAddress,
// } from '@woocommerce/types';

// import {
// 	AddressFields,
// 	defaultAddressFields,
// 	ShippingAddress,
// 	BillingAddress,
// } from '@woocommerce/settings';




// import {
// 	SHIPPING_COUNTRIES,
// 	SHIPPING_STATES,
// } from '@woocommerce/block-settings';



/**
 * Compare two addresses and see if they are the same.
 */
const isSameAddress = (address1, address2) => {
  return Object.keys(_settings_shared__WEBPACK_IMPORTED_MODULE_2__.defaultAddressFields).every(field => address1[field] === address2[field]);
};

/**
 * pluckAddress takes a full address object and returns relevant fields for calculating
 * shipping, so we can track when one of them change to update rates.
 *
 * @param {Object} address          An object containing all address information
 * @param {string} address.country  The country.
 * @param {string} address.state    The state.
 * @param {string} address.city     The city.
 * @param {string} address.postcode The postal code.
 *
 * @return {Object} pluckedAddress  An object containing shipping address that are needed to fetch an address.
 */
const pluckAddress = ({
  country = '',
  state = '',
  city = '',
  postcode = ''
}) => ({
  country: country.trim(),
  state: state.trim(),
  city: city.trim(),
  postcode: postcode ? postcode.replace(' ', '').toUpperCase() : ''
});

/**
 * pluckEmail takes a full address object and returns only the email address, if set and valid. Otherwise returns an empty string.
 *
 * @param {Object} address       An object containing all address information
 * @param {string} address.email The email address.
 * @return {string} The email address.
 */
const pluckEmail = ({
  email = ''
}) => (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.isEmail)(email) ? email.trim() : '';

/**
 * Type-guard.
 */
const isValidAddressKey = (key, address) => {
  return key in address;
};

/**
 * Sets fields to an empty string in an address if they are hidden by the settings in countryLocale.
 *
 * @param {Object} address The address to empty fields from.
 * @return {Object} The address with hidden fields values removed.
 */
const emptyHiddenAddressFields = address => {
  const fields = Object.keys(_settings_shared__WEBPACK_IMPORTED_MODULE_2__.defaultAddressFields);
  const addressFields = (0,_components_cart_checkout_address_form_prepare_address_fields__WEBPACK_IMPORTED_MODULE_0__["default"])(fields, {}, address.country);
  const newAddress = Object.assign({}, address);
  addressFields.forEach(({
    key = '',
    hidden = false
  }) => {
    if (hidden && isValidAddressKey(key, address)) {
      newAddress[key] = '';
    }
  });
  return newAddress;
};

/*
 * Formats a shipping address for display.
 *
 * @param {Object} address The address to format.
 * @return {string | null} The formatted address or null if no address is provided.
 */
const formatShippingAddress = address => {
  // We bail early if we don't have an address.
  if (Object.values(address).length === 0) {
    return null;
  }
  const formattedCountry = typeof _settings_blocks__WEBPACK_IMPORTED_MODULE_4__.SHIPPING_COUNTRIES[address.country] === 'string' ? (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(_settings_blocks__WEBPACK_IMPORTED_MODULE_4__.SHIPPING_COUNTRIES[address.country]) : '';
  const formattedState = typeof _settings_blocks__WEBPACK_IMPORTED_MODULE_4__.SHIPPING_STATES[address.country] === 'object' && typeof _settings_blocks__WEBPACK_IMPORTED_MODULE_4__.SHIPPING_STATES[address.country][address.state] === 'string' ? (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(_settings_blocks__WEBPACK_IMPORTED_MODULE_4__.SHIPPING_STATES[address.country][address.state]) : address.state;
  const addressParts = [];
  addressParts.push(address.postcode.toUpperCase());
  addressParts.push(address.city);
  addressParts.push(formattedState);
  addressParts.push(formattedCountry);
  const formattedLocation = addressParts.filter(Boolean).join(', ');
  if (!formattedLocation) {
    return null;
  }
  return formattedLocation;
};

/**
 * Checks that all required fields in an address are completed based on the settings in countryLocale.
 */
const isAddressComplete = address => {
  if (!address.country) {
    return false;
  }
  const fields = Object.keys(_settings_shared__WEBPACK_IMPORTED_MODULE_2__.defaultAddressFields);
  const addressFields = (0,_components_cart_checkout_address_form_prepare_address_fields__WEBPACK_IMPORTED_MODULE_0__["default"])(fields, {}, address.country);
  return addressFields.every(({
    key = '',
    hidden = false,
    required = false
  }) => {
    if (hidden || !required) {
      return true;
    }
    return isValidAddressKey(key, address) && address[key] !== '';
  });
};

/***/ }),

/***/ "./wc_components/js/base/utils/camel-case-keys.ts":
/*!********************************************************!*\
  !*** ./wc_components/js/base/utils/camel-case-keys.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelCaseKeys: () => (/* binding */ camelCaseKeys)
/* harmony export */ });
/* harmony import */ var change_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! change-case */ "./node_modules/camel-case/dist.es2015/index.js");
/* harmony import */ var _map_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-keys */ "./wc_components/js/base/utils/map-keys.ts");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

const camelCaseKeys = obj => (0,_map_keys__WEBPACK_IMPORTED_MODULE_0__.mapKeys)(obj, (_, key) => (0,change_case__WEBPACK_IMPORTED_MODULE_1__.camelCase)(key));

/***/ }),

/***/ "./wc_components/js/base/utils/create-notice.ts":
/*!******************************************************!*\
  !*** ./wc_components/js/base/utils/create-notice.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_ERROR_MESSAGE: () => (/* binding */ DEFAULT_ERROR_MESSAGE),
/* harmony export */   createNotice: () => (/* binding */ createNotice),
/* harmony export */   getNoticeContexts: () => (/* binding */ getNoticeContexts),
/* harmony export */   removeAllNotices: () => (/* binding */ removeAllNotices),
/* harmony export */   removeNoticesWithContext: () => (/* binding */ removeNoticesWithContext)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_event_emit_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/event-emit/utils */ "./wc_components/js/base/context/event-emit/utils.ts");
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

const DEFAULT_ERROR_MESSAGE = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Something went wrong. Please contact us to get assistance.', 'woo-gutenberg-products-block');

/**
 * Returns a list of all notice contexts defined by Blocks.
 *
 * Contexts are defined in enum format, but this returns an array of strings instead.
 */
const getNoticeContexts = () => {
  return Object.values(_context_event_emit_utils__WEBPACK_IMPORTED_MODULE_2__.noticeContexts);
};

/**
 * Wrapper for @wordpress/notices createNotice.
 */
const createNotice = (status, message, options) => {
  const noticeContext = options?.context;
  const suppressNotices = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)('wc/store/payment').isExpressPaymentMethodActive();
  if (suppressNotices || noticeContext === undefined) {
    return;
  }
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)('core/notices').createNotice(status, message, {
    isDismissible: true,
    ...options,
    context: noticeContext
  });
};

/**
 * Remove notices from all contexts.
 *
 * @todo Remove this when supported in Gutenberg.
 * @see https://github.com/WordPress/gutenberg/pull/44059
 */
const removeAllNotices = () => {
  const containers = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)('wc/store/store-notices').getRegisteredContainers();
  const {
    removeNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)('core/notices');
  const {
    getNotices
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)('core/notices');
  containers.forEach(container => {
    getNotices(container).forEach(notice => {
      removeNotice(notice.id, container);
    });
  });
};
const removeNoticesWithContext = context => {
  const {
    removeNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)('core/notices');
  const {
    getNotices
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)('core/notices');
  getNotices(context).forEach(notice => {
    removeNotice(notice.id, context);
  });
};

/***/ }),

/***/ "./wc_components/js/base/utils/debounce.ts":
/*!*************************************************!*\
  !*** ./wc_components/js/base/utils/debounce.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce)
/* harmony export */ });
// eslint-disable-next-line @typescript-eslint/no-explicit-any

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const debounce = (func, wait, immediate) => {
  let timeout;
  let latestArgs = null;
  const debounced = (...args) => {
    latestArgs = args;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate && latestArgs) func(...latestArgs);
    }, wait);
    if (immediate && !timeout) func(...args);
  };
  debounced.flush = () => {
    if (timeout && latestArgs) {
      func(...latestArgs);
      clearTimeout(timeout);
      timeout = null;
    }
  };
  return debounced;
};

/***/ }),

/***/ "./wc_components/js/base/utils/derive-selected-shipping-rates.ts":
/*!***********************************************************************!*\
  !*** ./wc_components/js/base/utils/derive-selected-shipping-rates.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deriveSelectedShippingRates: () => (/* binding */ deriveSelectedShippingRates)
/* harmony export */ });
/**
 * External dependencies
 */

/**
 * Get an array of selected shipping rates keyed by Package ID.
 *
 * @param {Array} shippingRates Array of shipping rates.
 * @return {Object} Object containing the package IDs and selected rates in the format: { [packageId:string]: rateId:string }
 */
const deriveSelectedShippingRates = shippingRates => Object.fromEntries(shippingRates.map(({
  package_id: packageId,
  shipping_rates: packageRates
}) => [packageId, packageRates.find(rate => rate.selected)?.rate_id || '']));

/***/ }),

/***/ "./wc_components/js/base/utils/get-navigation-type.ts":
/*!************************************************************!*\
  !*** ./wc_components/js/base/utils/get-navigation-type.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getNavigationType: () => (/* binding */ getNavigationType)
/* harmony export */ });
/**
 * Returns the navigation type for the page load.
 */
const getNavigationType = () => {
  if (window.performance && window.performance.getEntriesByType('navigation').length) {
    return window.performance.getEntriesByType('navigation')[0].type;
  }
  return '';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNavigationType);

/***/ }),

/***/ "./wc_components/js/base/utils/index.js":
/*!**********************************************!*\
  !*** ./wc_components/js/base/utils/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_ERROR_MESSAGE: () => (/* reexport safe */ _create_notice__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_ERROR_MESSAGE),
/* harmony export */   camelCaseKeys: () => (/* reexport safe */ _camel_case_keys__WEBPACK_IMPORTED_MODULE_6__.camelCaseKeys),
/* harmony export */   createNotice: () => (/* reexport safe */ _create_notice__WEBPACK_IMPORTED_MODULE_4__.createNotice),
/* harmony export */   debounce: () => (/* reexport safe */ _debounce__WEBPACK_IMPORTED_MODULE_7__.debounce),
/* harmony export */   deriveSelectedShippingRates: () => (/* reexport safe */ _derive_selected_shipping_rates__WEBPACK_IMPORTED_MODULE_3__.deriveSelectedShippingRates),
/* harmony export */   dispatchEvent: () => (/* reexport safe */ _legacy_events__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent),
/* harmony export */   emptyHiddenAddressFields: () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_0__.emptyHiddenAddressFields),
/* harmony export */   formatShippingAddress: () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_0__.formatShippingAddress),
/* harmony export */   getNavigationType: () => (/* reexport safe */ _get_navigation_type__WEBPACK_IMPORTED_MODULE_5__.getNavigationType),
/* harmony export */   getNoticeContexts: () => (/* reexport safe */ _create_notice__WEBPACK_IMPORTED_MODULE_4__.getNoticeContexts),
/* harmony export */   getShippingRatesPackageCount: () => (/* reexport safe */ _shipping_rates__WEBPACK_IMPORTED_MODULE_1__.getShippingRatesPackageCount),
/* harmony export */   getShippingRatesRateCount: () => (/* reexport safe */ _shipping_rates__WEBPACK_IMPORTED_MODULE_1__.getShippingRatesRateCount),
/* harmony export */   hasCollectableRate: () => (/* reexport safe */ _shipping_rates__WEBPACK_IMPORTED_MODULE_1__.hasCollectableRate),
/* harmony export */   isAddressComplete: () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_0__.isAddressComplete),
/* harmony export */   isPackageRateCollectable: () => (/* reexport safe */ _shipping_rates__WEBPACK_IMPORTED_MODULE_1__.isPackageRateCollectable),
/* harmony export */   isSameAddress: () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_0__.isSameAddress),
/* harmony export */   pick: () => (/* reexport safe */ _pick__WEBPACK_IMPORTED_MODULE_8__.pick),
/* harmony export */   pluckAddress: () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_0__.pluckAddress),
/* harmony export */   pluckEmail: () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_0__.pluckEmail),
/* harmony export */   removeAllNotices: () => (/* reexport safe */ _create_notice__WEBPACK_IMPORTED_MODULE_4__.removeAllNotices),
/* harmony export */   removeNoticesWithContext: () => (/* reexport safe */ _create_notice__WEBPACK_IMPORTED_MODULE_4__.removeNoticesWithContext),
/* harmony export */   translateJQueryEventToNative: () => (/* reexport safe */ _legacy_events__WEBPACK_IMPORTED_MODULE_2__.translateJQueryEventToNative),
/* harmony export */   triggerAddedToCartEvent: () => (/* reexport safe */ _legacy_events__WEBPACK_IMPORTED_MODULE_2__.triggerAddedToCartEvent),
/* harmony export */   triggerAddingToCartEvent: () => (/* reexport safe */ _legacy_events__WEBPACK_IMPORTED_MODULE_2__.triggerAddingToCartEvent)
/* harmony export */ });
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address */ "./wc_components/js/base/utils/address.ts");
/* harmony import */ var _shipping_rates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipping-rates */ "./wc_components/js/base/utils/shipping-rates.ts");
/* harmony import */ var _legacy_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legacy-events */ "./wc_components/js/base/utils/legacy-events.ts");
/* harmony import */ var _derive_selected_shipping_rates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./derive-selected-shipping-rates */ "./wc_components/js/base/utils/derive-selected-shipping-rates.ts");
/* harmony import */ var _create_notice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-notice */ "./wc_components/js/base/utils/create-notice.ts");
/* harmony import */ var _get_navigation_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-navigation-type */ "./wc_components/js/base/utils/get-navigation-type.ts");
/* harmony import */ var _camel_case_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./camel-case-keys */ "./wc_components/js/base/utils/camel-case-keys.ts");
/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./debounce */ "./wc_components/js/base/utils/debounce.ts");
/* harmony import */ var _pick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pick */ "./wc_components/js/base/utils/pick.ts");
// export * from './errors';



// export * from './render-frontend';
// export * from './get-valid-block-attributes';
// export * from './product-data';

// export * from './get-icons-from-payment-methods';


// export * from './map-keys';

// export * from './snake-case-keys';

// export * from './keyby';

// export * from './get-inline-styles';

/***/ }),

/***/ "./wc_components/js/base/utils/legacy-events.ts":
/*!******************************************************!*\
  !*** ./wc_components/js/base/utils/legacy-events.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dispatchEvent: () => (/* binding */ dispatchEvent),
/* harmony export */   translateJQueryEventToNative: () => (/* binding */ translateJQueryEventToNative),
/* harmony export */   triggerAddedToCartEvent: () => (/* binding */ triggerAddedToCartEvent),
/* harmony export */   triggerAddingToCartEvent: () => (/* binding */ triggerAddingToCartEvent)
/* harmony export */ });
/**
 * External dependencies
 */

const CustomEvent = window.CustomEvent || null;
/**
 * Wrapper function to dispatch an event.
 */
const dispatchEvent = (name, {
  bubbles = false,
  cancelable = false,
  element,
  detail = {}
}) => {
  if (!CustomEvent) {
    return;
  }
  if (!element) {
    element = document.body;
  }
  const event = new CustomEvent(name, {
    bubbles,
    cancelable,
    detail
  });
  element.dispatchEvent(event);
};
const triggerAddingToCartEvent = () => {
  dispatchEvent('wc-blocks_adding_to_cart', {
    bubbles: true,
    cancelable: true
  });
};
const triggerAddedToCartEvent = ({
  preserveCartData = false
}) => {
  dispatchEvent('wc-blocks_added_to_cart', {
    bubbles: true,
    cancelable: true,
    detail: {
      preserveCartData
    }
  });
};

/**
 * Function that listens to a jQuery event and dispatches a native JS event.
 * Useful to convert WC Core events into events that can be read by blocks.
 *
 * Returns a function to remove the jQuery event handler. Ideally it should be
 * used when the component is unmounted.
 */
const translateJQueryEventToNative = (jQueryEventName, nativeEventName,
// Whether the event bubbles.
bubbles = false,
// Whether the event is cancelable.
cancelable = false) => {
  if (typeof jQuery !== 'function') {
    return () => void null;
  }
  const eventDispatcher = () => {
    dispatchEvent(nativeEventName, {
      bubbles,
      cancelable
    });
  };
  jQuery(document).on(jQueryEventName, eventDispatcher);
  return () => jQuery(document).off(jQueryEventName, eventDispatcher);
};

/***/ }),

/***/ "./wc_components/js/base/utils/map-keys.ts":
/*!*************************************************!*\
  !*** ./wc_components/js/base/utils/map-keys.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapKeys: () => (/* binding */ mapKeys)
/* harmony export */ });
const mapKeys = (obj, mapper) => Object.entries(obj).reduce((acc, [key, value]) => ({
  ...acc,
  [mapper(value, key)]: value
}), {});

/***/ }),

/***/ "./wc_components/js/base/utils/pick.ts":
/*!*********************************************!*\
  !*** ./wc_components/js/base/utils/pick.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pick: () => (/* binding */ pick)
/* harmony export */ });
/**
 * Creates an object composed of the picked object properties.
 */
const pick = (object, keys) => {
  return keys.reduce((obj, key) => {
    if (object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

/***/ }),

/***/ "./wc_components/js/base/utils/shipping-rates.ts":
/*!*******************************************************!*\
  !*** ./wc_components/js/base/utils/shipping-rates.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getShippingRatesPackageCount: () => (/* binding */ getShippingRatesPackageCount),
/* harmony export */   getShippingRatesRateCount: () => (/* binding */ getShippingRatesRateCount),
/* harmony export */   hasCollectableRate: () => (/* binding */ hasCollectableRate),
/* harmony export */   isPackageRateCollectable: () => (/* binding */ isPackageRateCollectable)
/* harmony export */ });
/* harmony import */ var _settings_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../settings/shared */ "./wc_components/js/settings/shared/index.ts");
/* harmony import */ var _settings_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../settings/blocks */ "./wc_components/js/settings/blocks/index.ts");
/**
 * External dependencies
 */
// import {
// 	CartShippingPackageShippingRate,
// 	CartShippingRate,
// } from '@woocommerce/type-defs/cart';

// import { getSetting } from '@woocommerce/settings';


// import { LOCAL_PICKUP_ENABLED } from '@woocommerce/block-settings';


/**
 * Get the number of packages in a shippingRates array.
 *
 * @param {Array} shippingRates Shipping rates and packages array.
 */
const getShippingRatesPackageCount = shippingRates => {
  return shippingRates.length;
};
const collectableMethodIds = (0,_settings_shared__WEBPACK_IMPORTED_MODULE_0__.getSetting)('collectableMethodIds', []);

/**
 * If the package rate's method_id is in the collectableMethodIds array, return true.
 */
const isPackageRateCollectable = rate => collectableMethodIds.includes(rate.method_id);

/**
 * Check if the specified rates are collectable. Accepts either an array of rate names, or a single string.
 */
const hasCollectableRate = chosenRates => {
  if (!_settings_blocks__WEBPACK_IMPORTED_MODULE_1__.LOCAL_PICKUP_ENABLED) {
    return false;
  }
  if (Array.isArray(chosenRates)) {
    return !!chosenRates.find(rate => collectableMethodIds.includes(rate));
  }
  return collectableMethodIds.includes(chosenRates);
};
/**
 * Get the number of rates in a shippingRates array.
 *
 * @param {Array} shippingRates Shipping rates and packages array.
 */
const getShippingRatesRateCount = shippingRates => {
  return shippingRates.reduce(function (count, shippingPackage) {
    return count + shippingPackage.shipping_rates.length;
  }, 0);
};

/***/ }),

/***/ "./wc_components/js/blocks-registry/payment-methods/assertions.ts":
/*!************************************************************************!*\
  !*** ./wc_components/js/blocks-registry/payment-methods/assertions.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertConfigHasProperties: () => (/* binding */ assertConfigHasProperties),
/* harmony export */   assertValidElement: () => (/* binding */ assertValidElement),
/* harmony export */   assertValidElementOrString: () => (/* binding */ assertValidElementOrString),
/* harmony export */   assertValidPaymentMethodComponent: () => (/* binding */ assertValidPaymentMethodComponent)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

const assertValidPaymentMethodComponent = (component, componentName) => {
  if (typeof component !== 'function') {
    throw new TypeError(`The ${componentName} property for the payment method must be a functional component`);
  }
};
const assertValidElement = (element, elementName) => {
  if (element !== null && !(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element)) {
    throw new TypeError(`The ${elementName} property for the payment method must be a React element or null.`);
  }
};
const assertValidElementOrString = (element, elementName) => {
  if (element !== null && !(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element) && typeof element !== 'string') {
    throw new TypeError(`The ${elementName} property for the payment method must be a React element, a string, or null.`);
  }
};
const assertConfigHasProperties = (config, expectedProperties = []) => {
  const missingProperties = expectedProperties.reduce((acc, property) => {
    if (!config.hasOwnProperty(property)) {
      acc.push(property);
    }
    return acc;
  }, []);
  if (missingProperties.length > 0) {
    const message = 'The payment method configuration object is missing the following properties:';
    throw new TypeError(message + missingProperties.join(', '));
  }
};

/***/ }),

/***/ "./wc_components/js/blocks-registry/payment-methods/express-payment-method-config.ts":
/*!*******************************************************************************************!*\
  !*** ./wc_components/js/blocks-registry/payment-methods/express-payment-method-config.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExpressPaymentMethodConfig)
/* harmony export */ });
/* harmony import */ var _payment_method_config_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-method-config-helper */ "./wc_components/js/blocks-registry/payment-methods/payment-method-config-helper.ts");
/* harmony import */ var _assertions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertions */ "./wc_components/js/blocks-registry/payment-methods/assertions.ts");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


class ExpressPaymentMethodConfig {
  constructor(config) {
    // validate config
    ExpressPaymentMethodConfig.assertValidConfig(config);
    this.name = config.name;
    this.content = config.content;
    this.edit = config.edit;
    this.paymentMethodId = config.paymentMethodId || this.name;
    this.supports = {
      features: config?.supports?.features || ['products']
    };
    this.canMakePaymentFromConfig = config.canMakePayment;
  }

  // canMakePayment is calculated each time based on data that modifies outside of the class (eg: cart data).
  get canMakePayment() {
    return (0,_payment_method_config_helper__WEBPACK_IMPORTED_MODULE_0__.getCanMakePayment)(this.canMakePaymentFromConfig, this.supports.features, this.name);
  }
  static assertValidConfig = config => {
    (0,_assertions__WEBPACK_IMPORTED_MODULE_1__.assertConfigHasProperties)(config, ['name', 'content', 'edit']);
    if (typeof config.name !== 'string') {
      throw new TypeError('The name property for the express payment method must be a string');
    }
    if (typeof config.paymentMethodId !== 'string' && typeof config.paymentMethodId !== 'undefined') {
      throw new Error('The paymentMethodId property for the payment method must be a string or undefined (in which case it will be the value of the name property).');
    }
    if (typeof config.supports?.features !== 'undefined' && !Array.isArray(config.supports?.features)) {
      throw new Error('The features property for the payment method must be an array or undefined.');
    }
    (0,_assertions__WEBPACK_IMPORTED_MODULE_1__.assertValidElement)(config.content, 'content');
    (0,_assertions__WEBPACK_IMPORTED_MODULE_1__.assertValidElement)(config.edit, 'edit');
    if (typeof config.canMakePayment !== 'function') {
      throw new TypeError('The canMakePayment property for the express payment method must be a function.');
    }
  };
}

/***/ }),

/***/ "./wc_components/js/blocks-registry/payment-methods/extensions-config.ts":
/*!*******************************************************************************!*\
  !*** ./wc_components/js/blocks-registry/payment-methods/extensions-config.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canMakePaymentExtensionsCallbacks: () => (/* binding */ canMakePaymentExtensionsCallbacks),
/* harmony export */   extensionsConfig: () => (/* binding */ extensionsConfig)
/* harmony export */ });
/**
 * External dependencies
 */

// Keeps callbacks registered by extensions for different payment methods
//  eslint-disable-next-line prefer-const
const canMakePaymentExtensionsCallbacks = {};
const extensionsConfig = {
  canMakePayment: canMakePaymentExtensionsCallbacks
};

/***/ }),

/***/ "./wc_components/js/blocks-registry/payment-methods/payment-method-config-helper.ts":
/*!******************************************************************************************!*\
  !*** ./wc_components/js/blocks-registry/payment-methods/payment-method-config-helper.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canMakePaymentWithExtensions: () => (/* binding */ canMakePaymentWithExtensions),
/* harmony export */   canMakePaymentWithFeaturesCheck: () => (/* binding */ canMakePaymentWithFeaturesCheck),
/* harmony export */   getCanMakePayment: () => (/* binding */ getCanMakePayment)
/* harmony export */ });
/* harmony import */ var _extensions_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extensions-config */ "./wc_components/js/blocks-registry/payment-methods/extensions-config.ts");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


// Filter out payment methods by supported features and cart requirement.
const canMakePaymentWithFeaturesCheck = (canMakePayment, features) => canPayArgument => {
  const requirements = canPayArgument?.paymentRequirements || [];
  const featuresSupportRequirements = requirements.every(requirement => features.includes(requirement));
  return featuresSupportRequirements && canMakePayment(canPayArgument);
};

// Filter out payment methods by callbacks registered by extensions.
const canMakePaymentWithExtensions = (canMakePayment, extensionsCallbacks, paymentMethodName) => canPayArgument => {
  // Validate whether the payment method is available based on its own criteria first.
  let canPay = canMakePayment(canPayArgument);
  if (canPay) {
    // Gather all callbacks for paymentMethodName.
    const namespacedCallbacks = {};
    Object.entries(extensionsCallbacks).forEach(([namespace, callbacks]) => {
      if (!(paymentMethodName in callbacks) || typeof callbacks[paymentMethodName] !== 'function') {
        return;
      }
      namespacedCallbacks[namespace] = callbacks[paymentMethodName];
    });
    canPay = Object.keys(namespacedCallbacks).every(namespace => {
      try {
        return namespacedCallbacks[namespace](canPayArgument);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(`Error when executing callback for ${paymentMethodName} in ${namespace}`, err);
        // .every() expects a return value at the end of every arrow function and
        // this ensures that the error is ignored when computing the whole result.
        return true;
      }
    });
  }
  return canPay;
};
const getCanMakePayment = (canMakePayment, features, paymentMethodName) => {
  const canPay = canMakePaymentWithFeaturesCheck(canMakePayment, features);
  // Loop through all callbacks to check if there are any registered for this payment method.
  return Object.values(_extensions_config__WEBPACK_IMPORTED_MODULE_0__.extensionsConfig.canMakePayment).some(callbacks => paymentMethodName in callbacks) ? canMakePaymentWithExtensions(canPay, _extensions_config__WEBPACK_IMPORTED_MODULE_0__.extensionsConfig.canMakePayment, paymentMethodName) : canPay;
};

/***/ }),

/***/ "./wc_components/js/blocks-registry/payment-methods/payment-method-config.tsx":
/*!************************************************************************************!*\
  !*** ./wc_components/js/blocks-registry/payment-methods/payment-method-config.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PaymentMethodConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _payment_method_config_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-method-config-helper */ "./wc_components/js/blocks-registry/payment-methods/payment-method-config-helper.ts");
/* harmony import */ var _assertions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assertions */ "./wc_components/js/blocks-registry/payment-methods/assertions.ts");

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


const NullComponent = () => {
  return null;
};
class PaymentMethodConfig {
  constructor(config) {
    // validate config
    PaymentMethodConfig.assertValidConfig(config);
    this.name = config.name;
    this.label = config.label;
    this.placeOrderButtonLabel = config.placeOrderButtonLabel;
    this.ariaLabel = config.ariaLabel;
    this.content = config.content;
    this.savedTokenComponent = config.savedTokenComponent;
    this.icons = config.icons || null;
    this.edit = config.edit;
    this.paymentMethodId = config.paymentMethodId || this.name;
    this.supports = {
      showSavedCards: config?.supports?.showSavedCards || config?.supports?.savePaymentInfo ||
      // Kept for backward compatibility if methods still pass this when registering.
      false,
      showSaveOption: config?.supports?.showSaveOption || false,
      features: config?.supports?.features || ['products']
    };
    this.canMakePaymentFromConfig = config.canMakePayment;
  }

  // canMakePayment is calculated each time based on data that modifies outside of the class (eg: cart data).
  get canMakePayment() {
    return (0,_payment_method_config_helper__WEBPACK_IMPORTED_MODULE_2__.getCanMakePayment)(this.canMakePaymentFromConfig, this.supports.features, this.name);
  }
  static assertValidConfig = config => {
    // set default for optional
    config.savedTokenComponent = config.savedTokenComponent || (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(NullComponent, null);
    (0,_assertions__WEBPACK_IMPORTED_MODULE_3__.assertConfigHasProperties)(config, ['name', 'label', 'ariaLabel', 'content', 'edit', 'canMakePayment']);
    if (typeof config.name !== 'string') {
      throw new Error('The name property for the payment method must be a string');
    }
    if (typeof config.icons !== 'undefined' && !Array.isArray(config.icons) && config.icons !== null) {
      throw new Error('The icons property for the payment method must be an array or null.');
    }
    if (typeof config.paymentMethodId !== 'string' && typeof config.paymentMethodId !== 'undefined') {
      throw new Error('The paymentMethodId property for the payment method must be a string or undefined (in which case it will be the value of the name property).');
    }
    if (typeof config.placeOrderButtonLabel !== 'string' && typeof config.placeOrderButtonLabel !== 'undefined') {
      throw new TypeError('The placeOrderButtonLabel property for the payment method must be a string');
    }
    (0,_assertions__WEBPACK_IMPORTED_MODULE_3__.assertValidElementOrString)(config.label, 'label');
    (0,_assertions__WEBPACK_IMPORTED_MODULE_3__.assertValidElement)(config.content, 'content');
    (0,_assertions__WEBPACK_IMPORTED_MODULE_3__.assertValidElement)(config.edit, 'edit');
    (0,_assertions__WEBPACK_IMPORTED_MODULE_3__.assertValidElement)(config.savedTokenComponent, 'savedTokenComponent');
    if (typeof config.ariaLabel !== 'string') {
      throw new TypeError('The ariaLabel property for the payment method must be a string');
    }
    if (typeof config.canMakePayment !== 'function') {
      throw new TypeError('The canMakePayment property for the payment method must be a function.');
    }
    if (typeof config.supports?.showSavedCards !== 'undefined' && typeof config.supports?.showSavedCards !== 'boolean') {
      throw new TypeError('If the payment method includes the `supports.showSavedCards` property, it must be a boolean');
    }
    if (typeof config.supports?.savePaymentInfo !== 'undefined') {
      _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default()('Passing savePaymentInfo when registering a payment method.', {
        alternative: 'Pass showSavedCards and showSaveOption',
        plugin: 'woocommerce-gutenberg-products-block',
        link: 'https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/3686'
      });
    }
    if (typeof config.supports?.features !== 'undefined' && !Array.isArray(config.supports?.features)) {
      throw new Error('The features property for the payment method must be an array or undefined.');
    }
    if (typeof config.supports?.showSaveOption !== 'undefined' && typeof config.supports?.showSaveOption !== 'boolean') {
      throw new TypeError('If the payment method includes the `supports.showSaveOption` property, it must be a boolean');
    }
  };
}

/***/ }),

/***/ "./wc_components/js/blocks-registry/payment-methods/registry.ts":
/*!**********************************************************************!*\
  !*** ./wc_components/js/blocks-registry/payment-methods/registry.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __experimentalDeRegisterExpressPaymentMethod: () => (/* binding */ __experimentalDeRegisterExpressPaymentMethod),
/* harmony export */   __experimentalDeRegisterPaymentMethod: () => (/* binding */ __experimentalDeRegisterPaymentMethod),
/* harmony export */   getExpressPaymentMethods: () => (/* binding */ getExpressPaymentMethods),
/* harmony export */   getPaymentMethods: () => (/* binding */ getPaymentMethods),
/* harmony export */   registerExpressPaymentMethod: () => (/* binding */ registerExpressPaymentMethod),
/* harmony export */   registerPaymentMethod: () => (/* binding */ registerPaymentMethod),
/* harmony export */   registerPaymentMethodExtensionCallbacks: () => (/* binding */ registerPaymentMethodExtensionCallbacks)
/* harmony export */ });
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _payment_method_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-method-config */ "./wc_components/js/blocks-registry/payment-methods/payment-method-config.tsx");
/* harmony import */ var _express_payment_method_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./express-payment-method-config */ "./wc_components/js/blocks-registry/payment-methods/express-payment-method-config.ts");
/* harmony import */ var _extensions_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extensions-config */ "./wc_components/js/blocks-registry/payment-methods/extensions-config.ts");
/* harmony import */ var _data_payment_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/payment/constants */ "./wc_components/js/data/payment/constants.ts");
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



 // Full path here because otherwise there's a circular dependency.

const paymentMethods = {};
const expressPaymentMethods = {};

/**
 * Register a regular payment method.
 */
const registerPaymentMethod = options => {
  let paymentMethodConfig;
  if (typeof options === 'function') {
    // Legacy fallback for previous API, where client passes a function:
    // registerPaymentMethod( ( Config ) => new Config( options ) );
    paymentMethodConfig = options(_payment_method_config__WEBPACK_IMPORTED_MODULE_2__["default"]);
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default()('Passing a callback to registerPaymentMethod()', {
      alternative: 'a config options object',
      plugin: 'woocommerce-gutenberg-products-block',
      link: 'https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/3404'
    });
  } else {
    paymentMethodConfig = new _payment_method_config__WEBPACK_IMPORTED_MODULE_2__["default"](options);
  }
  if (paymentMethodConfig instanceof _payment_method_config__WEBPACK_IMPORTED_MODULE_2__["default"]) {
    paymentMethods[paymentMethodConfig.name] = paymentMethodConfig;
  }
};

/**
 * Register an express payment method.
 */
const registerExpressPaymentMethod = options => {
  let paymentMethodConfig;
  if (typeof options === 'function') {
    // Legacy fallback for previous API, where client passes a function:
    // registerExpressPaymentMethod( ( Config ) => new Config( options ) );
    paymentMethodConfig = options(_express_payment_method_config__WEBPACK_IMPORTED_MODULE_3__["default"]);
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default()('Passing a callback to registerExpressPaymentMethod()', {
      alternative: 'a config options object',
      plugin: 'woocommerce-gutenberg-products-block',
      link: 'https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/3404'
    });
  } else {
    paymentMethodConfig = new _express_payment_method_config__WEBPACK_IMPORTED_MODULE_3__["default"](options);
  }
  if (paymentMethodConfig instanceof _express_payment_method_config__WEBPACK_IMPORTED_MODULE_3__["default"]) {
    expressPaymentMethods[paymentMethodConfig.name] = paymentMethodConfig;
  }
};

/**
 * Allows extension to register callbacks for specific payment methods to determine if they can make payments
 */
const registerPaymentMethodExtensionCallbacks = (namespace, callbacks) => {
  if (_extensions_config__WEBPACK_IMPORTED_MODULE_4__.canMakePaymentExtensionsCallbacks[namespace]) {
    // eslint-disable-next-line no-console
    console.error(`The namespace provided to registerPaymentMethodExtensionCallbacks must be unique. Callbacks have already been registered for the ${namespace} namespace.`);
  } else {
    // Set namespace up as an empty object.
    _extensions_config__WEBPACK_IMPORTED_MODULE_4__.canMakePaymentExtensionsCallbacks[namespace] = {};
    Object.entries(callbacks).forEach(([paymentMethodName, callback]) => {
      if (typeof callback === 'function') {
        _extensions_config__WEBPACK_IMPORTED_MODULE_4__.canMakePaymentExtensionsCallbacks[namespace][paymentMethodName] = callback;
      } else {
        // eslint-disable-next-line no-console
        console.error(`All callbacks provided to registerPaymentMethodExtensionCallbacks must be functions. The callback for the ${paymentMethodName} payment method in the ${namespace} namespace was not a function.`);
      }
    });
  }
};
const __experimentalDeRegisterPaymentMethod = paymentMethodName => {
  delete paymentMethods[paymentMethodName];
  const {
    __internalRemoveAvailablePaymentMethod
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(_data_payment_constants__WEBPACK_IMPORTED_MODULE_5__.STORE_KEY);
  __internalRemoveAvailablePaymentMethod(paymentMethodName);
};
const __experimentalDeRegisterExpressPaymentMethod = paymentMethodName => {
  delete expressPaymentMethods[paymentMethodName];
  const {
    __internalRemoveAvailableExpressPaymentMethod
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(_data_payment_constants__WEBPACK_IMPORTED_MODULE_5__.STORE_KEY);
  __internalRemoveAvailableExpressPaymentMethod(paymentMethodName);
};
const getPaymentMethods = () => {
  return paymentMethods;
};
const getExpressPaymentMethods = () => {
  return expressPaymentMethods;
};

/***/ }),

/***/ "./wc_components/js/data/cart/action-types.ts":
/*!****************************************************!*\
  !*** ./wc_components/js/data/cart/action-types.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTION_TYPES: () => (/* binding */ ACTION_TYPES)
/* harmony export */ });
const ACTION_TYPES = {
  SET_CART_DATA: 'SET_CART_DATA',
  SET_FULL_SHIPPING_ADDRESS_PUSHED: 'SET_FULL_SHIPPING_ADDRESS_PUSHED',
  SET_ERROR_DATA: 'SET_ERROR_DATA',
  APPLYING_COUPON: 'APPLYING_COUPON',
  REMOVING_COUPON: 'REMOVING_COUPON',
  RECEIVE_CART_ITEM: 'RECEIVE_CART_ITEM',
  ITEM_PENDING_QUANTITY: 'ITEM_PENDING_QUANTITY',
  SET_IS_CART_DATA_STALE: 'SET_IS_CART_DATA_STALE',
  RECEIVE_REMOVED_ITEM: 'RECEIVE_REMOVED_ITEM',
  UPDATING_CUSTOMER_DATA: 'UPDATING_CUSTOMER_DATA',
  SET_BILLING_ADDRESS: 'SET_BILLING_ADDRESS',
  SET_SHIPPING_ADDRESS: 'SET_SHIPPING_ADDRESS',
  UPDATING_SELECTED_SHIPPING_RATE: 'UPDATING_SELECTED_SHIPPING_RATE',
  TRIGGER_ADDING_TO_CART_EVENT: 'TRIGGER_ADDING_TO_CART_EVENT',
  TRIGGER_ADDED_TO_CART_EVENT: 'TRIGGER_ADDED_TO_CART_EVENT'
};

/***/ }),

/***/ "./wc_components/js/data/cart/actions.ts":
/*!***********************************************!*\
  !*** ./wc_components/js/data/cart/actions.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addItemToCart: () => (/* binding */ addItemToCart),
/* harmony export */   applyCoupon: () => (/* binding */ applyCoupon),
/* harmony export */   applyExtensionCartUpdate: () => (/* binding */ applyExtensionCartUpdate),
/* harmony export */   changeCartItemQuantity: () => (/* binding */ changeCartItemQuantity),
/* harmony export */   itemIsPendingDelete: () => (/* binding */ itemIsPendingDelete),
/* harmony export */   itemIsPendingQuantity: () => (/* binding */ itemIsPendingQuantity),
/* harmony export */   receiveApplyingCoupon: () => (/* binding */ receiveApplyingCoupon),
/* harmony export */   receiveCart: () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_3__.receiveCart),
/* harmony export */   receiveCartContents: () => (/* binding */ receiveCartContents),
/* harmony export */   receiveCartItem: () => (/* binding */ receiveCartItem),
/* harmony export */   receiveError: () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_3__.receiveError),
/* harmony export */   receiveRemovingCoupon: () => (/* binding */ receiveRemovingCoupon),
/* harmony export */   removeCoupon: () => (/* binding */ removeCoupon),
/* harmony export */   removeItemFromCart: () => (/* binding */ removeItemFromCart),
/* harmony export */   selectShippingRate: () => (/* binding */ selectShippingRate),
/* harmony export */   setBillingAddress: () => (/* binding */ setBillingAddress),
/* harmony export */   setCartData: () => (/* binding */ setCartData),
/* harmony export */   setErrorData: () => (/* binding */ setErrorData),
/* harmony export */   setIsCartDataStale: () => (/* binding */ setIsCartDataStale),
/* harmony export */   setShippingAddress: () => (/* binding */ setShippingAddress),
/* harmony export */   shippingRatesBeingSelected: () => (/* binding */ shippingRatesBeingSelected),
/* harmony export */   updateCustomerData: () => (/* binding */ updateCustomerData),
/* harmony export */   updatingCustomerData: () => (/* binding */ updatingCustomerData)
/* harmony export */ });
/* harmony import */ var _base_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/utils */ "./wc_components/js/base/utils/index.js");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-types */ "./wc_components/js/data/cart/action-types.ts");
/* harmony import */ var _shared_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-controls */ "./wc_components/js/data/shared-controls.ts");
/* harmony import */ var _thunks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thunks */ "./wc_components/js/data/cart/thunks.ts");
/**
 * External dependencies
 */
// import type {
// 	Cart,
// 	CartResponse,
// 	CartResponseItem,
// 	ExtensionCartUpdateArgs,
// 	BillingAddressShippingAddress,
// 	ApiErrorResponse,
// 	CartShippingPackageShippingRate,
// 	CartShippingRate,
// } from '@woocommerce/types';

// import { BillingAddress, ShippingAddress } from '@woocommerce/settings';

// import {
// 	triggerAddedToCartEvent,
// 	triggerAddingToCartEvent,
// 	camelCaseKeys,
// } from '@woocommerce/base-utils';



/**
 * Internal dependencies
 */


// Thunks are functions that can be dispatched, similar to actions creators
// @todo Many of the functions that return promises in this file need to be moved to thunks.ts.


/**
 * An action creator that dispatches the plain action responsible for setting the cart data in the store.
 *
 * @param  cart the parsed cart object. (Parsed into camelCase).
 */
const setCartData = cart => {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPES.SET_CART_DATA,
    response: cart
  };
};

/**
 * An action creator that dispatches the plain action responsible for setting the cart error data in the store.
 *
 * @param  error the parsed error object (Parsed into camelCase).
 */
const setErrorData = error => {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPES.SET_ERROR_DATA,
    error
  };
};

/**
 * Returns an action object used in updating the store with the provided cart.
 *
 * This omits the customer addresses so that only updates to cart items and totals are received. This is useful when
 * currently editing address information to prevent it being overwritten from the server.
 *
 * This is a generic response action.
 *
 * @param {CartResponse} response
 */
const receiveCartContents = response => {
  const cart = (0,_base_utils__WEBPACK_IMPORTED_MODULE_0__.camelCaseKeys)(response);
  const {
    shippingAddress,
    billingAddress,
    ...cartWithoutAddress
  } = cart;
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPES.SET_CART_DATA,
    response: cartWithoutAddress
  };
};

/**
 * Returns an action object used to track when a coupon is applying.
 *
 * @param {string} [couponCode] Coupon being added.
 */
const receiveApplyingCoupon = couponCode => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPES.APPLYING_COUPON,
  couponCode
});

/**
 * Returns an action object used to track when a coupon is removing.
 *
 * @param {string} [couponCode] Coupon being removed..
 */
const receiveRemovingCoupon = couponCode => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPES.REMOVING_COUPON,
  couponCode
});

/**
 * Returns an action object for updating a single cart item in the store.
 *
 * @param {CartResponseItem} [response=null] A cart item API response.
 */
const receiveCartItem = (response = null) => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPES.RECEIVE_CART_ITEM,
  cartItem: response
});

/**
 * Returns an action object to indicate if the specified cart item quantity is
 * being updated.
 *
 * @param {string}  cartItemKey              Cart item being updated.
 * @param {boolean} [isPendingQuantity=true] Flag for update state; true if API
 *                                           request is pending.
 */
const itemIsPendingQuantity = (cartItemKey, isPendingQuantity = true) => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPES.ITEM_PENDING_QUANTITY,
  cartItemKey,
  isPendingQuantity
});

/**
 * Returns an action object to remove a cart item from the store.
 *
 * @param {string}  cartItemKey            Cart item to remove.
 * @param {boolean} [isPendingDelete=true] Flag for update state; true if API
 *                                         request is pending.
 */
const itemIsPendingDelete = (cartItemKey, isPendingDelete = true) => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPES.RECEIVE_REMOVED_ITEM,
  cartItemKey,
  isPendingDelete
});

/**
 * Returns an action object to mark the cart data in the store as stale.
 *
 * @param {boolean} [isCartDataStale=true] Flag to mark cart data as stale; true if
 *                                         lastCartUpdate timestamp is newer than the
 *                                         one in wcSettings.
 */
const setIsCartDataStale = (isCartDataStale = true) => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPES.SET_IS_CART_DATA_STALE,
  isCartDataStale
});

/**
 * Returns an action object used to track when customer data is being updated
 * (billing and/or shipping).
 */
const updatingCustomerData = isResolving => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPES.UPDATING_CUSTOMER_DATA,
  isResolving
});

/**
 * Returns an action object used to track whether the shipping rate is being
 * selected or not.
 *
 * @param {boolean} isResolving True if shipping rate is being selected.
 */
const shippingRatesBeingSelected = isResolving => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPES.UPDATING_SELECTED_SHIPPING_RATE,
  isResolving
});

/**
 * POSTs to the /cart/extensions endpoint with the data supplied by the extension.
 *
 * @param {Object} args The data to be posted to the endpoint
 */
const applyExtensionCartUpdate = args => async ({
  dispatch
}) => {
  try {
    const {
      response
    } = await (0,_shared_controls__WEBPACK_IMPORTED_MODULE_2__.apiFetchWithHeaders)({
      path: '/wc/store/v1/cart/extensions',
      method: 'POST',
      data: {
        namespace: args.namespace,
        data: args.data
      },
      cache: 'no-store'
    });
    dispatch.receiveCart(response);
    return response;
  } catch (error) {
    dispatch.receiveError(error);
    return Promise.reject(error);
  }
};

/**
 * Applies a coupon code and either invalidates caches, or receives an error if
 * the coupon cannot be applied.
 *
 * @param {string} couponCode The coupon code to apply to the cart.
 * @throws            Will throw an error if there is an API problem.
 */
const applyCoupon = couponCode => async ({
  dispatch
}) => {
  try {
    dispatch.receiveApplyingCoupon(couponCode);
    const {
      response
    } = await (0,_shared_controls__WEBPACK_IMPORTED_MODULE_2__.apiFetchWithHeaders)({
      path: '/wc/store/v1/cart/apply-coupon',
      method: 'POST',
      data: {
        code: couponCode
      },
      cache: 'no-store'
    });
    dispatch.receiveCart(response);
    return response;
  } catch (error) {
    dispatch.receiveError(error);
    return Promise.reject(error);
  } finally {
    dispatch.receiveApplyingCoupon('');
  }
};

/**
 * Removes a coupon code and either invalidates caches, or receives an error if
 * the coupon cannot be removed.
 *
 * @param {string} couponCode The coupon code to remove from the cart.
 * @throws            Will throw an error if there is an API problem.
 */
const removeCoupon = couponCode => async ({
  dispatch
}) => {
  try {
    dispatch.receiveRemovingCoupon(couponCode);
    const {
      response
    } = await (0,_shared_controls__WEBPACK_IMPORTED_MODULE_2__.apiFetchWithHeaders)({
      path: '/wc/store/v1/cart/remove-coupon',
      method: 'POST',
      data: {
        code: couponCode
      },
      cache: 'no-store'
    });
    dispatch.receiveCart(response);
    return response;
  } catch (error) {
    dispatch.receiveError(error);
    return Promise.reject(error);
  } finally {
    dispatch.receiveRemovingCoupon('');
  }
};

/**
 * Adds an item to the cart:
 * - Calls API to add item.
 * - If successful, yields action to add item from store.
 * - If error, yields action to store error.
 *
 * @param {number} productId    Product ID to add to cart.
 * @param {number} [quantity=1] Number of product ID being added to cart.
 * @throws           Will throw an error if there is an API problem.
 */
const addItemToCart = (productId, quantity = 1) => async ({
  dispatch
}) => {
  try {
    (0,_base_utils__WEBPACK_IMPORTED_MODULE_0__.triggerAddingToCartEvent)();
    const {
      response
    } = await (0,_shared_controls__WEBPACK_IMPORTED_MODULE_2__.apiFetchWithHeaders)({
      path: `/wc/store/v1/cart/add-item`,
      method: 'POST',
      data: {
        id: productId,
        quantity
      },
      cache: 'no-store'
    });
    dispatch.receiveCart(response);
    (0,_base_utils__WEBPACK_IMPORTED_MODULE_0__.triggerAddedToCartEvent)({
      preserveCartData: true
    });
    return response;
  } catch (error) {
    dispatch.receiveError(error);
    return Promise.reject(error);
  }
};

/**
 * Removes specified item from the cart:
 * - Calls API to remove item.
 * - If successful, yields action to remove item from store.
 * - If error, yields action to store error.
 * - Sets cart item as pending while API request is in progress.
 *
 * @param {string} cartItemKey Cart item being updated.
 */
const removeItemFromCart = cartItemKey => async ({
  dispatch
}) => {
  try {
    dispatch.itemIsPendingDelete(cartItemKey);
    const {
      response
    } = await (0,_shared_controls__WEBPACK_IMPORTED_MODULE_2__.apiFetchWithHeaders)({
      path: `/wc/store/v1/cart/remove-item`,
      data: {
        key: cartItemKey
      },
      method: 'POST',
      cache: 'no-store'
    });
    dispatch.receiveCart(response);
    return response;
  } catch (error) {
    dispatch.receiveError(error);
    return Promise.reject(error);
  } finally {
    dispatch.itemIsPendingDelete(cartItemKey, false);
  }
};

/**
 * Persists a quantity change the for specified cart item:
 * - Calls API to set quantity.
 * - If successful, yields action to update store.
 * - If error, yields action to store error.
 *
 * @param {string} cartItemKey Cart item being updated.
 * @param {number} quantity    Specified (new) quantity.
 */
const changeCartItemQuantity = (cartItemKey, quantity) => async ({
  dispatch,
  select
}) => {
  const cartItem = select.getCartItem(cartItemKey);
  if (cartItem?.quantity === quantity) {
    return;
  }
  try {
    dispatch.itemIsPendingQuantity(cartItemKey);
    const {
      response
    } = await (0,_shared_controls__WEBPACK_IMPORTED_MODULE_2__.apiFetchWithHeaders)({
      path: '/wc/store/v1/cart/update-item',
      method: 'POST',
      data: {
        key: cartItemKey,
        quantity
      },
      cache: 'no-store'
    });
    dispatch.receiveCart(response);
    return response;
  } catch (error) {
    dispatch.receiveError(error);
    return Promise.reject(error);
  } finally {
    dispatch.itemIsPendingQuantity(cartItemKey, false);
  }
};

/**
 * Selects a shipping rate.
 *
 * @param {string}          rateId      The id of the rate being selected.
 * @param {number | string} [packageId] The key of the packages that we will select within.
 */
const selectShippingRate = (rateId, packageId = null) => async ({
  dispatch,
  select
}) => {
  const selectedShippingRate = select.getShippingRates().find(shippingPackage => shippingPackage.package_id === packageId)?.shipping_rates.find(rate => rate.selected === true);
  if (selectedShippingRate?.rate_id === rateId) {
    return;
  }
  try {
    dispatch.shippingRatesBeingSelected(true);
    const {
      response
    } = await (0,_shared_controls__WEBPACK_IMPORTED_MODULE_2__.apiFetchWithHeaders)({
      path: `/wc/store/v1/cart/select-shipping-rate`,
      method: 'POST',
      data: {
        package_id: packageId,
        rate_id: rateId
      },
      cache: 'no-store'
    });
    // Remove shipping and billing address from the response, so we don't overwrite what the shopper is
    // entering in the form if rates suddenly appear mid-edit.
    const {
      shipping_address: shippingAddress,
      billing_address: billingAddress,
      ...rest
    } = response;
    dispatch.receiveCart(rest);
    return response;
  } catch (error) {
    dispatch.receiveError(error);
    return Promise.reject(error);
  } finally {
    dispatch.shippingRatesBeingSelected(false);
  }
};

/**
 * Sets billing address locally, as opposed to updateCustomerData which sends it to the server.
 */
const setBillingAddress = billingAddress => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPES.SET_BILLING_ADDRESS,
  billingAddress
});

/**
 * Sets shipping address locally, as opposed to updateCustomerData which sends it to the server.
 */
const setShippingAddress = shippingAddress => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPES.SET_SHIPPING_ADDRESS,
  shippingAddress
});

/**
 * Updates the shipping and/or billing address for the customer and returns an updated cart.
 */
const updateCustomerData = (customerData,
// If the address is being edited, we don't update the customer data in the store from the response.
editing = true) => async ({
  dispatch
}) => {
  try {
    dispatch.updatingCustomerData(true);
    const {
      response
    } = await (0,_shared_controls__WEBPACK_IMPORTED_MODULE_2__.apiFetchWithHeaders)({
      path: '/wc/store/v1/cart/update-customer',
      method: 'POST',
      data: customerData,
      cache: 'no-store'
    });
    if (editing) {
      dispatch.receiveCartContents(response);
    } else {
      dispatch.receiveCart(response);
    }
    return response;
  } catch (error) {
    dispatch.receiveError(error);
    return Promise.reject(error);
  } finally {
    dispatch.updatingCustomerData(false);
  }
};

/***/ }),

/***/ "./wc_components/js/data/cart/constants.ts":
/*!*************************************************!*\
  !*** ./wc_components/js/data/cart/constants.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CART_API_ERROR: () => (/* binding */ CART_API_ERROR),
/* harmony export */   STORE_KEY: () => (/* binding */ STORE_KEY)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

const STORE_KEY = 'wc/store/cart';
const CART_API_ERROR = {
  code: 'cart_api_error',
  message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Unable to get cart data from the API.', 'woo-gutenberg-products-block'),
  data: {
    status: 500
  }
};

/***/ }),

/***/ "./wc_components/js/data/cart/default-state.ts":
/*!*****************************************************!*\
  !*** ./wc_components/js/data/cart/default-state.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultCartState: () => (/* binding */ defaultCartState)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./wc_components/js/data/constants.ts");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

const EMPTY_PENDING_QUANTITY = [];
const EMPTY_PENDING_DELETE = [];
const defaultCartState = {
  cartItemsPendingQuantity: EMPTY_PENDING_QUANTITY,
  cartItemsPendingDelete: EMPTY_PENDING_DELETE,
  cartData: {
    coupons: _constants__WEBPACK_IMPORTED_MODULE_0__.EMPTY_CART_COUPONS,
    shippingRates: _constants__WEBPACK_IMPORTED_MODULE_0__.EMPTY_SHIPPING_RATES,
    shippingAddress: {
      first_name: '',
      last_name: '',
      company: '',
      address_1: '',
      address_2: '',
      city: '',
      state: '',
      postcode: '',
      country: '',
      phone: ''
    },
    billingAddress: {
      first_name: '',
      last_name: '',
      company: '',
      address_1: '',
      address_2: '',
      city: '',
      state: '',
      postcode: '',
      country: '',
      phone: '',
      email: ''
    },
    items: _constants__WEBPACK_IMPORTED_MODULE_0__.EMPTY_CART_ITEMS,
    itemsCount: 0,
    itemsWeight: 0,
    crossSells: _constants__WEBPACK_IMPORTED_MODULE_0__.EMPTY_CART_CROSS_SELLS,
    needsShipping: true,
    needsPayment: false,
    hasCalculatedShipping: true,
    fees: _constants__WEBPACK_IMPORTED_MODULE_0__.EMPTY_CART_FEES,
    totals: {
      currency_code: '',
      currency_symbol: '',
      currency_minor_unit: 2,
      currency_decimal_separator: '.',
      currency_thousand_separator: ',',
      currency_prefix: '',
      currency_suffix: '',
      total_items: '0',
      total_items_tax: '0',
      total_fees: '0',
      total_fees_tax: '0',
      total_discount: '0',
      total_discount_tax: '0',
      total_shipping: '0',
      total_shipping_tax: '0',
      total_price: '0',
      total_tax: '0',
      tax_lines: _constants__WEBPACK_IMPORTED_MODULE_0__.EMPTY_TAX_LINES
    },
    errors: _constants__WEBPACK_IMPORTED_MODULE_0__.EMPTY_CART_ITEM_ERRORS,
    paymentMethods: _constants__WEBPACK_IMPORTED_MODULE_0__.EMPTY_PAYMENT_METHODS,
    paymentRequirements: _constants__WEBPACK_IMPORTED_MODULE_0__.EMPTY_PAYMENT_REQUIREMENTS,
    extensions: _constants__WEBPACK_IMPORTED_MODULE_0__.EMPTY_EXTENSIONS
  },
  metaData: {
    updatingCustomerData: false,
    updatingSelectedRate: false,
    applyingCoupon: '',
    removingCoupon: '',
    isCartDataStale: false
  },
  errors: _constants__WEBPACK_IMPORTED_MODULE_0__.EMPTY_CART_ERRORS
};

/***/ }),

/***/ "./wc_components/js/data/cart/index.ts":
/*!*********************************************!*\
  !*** ./wc_components/js/data/cart/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CART_STORE_KEY: () => (/* binding */ CART_STORE_KEY)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./wc_components/js/data/cart/constants.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./wc_components/js/data/cart/selectors.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./wc_components/js/data/cart/actions.ts");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvers */ "./wc_components/js/data/cart/resolvers.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers */ "./wc_components/js/data/cart/reducers.ts");
/* harmony import */ var _push_changes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./push-changes */ "./wc_components/js/data/cart/push-changes.ts");
/* harmony import */ var _update_payment_methods__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-payment-methods */ "./wc_components/js/data/cart/update-payment-methods.ts");
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */







// Please update from deprecated "registerStore" to "createReduxStore" when this PR is merged:
// https://github.com/WordPress/gutenberg/pull/45513
const registeredStore = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.registerStore)(_constants__WEBPACK_IMPORTED_MODULE_2__.STORE_KEY, {
  reducer: _reducers__WEBPACK_IMPORTED_MODULE_6__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_4__,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  controls: _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__.controls,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__,
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_5__,
  __experimentalUseThunks: true
});

// Pushes changes whenever the store is updated.
registeredStore.subscribe(_push_changes__WEBPACK_IMPORTED_MODULE_7__.pushChanges);

// This will skip the debounce and immediately push changes to the server when a field is blurred.
document.body.addEventListener('focusout', event => {
  if (event.target && event.target instanceof Element && event.target.tagName.toLowerCase() === 'input') {
    (0,_push_changes__WEBPACK_IMPORTED_MODULE_7__.flushChanges)();
  }
});

// First we will run the updatePaymentMethods function without any debounce to ensure payment methods are ready as soon
// as the cart is loaded. After that, we will unsubscribe this function and instead run the
// debouncedUpdatePaymentMethods function on subsequent cart updates.
const unsubscribeUpdatePaymentMethods = registeredStore.subscribe(async () => {
  const didActionDispatch = await (0,_update_payment_methods__WEBPACK_IMPORTED_MODULE_8__.updatePaymentMethods)();
  if (didActionDispatch) {
    // The function we're currently in will unsubscribe itself. When we reach this line, this will be the last time
    // this function is called.
    unsubscribeUpdatePaymentMethods();
    // Resubscribe, but with the debounced version of updatePaymentMethods.
    registeredStore.subscribe(_update_payment_methods__WEBPACK_IMPORTED_MODULE_8__.debouncedUpdatePaymentMethods);
  }
});
const CART_STORE_KEY = _constants__WEBPACK_IMPORTED_MODULE_2__.STORE_KEY;

/**
 * CartDispatchFromMap is a type that maps the cart store's action creators to the dispatch function passed to thunks.
 */

/**
 * CartResolveSelectFromMap is a type that maps the cart store's resolvers and selectors to the resolveSelect function
 * passed to thunks.
 */

/**
 * CartSelectFromMap is a type that maps the cart store's selectors to the select function passed to thunks.
 */

/***/ }),

/***/ "./wc_components/js/data/cart/notify-errors.ts":
/*!*****************************************************!*\
  !*** ./wc_components/js/data/cart/notify-errors.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   notifyCartErrors: () => (/* binding */ notifyCartErrors)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./wc_components/js/types/index.ts");
/* harmony import */ var _base_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/utils */ "./wc_components/js/base/utils/index.js");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/**
 * External dependencies
 */
// import { ApiErrorResponse, isApiErrorResponse } from '@woocommerce/types';


// import { createNotice } from '@woocommerce/base-utils';




/**
 * This function is used to notify the user of cart item errors/conflicts
 */
const notifyCartErrors = (errors = null, oldErrors = null) => {
  if (oldErrors) {
    oldErrors.forEach(error => {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)('core/notices').removeNotice(error.code, 'wc/cart');
    });
  }
  if (errors !== null) {
    errors.forEach(error => {
      if ((0,_types__WEBPACK_IMPORTED_MODULE_0__.isApiErrorResponse)(error)) {
        (0,_base_utils__WEBPACK_IMPORTED_MODULE_1__.createNotice)('error', (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__.decodeEntities)(error.message), {
          id: error.code,
          context: 'wc/cart',
          isDismissible: false
        });
      }
    });
  }
};

/***/ }),

/***/ "./wc_components/js/data/cart/notify-quantity-changes.ts":
/*!***************************************************************!*\
  !*** ./wc_components/js/data/cart/notify-quantity-changes.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   notifyQuantityChanges: () => (/* binding */ notifyQuantityChanges)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./wc_components/js/data/cart/constants.ts");
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */

const isWithinQuantityLimits = cartItem => {
  return cartItem.quantity >= cartItem.quantity_limits.minimum && cartItem.quantity <= cartItem.quantity_limits.maximum && cartItem.quantity % cartItem.quantity_limits.multiple_of === 0;
};
const notifyIfQuantityLimitsChanged = (oldCart, newCart) => {
  newCart.items.forEach(cartItem => {
    const oldCartItem = oldCart.items.find(item => {
      return item && item.key === cartItem.key;
    });

    // If getCartData has not finished resolving, then this is the first load.
    const isFirstLoad = oldCart.items.length === 0;

    // Item has been removed, we don't need to do any more checks.
    if (!oldCartItem && !isFirstLoad) {
      return;
    }
    if (isWithinQuantityLimits(cartItem)) {
      return;
    }
    const quantityAboveMax = cartItem.quantity > cartItem.quantity_limits.maximum;
    const quantityBelowMin = cartItem.quantity < cartItem.quantity_limits.minimum;
    const quantityOutOfStep = cartItem.quantity % cartItem.quantity_limits.multiple_of !== 0;

    // If the quantity is still within the constraints, then we don't need to show any notice, this is because
    // QuantitySelector will not automatically update the value.
    if (!quantityAboveMax && !quantityBelowMin && !quantityOutOfStep) {
      return;
    }
    if (quantityOutOfStep) {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices').createInfoNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %1$s is the name of the item, %2$d is the quantity of the item. %3$d is a number that the quantity must be a multiple of. */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The quantity of "%1$s" was changed to %2$d. You must purchase this product in groups of %3$d.', 'woo-gutenberg-products-block'), cartItem.name,
      // We round down to the nearest step value here. We need to do it this way because at this point we
      // don't know the next quantity. That only gets set once the HTML Input field applies its min/max
      // constraints.
      Math.floor(cartItem.quantity / cartItem.quantity_limits.multiple_of) * cartItem.quantity_limits.multiple_of, cartItem.quantity_limits.multiple_of), {
        context: 'wc/cart',
        speak: true,
        type: 'snackbar',
        id: `${cartItem.key}-quantity-update`
      });
      return;
    }
    if (quantityBelowMin) {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices').createInfoNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %1$s is the name of the item, %2$d is the quantity of the item. */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The quantity of "%1$s" was increased to %2$d. This is the minimum required quantity.', 'woo-gutenberg-products-block'), cartItem.name, cartItem.quantity_limits.minimum), {
        context: 'wc/cart',
        speak: true,
        type: 'snackbar',
        id: `${cartItem.key}-quantity-update`
      });
      return;
    }

    // Quantity is above max, so has been reduced.
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices').createInfoNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %1$s is the name of the item, %2$d is the quantity of the item. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The quantity of "%1$s" was decreased to %2$d. This is the maximum allowed quantity.', 'woo-gutenberg-products-block'), cartItem.name, cartItem.quantity_limits.maximum), {
      context: 'wc/cart',
      speak: true,
      type: 'snackbar',
      id: `${cartItem.key}-quantity-update`
    });
  });
};
const notifyIfQuantityChanged = (oldCart, newCart, cartItemsPendingQuantity) => {
  newCart.items.forEach(cartItem => {
    if (cartItemsPendingQuantity.includes(cartItem.key)) {
      return;
    }
    const oldCartItem = oldCart.items.find(item => {
      return item && item.key === cartItem.key;
    });
    if (!oldCartItem) {
      return;
    }
    if (cartItem.key === oldCartItem.key) {
      if (cartItem.quantity !== oldCartItem.quantity && isWithinQuantityLimits(cartItem)) {
        (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices').createInfoNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %1$s is the name of the item, %2$d is the quantity of the item. */
        (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The quantity of "%1$s" was changed to %2$d.', 'woo-gutenberg-products-block'), cartItem.name, cartItem.quantity), {
          context: 'wc/cart',
          speak: true,
          type: 'snackbar',
          id: `${cartItem.key}-quantity-update`
        });
      }
      return cartItem;
    }
  });
};

/**
 * Checks whether the old cart contains an item that the new cart doesn't, and that the item was not slated for removal.
 *
 * @param  oldCart                The old cart.
 * @param  newCart                The new cart.
 * @param  cartItemsPendingDelete The cart items that are pending deletion.
 */
const notifyIfRemoved = (oldCart, newCart, cartItemsPendingDelete) => {
  oldCart.items.forEach(oldCartItem => {
    if (cartItemsPendingDelete.includes(oldCartItem.key)) {
      return;
    }
    const newCartItem = newCart.items.find(item => {
      return item && item.key === oldCartItem.key;
    });
    if (!newCartItem) {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices').createInfoNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %s is the name of the item. */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('"%s" was removed from your cart.', 'woo-gutenberg-products-block'), oldCartItem.name), {
        context: 'wc/cart',
        speak: true,
        type: 'snackbar',
        id: `${oldCartItem.key}-removed`
      });
    }
  });
};

/**
 * This function is used to notify the user when the quantity of an item in the cart has changed. It checks both the
 * item's quantity and quantity limits.
 */
const notifyQuantityChanges = ({
  oldCart,
  newCart,
  cartItemsPendingQuantity = [],
  cartItemsPendingDelete = []
}) => {
  const isResolutionFinished = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_constants__WEBPACK_IMPORTED_MODULE_2__.STORE_KEY).hasFinishedResolution('getCartData');
  if (!isResolutionFinished) {
    return;
  }
  notifyIfRemoved(oldCart, newCart, cartItemsPendingDelete);
  notifyIfQuantityLimitsChanged(oldCart, newCart);
  notifyIfQuantityChanged(oldCart, newCart, cartItemsPendingQuantity);
};

/***/ }),

/***/ "./wc_components/js/data/cart/push-changes.ts":
/*!****************************************************!*\
  !*** ./wc_components/js/data/cart/push-changes.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   flushChanges: () => (/* binding */ flushChanges),
/* harmony export */   pushChanges: () => (/* binding */ pushChanges)
/* harmony export */ });
/* harmony import */ var _base_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/utils */ "./wc_components/js/base/utils/index.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/is-shallow-equal */ "@wordpress/is-shallow-equal");
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./wc_components/js/data/cart/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./wc_components/js/data/utils/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./wc_components/js/data/cart/utils.ts");
/**
 * External dependencies
 */
// import { removeAllNotices, debounce, pick } from '@woocommerce/base-utils';

// import {
// 	CartBillingAddress,
// 	CartShippingAddress,
// 	BillingAddressShippingAddress,
// } from '@woocommerce/types';




/**
 * Internal dependencies
 */




// This is used to track and cache the local state of push changes.
const localState = {
  // True when the customer data has been initialized.
  customerDataIsInitialized: false,
  // True when a push is currently happening to avoid simultaneous pushes.
  doingPush: false,
  // Local cache of the last pushed customerData used for comparisons.
  customerData: {
    billingAddress: {},
    shippingAddress: {}
  },
  // Tracks which props have changed so the correct data gets pushed to the server.
  dirtyProps: {
    billingAddress: [],
    shippingAddress: []
  }
};

/**
 * Initializes the customer data cache on the first run.
 */
const initialize = () => {
  localState.customerData = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)(_constants__WEBPACK_IMPORTED_MODULE_3__.STORE_KEY).getCustomerData();
  localState.customerDataIsInitialized = true;
};

/**
 * Checks customer data against new customer data to get a list of dirty props.
 */
const updateDirtyProps = () => {
  // Returns all current customer data from the store.
  const newCustomerData = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)(_constants__WEBPACK_IMPORTED_MODULE_3__.STORE_KEY).getCustomerData();
  localState.dirtyProps.billingAddress = [...localState.dirtyProps.billingAddress, ...(0,_utils__WEBPACK_IMPORTED_MODULE_5__.getDirtyKeys)(localState.customerData.billingAddress, newCustomerData.billingAddress)];
  localState.dirtyProps.shippingAddress = [...localState.dirtyProps.shippingAddress, ...(0,_utils__WEBPACK_IMPORTED_MODULE_5__.getDirtyKeys)(localState.customerData.shippingAddress, newCustomerData.shippingAddress)];

  // Update local cache of customer data so the next time this runs, it can compare against the latest data.
  localState.customerData = newCustomerData;
};

/**
 * Function to dispatch an update to the server.
 */
const updateCustomerData = () => {
  if (localState.doingPush) {
    return;
  }

  // Prevent multiple pushes from happening at the same time.
  localState.doingPush = true;

  // Get updated list of dirty props by comparing customer data.
  updateDirtyProps();

  // Do we need to push anything?
  const needsPush = localState.dirtyProps.billingAddress.length > 0 || localState.dirtyProps.shippingAddress.length > 0;
  if (!needsPush) {
    localState.doingPush = false;
    return;
  }

  // Check props are valid, or abort.
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_5__.validateDirtyProps)(localState.dirtyProps)) {
    localState.doingPush = false;
    return;
  }

  // Find valid data from the list of dirtyProps and prepare to push to the server.
  const customerDataToUpdate = {};
  if (localState.dirtyProps.billingAddress.length) {
    customerDataToUpdate.billing_address = (0,_base_utils__WEBPACK_IMPORTED_MODULE_0__.pick)(localState.customerData.billingAddress, localState.dirtyProps.billingAddress);
  }
  if (localState.dirtyProps.shippingAddress.length) {
    customerDataToUpdate.shipping_address = (0,_base_utils__WEBPACK_IMPORTED_MODULE_0__.pick)(localState.customerData.shippingAddress, localState.dirtyProps.shippingAddress);
  }
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_3__.STORE_KEY).updateCustomerData(customerDataToUpdate).then(() => {
    localState.dirtyProps.billingAddress = [];
    localState.dirtyProps.shippingAddress = [];
    localState.doingPush = false;
    (0,_base_utils__WEBPACK_IMPORTED_MODULE_0__.removeAllNotices)();
  }).catch(response => {
    localState.doingPush = false;
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.processErrorResponse)(response);
  });
};

/**
 * Function to dispatch an update to the server. This is debounced.
 */
const debouncedUpdateCustomerData = (0,_base_utils__WEBPACK_IMPORTED_MODULE_0__.debounce)(() => {
  if (localState.doingPush) {
    debouncedUpdateCustomerData();
    return;
  }
  updateCustomerData();
}, 1500);

/**
 * After cart has fully initialized, pushes changes to the server when data in the store is changed. Updates to the
 * server are debounced to prevent excessive requests.
 *
 * Any update to the store triggers this, so we do a shallow compare on the important data to know if we really need to
 * schedule a push.
 */
const pushChanges = (debounced = true) => {
  if (!(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)(_constants__WEBPACK_IMPORTED_MODULE_3__.STORE_KEY).hasFinishedResolution('getCartData')) {
    return;
  }
  if (!localState.customerDataIsInitialized) {
    initialize();
    return;
  }
  if (_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2___default()(localState.customerData, (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)(_constants__WEBPACK_IMPORTED_MODULE_3__.STORE_KEY).getCustomerData())) {
    return;
  }
  if (debounced) {
    debouncedUpdateCustomerData();
  } else {
    updateCustomerData();
  }
};

// Cancel the debounced updateCustomerData function and trigger it immediately.
const flushChanges = () => {
  debouncedUpdateCustomerData.flush();
};

/***/ }),

/***/ "./wc_components/js/data/cart/reducers.ts":
/*!************************************************!*\
  !*** ./wc_components/js/data/cart/reducers.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./wc_components/js/data/cart/action-types.ts");
/* harmony import */ var _default_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-state */ "./wc_components/js/data/cart/default-state.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./wc_components/js/data/constants.ts");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



/**
 * Sub-reducer for cart items array.
 *
 * @param {Array<CartItem>} state  cartData.items state slice.
 * @param {CartAction}      action Action object.
 */
const cartItemsReducer = (state = [], action) => {
  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.RECEIVE_CART_ITEM:
      // Replace specified cart element with the new data from server.
      return state.map(cartItem => {
        if (cartItem.key === action.cartItem?.key) {
          return action.cartItem;
        }
        return cartItem;
      });
  }
  return state;
};

/**
 * Reducer for receiving items related to the cart.
 *
 * @param {CartState}  state  The current state in the store.
 * @param {CartAction} action Action object.
 *
 * @return  {CartState}          New or existing state.
 */
const reducer = (state = _default_state__WEBPACK_IMPORTED_MODULE_1__.defaultCartState, action) => {
  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_ERROR_DATA:
      if (action.error) {
        state = {
          ...state,
          errors: [action.error]
        };
      }
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_CART_DATA:
      if (action.response) {
        state = {
          ...state,
          errors: _constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_CART_ERRORS,
          cartData: {
            ...state.cartData,
            ...action.response
          }
        };
      }
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.APPLYING_COUPON:
      if (action.couponCode || action.couponCode === '') {
        state = {
          ...state,
          metaData: {
            ...state.metaData,
            applyingCoupon: action.couponCode
          }
        };
      }
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_BILLING_ADDRESS:
      state = {
        ...state,
        cartData: {
          ...state.cartData,
          billingAddress: {
            ...state.cartData.billingAddress,
            ...action.billingAddress
          }
        }
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_SHIPPING_ADDRESS:
      state = {
        ...state,
        cartData: {
          ...state.cartData,
          shippingAddress: {
            ...state.cartData.shippingAddress,
            ...action.shippingAddress
          }
        }
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REMOVING_COUPON:
      if (action.couponCode || action.couponCode === '') {
        state = {
          ...state,
          metaData: {
            ...state.metaData,
            removingCoupon: action.couponCode
          }
        };
      }
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.ITEM_PENDING_QUANTITY:
      // Remove key by default - handles isQuantityPending==false
      // and prevents duplicates when isQuantityPending===true.
      const keysPendingQuantity = state.cartItemsPendingQuantity.filter(key => key !== action.cartItemKey);
      if (action.isPendingQuantity && action.cartItemKey) {
        keysPendingQuantity.push(action.cartItemKey);
      }
      state = {
        ...state,
        cartItemsPendingQuantity: keysPendingQuantity
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.RECEIVE_REMOVED_ITEM:
      const keysPendingDelete = state.cartItemsPendingDelete.filter(key => key !== action.cartItemKey);
      if (action.isPendingDelete && action.cartItemKey) {
        keysPendingDelete.push(action.cartItemKey);
      }
      state = {
        ...state,
        cartItemsPendingDelete: keysPendingDelete
      };
      break;
    // Delegate to cartItemsReducer.
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.RECEIVE_CART_ITEM:
      state = {
        ...state,
        errors: _constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_CART_ERRORS,
        cartData: {
          ...state.cartData,
          items: cartItemsReducer(state.cartData.items, action)
        }
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.UPDATING_CUSTOMER_DATA:
      state = {
        ...state,
        metaData: {
          ...state.metaData,
          updatingCustomerData: !!action.isResolving
        }
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.UPDATING_SELECTED_SHIPPING_RATE:
      state = {
        ...state,
        metaData: {
          ...state.metaData,
          updatingSelectedRate: !!action.isResolving
        }
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_IS_CART_DATA_STALE:
      state = {
        ...state,
        metaData: {
          ...state.metaData,
          isCartDataStale: action.isCartDataStale
        }
      };
      break;
  }
  return state;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./wc_components/js/data/cart/resolvers.ts":
/*!*************************************************!*\
  !*** ./wc_components/js/data/cart/resolvers.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCartData: () => (/* binding */ getCartData),
/* harmony export */   getCartTotals: () => (/* binding */ getCartTotals)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./wc_components/js/data/cart/constants.ts");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

/**
 * Resolver for retrieving all cart data.
 */
const getCartData = () => async ({
  dispatch
}) => {
  const cartData = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: '/wc/store/v1/cart',
    method: 'GET',
    cache: 'no-store'
  });
  const {
    receiveCart,
    receiveError
  } = dispatch;
  if (!cartData) {
    receiveError(_constants__WEBPACK_IMPORTED_MODULE_1__.CART_API_ERROR);
    return;
  }
  receiveCart(cartData);
};

/**
 * Resolver for retrieving cart totals.
 */
const getCartTotals = () => async ({
  resolveSelect
}) => {
  await resolveSelect.getCartData();
};

/***/ }),

/***/ "./wc_components/js/data/cart/selectors.ts":
/*!*************************************************!*\
  !*** ./wc_components/js/data/cart/selectors.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCartData: () => (/* binding */ getCartData),
/* harmony export */   getCartErrors: () => (/* binding */ getCartErrors),
/* harmony export */   getCartItem: () => (/* binding */ getCartItem),
/* harmony export */   getCartMeta: () => (/* binding */ getCartMeta),
/* harmony export */   getCartTotals: () => (/* binding */ getCartTotals),
/* harmony export */   getCouponBeingApplied: () => (/* binding */ getCouponBeingApplied),
/* harmony export */   getCouponBeingRemoved: () => (/* binding */ getCouponBeingRemoved),
/* harmony export */   getCustomerData: () => (/* binding */ getCustomerData),
/* harmony export */   getHasCalculatedShipping: () => (/* binding */ getHasCalculatedShipping),
/* harmony export */   getItemsPendingDelete: () => (/* binding */ getItemsPendingDelete),
/* harmony export */   getItemsPendingQuantityUpdate: () => (/* binding */ getItemsPendingQuantityUpdate),
/* harmony export */   getNeedsShipping: () => (/* binding */ getNeedsShipping),
/* harmony export */   getShippingRates: () => (/* binding */ getShippingRates),
/* harmony export */   isApplyingCoupon: () => (/* binding */ isApplyingCoupon),
/* harmony export */   isCartDataStale: () => (/* binding */ isCartDataStale),
/* harmony export */   isCustomerDataUpdating: () => (/* binding */ isCustomerDataUpdating),
/* harmony export */   isItemPendingDelete: () => (/* binding */ isItemPendingDelete),
/* harmony export */   isItemPendingQuantity: () => (/* binding */ isItemPendingQuantity),
/* harmony export */   isRemovingCoupon: () => (/* binding */ isRemovingCoupon),
/* harmony export */   isShippingRateBeingSelected: () => (/* binding */ isShippingRateBeingSelected)
/* harmony export */ });
/* harmony import */ var _default_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-state */ "./wc_components/js/data/cart/default-state.ts");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Retrieves cart data from state.
 *
 * @param {CartState} state The current state.
 * @return {Cart} The data to return.
 */
const getCartData = state => {
  return state.cartData;
};
const getCustomerData = state => {
  return {
    shippingAddress: state.cartData.shippingAddress,
    billingAddress: state.cartData.billingAddress
  };
};

/**
 * Retrieves shipping rates from state.
 *
 * @param { CartState } state The current state.
 * @return { CartShippingRate[] } The shipping rates on the cart.
 */
const getShippingRates = state => {
  return state.cartData.shippingRates;
};

/**
 * Retrieves whether the cart needs shipping.
 *
 * @param { CartState } state The current state.
 * @return { boolean } True if the cart needs shipping.
 */
const getNeedsShipping = state => {
  return state.cartData.needsShipping;
};

/**
 * Retrieves whether the cart shipping has been calculated.
 *
 * @param { CartState } state The current state.
 * @return { boolean } True if the shipping has been calculated.
 */
const getHasCalculatedShipping = state => {
  return state.cartData.hasCalculatedShipping;
};

/**
 * Retrieves cart totals from state.
 *
 * @param {CartState} state The current state.
 * @return {CartTotals} The data to return.
 */
const getCartTotals = state => {
  return state.cartData.totals || _default_state__WEBPACK_IMPORTED_MODULE_0__.defaultCartState.cartData.totals;
};

/**
 * Retrieves cart meta from state.
 *
 * @param {CartState} state The current state.
 * @return {CartMeta} The data to return.
 */
const getCartMeta = state => {
  return state.metaData || _default_state__WEBPACK_IMPORTED_MODULE_0__.defaultCartState.metaData;
};

/**
 * Retrieves cart errors from state.
 */
const getCartErrors = state => {
  return state.errors;
};

/**
 * Returns true if any coupon is being applied.
 *
 * @param {CartState} state The current state.
 * @return {boolean} True if a coupon is being applied.
 */
const isApplyingCoupon = state => {
  return !!state.metaData.applyingCoupon;
};

/**
 * Returns true if cart is stale, false if it is not.
 *
 * @param {CartState} state The current state.
 * @return {boolean} True if the cart data is stale.
 */
const isCartDataStale = state => {
  return state.metaData.isCartDataStale;
};

/**
 * Retrieves the coupon code currently being applied.
 *
 * @param {CartState} state The current state.
 * @return {string} The data to return.
 */
const getCouponBeingApplied = state => {
  return state.metaData.applyingCoupon || '';
};

/**
 * Returns true if any coupon is being removed.
 *
 * @param {CartState} state The current state.
 * @return {boolean} True if a coupon is being removed.
 */
const isRemovingCoupon = state => {
  return !!state.metaData.removingCoupon;
};

/**
 * Retrieves the coupon code currently being removed.
 *
 * @param {CartState} state The current state.
 * @return {string} The data to return.
 */
const getCouponBeingRemoved = state => {
  return state.metaData.removingCoupon || '';
};

/**
 * Returns cart item matching specified key.
 *
 * @param {CartState} state       The current state.
 * @param {string}    cartItemKey Key for a cart item.
 * @return {CartItem | void} Cart item object, or undefined if not found.
 */
const getCartItem = (state, cartItemKey) => {
  return state.cartData.items.find(cartItem => cartItem.key === cartItemKey);
};

/**
 * Returns true if the specified cart item quantity is being updated.
 *
 * @param {CartState} state       The current state.
 * @param {string}    cartItemKey Key for a cart item.
 * @return {boolean} True if a item has a pending request to be updated.
 */
const isItemPendingQuantity = (state, cartItemKey) => {
  return state.cartItemsPendingQuantity.includes(cartItemKey);
};

/**
 * Returns true if the specified cart item quantity is being updated.
 *
 * @param {CartState} state       The current state.
 * @param {string}    cartItemKey Key for a cart item.
 * @return {boolean} True if a item has a pending request to be updated.
 */
const isItemPendingDelete = (state, cartItemKey) => {
  return state.cartItemsPendingDelete.includes(cartItemKey);
};
/**
 * Retrieves if the address is being applied for shipping.
 *
 * @param {CartState} state The current state.
 * @return {boolean} are shipping rates loading.
 */
const isCustomerDataUpdating = state => {
  return !!state.metaData.updatingCustomerData;
};

/**
 * Retrieves if the shipping rate selection is being persisted.
 *
 * @param {CartState} state The current state.
 *
 * @return {boolean} True if the shipping rate selection is being persisted to
 *                   the server.
 */
const isShippingRateBeingSelected = state => {
  return !!state.metaData.updatingSelectedRate;
};

/**
 * Retrieves the item keys for items whose quantity is currently being updated.
 */
const getItemsPendingQuantityUpdate = state => {
  return state.cartItemsPendingQuantity;
};
/**
 * Retrieves the item keys for items that are currently being deleted.
 */
const getItemsPendingDelete = state => {
  return state.cartItemsPendingDelete;
};

/***/ }),

/***/ "./wc_components/js/data/cart/thunks.ts":
/*!**********************************************!*\
  !*** ./wc_components/js/data/cart/thunks.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   receiveCart: () => (/* binding */ receiveCart),
/* harmony export */   receiveError: () => (/* binding */ receiveError)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./wc_components/js/types/index.ts");
/* harmony import */ var _base_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/utils */ "./wc_components/js/base/utils/index.js");
/* harmony import */ var _notify_quantity_changes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notify-quantity-changes */ "./wc_components/js/data/cart/notify-quantity-changes.ts");
/* harmony import */ var _notify_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify-errors */ "./wc_components/js/data/cart/notify-errors.ts");
/**
 * External dependencies
 */
// import {
// 	Cart,
// 	CartResponse,
// 	ApiErrorResponse,
// 	isApiErrorResponse,
// } from '@woocommerce/types';



// import { camelCaseKeys } from '@woocommerce/base-utils';



/**
 * Internal dependencies
 */


/**
 * A thunk used in updating the store with the cart items retrieved from a request. This also notifies the shopper
 * of any unexpected quantity changes occurred.
 *
 * @param {CartResponse} response
 */
const receiveCart = response => ({
  dispatch,
  select
}) => {
  const newCart = (0,_base_utils__WEBPACK_IMPORTED_MODULE_1__.camelCaseKeys)(response);
  const oldCart = select.getCartData();
  (0,_notify_errors__WEBPACK_IMPORTED_MODULE_3__.notifyCartErrors)(newCart.errors, oldCart.errors);
  (0,_notify_quantity_changes__WEBPACK_IMPORTED_MODULE_2__.notifyQuantityChanges)({
    oldCart,
    newCart,
    cartItemsPendingQuantity: select.getItemsPendingQuantityUpdate(),
    cartItemsPendingDelete: select.getItemsPendingDelete()
  });
  dispatch.setCartData(newCart);
};

/**
 * A thunk used in updating the store with cart errors retrieved from a request.
 */
const receiveError = (response = null) => ({
  dispatch
}) => {
  if ((0,_types__WEBPACK_IMPORTED_MODULE_0__.isApiErrorResponse)(response)) {
    dispatch.setErrorData(response);
    if (response.data?.cart) {
      dispatch.receiveCart(response?.data?.cart);
    }
  }
};

/***/ }),

/***/ "./wc_components/js/data/cart/update-payment-methods.ts":
/*!**************************************************************!*\
  !*** ./wc_components/js/data/cart/update-payment-methods.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debouncedUpdatePaymentMethods: () => (/* binding */ debouncedUpdatePaymentMethods),
/* harmony export */   updatePaymentMethods: () => (/* binding */ updatePaymentMethods)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/utils */ "./wc_components/js/base/utils/index.js");
/* harmony import */ var _payment_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../payment/constants */ "./wc_components/js/data/payment/constants.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./wc_components/js/data/cart/constants.ts");
/**
 * External dependencies
 */

// import { debounce } from '@woocommerce/base-utils';


/**
 * Internal dependencies
 */



/**
 * This function is used to update payment methods when the cart changes, or on first load.
 *
 * @return {boolean} True if the __internalUpdateAvailablePaymentMethods action was dispatched, false if not.
 */
const updatePaymentMethods = async () => {
  const isInitialized = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_constants__WEBPACK_IMPORTED_MODULE_3__.STORE_KEY).hasFinishedResolution('getCartData');
  if (!isInitialized) {
    return false;
  }
  await (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_payment_constants__WEBPACK_IMPORTED_MODULE_2__.STORE_KEY).__internalUpdateAvailablePaymentMethods();
  return true;
};

// We debounce this because it's possible for multiple cart updates to happen in quick succession, we don't want to run
// each payment method's canMakePayment function on every single change.
const debouncedUpdatePaymentMethods = (0,_base_utils__WEBPACK_IMPORTED_MODULE_1__.debounce)(updatePaymentMethods, 1000);

/***/ }),

/***/ "./wc_components/js/data/cart/utils.ts":
/*!*********************************************!*\
  !*** ./wc_components/js/data/cart/utils.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDirtyKeys: () => (/* binding */ getDirtyKeys),
/* harmony export */   mapCartResponseToCart: () => (/* binding */ mapCartResponseToCart),
/* harmony export */   normalizeAddressProp: () => (/* binding */ normalizeAddressProp),
/* harmony export */   shippingAddressHasValidationErrors: () => (/* binding */ shippingAddressHasValidationErrors),
/* harmony export */   validateDirtyProps: () => (/* binding */ validateDirtyProps)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/utils */ "./wc_components/js/base/utils/index.js");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _validation_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation/constants */ "./wc_components/js/data/validation/constants.ts");
/**
 * External dependencies
 */

// import { camelCaseKeys } from '@woocommerce/base-utils';


// import {
// 	CartBillingAddress,
// 	CartShippingAddress,
// 	Cart,
// 	CartResponse,
// } from '@woocommerce/types';

/**
 * Internal dependencies
 */

const mapCartResponseToCart = responseCart => {
  return (0,_base_utils__WEBPACK_IMPORTED_MODULE_1__.camelCaseKeys)(responseCart);
};
const shippingAddressHasValidationErrors = () => {
  const validationStore = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_validation_constants__WEBPACK_IMPORTED_MODULE_3__.STORE_KEY);
  // Check if the shipping address form has validation errors - if not then we know the full required
  // address has been pushed to the server.
  const stateValidationErrors = validationStore.getValidationError('shipping_state');
  const address1ValidationErrors = validationStore.getValidationError('shipping_address_1');
  const countryValidationErrors = validationStore.getValidationError('shipping_country');
  const postcodeValidationErrors = validationStore.getValidationError('shipping_postcode');
  const cityValidationErrors = validationStore.getValidationError('shipping_city');
  return [cityValidationErrors, stateValidationErrors, address1ValidationErrors, countryValidationErrors, postcodeValidationErrors].some(entry => typeof entry !== 'undefined');
};
/**
 * Normalizes address values before push.
 */
const normalizeAddressProp = (key, value) => {
  // Skip normalizing for any non string field
  if (typeof value !== 'string') {
    return value;
  }
  if (key === 'email') {
    return (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.isEmail)(value) ? value.trim() : '';
  }
  if (key === 'postcode') {
    return value.replace(' ', '').toUpperCase();
  }
  return value.trim();
};

/**
 * Compares two address objects and returns an array of keys that have changed.
 */
const getDirtyKeys = (previousAddress, address) => {
  const previousAddressKeys = Object.keys(previousAddress);
  return previousAddressKeys.filter(key => {
    return normalizeAddressProp(key, previousAddress[key]) !== normalizeAddressProp(key, address[key]);
  });
};

/**
 * Validates dirty props before push.
 */
const validateDirtyProps = dirtyProps => {
  const validationStore = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_validation_constants__WEBPACK_IMPORTED_MODULE_3__.STORE_KEY);
  const invalidProps = [...dirtyProps.billingAddress.filter(key => {
    return validationStore.getValidationError('billing_' + key) !== undefined;
  }), ...dirtyProps.shippingAddress.filter(key => {
    return validationStore.getValidationError('shipping_' + key) !== undefined;
  })].filter(Boolean);
  return invalidProps.length === 0;
};

/***/ }),

/***/ "./wc_components/js/data/checkout/action-types.ts":
/*!********************************************************!*\
  !*** ./wc_components/js/data/checkout/action-types.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTION_TYPES: () => (/* binding */ ACTION_TYPES)
/* harmony export */ });
const ACTION_TYPES = {
  SET_IDLE: 'SET_IDLE',
  SET_REDIRECT_URL: 'SET_REDIRECT_URL',
  SET_COMPLETE: 'SET_CHECKOUT_COMPLETE',
  SET_BEFORE_PROCESSING: 'SET_BEFORE_PROCESSING',
  SET_AFTER_PROCESSING: 'SET_AFTER_PROCESSING',
  SET_PROCESSING: 'SET_CHECKOUT_IS_PROCESSING',
  SET_HAS_ERROR: 'SET_CHECKOUT_HAS_ERROR',
  SET_CUSTOMER_ID: 'SET_CHECKOUT_CUSTOMER_ID',
  SET_ORDER_NOTES: 'SET_CHECKOUT_ORDER_NOTES',
  INCREMENT_CALCULATING: 'INCREMENT_CALCULATING',
  DECREMENT_CALCULATING: 'DECREMENT_CALCULATING',
  SET_USE_SHIPPING_AS_BILLING: 'SET_USE_SHIPPING_AS_BILLING',
  SET_SHOULD_CREATE_ACCOUNT: 'SET_SHOULD_CREATE_ACCOUNT',
  SET_PREFERS_COLLECTION: 'SET_PREFERS_COLLECTION',
  SET_EXTENSION_DATA: 'SET_EXTENSION_DATA',
  SET_IS_CART: 'SET_IS_CART'
};

/***/ }),

/***/ "./wc_components/js/data/checkout/actions.ts":
/*!***************************************************!*\
  !*** ./wc_components/js/data/checkout/actions.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __internalDecrementCalculating: () => (/* binding */ __internalDecrementCalculating),
/* harmony export */   __internalEmitAfterProcessingEvents: () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_1__.__internalEmitAfterProcessingEvents),
/* harmony export */   __internalEmitValidateEvent: () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_1__.__internalEmitValidateEvent),
/* harmony export */   __internalIncrementCalculating: () => (/* binding */ __internalIncrementCalculating),
/* harmony export */   __internalProcessCheckoutResponse: () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_1__.__internalProcessCheckoutResponse),
/* harmony export */   __internalSetAfterProcessing: () => (/* binding */ __internalSetAfterProcessing),
/* harmony export */   __internalSetBeforeProcessing: () => (/* binding */ __internalSetBeforeProcessing),
/* harmony export */   __internalSetComplete: () => (/* binding */ __internalSetComplete),
/* harmony export */   __internalSetCustomerId: () => (/* binding */ __internalSetCustomerId),
/* harmony export */   __internalSetExtensionData: () => (/* binding */ __internalSetExtensionData),
/* harmony export */   __internalSetHasError: () => (/* binding */ __internalSetHasError),
/* harmony export */   __internalSetIdle: () => (/* binding */ __internalSetIdle),
/* harmony export */   __internalSetOrderNotes: () => (/* binding */ __internalSetOrderNotes),
/* harmony export */   __internalSetProcessing: () => (/* binding */ __internalSetProcessing),
/* harmony export */   __internalSetRedirectUrl: () => (/* binding */ __internalSetRedirectUrl),
/* harmony export */   __internalSetShouldCreateAccount: () => (/* binding */ __internalSetShouldCreateAccount),
/* harmony export */   __internalSetUseShippingAsBilling: () => (/* binding */ __internalSetUseShippingAsBilling),
/* harmony export */   setPrefersCollection: () => (/* binding */ setPrefersCollection)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./wc_components/js/data/checkout/action-types.ts");
/* harmony import */ var _thunks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thunks */ "./wc_components/js/data/checkout/thunks.ts");
/**
 * Internal dependencies
 */

// `Thunks are functions that can be dispatched, similar to actions creators


/**
 * Set the checkout status to `idle`
 */
const __internalSetIdle = () => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_IDLE
});

/**
 * Set the checkout status to `before_processing`
 */
const __internalSetBeforeProcessing = () => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_BEFORE_PROCESSING
});

/**
 * Set the checkout status to `processing`
 */
const __internalSetProcessing = () => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_PROCESSING
});

/**
 * Set the checkout status to `after_processing`
 */
const __internalSetAfterProcessing = () => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_AFTER_PROCESSING
});

/**
 * Set the checkout status to `complete`
 */
const __internalSetComplete = (data = {}) => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_COMPLETE,
  data
});

/**
 * Set the url to redirect to after checkout completes`
 *
 * @param  redirectUrl the url to redirect to
 */
const __internalSetRedirectUrl = redirectUrl => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_REDIRECT_URL,
  redirectUrl
});

/**
 * Set whether the checkout has an error or not
 *
 * @param  hasError Wether the checkout has an error or not
 */
const __internalSetHasError = (hasError = true) => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_HAS_ERROR,
  hasError
});

/**
 * Used when any of the totals, taxes, shipping, etc need to be calculated, the `calculatingCount` will be increased
 * A `calculatingCount` of 0 means nothing is being updated.
 */
const __internalIncrementCalculating = () => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.INCREMENT_CALCULATING
});

/**
 * When any of the totals, taxes, shipping, etc are done beign calculated, the `calculatingCount` will be decreased
 * A `calculatingCount` of 0 means nothing is being updated.
 */
const __internalDecrementCalculating = () => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.DECREMENT_CALCULATING
});

/**
 * Set the customer id
 *
 * @param  customerId ID of the customer who is checking out.
 */
const __internalSetCustomerId = customerId => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_CUSTOMER_ID,
  customerId
});

/**
 * Whether to use the shipping address as the billing address
 *
 * @param  useShippingAsBilling True if shipping address should be the same as billing, false otherwise
 */
const __internalSetUseShippingAsBilling = useShippingAsBilling => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_USE_SHIPPING_AS_BILLING,
  useShippingAsBilling
});

/**
 * Whether an account should be created for the user while checking out
 *
 * @param  shouldCreateAccount True if an account should be created, false otherwise
 */
const __internalSetShouldCreateAccount = shouldCreateAccount => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_SHOULD_CREATE_ACCOUNT,
  shouldCreateAccount
});

/**
 * Set the notes for the order
 *
 * @param  orderNotes String that represents a note for the order
 */
const __internalSetOrderNotes = orderNotes => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_ORDER_NOTES,
  orderNotes
});
const setPrefersCollection = prefersCollection => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_PREFERS_COLLECTION,
  prefersCollection
});

/**
 * Registers additional data under an extension namespace.
 */
const __internalSetExtensionData = (namespace, extensionData,
// If true, all data under the current extension namespace is replaced. If false, data is appended.
replace = false) => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_EXTENSION_DATA,
  extensionData,
  namespace,
  replace
});

/***/ }),

/***/ "./wc_components/js/data/checkout/constants.ts":
/*!*****************************************************!*\
  !*** ./wc_components/js/data/checkout/constants.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STATUS: () => (/* binding */ STATUS),
/* harmony export */   STORE_KEY: () => (/* binding */ STORE_KEY),
/* harmony export */   checkoutData: () => (/* binding */ checkoutData)
/* harmony export */ });
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @woocommerce/settings */ "@woocommerce/settings");
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

const STORE_KEY = 'wc/store/checkout';
let STATUS = /*#__PURE__*/function (STATUS) {
  STATUS["IDLE"] = "idle";
  STATUS["COMPLETE"] = "complete";
  STATUS["BEFORE_PROCESSING"] = "before_processing";
  STATUS["PROCESSING"] = "processing";
  STATUS["AFTER_PROCESSING"] = "after_processing";
  return STATUS;
}({});
const preloadedCheckoutData = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.getSetting)('checkoutData', {});
const checkoutData = {
  order_id: 0,
  customer_id: 0,
  billing_address: {},
  shipping_address: {},
  ...(preloadedCheckoutData || {})
};

/***/ }),

/***/ "./wc_components/js/data/checkout/default-state.ts":
/*!*********************************************************!*\
  !*** ./wc_components/js/data/checkout/default-state.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultState: () => (/* binding */ defaultState)
/* harmony export */ });
/* harmony import */ var _base_utils_address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/utils/address */ "./wc_components/js/base/utils/address.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./wc_components/js/data/checkout/constants.ts");
/**
 * External dependencies
 */
// import { isSameAddress } from '@woocommerce/base-utils';

/**
 * Internal dependencies
 */

const defaultState = {
  redirectUrl: '',
  status: _constants__WEBPACK_IMPORTED_MODULE_1__.STATUS.PRISTINE,
  hasError: false,
  orderId: _constants__WEBPACK_IMPORTED_MODULE_1__.checkoutData.order_id,
  customerId: _constants__WEBPACK_IMPORTED_MODULE_1__.checkoutData.customer_id,
  calculatingCount: 0,
  orderNotes: '',
  useShippingAsBilling: (0,_base_utils_address__WEBPACK_IMPORTED_MODULE_0__.isSameAddress)(_constants__WEBPACK_IMPORTED_MODULE_1__.checkoutData.billing_address, _constants__WEBPACK_IMPORTED_MODULE_1__.checkoutData.shipping_address),
  shouldCreateAccount: false,
  prefersCollection: undefined,
  extensionData: {}
};

/***/ }),

/***/ "./wc_components/js/data/checkout/index.ts":
/*!*************************************************!*\
  !*** ./wc_components/js/data/checkout/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHECKOUT_STORE_KEY: () => (/* binding */ CHECKOUT_STORE_KEY),
/* harmony export */   config: () => (/* binding */ config)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./wc_components/js/data/checkout/constants.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./wc_components/js/data/checkout/selectors.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./wc_components/js/data/checkout/actions.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "./wc_components/js/data/checkout/reducers.ts");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




const config = {
  reducer: _reducers__WEBPACK_IMPORTED_MODULE_4__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__,
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__,
  __experimentalUseThunks: true
};
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_constants__WEBPACK_IMPORTED_MODULE_1__.STORE_KEY, config);
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);
const CHECKOUT_STORE_KEY = _constants__WEBPACK_IMPORTED_MODULE_1__.STORE_KEY;

/***/ }),

/***/ "./wc_components/js/data/checkout/reducers.ts":
/*!****************************************************!*\
  !*** ./wc_components/js/data/checkout/reducers.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./wc_components/js/data/checkout/action-types.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./wc_components/js/data/checkout/constants.ts");
/* harmony import */ var _default_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-state */ "./wc_components/js/data/checkout/default-state.ts");
/**
 * Internal dependencies
 */



const reducer = (state = _default_state__WEBPACK_IMPORTED_MODULE_2__.defaultState, action) => {
  let newState = state;
  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_IDLE:
      newState = state.status !== _constants__WEBPACK_IMPORTED_MODULE_1__.STATUS.IDLE ? {
        ...state,
        status: _constants__WEBPACK_IMPORTED_MODULE_1__.STATUS.IDLE
      } : state;
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_REDIRECT_URL:
      newState = action.redirectUrl !== undefined && action.redirectUrl !== state.redirectUrl ? {
        ...state,
        redirectUrl: action.redirectUrl
      } : state;
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_COMPLETE:
      newState = {
        ...state,
        status: _constants__WEBPACK_IMPORTED_MODULE_1__.STATUS.COMPLETE,
        redirectUrl: typeof action.data?.redirectUrl === 'string' ? action.data.redirectUrl : state.redirectUrl
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_PROCESSING:
      newState = {
        ...state,
        status: _constants__WEBPACK_IMPORTED_MODULE_1__.STATUS.PROCESSING,
        hasError: false
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_BEFORE_PROCESSING:
      newState = {
        ...state,
        status: _constants__WEBPACK_IMPORTED_MODULE_1__.STATUS.BEFORE_PROCESSING,
        hasError: false
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_AFTER_PROCESSING:
      newState = {
        ...state,
        status: _constants__WEBPACK_IMPORTED_MODULE_1__.STATUS.AFTER_PROCESSING
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_HAS_ERROR:
      newState = {
        ...state,
        hasError: action.hasError,
        status: state.status === _constants__WEBPACK_IMPORTED_MODULE_1__.STATUS.PROCESSING || state.status === _constants__WEBPACK_IMPORTED_MODULE_1__.STATUS.BEFORE_PROCESSING ? _constants__WEBPACK_IMPORTED_MODULE_1__.STATUS.IDLE : state.status
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.INCREMENT_CALCULATING:
      newState = {
        ...state,
        calculatingCount: state.calculatingCount + 1
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.DECREMENT_CALCULATING:
      newState = {
        ...state,
        calculatingCount: Math.max(0, state.calculatingCount - 1)
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_CUSTOMER_ID:
      if (action.customerId !== undefined) {
        newState = {
          ...state,
          customerId: action.customerId
        };
      }
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_USE_SHIPPING_AS_BILLING:
      if (action.useShippingAsBilling !== undefined && action.useShippingAsBilling !== state.useShippingAsBilling) {
        newState = {
          ...state,
          useShippingAsBilling: action.useShippingAsBilling
        };
      }
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_SHOULD_CREATE_ACCOUNT:
      if (action.shouldCreateAccount !== undefined && action.shouldCreateAccount !== state.shouldCreateAccount) {
        newState = {
          ...state,
          shouldCreateAccount: action.shouldCreateAccount
        };
      }
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_PREFERS_COLLECTION:
      if (action.prefersCollection !== undefined && action.prefersCollection !== state.prefersCollection) {
        newState = {
          ...state,
          prefersCollection: action.prefersCollection
        };
      }
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_ORDER_NOTES:
      if (action.orderNotes !== undefined && state.orderNotes !== action.orderNotes) {
        newState = {
          ...state,
          orderNotes: action.orderNotes
        };
      }
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_EXTENSION_DATA:
      if (action.extensionData !== undefined && action.namespace !== undefined) {
        newState = {
          ...state,
          extensionData: {
            ...state.extensionData,
            [action.namespace]: action.replace ? action.extensionData : {
              ...state.extensionData[action.namespace],
              ...action.extensionData
            }
          }
        };
      }
      break;
  }
  return newState;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./wc_components/js/data/checkout/selectors.ts":
/*!*****************************************************!*\
  !*** ./wc_components/js/data/checkout/selectors.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCheckoutStatus: () => (/* binding */ getCheckoutStatus),
/* harmony export */   getCustomerId: () => (/* binding */ getCustomerId),
/* harmony export */   getExtensionData: () => (/* binding */ getExtensionData),
/* harmony export */   getOrderId: () => (/* binding */ getOrderId),
/* harmony export */   getOrderNotes: () => (/* binding */ getOrderNotes),
/* harmony export */   getRedirectUrl: () => (/* binding */ getRedirectUrl),
/* harmony export */   getShouldCreateAccount: () => (/* binding */ getShouldCreateAccount),
/* harmony export */   getUseShippingAsBilling: () => (/* binding */ getUseShippingAsBilling),
/* harmony export */   hasError: () => (/* binding */ hasError),
/* harmony export */   hasOrder: () => (/* binding */ hasOrder),
/* harmony export */   isAfterProcessing: () => (/* binding */ isAfterProcessing),
/* harmony export */   isBeforeProcessing: () => (/* binding */ isBeforeProcessing),
/* harmony export */   isCalculating: () => (/* binding */ isCalculating),
/* harmony export */   isComplete: () => (/* binding */ isComplete),
/* harmony export */   isIdle: () => (/* binding */ isIdle),
/* harmony export */   isProcessing: () => (/* binding */ isProcessing),
/* harmony export */   prefersCollection: () => (/* binding */ prefersCollection)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_utils_shipping_rates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/utils/shipping-rates */ "./wc_components/js/base/utils/shipping-rates.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types */ "./wc_components/js/types/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./wc_components/js/data/checkout/constants.ts");
/* harmony import */ var _cart_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart/constants */ "./wc_components/js/data/cart/constants.ts");
/**
 * External dependencies
 */

// import { hasCollectableRate } from '@woocommerce/base-utils';


// import { isString, objectHasProp } from '@woocommerce/types';


/**
 * Internal dependencies
 */


const getCustomerId = state => {
  return state.customerId;
};
const getOrderId = state => {
  return state.orderId;
};
const getOrderNotes = state => {
  return state.orderNotes;
};
const getRedirectUrl = state => {
  return state.redirectUrl;
};
const getUseShippingAsBilling = state => {
  return state.useShippingAsBilling;
};
const getExtensionData = state => {
  return state.extensionData;
};
const getShouldCreateAccount = state => {
  return state.shouldCreateAccount;
};
const getCheckoutStatus = state => {
  return state.status;
};
const hasError = state => {
  return state.hasError;
};
const hasOrder = state => {
  return !!state.orderId;
};
const isComplete = state => {
  return state.status === _constants__WEBPACK_IMPORTED_MODULE_3__.STATUS.COMPLETE;
};
const isIdle = state => {
  return state.status === _constants__WEBPACK_IMPORTED_MODULE_3__.STATUS.IDLE;
};
const isBeforeProcessing = state => {
  return state.status === _constants__WEBPACK_IMPORTED_MODULE_3__.STATUS.BEFORE_PROCESSING;
};
const isAfterProcessing = state => {
  return state.status === _constants__WEBPACK_IMPORTED_MODULE_3__.STATUS.AFTER_PROCESSING;
};
const isProcessing = state => {
  return state.status === _constants__WEBPACK_IMPORTED_MODULE_3__.STATUS.PROCESSING;
};
const isCalculating = state => {
  return state.calculatingCount > 0;
};
const prefersCollection = state => {
  if (typeof state.prefersCollection === 'undefined') {
    const shippingRates = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_cart_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_KEY).getShippingRates();
    if (!shippingRates || !shippingRates.length) {
      return false;
    }
    const selectedRate = shippingRates[0].shipping_rates.find(rate => rate.selected);
    if ((0,_types__WEBPACK_IMPORTED_MODULE_2__.objectHasProp)(selectedRate, 'method_id') && (0,_types__WEBPACK_IMPORTED_MODULE_2__.isString)(selectedRate.method_id)) {
      return (0,_base_utils_shipping_rates__WEBPACK_IMPORTED_MODULE_1__.hasCollectableRate)(selectedRate?.method_id);
    }
  }
  return state.prefersCollection;
};

/***/ }),

/***/ "./wc_components/js/data/checkout/thunks.ts":
/*!**************************************************!*\
  !*** ./wc_components/js/data/checkout/thunks.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __internalEmitAfterProcessingEvents: () => (/* binding */ __internalEmitAfterProcessingEvents),
/* harmony export */   __internalEmitValidateEvent: () => (/* binding */ __internalEmitValidateEvent),
/* harmony export */   __internalProcessCheckoutResponse: () => (/* binding */ __internalProcessCheckoutResponse)
/* harmony export */ });
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _payment_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../payment/constants */ "./wc_components/js/data/payment/constants.ts");
/* harmony import */ var _utils_notices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/notices */ "./wc_components/js/utils/notices.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./wc_components/js/data/checkout/utils.ts");
/* harmony import */ var _base_context_providers_cart_checkout_checkout_events_event_emit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base/context/providers/cart-checkout/checkout-events/event-emit */ "./wc_components/js/base/context/providers/cart-checkout/checkout-events/event-emit.ts");
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */




/**
 * Based on the result of the payment, update the redirect url,
 * set the payment processing response in the checkout data store
 * and change the status to AFTER_PROCESSING
 */
const __internalProcessCheckoutResponse = response => {
  return ({
    dispatch
  }) => {
    const paymentResult = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getPaymentResultFromCheckoutResponse)(response);
    dispatch.__internalSetRedirectUrl(paymentResult?.redirectUrl || '');
    // The local `dispatch` here is bound  to the actions of the data store. We need to use the global dispatch here
    // to dispatch an action on a different store.
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(_payment_constants__WEBPACK_IMPORTED_MODULE_2__.STORE_KEY).__internalSetPaymentResult(paymentResult);
    dispatch.__internalSetAfterProcessing();
  };
};

/**
 * Emit the CHECKOUT_VALIDATION event and process all
 * registered observers
 */
const __internalEmitValidateEvent = ({
  observers,
  setValidationErrors // TODO: Fix this type after we move to validation store
}) => {
  return ({
    dispatch,
    registry
  }) => {
    const {
      createErrorNotice
    } = registry.dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_0__.store);
    (0,_utils_notices__WEBPACK_IMPORTED_MODULE_3__.removeNoticesByStatus)('error');
    (0,_base_context_providers_cart_checkout_checkout_events_event_emit__WEBPACK_IMPORTED_MODULE_5__.emitEvent)(observers, _base_context_providers_cart_checkout_checkout_events_event_emit__WEBPACK_IMPORTED_MODULE_5__.EVENTS.CHECKOUT_VALIDATION, {}).then(response => {
      if (response !== true) {
        if (Array.isArray(response)) {
          response.forEach(({
            errorMessage,
            validationErrors,
            context = 'wc/checkout'
          }) => {
            createErrorNotice(errorMessage, {
              context
            });
            setValidationErrors(validationErrors);
          });
        }
        dispatch.__internalSetIdle();
        dispatch.__internalSetHasError();
      } else {
        dispatch.__internalSetProcessing();
      }
    });
  };
};

/**
 * Emit the CHECKOUT_FAIL if the checkout contains an error,
 * or the CHECKOUT_SUCCESS if not. Set checkout errors according
 * to the observer responses
 */
const __internalEmitAfterProcessingEvents = ({
  observers,
  notices
}) => {
  return ({
    select,
    dispatch,
    registry
  }) => {
    const {
      createErrorNotice
    } = registry.dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_0__.store);
    const data = {
      redirectUrl: select.getRedirectUrl(),
      orderId: select.getOrderId(),
      customerId: select.getCustomerId(),
      orderNotes: select.getOrderNotes(),
      processingResponse: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)(_payment_constants__WEBPACK_IMPORTED_MODULE_2__.STORE_KEY).getPaymentResult()
    };
    if (select.hasError()) {
      // allow payment methods or other things to customize the error
      // with a fallback if nothing customizes it.
      (0,_base_context_providers_cart_checkout_checkout_events_event_emit__WEBPACK_IMPORTED_MODULE_5__.emitEventWithAbort)(observers, _base_context_providers_cart_checkout_checkout_events_event_emit__WEBPACK_IMPORTED_MODULE_5__.EVENTS.CHECKOUT_FAIL, data).then(observerResponses => {
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.runCheckoutFailObservers)({
          observerResponses,
          notices,
          dispatch,
          createErrorNotice,
          data
        });
      });
    } else {
      (0,_base_context_providers_cart_checkout_checkout_events_event_emit__WEBPACK_IMPORTED_MODULE_5__.emitEventWithAbort)(observers, _base_context_providers_cart_checkout_checkout_events_event_emit__WEBPACK_IMPORTED_MODULE_5__.EVENTS.CHECKOUT_SUCCESS, data).then(observerResponses => {
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.runCheckoutSuccessObservers)({
          observerResponses,
          dispatch,
          createErrorNotice
        });
      });
    }
  };
};

/***/ }),

/***/ "./wc_components/js/data/checkout/utils.ts":
/*!*************************************************!*\
  !*** ./wc_components/js/data/checkout/utils.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPaymentResultFromCheckoutResponse: () => (/* binding */ getPaymentResultFromCheckoutResponse),
/* harmony export */   handleErrorResponse: () => (/* binding */ handleErrorResponse),
/* harmony export */   runCheckoutFailObservers: () => (/* binding */ runCheckoutFailObservers),
/* harmony export */   runCheckoutSuccessObservers: () => (/* binding */ runCheckoutSuccessObservers)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./wc_components/js/types/index.ts");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_context_event_emit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/context/event-emit */ "./wc_components/js/base/context/event-emit/index.ts");
/**
 * External dependencies
 */
// import { isString, isObject } from '@woocommerce/types';



// import type { PaymentResult, CheckoutResponse } from '@woocommerce/types';

/**
 * Internal dependencies
 */

/**
 * Based on the given observers, create Error Notices where necessary
 * and return the error response of the last registered observer
 */
const handleErrorResponse = ({
  observerResponses,
  createErrorNotice
}) => {
  let errorResponse = null;
  observerResponses.forEach(response => {
    if ((0,_base_context_event_emit__WEBPACK_IMPORTED_MODULE_3__.isErrorResponse)(response) || (0,_base_context_event_emit__WEBPACK_IMPORTED_MODULE_3__.isFailResponse)(response)) {
      if (response.message && (0,_types__WEBPACK_IMPORTED_MODULE_0__.isString)(response.message)) {
        const errorOptions = response.messageContext && (0,_types__WEBPACK_IMPORTED_MODULE_0__.isString)(response.messageContext) ?
        // The `as string` is OK here because of the type guard above.
        {
          context: response.messageContext
        } : undefined;
        errorResponse = response;
        createErrorNotice(response.message, errorOptions);
      }
    }
  });
  return errorResponse;
};

/**
 * This functions runs after the CHECKOUT_FAIL event has been triggered and
 * all observers have been processed. It sets any Error Notices and the status of the Checkout
 * based on the observer responses
 */
const runCheckoutFailObservers = ({
  observerResponses,
  notices,
  dispatch,
  createErrorNotice,
  data
}) => {
  const errorResponse = handleErrorResponse({
    observerResponses,
    createErrorNotice
  });
  if (errorResponse !== null) {
    // irrecoverable error so set complete
    if (!(0,_base_context_event_emit__WEBPACK_IMPORTED_MODULE_3__.shouldRetry)(errorResponse)) {
      dispatch.__internalSetComplete(errorResponse);
    } else {
      dispatch.__internalSetIdle();
    }
  } else {
    const hasErrorNotices = notices.checkoutNotices.some(notice => notice.status === 'error') || notices.expressPaymentNotices.some(notice => notice.status === 'error') || notices.paymentNotices.some(notice => notice.status === 'error');
    if (!hasErrorNotices) {
      // no error handling in place by anything so let's fall
      // back to default
      const message = data.processingResponse?.message || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Something went wrong. Please contact us to get assistance.', 'woo-gutenberg-products-block');
      createErrorNotice(message, {
        id: 'checkout',
        context: 'wc/checkout'
      });
    }
    dispatch.__internalSetIdle();
  }
};

/**
 * This functions runs after the CHECKOUT_SUCCESS event has been triggered and
 * all observers have been processed. It sets any Error Notices and the status of the Checkout
 * based on the observer responses
 */
const runCheckoutSuccessObservers = ({
  observerResponses,
  dispatch,
  createErrorNotice
}) => {
  let successResponse = null;
  let errorResponse = null;
  observerResponses.forEach(response => {
    if ((0,_base_context_event_emit__WEBPACK_IMPORTED_MODULE_3__.isSuccessResponse)(response)) {
      // the last observer response always "wins" for success.
      successResponse = response;
    }
    if ((0,_base_context_event_emit__WEBPACK_IMPORTED_MODULE_3__.isErrorResponse)(response) || (0,_base_context_event_emit__WEBPACK_IMPORTED_MODULE_3__.isFailResponse)(response)) {
      errorResponse = response;
    }
  });
  if (successResponse && !errorResponse) {
    dispatch.__internalSetComplete(successResponse);
  } else if ((0,_types__WEBPACK_IMPORTED_MODULE_0__.isObject)(errorResponse)) {
    if (errorResponse.message && (0,_types__WEBPACK_IMPORTED_MODULE_0__.isString)(errorResponse.message)) {
      const errorOptions = errorResponse.messageContext && (0,_types__WEBPACK_IMPORTED_MODULE_0__.isString)(errorResponse.messageContext) ? {
        context: errorResponse.messageContext
      } : undefined;
      createErrorNotice(errorResponse.message, errorOptions);
    }
    if (!(0,_base_context_event_emit__WEBPACK_IMPORTED_MODULE_3__.shouldRetry)(errorResponse)) {
      dispatch.__internalSetComplete(errorResponse);
    } else {
      // this will set an error which will end up
      // triggering the onCheckoutFail emitter.
      // and then setting checkout to IDLE state.
      dispatch.__internalSetHasError(true);
    }
  } else {
    // nothing hooked in had any response type so let's just consider successful.
    dispatch.__internalSetComplete();
  }
};

/**
 * Prepares the payment_result data from the server checkout endpoint response.
 */
const getPaymentResultFromCheckoutResponse = response => {
  const paymentResult = {
    message: '',
    paymentStatus: 'not set',
    redirectUrl: '',
    paymentDetails: {}
  };

  // payment_result is present in successful responses.
  if ('payment_result' in response) {
    paymentResult.paymentStatus = response.payment_result.payment_status;
    paymentResult.redirectUrl = response.payment_result.redirect_url;
    if (response.payment_result.hasOwnProperty('payment_details') && Array.isArray(response.payment_result.payment_details)) {
      response.payment_result.payment_details.forEach(({
        key,
        value
      }) => {
        paymentResult.paymentDetails[key] = (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__.decodeEntities)(value);
      });
    }
  }

  // message is present in error responses.
  if ('message' in response) {
    paymentResult.message = (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__.decodeEntities)(response.message);
  }

  // If there was an error code but no message, set a default message.
  if (!paymentResult.message && 'data' in response && 'status' in response.data && response.data.status > 299) {
    paymentResult.message = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Something went wrong. Please contact us to get assistance.', 'woo-gutenberg-products-block');
  }
  return paymentResult;
};

/***/ }),

/***/ "./wc_components/js/data/constants.ts":
/*!********************************************!*\
  !*** ./wc_components/js/data/constants.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_BLOCK_NAMESPACE: () => (/* binding */ API_BLOCK_NAMESPACE),
/* harmony export */   EMPTY_CART_COUPONS: () => (/* binding */ EMPTY_CART_COUPONS),
/* harmony export */   EMPTY_CART_CROSS_SELLS: () => (/* binding */ EMPTY_CART_CROSS_SELLS),
/* harmony export */   EMPTY_CART_ERRORS: () => (/* binding */ EMPTY_CART_ERRORS),
/* harmony export */   EMPTY_CART_FEES: () => (/* binding */ EMPTY_CART_FEES),
/* harmony export */   EMPTY_CART_ITEMS: () => (/* binding */ EMPTY_CART_ITEMS),
/* harmony export */   EMPTY_CART_ITEM_ERRORS: () => (/* binding */ EMPTY_CART_ITEM_ERRORS),
/* harmony export */   EMPTY_EXTENSIONS: () => (/* binding */ EMPTY_EXTENSIONS),
/* harmony export */   EMPTY_PAYMENT_METHODS: () => (/* binding */ EMPTY_PAYMENT_METHODS),
/* harmony export */   EMPTY_PAYMENT_REQUIREMENTS: () => (/* binding */ EMPTY_PAYMENT_REQUIREMENTS),
/* harmony export */   EMPTY_SHIPPING_RATES: () => (/* binding */ EMPTY_SHIPPING_RATES),
/* harmony export */   EMPTY_TAX_LINES: () => (/* binding */ EMPTY_TAX_LINES)
/* harmony export */ });
/**
 * REST API namespace for rest requests against blocks namespace.
 *
 * @member  {string}
 */
const API_BLOCK_NAMESPACE = 'wc/blocks';
const EMPTY_CART_COUPONS = [];
const EMPTY_CART_ITEMS = [];
const EMPTY_CART_CROSS_SELLS = [];
const EMPTY_CART_FEES = [];
const EMPTY_CART_ITEM_ERRORS = [];
const EMPTY_CART_ERRORS = [];
const EMPTY_SHIPPING_RATES = [];
const EMPTY_PAYMENT_METHODS = [];
const EMPTY_PAYMENT_REQUIREMENTS = [];
const EMPTY_EXTENSIONS = {};
const EMPTY_TAX_LINES = [];

/***/ }),

/***/ "./wc_components/js/data/index.ts":
/*!****************************************!*\
  !*** ./wc_components/js/data/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_BLOCK_NAMESPACE: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.API_BLOCK_NAMESPACE),
/* harmony export */   CART_STORE_KEY: () => (/* reexport safe */ _cart__WEBPACK_IMPORTED_MODULE_0__.CART_STORE_KEY),
/* harmony export */   CHECKOUT_STORE_KEY: () => (/* reexport safe */ _checkout__WEBPACK_IMPORTED_MODULE_1__.CHECKOUT_STORE_KEY),
/* harmony export */   EMPTY_CART_COUPONS: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.EMPTY_CART_COUPONS),
/* harmony export */   EMPTY_CART_CROSS_SELLS: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.EMPTY_CART_CROSS_SELLS),
/* harmony export */   EMPTY_CART_ERRORS: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.EMPTY_CART_ERRORS),
/* harmony export */   EMPTY_CART_FEES: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.EMPTY_CART_FEES),
/* harmony export */   EMPTY_CART_ITEMS: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.EMPTY_CART_ITEMS),
/* harmony export */   EMPTY_CART_ITEM_ERRORS: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.EMPTY_CART_ITEM_ERRORS),
/* harmony export */   EMPTY_EXTENSIONS: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.EMPTY_EXTENSIONS),
/* harmony export */   EMPTY_PAYMENT_METHODS: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.EMPTY_PAYMENT_METHODS),
/* harmony export */   EMPTY_PAYMENT_REQUIREMENTS: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.EMPTY_PAYMENT_REQUIREMENTS),
/* harmony export */   EMPTY_SHIPPING_RATES: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.EMPTY_SHIPPING_RATES),
/* harmony export */   EMPTY_TAX_LINES: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.EMPTY_TAX_LINES),
/* harmony export */   PAYMENT_STORE_KEY: () => (/* reexport safe */ _payment__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_STORE_KEY),
/* harmony export */   VALIDATION_STORE_KEY: () => (/* reexport safe */ _validation__WEBPACK_IMPORTED_MODULE_3__.VALIDATION_STORE_KEY),
/* harmony export */   getErrorDetails: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_5__.getErrorDetails),
/* harmony export */   processErrorResponse: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_5__.processErrorResponse)
/* harmony export */ });
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ "./wc_components/js/data/cart/index.ts");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout */ "./wc_components/js/data/checkout/index.ts");
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment */ "./wc_components/js/data/payment/index.ts");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation */ "./wc_components/js/data/validation/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./wc_components/js/data/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./wc_components/js/data/utils/index.ts");
/**
 * External dependencies
 */
// import '@wordpress/notices';

/**
 * Internal dependencies
 */


// export { COLLECTIONS_STORE_KEY } from './collections';

// export { QUERY_STATE_STORE_KEY } from './query-state';
// export { SCHEMA_STORE_KEY } from './schema';
// export { STORE_NOTICES_STORE_KEY } from './store-notices';




/***/ }),

/***/ "./wc_components/js/data/payment/action-types.ts":
/*!*******************************************************!*\
  !*** ./wc_components/js/data/payment/action-types.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTION_TYPES: () => (/* binding */ ACTION_TYPES)
/* harmony export */ });
let ACTION_TYPES = /*#__PURE__*/function (ACTION_TYPES) {
  ACTION_TYPES["SET_PAYMENT_IDLE"] = "SET_PAYMENT_IDLE";
  ACTION_TYPES["SET_EXPRESS_PAYMENT_STARTED"] = "SET_EXPRESS_PAYMENT_STARTED";
  ACTION_TYPES["SET_PAYMENT_READY"] = "SET_PAYMENT_READY";
  ACTION_TYPES["SET_PAYMENT_PROCESSING"] = "SET_PAYMENT_PROCESSING";
  ACTION_TYPES["SET_PAYMENT_ERROR"] = "SET_PAYMENT_ERROR";
  ACTION_TYPES["SET_PAYMENT_METHODS_INITIALIZED"] = "SET_PAYMENT_METHODS_INITIALIZED";
  ACTION_TYPES["SET_EXPRESS_PAYMENT_METHODS_INITIALIZED"] = "SET_EXPRESS_PAYMENT_METHODS_INITIALIZED";
  ACTION_TYPES["SET_ACTIVE_PAYMENT_METHOD"] = "SET_ACTIVE_PAYMENT_METHOD";
  ACTION_TYPES["SET_SHOULD_SAVE_PAYMENT_METHOD"] = "SET_SHOULD_SAVE_PAYMENT_METHOD";
  ACTION_TYPES["SET_AVAILABLE_PAYMENT_METHODS"] = "SET_AVAILABLE_PAYMENT_METHODS";
  ACTION_TYPES["SET_AVAILABLE_EXPRESS_PAYMENT_METHODS"] = "SET_AVAILABLE_EXPRESS_PAYMENT_METHODS";
  ACTION_TYPES["REMOVE_AVAILABLE_PAYMENT_METHOD"] = "REMOVE_AVAILABLE_PAYMENT_METHOD";
  ACTION_TYPES["REMOVE_AVAILABLE_EXPRESS_PAYMENT_METHOD"] = "REMOVE_AVAILABLE_EXPRESS_PAYMENT_METHOD";
  ACTION_TYPES["INITIALIZE_PAYMENT_METHODS"] = "INITIALIZE_PAYMENT_METHODS";
  ACTION_TYPES["SET_PAYMENT_METHOD_DATA"] = "SET_PAYMENT_METHOD_DATA";
  ACTION_TYPES["SET_PAYMENT_RESULT"] = "SET_PAYMENT_RESULT";
  return ACTION_TYPES;
}({});

/***/ }),

/***/ "./wc_components/js/data/payment/actions.ts":
/*!**************************************************!*\
  !*** ./wc_components/js/data/payment/actions.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __internalEmitPaymentProcessingEvent: () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_3__.__internalEmitPaymentProcessingEvent),
/* harmony export */   __internalRemoveAvailableExpressPaymentMethod: () => (/* binding */ __internalRemoveAvailableExpressPaymentMethod),
/* harmony export */   __internalRemoveAvailablePaymentMethod: () => (/* binding */ __internalRemoveAvailablePaymentMethod),
/* harmony export */   __internalSetActivePaymentMethod: () => (/* binding */ __internalSetActivePaymentMethod),
/* harmony export */   __internalSetAvailableExpressPaymentMethods: () => (/* binding */ __internalSetAvailableExpressPaymentMethods),
/* harmony export */   __internalSetAvailablePaymentMethods: () => (/* binding */ __internalSetAvailablePaymentMethods),
/* harmony export */   __internalSetExpressPaymentError: () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_3__.__internalSetExpressPaymentError),
/* harmony export */   __internalSetExpressPaymentMethodsInitialized: () => (/* binding */ __internalSetExpressPaymentMethodsInitialized),
/* harmony export */   __internalSetExpressPaymentStarted: () => (/* binding */ __internalSetExpressPaymentStarted),
/* harmony export */   __internalSetPaymentError: () => (/* binding */ __internalSetPaymentError),
/* harmony export */   __internalSetPaymentIdle: () => (/* binding */ __internalSetPaymentIdle),
/* harmony export */   __internalSetPaymentMethodData: () => (/* binding */ __internalSetPaymentMethodData),
/* harmony export */   __internalSetPaymentMethodsInitialized: () => (/* binding */ __internalSetPaymentMethodsInitialized),
/* harmony export */   __internalSetPaymentProcessing: () => (/* binding */ __internalSetPaymentProcessing),
/* harmony export */   __internalSetPaymentReady: () => (/* binding */ __internalSetPaymentReady),
/* harmony export */   __internalSetPaymentResult: () => (/* binding */ __internalSetPaymentResult),
/* harmony export */   __internalSetShouldSavePaymentMethod: () => (/* binding */ __internalSetShouldSavePaymentMethod),
/* harmony export */   __internalUpdateAvailablePaymentMethods: () => (/* binding */ __internalUpdateAvailablePaymentMethods)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./wc_components/js/data/payment/action-types.ts");
/* harmony import */ var _utils_check_payment_methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/check-payment-methods */ "./wc_components/js/data/payment/utils/check-payment-methods.ts");
/* harmony import */ var _utils_set_default_payment_method__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/set-default-payment-method */ "./wc_components/js/data/payment/utils/set-default-payment-method.ts");
/* harmony import */ var _thunks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thunks */ "./wc_components/js/data/payment/thunks.ts");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




// `Thunks are functions that can be dispatched, similar to actions creators

const __internalSetPaymentIdle = () => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_PAYMENT_IDLE
});
const __internalSetExpressPaymentStarted = () => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_EXPRESS_PAYMENT_STARTED
});
const __internalSetPaymentProcessing = () => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_PAYMENT_PROCESSING
});
const __internalSetPaymentError = () => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_PAYMENT_ERROR
});
const __internalSetPaymentReady = () => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_PAYMENT_READY
});

/**
 * Set whether the payment methods have been initialised or not
 *
 * @param  initialized True if the `checkCanPay` methods have been run on all available payment methods
 */
const __internalSetPaymentMethodsInitialized = initialized => {
  return async ({
    select,
    dispatch
  }) => {
    // If the currently selected method is not in this new list, then we need to select a new one, or select a default.
    const methods = select.getAvailablePaymentMethods();
    if (initialized) {
      await (0,_utils_set_default_payment_method__WEBPACK_IMPORTED_MODULE_2__.setDefaultPaymentMethod)(methods);
    }
    dispatch({
      type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_PAYMENT_METHODS_INITIALIZED,
      initialized
    });
  };
};

/**
 * Set whether the express payment methods have been initialised or not
 *
 * @param  initialized True if the `checkCanPay` methods have been run on all express available payment methods
 */
const __internalSetExpressPaymentMethodsInitialized = initialized => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_EXPRESS_PAYMENT_METHODS_INITIALIZED,
  initialized
});

/**
 * Set a flag for whether to save the current payment method for next time
 *
 * @param  shouldSavePaymentMethod Whether to save the current payment method for next time
 */
const __internalSetShouldSavePaymentMethod = shouldSavePaymentMethod => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_SHOULD_SAVE_PAYMENT_METHOD,
  shouldSavePaymentMethod
});

/**
 * Set the payment method the user has chosen. This should change every time the user selects a new payment method
 *
 * @param  activePaymentMethod The name of the payment method selected by the user
 * @param  paymentMethodData   The extra data associated with a payment
 */
const __internalSetActivePaymentMethod = (activePaymentMethod, paymentMethodData = {}) => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_ACTIVE_PAYMENT_METHOD,
  activePaymentMethod,
  paymentMethodData
});

/**
 * Set the extra data for the chosen payment method
 *
 * @param  paymentMethodData The extra data associated with a payment
 */
const __internalSetPaymentMethodData = (paymentMethodData = {}) => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_PAYMENT_METHOD_DATA,
  paymentMethodData
});

/**
 * Store the result of the payment attempt from the /checkout StoreApi call
 *
 * @param  data The result of the payment attempt through the StoreApi /checkout endpoints
 */
const __internalSetPaymentResult = data => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_PAYMENT_RESULT,
  data
});

/**
 * Set the available payment methods.
 * An available payment method is one that has been validated and can make a payment.
 */
const __internalSetAvailablePaymentMethods = paymentMethods => {
  return async ({
    dispatch,
    select
  }) => {
    // If the currently selected method is not in this new list, then we need to select a new one, or select a default.
    const activePaymentMethod = select.getActivePaymentMethod();
    if (!(activePaymentMethod in paymentMethods)) {
      await (0,_utils_set_default_payment_method__WEBPACK_IMPORTED_MODULE_2__.setDefaultPaymentMethod)(paymentMethods);
    }
    dispatch({
      type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_AVAILABLE_PAYMENT_METHODS,
      paymentMethods
    });
  };
};

/**
 * Set the available express payment methods.
 * An available payment method is one that has been validated and can make a payment.
 */
const __internalSetAvailableExpressPaymentMethods = paymentMethods => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_AVAILABLE_EXPRESS_PAYMENT_METHODS,
  paymentMethods
});

/**
 * Remove a payment method name from the available payment methods.
 * This is called when a payment method is removed from the registry.
 */
const __internalRemoveAvailablePaymentMethod = name => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REMOVE_AVAILABLE_PAYMENT_METHOD,
  name
});

/**
 * Remove an express payment method name from the available payment methods.
 * This is called when an express payment method is removed from the registry.
 */
const __internalRemoveAvailableExpressPaymentMethod = name => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REMOVE_AVAILABLE_EXPRESS_PAYMENT_METHOD,
  name
});

/**
 * The store is initialised once we have checked whether the payment methods registered can pay or not
 */
function __internalUpdateAvailablePaymentMethods() {
  return async ({
    select,
    dispatch
  }) => {
    const expressRegistered = await (0,_utils_check_payment_methods__WEBPACK_IMPORTED_MODULE_1__.checkPaymentMethodsCanPay)(true);
    const registered = await (0,_utils_check_payment_methods__WEBPACK_IMPORTED_MODULE_1__.checkPaymentMethodsCanPay)(false);
    const {
      paymentMethodsInitialized,
      expressPaymentMethodsInitialized
    } = select;
    if (registered && !paymentMethodsInitialized()) {
      dispatch(__internalSetPaymentMethodsInitialized(true));
    }
    if (expressRegistered && !expressPaymentMethodsInitialized()) {
      dispatch(__internalSetExpressPaymentMethodsInitialized(true));
    }
  };
}

/***/ }),

/***/ "./wc_components/js/data/payment/constants.ts":
/*!****************************************************!*\
  !*** ./wc_components/js/data/payment/constants.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STATUS: () => (/* binding */ STATUS),
/* harmony export */   STORE_KEY: () => (/* binding */ STORE_KEY)
/* harmony export */ });
const STORE_KEY = 'wc/store/payment';
let STATUS = /*#__PURE__*/function (STATUS) {
  STATUS["IDLE"] = "idle";
  STATUS["EXPRESS_STARTED"] = "express_started";
  STATUS["PROCESSING"] = "processing";
  STATUS["READY"] = "ready";
  STATUS["ERROR"] = "has_error";
  return STATUS;
}({});

/***/ }),

/***/ "./wc_components/js/data/payment/default-state.ts":
/*!********************************************************!*\
  !*** ./wc_components/js/data/payment/default-state.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultPaymentState: () => (/* binding */ defaultPaymentState)
/* harmony export */ });
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @woocommerce/settings */ "@woocommerce/settings");
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./wc_components/js/data/payment/constants.ts");
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const defaultPaymentState = {
  status: _constants__WEBPACK_IMPORTED_MODULE_1__.STATUS.IDLE,
  activePaymentMethod: '',
  activeSavedToken: '',
  availablePaymentMethods: {},
  availableExpressPaymentMethods: {},
  savedPaymentMethods: (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.getSetting)('customerPaymentMethods', {}),
  paymentMethodData: {},
  paymentResult: null,
  paymentMethodsInitialized: false,
  expressPaymentMethodsInitialized: false,
  shouldSavePaymentMethod: false
};

/***/ }),

/***/ "./wc_components/js/data/payment/index.ts":
/*!************************************************!*\
  !*** ./wc_components/js/data/payment/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PAYMENT_STORE_KEY: () => (/* binding */ PAYMENT_STORE_KEY),
/* harmony export */   config: () => (/* binding */ config)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./wc_components/js/data/payment/reducers.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./wc_components/js/data/payment/constants.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./wc_components/js/data/payment/actions.ts");
/* harmony import */ var _shared_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared-controls */ "./wc_components/js/data/shared-controls.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectors */ "./wc_components/js/data/payment/selectors.ts");
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */





const config = {
  reducer: _reducers__WEBPACK_IMPORTED_MODULE_2__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_6__,
  actions: _actions__WEBPACK_IMPORTED_MODULE_4__,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  controls: {
    ..._wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__.controls,
    ..._shared_controls__WEBPACK_IMPORTED_MODULE_5__.controls
  },
  __experimentalUseThunks: true
};
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_constants__WEBPACK_IMPORTED_MODULE_3__.STORE_KEY, config);
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);
const PAYMENT_STORE_KEY = _constants__WEBPACK_IMPORTED_MODULE_3__.STORE_KEY;

/***/ }),

/***/ "./wc_components/js/data/payment/reducers.ts":
/*!***************************************************!*\
  !*** ./wc_components/js/data/payment/reducers.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./wc_components/js/types/index.ts");
/* harmony import */ var _default_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-state */ "./wc_components/js/data/payment/default-state.ts");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-types */ "./wc_components/js/data/payment/action-types.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./wc_components/js/data/payment/constants.ts");
/**
 * External dependencies
 */

// import { objectHasProp, PaymentResult } from '@woocommerce/types';


/**
 * Internal dependencies
 */



const reducer = (state = _default_state__WEBPACK_IMPORTED_MODULE_1__.defaultPaymentState, action) => {
  let newState = state;
  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.SET_PAYMENT_IDLE:
      newState = {
        ...state,
        status: _constants__WEBPACK_IMPORTED_MODULE_3__.STATUS.IDLE
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.SET_EXPRESS_PAYMENT_STARTED:
      newState = {
        ...state,
        status: _constants__WEBPACK_IMPORTED_MODULE_3__.STATUS.EXPRESS_STARTED
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.SET_PAYMENT_PROCESSING:
      newState = {
        ...state,
        status: _constants__WEBPACK_IMPORTED_MODULE_3__.STATUS.PROCESSING
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.SET_PAYMENT_READY:
      newState = {
        ...state,
        status: _constants__WEBPACK_IMPORTED_MODULE_3__.STATUS.READY
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.SET_PAYMENT_ERROR:
      newState = {
        ...state,
        status: _constants__WEBPACK_IMPORTED_MODULE_3__.STATUS.ERROR
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.SET_SHOULD_SAVE_PAYMENT_METHOD:
      newState = {
        ...state,
        shouldSavePaymentMethod: action.shouldSavePaymentMethod
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.SET_PAYMENT_METHOD_DATA:
      newState = {
        ...state,
        paymentMethodData: action.paymentMethodData
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.SET_PAYMENT_RESULT:
      newState = {
        ...state,
        paymentResult: action.data
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.REMOVE_AVAILABLE_PAYMENT_METHOD:
      const previousAvailablePaymentMethods = {
        ...state.availablePaymentMethods
      };
      delete previousAvailablePaymentMethods[action.name];
      newState = {
        ...state,
        availablePaymentMethods: {
          ...previousAvailablePaymentMethods
        }
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.REMOVE_AVAILABLE_EXPRESS_PAYMENT_METHOD:
      const previousAvailableExpressPaymentMethods = {
        ...state.availablePaymentMethods
      };
      delete previousAvailableExpressPaymentMethods[action.name];
      newState = {
        ...state,
        availableExpressPaymentMethods: {
          ...previousAvailableExpressPaymentMethods
        }
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.SET_PAYMENT_METHODS_INITIALIZED:
      newState = {
        ...state,
        paymentMethodsInitialized: action.initialized
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.SET_EXPRESS_PAYMENT_METHODS_INITIALIZED:
      newState = {
        ...state,
        expressPaymentMethodsInitialized: action.initialized
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.SET_AVAILABLE_PAYMENT_METHODS:
      newState = {
        ...state,
        availablePaymentMethods: action.paymentMethods
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.SET_AVAILABLE_EXPRESS_PAYMENT_METHODS:
      newState = {
        ...state,
        availableExpressPaymentMethods: action.paymentMethods
      };
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.SET_ACTIVE_PAYMENT_METHOD:
      const activeSavedToken = typeof state.paymentMethodData === 'object' && (0,_types__WEBPACK_IMPORTED_MODULE_0__.objectHasProp)(action.paymentMethodData, 'token') ? action.paymentMethodData.token + '' : '';
      newState = {
        ...state,
        activeSavedToken,
        activePaymentMethod: action.activePaymentMethod,
        paymentMethodData: action.paymentMethodData || state.paymentMethodData
      };
      break;
    default:
      return newState;
  }
  return newState;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./wc_components/js/data/payment/selectors.ts":
/*!****************************************************!*\
  !*** ./wc_components/js/data/payment/selectors.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expressPaymentMethodsInitialized: () => (/* binding */ expressPaymentMethodsInitialized),
/* harmony export */   getActivePaymentMethod: () => (/* binding */ getActivePaymentMethod),
/* harmony export */   getActiveSavedPaymentMethods: () => (/* binding */ getActiveSavedPaymentMethods),
/* harmony export */   getActiveSavedToken: () => (/* binding */ getActiveSavedToken),
/* harmony export */   getAvailableExpressPaymentMethods: () => (/* binding */ getAvailableExpressPaymentMethods),
/* harmony export */   getAvailablePaymentMethods: () => (/* binding */ getAvailablePaymentMethods),
/* harmony export */   getCurrentStatus: () => (/* binding */ getCurrentStatus),
/* harmony export */   getIncompatiblePaymentMethods: () => (/* binding */ getIncompatiblePaymentMethods),
/* harmony export */   getPaymentMethodData: () => (/* binding */ getPaymentMethodData),
/* harmony export */   getPaymentResult: () => (/* binding */ getPaymentResult),
/* harmony export */   getSavedPaymentMethods: () => (/* binding */ getSavedPaymentMethods),
/* harmony export */   getShouldSavePaymentMethod: () => (/* binding */ getShouldSavePaymentMethod),
/* harmony export */   getState: () => (/* binding */ getState),
/* harmony export */   hasPaymentError: () => (/* binding */ hasPaymentError),
/* harmony export */   isExpressPaymentMethodActive: () => (/* binding */ isExpressPaymentMethodActive),
/* harmony export */   isExpressPaymentStarted: () => (/* binding */ isExpressPaymentStarted),
/* harmony export */   isPaymentFailed: () => (/* binding */ isPaymentFailed),
/* harmony export */   isPaymentIdle: () => (/* binding */ isPaymentIdle),
/* harmony export */   isPaymentPristine: () => (/* binding */ isPaymentPristine),
/* harmony export */   isPaymentProcessing: () => (/* binding */ isPaymentProcessing),
/* harmony export */   isPaymentReady: () => (/* binding */ isPaymentReady),
/* harmony export */   isPaymentStarted: () => (/* binding */ isPaymentStarted),
/* harmony export */   isPaymentSuccess: () => (/* binding */ isPaymentSuccess),
/* harmony export */   paymentMethodsInitialized: () => (/* binding */ paymentMethodsInitialized)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./wc_components/js/types/index.ts");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../settings/shared */ "./wc_components/js/settings/shared/index.ts");
/* harmony import */ var _utils_filter_active_saved_payment_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/filter-active-saved-payment-methods */ "./wc_components/js/data/payment/utils/filter-active-saved-payment-methods.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./wc_components/js/data/payment/constants.ts");
/**
 * External dependencies
 */
// import { objectHasProp } from '@woocommerce/types';



// import { getSetting } from '@woocommerce/settings';


// import type { GlobalPaymentMethod } from '@woocommerce/types';

/**
 * Internal dependencies
 */



const globalPaymentMethods = {};
if ((0,_settings_shared__WEBPACK_IMPORTED_MODULE_2__.getSetting)('globalPaymentMethods')) {
  (0,_settings_shared__WEBPACK_IMPORTED_MODULE_2__.getSetting)('globalPaymentMethods').forEach(method => {
    globalPaymentMethods[method.id] = method.title;
  });
}
const isPaymentPristine = state => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default()('isPaymentPristine', {
    since: '9.6.0',
    alternative: 'isPaymentIdle',
    plugin: 'WooCommerce Blocks',
    link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8110'
  });
  return state.status === _constants__WEBPACK_IMPORTED_MODULE_4__.STATUS.IDLE;
};
const isPaymentIdle = state => state.status === _constants__WEBPACK_IMPORTED_MODULE_4__.STATUS.IDLE;
const isPaymentStarted = state => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default()('isPaymentStarted', {
    since: '9.6.0',
    alternative: 'isExpressPaymentStarted',
    plugin: 'WooCommerce Blocks',
    link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8110'
  });
  return state.status === _constants__WEBPACK_IMPORTED_MODULE_4__.STATUS.EXPRESS_STARTED;
};
const isExpressPaymentStarted = state => {
  return state.status === _constants__WEBPACK_IMPORTED_MODULE_4__.STATUS.EXPRESS_STARTED;
};
const isPaymentProcessing = state => state.status === _constants__WEBPACK_IMPORTED_MODULE_4__.STATUS.PROCESSING;
const isPaymentReady = state => state.status === _constants__WEBPACK_IMPORTED_MODULE_4__.STATUS.READY;
const isPaymentSuccess = state => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default()('isPaymentSuccess', {
    since: '9.6.0',
    alternative: 'isPaymentReady',
    plugin: 'WooCommerce Blocks',
    link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8110'
  });
  return state.status === _constants__WEBPACK_IMPORTED_MODULE_4__.STATUS.READY;
};
const hasPaymentError = state => state.status === _constants__WEBPACK_IMPORTED_MODULE_4__.STATUS.ERROR;
const isPaymentFailed = state => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default()('isPaymentFailed', {
    since: '9.6.0',
    plugin: 'WooCommerce Blocks',
    link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8110'
  });
  return state.status === _constants__WEBPACK_IMPORTED_MODULE_4__.STATUS.ERROR;
};
const isExpressPaymentMethodActive = state => {
  return Object.keys(state.availableExpressPaymentMethods).includes(state.activePaymentMethod);
};
const getActiveSavedToken = state => {
  return typeof state.paymentMethodData === 'object' && (0,_types__WEBPACK_IMPORTED_MODULE_0__.objectHasProp)(state.paymentMethodData, 'token') ? state.paymentMethodData.token + '' : '';
};
const getActivePaymentMethod = state => {
  return state.activePaymentMethod;
};
const getAvailablePaymentMethods = state => {
  return state.availablePaymentMethods;
};
const getAvailableExpressPaymentMethods = state => {
  return state.availableExpressPaymentMethods;
};
const getPaymentMethodData = state => {
  return state.paymentMethodData;
};
const getIncompatiblePaymentMethods = state => {
  const {
    availablePaymentMethods,
    availableExpressPaymentMethods,
    paymentMethodsInitialized,
    expressPaymentMethodsInitialized
  } = state;
  if (!paymentMethodsInitialized || !expressPaymentMethodsInitialized) {
    return {};
  }
  return Object.fromEntries(Object.entries(globalPaymentMethods).filter(([k]) => {
    return !(k in {
      ...availablePaymentMethods,
      ...availableExpressPaymentMethods
    });
  }));
};
const getSavedPaymentMethods = state => {
  return state.savedPaymentMethods;
};

/**
 * Filters the list of saved payment methods and returns only the ones which
 * are active and supported by the payment gateway
 */
const getActiveSavedPaymentMethods = state => {
  const availablePaymentMethodKeys = Object.keys(state.availablePaymentMethods);
  return (0,_utils_filter_active_saved_payment_methods__WEBPACK_IMPORTED_MODULE_3__.filterActiveSavedPaymentMethods)(availablePaymentMethodKeys, state.savedPaymentMethods);
};
const paymentMethodsInitialized = state => {
  return state.paymentMethodsInitialized;
};
const expressPaymentMethodsInitialized = state => {
  return state.expressPaymentMethodsInitialized;
};

/**
 * @deprecated - Use these selectors instead: isPaymentIdle, isPaymentProcessing,
 * hasPaymentError
 */
const getCurrentStatus = state => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default()('getCurrentStatus', {
    since: '8.9.0',
    alternative: 'isPaymentIdle, isPaymentProcessing, hasPaymentError',
    plugin: 'WooCommerce Blocks',
    link: 'https://github.com/woocommerce/woocommerce-blocks/pull/7666'
  });
  return {
    get isPristine() {
      _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default()('isPristine', {
        since: '9.6.0',
        alternative: 'isIdle',
        plugin: 'WooCommerce Blocks'
      });
      return isPaymentIdle(state);
    },
    // isPristine is the same as isIdle.
    isIdle: isPaymentIdle(state),
    isStarted: isExpressPaymentStarted(state),
    isProcessing: isPaymentProcessing(state),
    get isFinished() {
      _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default()('isFinished', {
        since: '9.6.0',
        plugin: 'WooCommerce Blocks',
        link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8110'
      });
      return hasPaymentError(state) || isPaymentReady(state);
    },
    hasError: hasPaymentError(state),
    get hasFailed() {
      _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default()('hasFailed', {
        since: '9.6.0',
        plugin: 'WooCommerce Blocks',
        link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8110'
      });
      return hasPaymentError(state);
    },
    get isSuccessful() {
      _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default()('isSuccessful', {
        since: '9.6.0',
        plugin: 'WooCommerce Blocks',
        link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8110'
      });
      return isPaymentReady(state);
    },
    isDoingExpressPayment: isExpressPaymentMethodActive(state)
  };
};
const getShouldSavePaymentMethod = state => {
  return state.shouldSavePaymentMethod;
};
const getPaymentResult = state => {
  return state.paymentResult;
};

// We should avoid using this selector and instead use the focused selectors
// We're keeping it because it's used in our unit test: assets/js/blocks/cart-checkout-shared/payment-methods/test/payment-methods.js
// to mock the selectors.
const getState = state => {
  return state;
};

/***/ }),

/***/ "./wc_components/js/data/payment/thunks.ts":
/*!*************************************************!*\
  !*** ./wc_components/js/data/payment/thunks.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __internalEmitPaymentProcessingEvent: () => (/* binding */ __internalEmitPaymentProcessingEvent),
/* harmony export */   __internalSetExpressPaymentError: () => (/* binding */ __internalSetExpressPaymentError)
/* harmony export */ });
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types */ "./wc_components/js/types/index.ts");
/* harmony import */ var _base_context_event_emit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/context/event-emit */ "./wc_components/js/base/context/event-emit/index.ts");
/* harmony import */ var _base_context_providers_cart_checkout_payment_events_event_emit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base/context/providers/cart-checkout/payment-events/event-emit */ "./wc_components/js/base/context/providers/cart-checkout/payment-events/event-emit.ts");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cart */ "./wc_components/js/data/cart/index.ts");
/* harmony import */ var _types_type_guards_address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../types/type-guards/address */ "./wc_components/js/types/type-guards/address.ts");
/* harmony import */ var _types_type_guards_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../types/type-guards/observers */ "./wc_components/js/types/type-guards/observers.ts");
/* harmony import */ var _types_type_guards_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../types/type-guards/validation */ "./wc_components/js/types/type-guards/validation.ts");
/**
 * External dependencies
 */


// import type { BillingAddress, ShippingAddress } from '@woocommerce/settings';

// import { isObject, isString, objectHasProp } from '@woocommerce/types';


/**
 * Internal dependencies
 */






const __internalSetExpressPaymentError = message => {
  return ({
    registry
  }) => {
    const {
      createErrorNotice,
      removeNotice
    } = registry.dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_0__.store);
    if (message) {
      createErrorNotice(message, {
        id: 'wc-express-payment-error',
        context: _base_context_event_emit__WEBPACK_IMPORTED_MODULE_3__.noticeContexts.EXPRESS_PAYMENTS
      });
    } else {
      removeNotice('wc-express-payment-error', _base_context_event_emit__WEBPACK_IMPORTED_MODULE_3__.noticeContexts.EXPRESS_PAYMENTS);
    }
  };
};

/**
 * Emit the payment_processing event
 */
const __internalEmitPaymentProcessingEvent = (currentObserver, setValidationErrors) => {
  return ({
    dispatch,
    registry
  }) => {
    const {
      createErrorNotice,
      removeNotice
    } = registry.dispatch('core/notices');
    removeNotice('wc-payment-error', _base_context_event_emit__WEBPACK_IMPORTED_MODULE_3__.noticeContexts.PAYMENTS);
    return (0,_base_context_event_emit__WEBPACK_IMPORTED_MODULE_3__.emitEventWithAbort)(currentObserver, _base_context_providers_cart_checkout_payment_events_event_emit__WEBPACK_IMPORTED_MODULE_4__.EMIT_TYPES.PAYMENT_SETUP, {}).then(observerResponses => {
      let successResponse, errorResponse, billingAddress, shippingAddress;
      observerResponses.forEach(response => {
        if ((0,_base_context_event_emit__WEBPACK_IMPORTED_MODULE_3__.isSuccessResponse)(response)) {
          // The last observer response always "wins" for success.
          successResponse = response;
        }

        // We consider both failed and error responses as an error.
        if ((0,_base_context_event_emit__WEBPACK_IMPORTED_MODULE_3__.isErrorResponse)(response) || (0,_base_context_event_emit__WEBPACK_IMPORTED_MODULE_3__.isFailResponse)(response)) {
          errorResponse = response;
        }
        // Extensions may return shippingData, shippingAddress, billingData, and billingAddress in the response,
        // so we need to check for all. If we detect either shippingData or billingData we need to show a
        // deprecated warning for it, but also apply the changes to the wc/store/cart store.
        const {
          billingAddress: billingAddressFromResponse,
          // Deprecated, but keeping it for now, for compatibility with extensions returning it.
          billingData: billingDataFromResponse,
          shippingAddress: shippingAddressFromResponse,
          // Deprecated, but keeping it for now, for compatibility with extensions returning it.
          shippingData: shippingDataFromResponse
        } = response?.meta || {};
        billingAddress = billingAddressFromResponse;
        shippingAddress = shippingAddressFromResponse;
        if (billingDataFromResponse) {
          // Set this here so that old extensions still using billingData can set the billingAddress.
          billingAddress = billingDataFromResponse;
          _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default()('returning billingData from an onPaymentProcessing observer in WooCommerce Blocks', {
            version: '9.5.0',
            alternative: 'billingAddress',
            link: 'https://github.com/woocommerce/woocommerce-blocks/pull/6369'
          });
        }
        if ((0,_types__WEBPACK_IMPORTED_MODULE_2__.objectHasProp)(shippingDataFromResponse, 'address') && shippingDataFromResponse.address) {
          // Set this here so that old extensions still using shippingData can set the shippingAddress.
          shippingAddress = shippingDataFromResponse.address;
          _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default()('returning shippingData from an onPaymentProcessing observer in WooCommerce Blocks', {
            version: '9.5.0',
            alternative: 'shippingAddress',
            link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8163'
          });
        }
      });
      const {
        setBillingAddress,
        setShippingAddress
      } = registry.dispatch(_cart__WEBPACK_IMPORTED_MODULE_5__.CART_STORE_KEY);

      // Observer returned success, we sync the payment method data and billing address.
      if ((0,_types_type_guards_observers__WEBPACK_IMPORTED_MODULE_7__.isObserverResponse)(successResponse) && !errorResponse) {
        const {
          paymentMethodData
        } = successResponse?.meta || {};
        if ((0,_types_type_guards_address__WEBPACK_IMPORTED_MODULE_6__.isBillingAddress)(billingAddress)) {
          setBillingAddress(billingAddress);
        }
        if ((0,_types_type_guards_address__WEBPACK_IMPORTED_MODULE_6__.isShippingAddress)(shippingAddress)) {
          setShippingAddress(shippingAddress);
        }
        dispatch.__internalSetPaymentMethodData((0,_types__WEBPACK_IMPORTED_MODULE_2__.isObject)(paymentMethodData) ? paymentMethodData : {});
        dispatch.__internalSetPaymentReady();
      } else if ((0,_base_context_event_emit__WEBPACK_IMPORTED_MODULE_3__.isFailResponse)(errorResponse)) {
        const {
          paymentMethodData
        } = errorResponse?.meta || {};
        if ((0,_types__WEBPACK_IMPORTED_MODULE_2__.objectHasProp)(errorResponse, 'message') && (0,_types__WEBPACK_IMPORTED_MODULE_2__.isString)(errorResponse.message) && errorResponse.message.length) {
          let context = _base_context_event_emit__WEBPACK_IMPORTED_MODULE_3__.noticeContexts.PAYMENTS;
          if ((0,_types__WEBPACK_IMPORTED_MODULE_2__.objectHasProp)(errorResponse, 'messageContext') && (0,_types__WEBPACK_IMPORTED_MODULE_2__.isString)(errorResponse.messageContext) && errorResponse.messageContext.length) {
            context = errorResponse.messageContext;
          }
          createErrorNotice(errorResponse.message, {
            id: 'wc-payment-error',
            isDismissible: false,
            context
          });
        }
        if ((0,_types_type_guards_address__WEBPACK_IMPORTED_MODULE_6__.isBillingAddress)(billingAddress)) {
          setBillingAddress(billingAddress);
        }
        dispatch.__internalSetPaymentMethodData((0,_types__WEBPACK_IMPORTED_MODULE_2__.isObject)(paymentMethodData) ? paymentMethodData : {});
        dispatch.__internalSetPaymentError();
      } else if ((0,_base_context_event_emit__WEBPACK_IMPORTED_MODULE_3__.isErrorResponse)(errorResponse)) {
        if ((0,_types__WEBPACK_IMPORTED_MODULE_2__.objectHasProp)(errorResponse, 'message') && (0,_types__WEBPACK_IMPORTED_MODULE_2__.isString)(errorResponse.message) && errorResponse.message.length) {
          let context = _base_context_event_emit__WEBPACK_IMPORTED_MODULE_3__.noticeContexts.PAYMENTS;
          if ((0,_types__WEBPACK_IMPORTED_MODULE_2__.objectHasProp)(errorResponse, 'messageContext') && (0,_types__WEBPACK_IMPORTED_MODULE_2__.isString)(errorResponse.messageContext) && errorResponse.messageContext.length) {
            context = errorResponse.messageContext;
          }
          createErrorNotice(errorResponse.message, {
            id: 'wc-payment-error',
            isDismissible: false,
            context
          });
        }
        dispatch.__internalSetPaymentError();
        if ((0,_types_type_guards_validation__WEBPACK_IMPORTED_MODULE_8__.isValidValidationErrorsObject)(errorResponse.validationErrors)) {
          setValidationErrors(errorResponse.validationErrors);
        }
      } else {
        // Otherwise there are no payment methods doing anything so just assume payment method is ready.
        dispatch.__internalSetPaymentReady();
      }
    });
  };
};

/***/ }),

/***/ "./wc_components/js/data/payment/utils/check-payment-methods.ts":
/*!**********************************************************************!*\
  !*** ./wc_components/js/data/payment/utils/check-payment-methods.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkPaymentMethodsCanPay: () => (/* binding */ checkPaymentMethodsCanPay),
/* harmony export */   getCanMakePaymentArg: () => (/* binding */ getCanMakePaymentArg)
/* harmony export */ });
/* harmony import */ var _settings_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../settings/shared */ "./wc_components/js/settings/shared/index.ts");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../base/utils */ "./wc_components/js/base/utils/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _blocks_registry_payment_methods_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks-registry/payment-methods/registry */ "./wc_components/js/blocks-registry/payment-methods/registry.ts");
/* harmony import */ var _previews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../previews */ "./wc_components/js/previews/index.js");
/* harmony import */ var _cart_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cart/constants */ "./wc_components/js/data/cart/constants.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ "./wc_components/js/data/payment/constants.ts");
/* harmony import */ var _base_context_event_emit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../base/context/event-emit */ "./wc_components/js/base/context/event-emit/index.ts");
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/constants */ "./wc_components/js/data/constants.ts");
/* harmony import */ var _data_cart_default_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/cart/default-state */ "./wc_components/js/data/cart/default-state.ts");
/**
 * External dependencies
 */
// import {
// 	CanMakePaymentArgument,
// 	ExpressPaymentMethodConfigInstance,
// 	PaymentMethodConfigInstance,
// } from '@woocommerce/types';

// import { CURRENT_USER_IS_ADMIN, getSetting } from '@woocommerce/settings';


// import {
// 	deriveSelectedShippingRates,
// 	emptyHiddenAddressFields,
// } from '@woocommerce/base-utils';



// import {
// 	getExpressPaymentMethods,
// 	getPaymentMethods,
// } from '@woocommerce/blocks-registry';



// import { previewCart } from '@woocommerce/resource-previews';


/**
 * Internal dependencies
 */






/**
 * Get the argument that will be passed to a payment method's `canMakePayment` method.
 */
const getCanMakePaymentArg = () => {
  const isEditor = !!(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)('core/editor');
  let canPayArgument;
  if (!isEditor) {
    const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)(_cart_constants__WEBPACK_IMPORTED_MODULE_6__.STORE_KEY);
    const cart = store.getCartData();
    const cartErrors = store.getCartErrors();
    const cartTotals = store.getCartTotals();
    const cartIsLoading = !store.hasFinishedResolution('getCartData');
    const isLoadingRates = store.isCustomerDataUpdating();
    const selectedShippingMethods = (0,_base_utils__WEBPACK_IMPORTED_MODULE_2__.deriveSelectedShippingRates)(cart.shippingRates);
    const cartForCanPayArgument = {
      cartCoupons: cart.coupons,
      cartItems: cart.items,
      crossSellsProducts: cart.crossSells,
      cartFees: cart.fees,
      cartItemsCount: cart.itemsCount,
      cartItemsWeight: cart.itemsWeight,
      cartNeedsPayment: cart.needsPayment,
      cartNeedsShipping: cart.needsShipping,
      cartItemErrors: cart.errors,
      cartTotals,
      cartIsLoading,
      cartErrors,
      billingData: (0,_base_utils__WEBPACK_IMPORTED_MODULE_2__.emptyHiddenAddressFields)(cart.billingAddress),
      billingAddress: (0,_base_utils__WEBPACK_IMPORTED_MODULE_2__.emptyHiddenAddressFields)(cart.billingAddress),
      shippingAddress: (0,_base_utils__WEBPACK_IMPORTED_MODULE_2__.emptyHiddenAddressFields)(cart.shippingAddress),
      extensions: cart.extensions,
      shippingRates: cart.shippingRates,
      isLoadingRates,
      cartHasCalculatedShipping: cart.hasCalculatedShipping,
      paymentRequirements: cart.paymentRequirements,
      receiveCart: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(_cart_constants__WEBPACK_IMPORTED_MODULE_6__.STORE_KEY).receiveCart
    };
    canPayArgument = {
      cart: cartForCanPayArgument,
      cartTotals: cart.totals,
      cartNeedsShipping: cart.needsShipping,
      billingData: cart.billingAddress,
      billingAddress: cart.billingAddress,
      shippingAddress: cart.shippingAddress,
      selectedShippingMethods,
      paymentMethods: cart.paymentMethods,
      paymentRequirements: cart.paymentRequirements
    };
  } else {
    const cartForCanPayArgument = {
      cartCoupons: _previews__WEBPACK_IMPORTED_MODULE_5__.previewCart.coupons,
      cartItems: _previews__WEBPACK_IMPORTED_MODULE_5__.previewCart.items,
      crossSellsProducts: _previews__WEBPACK_IMPORTED_MODULE_5__.previewCart.cross_sells,
      cartFees: _previews__WEBPACK_IMPORTED_MODULE_5__.previewCart.fees,
      cartItemsCount: _previews__WEBPACK_IMPORTED_MODULE_5__.previewCart.items_count,
      cartItemsWeight: _previews__WEBPACK_IMPORTED_MODULE_5__.previewCart.items_weight,
      cartNeedsPayment: _previews__WEBPACK_IMPORTED_MODULE_5__.previewCart.needs_payment,
      cartNeedsShipping: _previews__WEBPACK_IMPORTED_MODULE_5__.previewCart.needs_shipping,
      cartItemErrors: _data_constants__WEBPACK_IMPORTED_MODULE_9__.EMPTY_CART_ITEM_ERRORS,
      cartTotals: _previews__WEBPACK_IMPORTED_MODULE_5__.previewCart.totals,
      cartIsLoading: false,
      cartErrors: _data_constants__WEBPACK_IMPORTED_MODULE_9__.EMPTY_CART_ERRORS,
      billingData: _data_cart_default_state__WEBPACK_IMPORTED_MODULE_10__.defaultCartState.cartData.billingAddress,
      billingAddress: _data_cart_default_state__WEBPACK_IMPORTED_MODULE_10__.defaultCartState.cartData.billingAddress,
      shippingAddress: _data_cart_default_state__WEBPACK_IMPORTED_MODULE_10__.defaultCartState.cartData.shippingAddress,
      extensions: _data_constants__WEBPACK_IMPORTED_MODULE_9__.EMPTY_EXTENSIONS,
      shippingRates: _previews__WEBPACK_IMPORTED_MODULE_5__.previewCart.shipping_rates,
      isLoadingRates: false,
      cartHasCalculatedShipping: _previews__WEBPACK_IMPORTED_MODULE_5__.previewCart.has_calculated_shipping,
      paymentRequirements: _previews__WEBPACK_IMPORTED_MODULE_5__.previewCart.payment_requirements,
      receiveCart: () => undefined
    };
    canPayArgument = {
      cart: cartForCanPayArgument,
      cartTotals: cartForCanPayArgument.cartTotals,
      cartNeedsShipping: cartForCanPayArgument.cartNeedsShipping,
      billingData: cartForCanPayArgument.billingAddress,
      billingAddress: cartForCanPayArgument.billingAddress,
      shippingAddress: cartForCanPayArgument.shippingAddress,
      selectedShippingMethods: (0,_base_utils__WEBPACK_IMPORTED_MODULE_2__.deriveSelectedShippingRates)(cartForCanPayArgument.shippingRates),
      paymentMethods: _previews__WEBPACK_IMPORTED_MODULE_5__.previewCart.payment_methods,
      paymentRequirements: cartForCanPayArgument.paymentRequirements
    };
  }
  return canPayArgument;
};
const registrationErrorNotice = (paymentMethod, errorMessage, express = false) => {
  const {
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)('core/notices');
  const noticeContext = express ? _base_context_event_emit__WEBPACK_IMPORTED_MODULE_8__.noticeContexts.EXPRESS_PAYMENTS : _base_context_event_emit__WEBPACK_IMPORTED_MODULE_8__.noticeContexts.PAYMENTS;
  const errorText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)(/* translators: %s the id of the payment method being registered (bank transfer, cheque...) */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`There was an error registering the payment method with id '%s': `, 'woo-gutenberg-products-block'), paymentMethod.paymentMethodId);
  createErrorNotice(`${errorText} ${errorMessage}`, {
    context: noticeContext,
    id: `wc-${paymentMethod.paymentMethodId}-registration-error`
  });
};
const checkPaymentMethodsCanPay = async (express = false) => {
  let availablePaymentMethods = {};
  const paymentMethods = express ? (0,_blocks_registry_payment_methods_registry__WEBPACK_IMPORTED_MODULE_4__.getExpressPaymentMethods)() : (0,_blocks_registry_payment_methods_registry__WEBPACK_IMPORTED_MODULE_4__.getPaymentMethods)();
  const addAvailablePaymentMethod = paymentMethod => {
    const {
      name
    } = paymentMethod;
    availablePaymentMethods = {
      ...availablePaymentMethods,
      [paymentMethod.name]: {
        name
      }
    };
  };

  // Order payment methods.
  const paymentMethodsOrder = express ? Object.keys(paymentMethods) : Array.from(new Set([...(0,_settings_shared__WEBPACK_IMPORTED_MODULE_0__.getSetting)('paymentMethodSortOrder', []), ...Object.keys(paymentMethods)]));
  const canPayArgument = getCanMakePaymentArg();
  const cartPaymentMethods = canPayArgument.paymentMethods;
  const isEditor = !!(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)('core/editor');
  for (let i = 0; i < paymentMethodsOrder.length; i++) {
    const paymentMethodName = paymentMethodsOrder[i];
    const paymentMethod = paymentMethods[paymentMethodName];
    if (!paymentMethod) {
      continue;
    }

    // See if payment method should be available. This always evaluates to true in the editor context.
    try {
      const validForCart = isEditor || express ? true : cartPaymentMethods.includes(paymentMethodName);
      const canPay = isEditor ? true : validForCart && (await Promise.resolve(paymentMethod.canMakePayment(canPayArgument)));
      if (canPay) {
        if (typeof canPay === 'object' && canPay.error) {
          throw new Error(canPay.error.message);
        }
        addAvailablePaymentMethod(paymentMethod);
      }
    } catch (e) {
      if (_settings_shared__WEBPACK_IMPORTED_MODULE_0__.CURRENT_USER_IS_ADMIN || isEditor) {
        registrationErrorNotice(paymentMethod, e, express);
      }
    }
  }
  const availablePaymentMethodNames = Object.keys(availablePaymentMethods);
  const currentlyAvailablePaymentMethods = express ? (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)(_constants__WEBPACK_IMPORTED_MODULE_7__.STORE_KEY).getAvailableExpressPaymentMethods() : (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)(_constants__WEBPACK_IMPORTED_MODULE_7__.STORE_KEY).getAvailablePaymentMethods();
  if (Object.keys(currentlyAvailablePaymentMethods).length === availablePaymentMethodNames.length && Object.keys(currentlyAvailablePaymentMethods).every(current => availablePaymentMethodNames.includes(current))) {
    // All the names are the same, no need to dispatch more actions.
    return true;
  }
  const {
    __internalSetAvailablePaymentMethods,
    __internalSetAvailableExpressPaymentMethods
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_7__.STORE_KEY);
  const setCallback = express ? __internalSetAvailableExpressPaymentMethods : __internalSetAvailablePaymentMethods;
  setCallback(availablePaymentMethods);
  return true;
};

/***/ }),

/***/ "./wc_components/js/data/payment/utils/filter-active-saved-payment-methods.ts":
/*!************************************************************************************!*\
  !*** ./wc_components/js/data/payment/utils/filter-active-saved-payment-methods.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterActiveSavedPaymentMethods: () => (/* binding */ filterActiveSavedPaymentMethods)
/* harmony export */ });
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @woocommerce/blocks-registry */ "@woocommerce/blocks-registry");
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

/**
 * Gets the payment methods saved for the current user after filtering out disabled ones.
 */
const filterActiveSavedPaymentMethods = (availablePaymentMethods = [], savedPaymentMethods) => {
  if (availablePaymentMethods.length === 0) {
    return {};
  }
  const registeredPaymentMethods = (0,_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_0__.getPaymentMethods)();
  const availablePaymentMethodsWithConfig = Object.fromEntries(availablePaymentMethods.map(name => [name, registeredPaymentMethods[name]]));
  const paymentMethodKeys = Object.keys(savedPaymentMethods);
  const activeSavedPaymentMethods = {};
  paymentMethodKeys.forEach(type => {
    const methods = savedPaymentMethods[type].filter(({
      method: {
        gateway
      }
    }) => gateway in availablePaymentMethodsWithConfig && availablePaymentMethodsWithConfig[gateway].supports?.showSavedCards);
    if (methods.length) {
      activeSavedPaymentMethods[type] = methods;
    }
  });
  return activeSavedPaymentMethods;
};

/***/ }),

/***/ "./wc_components/js/data/payment/utils/set-default-payment-method.ts":
/*!***************************************************************************!*\
  !*** ./wc_components/js/data/payment/utils/set-default-payment-method.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setDefaultPaymentMethod: () => (/* binding */ setDefaultPaymentMethod)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./wc_components/js/data/payment/constants.ts");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

const setDefaultPaymentMethod = async paymentMethods => {
  const paymentMethodKeys = Object.keys(paymentMethods);
  const expressPaymentMethodKeys = Object.keys((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_constants__WEBPACK_IMPORTED_MODULE_1__.STORE_KEY).getAvailableExpressPaymentMethods());
  const allPaymentMethodKeys = [...paymentMethodKeys, ...expressPaymentMethodKeys];
  const savedPaymentMethods = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_constants__WEBPACK_IMPORTED_MODULE_1__.STORE_KEY).getSavedPaymentMethods();
  const savedPaymentMethod = Object.keys(savedPaymentMethods).flatMap(type => savedPaymentMethods[type])[0] || undefined;
  if (savedPaymentMethod) {
    const token = savedPaymentMethod.tokenId.toString();
    const paymentMethodSlug = savedPaymentMethod.method.gateway;
    const savedTokenKey = `wc-${paymentMethodSlug}-payment-token`;
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_1__.STORE_KEY).__internalSetActivePaymentMethod(paymentMethodSlug, {
      token,
      payment_method: paymentMethodSlug,
      [savedTokenKey]: token,
      isSavedToken: true
    });
    return;
  }
  const activePaymentMethod = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_constants__WEBPACK_IMPORTED_MODULE_1__.STORE_KEY).getActivePaymentMethod();

  // Return if current method is valid.
  if (activePaymentMethod && allPaymentMethodKeys.includes(activePaymentMethod)) {
    return;
  }
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_1__.STORE_KEY).__internalSetPaymentIdle();
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_1__.STORE_KEY).__internalSetActivePaymentMethod(paymentMethodKeys[0]);
};

/***/ }),

/***/ "./wc_components/js/data/shared-controls.ts":
/*!**************************************************!*\
  !*** ./wc_components/js/data/shared-controls.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiFetchWithHeaders: () => (/* binding */ apiFetchWithHeaders),
/* harmony export */   apiFetchWithHeadersControl: () => (/* binding */ apiFetchWithHeadersControl),
/* harmony export */   controls: () => (/* binding */ controls)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dataloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dataloader */ "./node_modules/dataloader/index.js");
/* harmony import */ var dataloader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dataloader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_type_defs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/type-defs */ "./wc_components/js/types/type-defs/index.ts");
/**
 * External dependencies
 */



// import { ApiResponse } from '../types/type-defs/api-response';

const EMPTY_OBJECT = {};

/**
 * Error thrown when JSON cannot be parsed.
 */
const invalidJsonError = {
  code: 'invalid_json',
  message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The response is not a valid JSON response.', 'woo-gutenberg-products-block')
};
const setNonceOnFetch = headers => {
  if (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore -- this does exist because it's monkey patched in
  // middleware/store-api-nonce.
  (_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default().setNonce) &&
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore -- this does exist because it's monkey patched in
  // middleware/store-api-nonce.
  typeof (_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default().setNonce) === 'function') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore -- this does exist because it's monkey patched in
    // middleware/store-api-nonce.
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default().setNonce(headers);
  } else {
    // eslint-disable-next-line no-console
    console.error('The monkey patched function on APIFetch, "setNonce", is not present, likely another plugin or some other code has removed this augmentation');
  }
};

/**
 * Trigger a fetch from the API using the batch endpoint.
 */
const triggerBatchFetch = keys => {
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
    path: `/wc/store/v1/batch`,
    method: 'POST',
    data: {
      requests: keys.map(request => {
        return {
          ...request,
          body: request?.data
        };
      })
    }
  }).then(response => {
    (0,_types_type_defs__WEBPACK_IMPORTED_MODULE_3__.assertBatchResponseIsValid)(response);
    return keys.map((key, index) => response.responses[index] || EMPTY_OBJECT);
  });
};

/**
 * In ms, how long we should wait for requests to batch.
 *
 * DataLoader collects all requests over this window of time (and as a consequence, adds this amount of latency).
 */
const triggerBatchFetchDelay = 300;

/**
 * DataLoader instance for triggerBatchFetch.
 */
const triggerBatchFetchLoader = new (dataloader__WEBPACK_IMPORTED_MODULE_2___default())(triggerBatchFetch, {
  batchScheduleFn: callback => setTimeout(callback, triggerBatchFetchDelay),
  cache: false,
  maxBatchSize: 25
});

/**
 * Trigger a fetch from the API using the batch endpoint.
 *
 * @param {APIFetchOptions} request Request object containing API request.
 */
const batchFetch = async request => {
  return await triggerBatchFetchLoader.load(request);
};

/**
 * Dispatched a control action for triggering an api fetch call with no parsing.
 * Typically this would be used in scenarios where headers are needed.
 *
 * @param {APIFetchOptions} options The options for the API request.
 */
const apiFetchWithHeadersControl = options => ({
  type: 'API_FETCH_WITH_HEADERS',
  options
});

/**
 * The underlying function that actually does the fetch. This is used by both the generator (control) version of
 * apiFetchWithHeadersControl and the async function apiFetchWithHeaders.
 */
const doApiFetchWithHeaders = options => new Promise((resolve, reject) => {
  // GET Requests cannot be batched.
  if (!options.method || options.method === 'GET') {
    // Parse is disabled here to avoid returning just the body--we also need headers.
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      ...options,
      parse: false
    }).then(fetchResponse => {
      fetchResponse.json().then(response => {
        resolve({
          response,
          headers: fetchResponse.headers
        });
        setNonceOnFetch(fetchResponse.headers);
      }).catch(() => {
        reject(invalidJsonError);
      });
    }).catch(errorResponse => {
      setNonceOnFetch(errorResponse.headers);
      if (typeof errorResponse.json === 'function') {
        // Parse error response before rejecting it.
        errorResponse.json().then(error => {
          reject(error);
        }).catch(() => {
          reject(invalidJsonError);
        });
      } else {
        reject(errorResponse.message);
      }
    });
  } else {
    batchFetch(options).then(response => {
      (0,_types_type_defs__WEBPACK_IMPORTED_MODULE_3__.assertResponseIsValid)(response);
      if (response.status >= 200 && response.status < 300) {
        resolve({
          response: response.body,
          headers: response.headers
        });
        setNonceOnFetch(response.headers);
      }

      // Status code indicates error.
      throw response;
    }).catch(errorResponse => {
      if (errorResponse.headers) {
        setNonceOnFetch(errorResponse.headers);
      }
      if (errorResponse.body) {
        reject(errorResponse.body);
      } else {
        reject(errorResponse);
      }
    });
  }
});

/**
 * Triggers an api fetch call with no parsing.
 * Typically this would be used in scenarios where headers are needed.
 *
 * @param {APIFetchOptions} options The options for the API request.
 */
const apiFetchWithHeaders = options => {
  return doApiFetchWithHeaders(options);
};

/**
 * Default export for registering the controls with the store.
 *
 * @return {Object} An object with the controls to register with the store on
 *                  the controls property of the registration object.
 */
const controls = {
  API_FETCH_WITH_HEADERS: ({
    options
  }) => {
    return doApiFetchWithHeaders(options);
  }
};

/***/ }),

/***/ "./wc_components/js/data/utils/index.ts":
/*!**********************************************!*\
  !*** ./wc_components/js/data/utils/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getErrorDetails: () => (/* reexport safe */ _process_error_response__WEBPACK_IMPORTED_MODULE_0__.getErrorDetails),
/* harmony export */   processErrorResponse: () => (/* reexport safe */ _process_error_response__WEBPACK_IMPORTED_MODULE_0__.processErrorResponse)
/* harmony export */ });
/* harmony import */ var _process_error_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process-error-response */ "./wc_components/js/data/utils/process-error-response.ts");
// export { default as hasInState } from './has-in-state';
// export { default as updateState } from './update-state';


/***/ }),

/***/ "./wc_components/js/data/utils/process-error-response.ts":
/*!***************************************************************!*\
  !*** ./wc_components/js/data/utils/process-error-response.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getErrorDetails: () => (/* binding */ getErrorDetails),
/* harmony export */   processErrorResponse: () => (/* binding */ processErrorResponse)
/* harmony export */ });
/* harmony import */ var _base_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/utils */ "./wc_components/js/base/utils/index.js");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types */ "./wc_components/js/types/index.ts");
/* harmony import */ var _base_context_event_emit_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/context/event-emit/utils */ "./wc_components/js/base/context/event-emit/utils.ts");
/**
 * External dependencies
 */
// import { createNotice, DEFAULT_ERROR_MESSAGE } from '@woocommerce/base-utils';



// import { noticeContexts } from '@woocommerce/base-context/event-emit/utils';


/**
 * Flattens error details which are returned from the API when multiple params are not valid.
 *
 * - Codes will be prefixed with the param. For example, `invalid_email` becomes `billing_address_invalid_email`.
 * - Additional error messages will be flattened alongside the main error message.
 * - Supports 1 level of nesting.
 * - Decodes HTML entities in error messages.
 */
const getErrorDetails = response => {
  const errorDetails = (0,_types__WEBPACK_IMPORTED_MODULE_2__.objectHasProp)(response.data, 'details') ? Object.entries(response.data.details) : null;
  if (!errorDetails) {
    return [];
  }
  return errorDetails.reduce((acc, [param, {
    code,
    message,
    additional_errors: additionalErrors = []
  }]) => {
    return [...acc, {
      param,
      id: `${param}_${code}`,
      code,
      message: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__.decodeEntities)(message)
    }, ...(Array.isArray(additionalErrors) ? additionalErrors.flatMap(additionalError => {
      if (!(0,_types__WEBPACK_IMPORTED_MODULE_2__.objectHasProp)(additionalError, 'code') || !(0,_types__WEBPACK_IMPORTED_MODULE_2__.objectHasProp)(additionalError, 'message')) {
        return [];
      }
      return [{
        param,
        id: `${param}_${additionalError.code}`,
        code: additionalError.code,
        message: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__.decodeEntities)(additionalError.message)
      }];
    }) : [])];
  }, []);
};

/**
 * Gets appropriate error context from error code.
 */
const getErrorContextFromCode = code => {
  switch (code) {
    case 'woocommerce_rest_missing_email_address':
    case 'woocommerce_rest_invalid_email_address':
      return _base_context_event_emit_utils__WEBPACK_IMPORTED_MODULE_3__.noticeContexts.CONTACT_INFORMATION;
    default:
      return _base_context_event_emit_utils__WEBPACK_IMPORTED_MODULE_3__.noticeContexts.CART;
  }
};

/**
 * Gets appropriate error context from error param name.
 */
const getErrorContextFromParam = param => {
  switch (param) {
    case 'invalid_email':
      return _base_context_event_emit_utils__WEBPACK_IMPORTED_MODULE_3__.noticeContexts.CONTACT_INFORMATION;
    case 'billing_address':
      return _base_context_event_emit_utils__WEBPACK_IMPORTED_MODULE_3__.noticeContexts.BILLING_ADDRESS;
    case 'shipping_address':
      return _base_context_event_emit_utils__WEBPACK_IMPORTED_MODULE_3__.noticeContexts.SHIPPING_ADDRESS;
    default:
      return undefined;
  }
};

/**
 * Processes the response for an invalid param error, with response code rest_invalid_param.
 */
const processInvalidParamResponse = (response, context) => {
  const errorDetails = getErrorDetails(response);
  errorDetails.forEach(({
    code,
    message,
    id,
    param
  }) => {
    (0,_base_utils__WEBPACK_IMPORTED_MODULE_0__.createNotice)('error', message, {
      id,
      context: context || getErrorContextFromParam(param) || getErrorContextFromCode(code)
    });
  });
};

/**
 * Takes an API response object and creates error notices to display to the customer.
 *
 * This is where we can handle specific error codes and display notices in specific contexts.
 */
const processErrorResponse = (response, context) => {
  if (!(0,_types__WEBPACK_IMPORTED_MODULE_2__.isApiErrorResponse)(response)) {
    return;
  }
  if (response.code === 'rest_invalid_param') {
    return processInvalidParamResponse(response, context);
  }
  let errorMessage = (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__.decodeEntities)(response.message) || _base_utils__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_ERROR_MESSAGE;

  // Replace the generic invalid JSON message with something more user friendly.
  if (response.code === 'invalid_json') {
    errorMessage = _base_utils__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_ERROR_MESSAGE;
  }
  (0,_base_utils__WEBPACK_IMPORTED_MODULE_0__.createNotice)('error', errorMessage, {
    id: response.code,
    context: context || getErrorContextFromCode(response.code)
  });
};

/***/ }),

/***/ "./wc_components/js/data/validation/action-types.ts":
/*!**********************************************************!*\
  !*** ./wc_components/js/data/validation/action-types.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTION_TYPES: () => (/* binding */ ACTION_TYPES)
/* harmony export */ });
const ACTION_TYPES = {
  SET_VALIDATION_ERRORS: 'SET_VALIDATION_ERRORS',
  CLEAR_VALIDATION_ERROR: 'CLEAR_VALIDATION_ERROR',
  CLEAR_VALIDATION_ERRORS: 'CLEAR_VALIDATION_ERRORS',
  HIDE_VALIDATION_ERROR: 'HIDE_VALIDATION_ERROR',
  SHOW_VALIDATION_ERROR: 'SHOW_VALIDATION_ERROR',
  SHOW_ALL_VALIDATION_ERRORS: 'SHOW_ALL_VALIDATION_ERRORS'
};

/***/ }),

/***/ "./wc_components/js/data/validation/actions.ts":
/*!*****************************************************!*\
  !*** ./wc_components/js/data/validation/actions.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearAllValidationErrors: () => (/* binding */ clearAllValidationErrors),
/* harmony export */   clearValidationError: () => (/* binding */ clearValidationError),
/* harmony export */   clearValidationErrors: () => (/* binding */ clearValidationErrors),
/* harmony export */   hideValidationError: () => (/* binding */ hideValidationError),
/* harmony export */   setValidationErrors: () => (/* binding */ setValidationErrors),
/* harmony export */   showAllValidationErrors: () => (/* binding */ showAllValidationErrors),
/* harmony export */   showValidationError: () => (/* binding */ showValidationError)
/* harmony export */ });
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-types */ "./wc_components/js/data/validation/action-types.ts");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

const setValidationErrors = errors => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPES.SET_VALIDATION_ERRORS,
  errors
});

/**
 * Clears validation errors for the given ids.
 *
 * @param  errors Array of error ids to clear.
 */
const clearValidationErrors = errors => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPES.CLEAR_VALIDATION_ERRORS,
  errors
});
const clearAllValidationErrors = () => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default()('clearAllValidationErrors', {
    version: '9.0.0',
    alternative: 'clearValidationErrors',
    plugin: 'WooCommerce Blocks',
    link: 'https://github.com/woocommerce/woocommerce-blocks/pull/7601',
    hint: 'Calling `clearValidationErrors` with no arguments will clear all validation errors.'
  });

  // Return clearValidationErrors which will clear all errors by defaults if no error ids are passed.
  return clearValidationErrors();
};
const clearValidationError = error => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPES.CLEAR_VALIDATION_ERROR,
  error
});
const hideValidationError = error => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPES.HIDE_VALIDATION_ERROR,
  error
});
const showValidationError = error => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPES.SHOW_VALIDATION_ERROR,
  error
});
const showAllValidationErrors = () => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPES.SHOW_ALL_VALIDATION_ERRORS
});

/***/ }),

/***/ "./wc_components/js/data/validation/constants.ts":
/*!*******************************************************!*\
  !*** ./wc_components/js/data/validation/constants.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STORE_KEY: () => (/* binding */ STORE_KEY)
/* harmony export */ });
const STORE_KEY = 'wc/store/validation';

/***/ }),

/***/ "./wc_components/js/data/validation/index.ts":
/*!***************************************************!*\
  !*** ./wc_components/js/data/validation/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VALIDATION_STORE_KEY: () => (/* binding */ VALIDATION_STORE_KEY),
/* harmony export */   config: () => (/* binding */ config)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./wc_components/js/data/validation/reducers.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./wc_components/js/data/validation/constants.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./wc_components/js/data/validation/actions.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors */ "./wc_components/js/data/validation/selectors.ts");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




const config = {
  reducer: _reducers__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_4__,
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__
};
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_constants__WEBPACK_IMPORTED_MODULE_2__.STORE_KEY, config);
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);
const VALIDATION_STORE_KEY = _constants__WEBPACK_IMPORTED_MODULE_2__.STORE_KEY;

/***/ }),

/***/ "./wc_components/js/data/validation/reducers.ts":
/*!******************************************************!*\
  !*** ./wc_components/js/data/validation/reducers.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/is-shallow-equal */ "@wordpress/is-shallow-equal");
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types */ "./wc_components/js/types/index.ts");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-types */ "./wc_components/js/data/validation/action-types.ts");
/**
 * External dependencies
 */


// import { isString, FieldValidationStatus } from '@woocommerce/types';

/**
 * Internal dependencies
 */


const reducer = (state = {}, action) => {
  const newState = {
    ...state
  };
  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.SET_VALIDATION_ERRORS:
      if (!action.errors) {
        return state;
      }
      const hasNewError = Object.entries(action.errors).some(([property, error]) => {
        if (typeof error?.message !== 'string') {
          return false;
        }
        if (state.hasOwnProperty(property) && _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_0___default()(state[property], error)) {
          return false;
        }
        return true;
      });
      if (!hasNewError) {
        return state;
      }
      return {
        ...state,
        ...action.errors
      };
    case _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.CLEAR_VALIDATION_ERROR:
      if (!(0,_types__WEBPACK_IMPORTED_MODULE_1__.isString)(action.error) || !newState.hasOwnProperty(action.error)) {
        return newState;
      }
      delete newState[action.error];
      return newState;
    case _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.CLEAR_VALIDATION_ERRORS:
      const {
        errors
      } = action;
      if (typeof errors === 'undefined') {
        return {};
      }
      if (!Array.isArray(errors)) {
        return newState;
      }
      errors.forEach(error => {
        if (newState.hasOwnProperty(error)) {
          delete newState[error];
        }
      });
      return newState;
    case _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.HIDE_VALIDATION_ERROR:
      if (!(0,_types__WEBPACK_IMPORTED_MODULE_1__.isString)(action.error) || !newState.hasOwnProperty(action.error)) {
        return newState;
      }
      newState[action.error].hidden = true;
      return newState;
    case _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.SHOW_VALIDATION_ERROR:
      if (!(0,_types__WEBPACK_IMPORTED_MODULE_1__.isString)(action.error) || !newState.hasOwnProperty(action.error)) {
        return newState;
      }
      newState[action.error].hidden = false;
      return newState;
    case _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.SHOW_ALL_VALIDATION_ERRORS:
      Object.keys(newState).forEach(property => {
        if (newState[property].hidden) {
          newState[property].hidden = false;
        }
      });
      return {
        ...newState
      };
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./wc_components/js/data/validation/selectors.ts":
/*!*******************************************************!*\
  !*** ./wc_components/js/data/validation/selectors.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getValidationError: () => (/* binding */ getValidationError),
/* harmony export */   getValidationErrorId: () => (/* binding */ getValidationErrorId),
/* harmony export */   hasValidationErrors: () => (/* binding */ hasValidationErrors)
/* harmony export */ });
/**
 * Internal dependencies
 */

/**
 * Gets a validation error by ID.
 *
 * @param { State }  state   The current state.
 * @param { string } errorId The error ID.
 * @return { string } 		The validation error.
 */
const getValidationError = (state, errorId) => state[errorId];

/**
 * Gets a validation error ID for use in HTML which can be used as a CSS selector, or to reference an error message.
 *
 * @param { State }  state   The current state.
 * @param { string } errorId The error ID.
 * @return { string } 		The validation error ID.
 */
const getValidationErrorId = (state, errorId) => {
  if (!state.hasOwnProperty(errorId) || state[errorId].hidden) {
    return;
  }
  return `validate-error-${errorId}`;
};

/**
 * Whether the store has validation errors.
 *
 * @param { State } state The current state.
 * @return { boolean } 	Whether the store has validation errors or not.
 */
const hasValidationErrors = state => {
  return Object.keys(state).length > 0;
};

/***/ }),

/***/ "./wc_components/js/previews/cart.ts":
/*!*******************************************!*\
  !*** ./wc_components/js/previews/cart.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   previewCart: () => (/* binding */ previewCart)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/blocks */ "./wc_components/js/settings/blocks/index.ts");
/* harmony import */ var _settings_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/shared */ "./wc_components/js/settings/shared/index.ts");
/* harmony import */ var _shipping_rates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipping-rates */ "./wc_components/js/previews/shipping-rates.ts");
/**
 * External dependencies
 */

// import { WC_BLOCKS_IMAGE_URL } from '@woocommerce/block-settings';


// import { CartResponse } from '@woocommerce/types';

// import { getSetting } from '@woocommerce/settings';


/**
 * Internal dependencies
 */


/**
 * Prices from the API may change because of this display setting. This makes the response use either
 * wc_get_price_including_tax or wc_get_price_excluding_tax. It is correct that this setting changes the cart preview
 * data.
 *
 * WooCommerce core has 2 settings which control this, one for cart (displayCartPricesIncludingTax), and one for the
 * rest of the store (displayProductPricesIncludingTax). Because of this, Cart endpoints use displayCartPricesIncludingTax
 * which is the most appropriate.
 *
 * Handling the display settings server-side helps work around rounding/display issues that can arise from manually
 * adding tax to a price.
 */
const displayWithTax = (0,_settings_shared__WEBPACK_IMPORTED_MODULE_2__.getSetting)('displayCartPricesIncludingTax', false);

// Sample data for cart block.
// This closely resembles the data returned from the Store API /cart endpoint.
// https://github.com/woocommerce/woocommerce-gutenberg-products-block/blob/trunk/src/StoreApi/docs/cart.md#cart-response
const previewCart = {
  coupons: [],
  shipping_rates: (0,_settings_shared__WEBPACK_IMPORTED_MODULE_2__.getSetting)('shippingMethodsExist', false) || (0,_settings_shared__WEBPACK_IMPORTED_MODULE_2__.getSetting)('localPickupEnabled', false) ? _shipping_rates__WEBPACK_IMPORTED_MODULE_3__.previewShippingRates : [],
  items: [{
    key: '1',
    id: 1,
    type: 'simple',
    quantity: 2,
    catalog_visibility: 'visible',
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Beanie', 'woo-gutenberg-products-block'),
    summary: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Beanie', 'woo-gutenberg-products-block'),
    short_description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Warm hat for winter', 'woo-gutenberg-products-block'),
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    sku: 'woo-beanie',
    permalink: 'https://example.org',
    low_stock_remaining: 2,
    backorders_allowed: false,
    show_backorder_badge: false,
    sold_individually: false,
    quantity_limits: {
      minimum: 1,
      maximum: 99,
      multiple_of: 1,
      editable: true
    },
    images: [{
      id: 10,
      src: _settings_blocks__WEBPACK_IMPORTED_MODULE_1__.WC_BLOCKS_IMAGE_URL + 'previews/beanie.jpg',
      thumbnail: _settings_blocks__WEBPACK_IMPORTED_MODULE_1__.WC_BLOCKS_IMAGE_URL + 'previews/beanie.jpg',
      srcset: '',
      sizes: '',
      name: '',
      alt: ''
    }],
    variation: [{
      attribute: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color', 'woo-gutenberg-products-block'),
      value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Yellow', 'woo-gutenberg-products-block')
    }, {
      attribute: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Size', 'woo-gutenberg-products-block'),
      value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Small', 'woo-gutenberg-products-block')
    }],
    prices: {
      currency_code: 'USD',
      currency_symbol: '$',
      currency_minor_unit: 2,
      currency_decimal_separator: '.',
      currency_thousand_separator: ',',
      currency_prefix: '$',
      currency_suffix: '',
      price: displayWithTax ? '12000' : '10000',
      regular_price: displayWithTax ? '12000' : '10000',
      sale_price: displayWithTax ? '12000' : '10000',
      price_range: null,
      raw_prices: {
        precision: 6,
        price: displayWithTax ? '12000000' : '10000000',
        regular_price: displayWithTax ? '12000000' : '10000000',
        sale_price: displayWithTax ? '12000000' : '10000000'
      }
    },
    totals: {
      currency_code: 'USD',
      currency_symbol: '$',
      currency_minor_unit: 2,
      currency_decimal_separator: '.',
      currency_thousand_separator: ',',
      currency_prefix: '$',
      currency_suffix: '',
      line_subtotal: '2000',
      line_subtotal_tax: '400',
      line_total: '2000',
      line_total_tax: '400'
    },
    extensions: {},
    item_data: []
  }, {
    key: '2',
    id: 2,
    type: 'simple',
    quantity: 1,
    catalog_visibility: 'visible',
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cap', 'woo-gutenberg-products-block'),
    summary: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cap', 'woo-gutenberg-products-block'),
    short_description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Lightweight baseball cap', 'woo-gutenberg-products-block'),
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    sku: 'woo-cap',
    low_stock_remaining: null,
    permalink: 'https://example.org',
    backorders_allowed: false,
    show_backorder_badge: false,
    sold_individually: false,
    quantity_limits: {
      minimum: 1,
      maximum: 99,
      multiple_of: 1,
      editable: true
    },
    images: [{
      id: 11,
      src: _settings_blocks__WEBPACK_IMPORTED_MODULE_1__.WC_BLOCKS_IMAGE_URL + 'previews/cap.jpg',
      thumbnail: _settings_blocks__WEBPACK_IMPORTED_MODULE_1__.WC_BLOCKS_IMAGE_URL + 'previews/cap.jpg',
      srcset: '',
      sizes: '',
      name: '',
      alt: ''
    }],
    variation: [{
      attribute: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color', 'woo-gutenberg-products-block'),
      value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Orange', 'woo-gutenberg-products-block')
    }],
    prices: {
      currency_code: 'USD',
      currency_symbol: '$',
      currency_minor_unit: 2,
      currency_decimal_separator: '.',
      currency_thousand_separator: ',',
      currency_prefix: '$',
      currency_suffix: '',
      price: displayWithTax ? '2400' : '2000',
      regular_price: displayWithTax ? '2400' : '2000',
      sale_price: displayWithTax ? '2400' : '2000',
      price_range: null,
      raw_prices: {
        precision: 6,
        price: displayWithTax ? '24000000' : '20000000',
        regular_price: displayWithTax ? '24000000' : '20000000',
        sale_price: displayWithTax ? '24000000' : '20000000'
      }
    },
    totals: {
      currency_code: 'USD',
      currency_symbol: '$',
      currency_minor_unit: 2,
      currency_decimal_separator: '.',
      currency_thousand_separator: ',',
      currency_prefix: '$',
      currency_suffix: '',
      line_subtotal: '2000',
      line_subtotal_tax: '400',
      line_total: '2000',
      line_total_tax: '400'
    },
    extensions: {},
    item_data: []
  }],
  cross_sells: [{
    id: 1,
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Polo', 'woo-gutenberg-products-block'),
    parent: 0,
    type: 'simple',
    variation: '',
    permalink: 'https://example.org',
    sku: 'woo-polo',
    short_description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Polo', 'woo-gutenberg-products-block'),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Polo', 'woo-gutenberg-products-block'),
    on_sale: false,
    prices: {
      currency_code: 'USD',
      currency_symbol: '$',
      currency_minor_unit: 2,
      currency_decimal_separator: '.',
      currency_thousand_separator: ',',
      currency_prefix: '$',
      currency_suffix: '',
      price: displayWithTax ? '24000' : '20000',
      regular_price: displayWithTax ? '24000' : '20000',
      sale_price: displayWithTax ? '12000' : '10000',
      price_range: null
    },
    price_html: '',
    average_rating: '4.5',
    review_count: 2,
    images: [{
      id: 17,
      src: _settings_blocks__WEBPACK_IMPORTED_MODULE_1__.WC_BLOCKS_IMAGE_URL + 'previews/polo.jpg',
      thumbnail: _settings_blocks__WEBPACK_IMPORTED_MODULE_1__.WC_BLOCKS_IMAGE_URL + 'previews/polo.jpg',
      srcset: '',
      sizes: '',
      name: '',
      alt: ''
    }],
    categories: [],
    tags: [],
    attributes: [],
    variations: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: null,
    sold_individually: false,
    add_to_cart: {
      text: '',
      description: '',
      url: '',
      minimum: 1,
      maximum: 99,
      multiple_of: 1
    }
  }, {
    id: 2,
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Long Sleeve Tee', 'woo-gutenberg-products-block'),
    parent: 0,
    type: 'simple',
    variation: '',
    permalink: 'https://example.org',
    sku: 'woo-long-sleeve-tee',
    short_description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Long Sleeve Tee', 'woo-gutenberg-products-block'),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Long Sleeve Tee', 'woo-gutenberg-products-block'),
    on_sale: false,
    prices: {
      currency_code: 'USD',
      currency_symbol: '$',
      currency_minor_unit: 2,
      currency_decimal_separator: '.',
      currency_thousand_separator: ',',
      currency_prefix: '$',
      currency_suffix: '',
      price: displayWithTax ? '30000' : '25000',
      regular_price: displayWithTax ? '30000' : '25000',
      sale_price: displayWithTax ? '30000' : '25000',
      price_range: null
    },
    price_html: '',
    average_rating: '4',
    review_count: 2,
    images: [{
      id: 17,
      src: _settings_blocks__WEBPACK_IMPORTED_MODULE_1__.WC_BLOCKS_IMAGE_URL + 'previews/long-sleeve-tee.jpg',
      thumbnail: _settings_blocks__WEBPACK_IMPORTED_MODULE_1__.WC_BLOCKS_IMAGE_URL + 'previews/long-sleeve-tee.jpg',
      srcset: '',
      sizes: '',
      name: '',
      alt: ''
    }],
    categories: [],
    tags: [],
    attributes: [],
    variations: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: null,
    sold_individually: false,
    add_to_cart: {
      text: '',
      description: '',
      url: '',
      minimum: 1,
      maximum: 99,
      multiple_of: 1
    }
  }, {
    id: 3,
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hoodie with Zipper', 'woo-gutenberg-products-block'),
    parent: 0,
    type: 'simple',
    variation: '',
    permalink: 'https://example.org',
    sku: 'woo-hoodie-with-zipper',
    short_description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hoodie with Zipper', 'woo-gutenberg-products-block'),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hoodie with Zipper', 'woo-gutenberg-products-block'),
    on_sale: true,
    prices: {
      currency_code: 'USD',
      currency_symbol: '$',
      currency_minor_unit: 2,
      currency_decimal_separator: '.',
      currency_thousand_separator: ',',
      currency_prefix: '$',
      currency_suffix: '',
      price: displayWithTax ? '15000' : '12500',
      regular_price: displayWithTax ? '30000' : '25000',
      sale_price: displayWithTax ? '15000' : '12500',
      price_range: null
    },
    price_html: '',
    average_rating: '1',
    review_count: 2,
    images: [{
      id: 17,
      src: _settings_blocks__WEBPACK_IMPORTED_MODULE_1__.WC_BLOCKS_IMAGE_URL + 'previews/hoodie-with-zipper.jpg',
      thumbnail: _settings_blocks__WEBPACK_IMPORTED_MODULE_1__.WC_BLOCKS_IMAGE_URL + 'previews/hoodie-with-zipper.jpg',
      srcset: '',
      sizes: '',
      name: '',
      alt: ''
    }],
    categories: [],
    tags: [],
    attributes: [],
    variations: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: null,
    sold_individually: false,
    add_to_cart: {
      text: '',
      description: '',
      url: '',
      minimum: 1,
      maximum: 99,
      multiple_of: 1
    }
  }, {
    id: 4,
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hoodie with Logo', 'woo-gutenberg-products-block'),
    parent: 0,
    type: 'simple',
    variation: '',
    permalink: 'https://example.org',
    sku: 'woo-hoodie-with-logo',
    short_description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Polo', 'woo-gutenberg-products-block'),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Polo', 'woo-gutenberg-products-block'),
    on_sale: false,
    prices: {
      currency_code: 'USD',
      currency_symbol: '$',
      currency_minor_unit: 2,
      currency_decimal_separator: '.',
      currency_thousand_separator: ',',
      currency_prefix: '$',
      currency_suffix: '',
      price: displayWithTax ? '4500' : '4250',
      regular_price: displayWithTax ? '4500' : '4250',
      sale_price: displayWithTax ? '4500' : '4250',
      price_range: null
    },
    price_html: '',
    average_rating: '5',
    review_count: 2,
    images: [{
      id: 17,
      src: _settings_blocks__WEBPACK_IMPORTED_MODULE_1__.WC_BLOCKS_IMAGE_URL + 'previews/hoodie-with-logo.jpg',
      thumbnail: _settings_blocks__WEBPACK_IMPORTED_MODULE_1__.WC_BLOCKS_IMAGE_URL + 'previews/hoodie-with-logo.jpg',
      srcset: '',
      sizes: '',
      name: '',
      alt: ''
    }],
    categories: [],
    tags: [],
    attributes: [],
    variations: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: null,
    sold_individually: false,
    add_to_cart: {
      text: '',
      description: '',
      url: '',
      minimum: 1,
      maximum: 99,
      multiple_of: 1
    }
  }, {
    id: 5,
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hoodie with Pocket', 'woo-gutenberg-products-block'),
    parent: 0,
    type: 'simple',
    variation: '',
    permalink: 'https://example.org',
    sku: 'woo-hoodie-with-pocket',
    short_description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hoodie with Pocket', 'woo-gutenberg-products-block'),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hoodie with Pocket', 'woo-gutenberg-products-block'),
    on_sale: true,
    prices: {
      currency_code: 'USD',
      currency_symbol: '$',
      currency_minor_unit: 2,
      currency_decimal_separator: '.',
      currency_thousand_separator: ',',
      currency_prefix: '$',
      currency_suffix: '',
      price: displayWithTax ? '3500' : '3250',
      regular_price: displayWithTax ? '4500' : '4250',
      sale_price: displayWithTax ? '3500' : '3250',
      price_range: null
    },
    price_html: '',
    average_rating: '3.75',
    review_count: 4,
    images: [{
      id: 17,
      src: _settings_blocks__WEBPACK_IMPORTED_MODULE_1__.WC_BLOCKS_IMAGE_URL + 'previews/hoodie-with-pocket.jpg',
      thumbnail: _settings_blocks__WEBPACK_IMPORTED_MODULE_1__.WC_BLOCKS_IMAGE_URL + 'previews/hoodie-with-pocket.jpg',
      srcset: '',
      sizes: '',
      name: '',
      alt: ''
    }],
    categories: [],
    tags: [],
    attributes: [],
    variations: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: null,
    sold_individually: false,
    add_to_cart: {
      text: '',
      description: '',
      url: '',
      minimum: 1,
      maximum: 99,
      multiple_of: 1
    }
  }, {
    id: 6,
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('T-Shirt', 'woo-gutenberg-products-block'),
    parent: 0,
    type: 'simple',
    variation: '',
    permalink: 'https://example.org',
    sku: 'woo-t-shirt',
    short_description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('T-Shirt', 'woo-gutenberg-products-block'),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('T-Shirt', 'woo-gutenberg-products-block'),
    on_sale: false,
    prices: {
      currency_code: 'USD',
      currency_symbol: '$',
      currency_minor_unit: 2,
      currency_decimal_separator: '.',
      currency_thousand_separator: ',',
      currency_prefix: '$',
      currency_suffix: '',
      price: displayWithTax ? '1800' : '1500',
      regular_price: displayWithTax ? '1800' : '1500',
      sale_price: displayWithTax ? '1800' : '1500',
      price_range: null
    },
    price_html: '',
    average_rating: '3',
    review_count: 2,
    images: [{
      id: 17,
      src: _settings_blocks__WEBPACK_IMPORTED_MODULE_1__.WC_BLOCKS_IMAGE_URL + 'previews/tshirt.jpg',
      thumbnail: _settings_blocks__WEBPACK_IMPORTED_MODULE_1__.WC_BLOCKS_IMAGE_URL + 'previews/tshirt.jpg',
      srcset: '',
      sizes: '',
      name: '',
      alt: ''
    }],
    categories: [],
    tags: [],
    attributes: [],
    variations: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: null,
    sold_individually: false,
    add_to_cart: {
      text: '',
      description: '',
      url: '',
      minimum: 1,
      maximum: 99,
      multiple_of: 1
    }
  }],
  fees: [{
    id: 'fee',
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fee', 'woo-gutenberg-products-block'),
    totals: {
      currency_code: 'USD',
      currency_symbol: '$',
      currency_minor_unit: 2,
      currency_decimal_separator: '.',
      currency_thousand_separator: ',',
      currency_prefix: '$',
      currency_suffix: '',
      total: '100',
      total_tax: '20'
    }
  }],
  items_count: 3,
  items_weight: 0,
  needs_payment: true,
  needs_shipping: (0,_settings_shared__WEBPACK_IMPORTED_MODULE_2__.getSetting)('shippingEnabled', true),
  has_calculated_shipping: true,
  shipping_address: {
    first_name: '',
    last_name: '',
    company: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    country: '',
    phone: ''
  },
  billing_address: {
    first_name: '',
    last_name: '',
    company: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    country: '',
    email: '',
    phone: ''
  },
  totals: {
    currency_code: 'USD',
    currency_symbol: '$',
    currency_minor_unit: 2,
    currency_decimal_separator: '.',
    currency_thousand_separator: ',',
    currency_prefix: '$',
    currency_suffix: '',
    total_items: '4000',
    total_items_tax: '800',
    total_fees: '100',
    total_fees_tax: '20',
    total_discount: '0',
    total_discount_tax: '0',
    total_shipping: '0',
    total_shipping_tax: '0',
    total_tax: '820',
    total_price: '4920',
    tax_lines: [{
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sales tax', 'woo-gutenberg-products-block'),
      rate: '20%',
      price: '820'
    }]
  },
  errors: [],
  payment_methods: ['cod', 'bacs', 'cheque'],
  payment_requirements: ['products'],
  extensions: {}
};

/***/ }),

/***/ "./wc_components/js/previews/index.js":
/*!********************************************!*\
  !*** ./wc_components/js/previews/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   previewCart: () => (/* reexport safe */ _cart__WEBPACK_IMPORTED_MODULE_0__.previewCart),
/* harmony export */   previewSavedPaymentMethods: () => (/* reexport safe */ _saved_payment_methods__WEBPACK_IMPORTED_MODULE_1__.previewSavedPaymentMethods)
/* harmony export */ });
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ "./wc_components/js/previews/cart.ts");
/* harmony import */ var _saved_payment_methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saved-payment-methods */ "./wc_components/js/previews/saved-payment-methods.js");
// export { previewProducts } from './products';

// export { previewReviews } from './reviews';
// export { previewCategories } from './categories';
// export { previewShippingRates } from './shipping-rates';


// export { gridBlockPreview } from './grid-block';
// export { singleProductBlockPreview } from './single-product-block';

/***/ }),

/***/ "./wc_components/js/previews/saved-payment-methods.js":
/*!************************************************************!*\
  !*** ./wc_components/js/previews/saved-payment-methods.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   previewSavedPaymentMethods: () => (/* binding */ previewSavedPaymentMethods)
/* harmony export */ });
const previewSavedPaymentMethods = {
  cc: [{
    method: {
      gateway: 'credit-card',
      last4: '5678',
      brand: 'Visa'
    },
    expires: '12/20',
    is_default: false,
    tokenId: '1'
  }]
};

/***/ }),

/***/ "./wc_components/js/previews/shipping-rates.ts":
/*!*****************************************************!*\
  !*** ./wc_components/js/previews/shipping-rates.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   previewShippingRates: () => (/* binding */ previewShippingRates)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

const previewShippingRates = [{
  destination: {
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    country: ''
  },
  package_id: 0,
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shipping', 'woo-gutenberg-products-block'),
  items: [{
    key: '33e75ff09dd601bbe69f351039152189',
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Beanie with Logo', 'example product in Cart Block', 'woo-gutenberg-products-block'),
    quantity: 2
  }, {
    key: '6512bd43d9caa6e02c990b0a82652dca',
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Beanie', 'example product in Cart Block', 'woo-gutenberg-products-block'),
    quantity: 1
  }],
  shipping_rates: [{
    currency_code: 'USD',
    currency_symbol: '$',
    currency_minor_unit: 2,
    currency_decimal_separator: '.',
    currency_thousand_separator: ',',
    currency_prefix: '$',
    currency_suffix: '',
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Flat rate shipping', 'woo-gutenberg-products-block'),
    description: '',
    delivery_time: '',
    price: '500',
    taxes: '0',
    rate_id: 'flat_rate:0',
    instance_id: 0,
    meta_data: [],
    method_id: 'flat_rate',
    selected: true
  }, {
    currency_code: 'USD',
    currency_symbol: '$',
    currency_minor_unit: 2,
    currency_decimal_separator: '.',
    currency_thousand_separator: ',',
    currency_prefix: '$',
    currency_suffix: '',
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Free shipping', 'woo-gutenberg-products-block'),
    description: '',
    delivery_time: '',
    price: '0',
    taxes: '0',
    rate_id: 'free_shipping:1',
    instance_id: 0,
    meta_data: [],
    method_id: 'flat_rate',
    selected: false
  }, {
    currency_code: 'USD',
    currency_symbol: '$',
    currency_minor_unit: 2,
    currency_decimal_separator: '.',
    currency_thousand_separator: ',',
    currency_prefix: '$',
    currency_suffix: '',
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Local pickup', 'woo-gutenberg-products-block'),
    description: '',
    delivery_time: '',
    price: '0',
    taxes: '0',
    rate_id: 'pickup_location:1',
    instance_id: 1,
    meta_data: [{
      key: 'pickup_location',
      value: 'New York'
    }, {
      key: 'pickup_address',
      value: '123 Easy Street, New York, 12345'
    }],
    method_id: 'pickup_location',
    selected: false
  }, {
    currency_code: 'USD',
    currency_symbol: '$',
    currency_minor_unit: 2,
    currency_decimal_separator: '.',
    currency_thousand_separator: ',',
    currency_prefix: '$',
    currency_suffix: '',
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Local pickup', 'woo-gutenberg-products-block'),
    description: '',
    delivery_time: '',
    price: '0',
    taxes: '0',
    rate_id: 'pickup_location:2',
    instance_id: 1,
    meta_data: [{
      key: 'pickup_location',
      value: 'Los Angeles'
    }, {
      key: 'pickup_address',
      value: '123 Easy Street, Los Angeles, California, 90210'
    }],
    method_id: 'pickup_location',
    selected: false
  }]
}];

/***/ }),

/***/ "./wc_components/js/settings/blocks/constants.ts":
/*!*******************************************************!*\
  !*** ./wc_components/js/settings/blocks/constants.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALLOWED_COUNTRIES: () => (/* binding */ ALLOWED_COUNTRIES),
/* harmony export */   ALLOWED_STATES: () => (/* binding */ ALLOWED_STATES),
/* harmony export */   CART_PAGE_ID: () => (/* binding */ CART_PAGE_ID),
/* harmony export */   CART_URL: () => (/* binding */ CART_URL),
/* harmony export */   CHECKOUT_PAGE_ID: () => (/* binding */ CHECKOUT_PAGE_ID),
/* harmony export */   CHECKOUT_URL: () => (/* binding */ CHECKOUT_URL),
/* harmony export */   COUNTRY_LOCALE: () => (/* binding */ COUNTRY_LOCALE),
/* harmony export */   LOCAL_PICKUP_ENABLED: () => (/* binding */ LOCAL_PICKUP_ENABLED),
/* harmony export */   LOGIN_URL: () => (/* binding */ LOGIN_URL),
/* harmony export */   PRIVACY_PAGE_NAME: () => (/* binding */ PRIVACY_PAGE_NAME),
/* harmony export */   PRIVACY_URL: () => (/* binding */ PRIVACY_URL),
/* harmony export */   SHIPPING_COUNTRIES: () => (/* binding */ SHIPPING_COUNTRIES),
/* harmony export */   SHIPPING_STATES: () => (/* binding */ SHIPPING_STATES),
/* harmony export */   SHOP_URL: () => (/* binding */ SHOP_URL),
/* harmony export */   TERMS_PAGE_NAME: () => (/* binding */ TERMS_PAGE_NAME),
/* harmony export */   TERMS_URL: () => (/* binding */ TERMS_URL),
/* harmony export */   WC_BLOCKS_BUILD_URL: () => (/* binding */ WC_BLOCKS_BUILD_URL),
/* harmony export */   WC_BLOCKS_IMAGE_URL: () => (/* binding */ WC_BLOCKS_IMAGE_URL),
/* harmony export */   WC_BLOCKS_PHASE: () => (/* binding */ WC_BLOCKS_PHASE),
/* harmony export */   blocksConfig: () => (/* binding */ blocksConfig)
/* harmony export */ });
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @woocommerce/settings */ "@woocommerce/settings");
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

const blocksConfig = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.getSetting)('wcBlocksConfig', {
  buildPhase: 1,
  pluginUrl: '',
  productCount: 0,
  defaultAvatar: '',
  restApiRoutes: {},
  wordCountType: 'words'
});
const WC_BLOCKS_IMAGE_URL = blocksConfig.pluginUrl + 'assets/images/'; /// @todo check this: bhavik
const WC_BLOCKS_BUILD_URL = blocksConfig.pluginUrl + 'build/';
const WC_BLOCKS_PHASE = blocksConfig.buildPhase;
const SHOP_URL = _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.STORE_PAGES.shop?.permalink;
const CHECKOUT_PAGE_ID = _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.STORE_PAGES.checkout?.id;
const CHECKOUT_URL = _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.STORE_PAGES.checkout?.permalink;
const PRIVACY_URL = _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.STORE_PAGES.privacy?.permalink;
const PRIVACY_PAGE_NAME = _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.STORE_PAGES.privacy?.title;
const TERMS_URL = _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.STORE_PAGES.terms?.permalink;
const TERMS_PAGE_NAME = _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.STORE_PAGES.terms?.title;
const CART_PAGE_ID = _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.STORE_PAGES.cart?.id;
const CART_URL = _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.STORE_PAGES.cart?.permalink;
const LOGIN_URL = _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.STORE_PAGES.myaccount?.permalink ? _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.STORE_PAGES.myaccount.permalink : (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.getSetting)('wpLoginUrl', '/wp-login.php');
const LOCAL_PICKUP_ENABLED = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.getSetting)('localPickupEnabled', false);
// Contains country names.
const countries = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.getSetting)('countries', {});

// Contains country settings.
const countryData = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.getSetting)('countryData', {});
const ALLOWED_COUNTRIES = Object.fromEntries(Object.keys(countryData).filter(countryCode => {
  return countryData[countryCode].allowBilling === true;
}).map(countryCode => {
  return [countryCode, countries[countryCode] || ''];
}));
const ALLOWED_STATES = Object.fromEntries(Object.keys(countryData).filter(countryCode => {
  return countryData[countryCode].allowBilling === true;
}).map(countryCode => {
  return [countryCode, countryData[countryCode].states || []];
}));
const SHIPPING_COUNTRIES = Object.fromEntries(Object.keys(countryData).filter(countryCode => {
  return countryData[countryCode].allowShipping === true;
}).map(countryCode => {
  return [countryCode, countries[countryCode] || ''];
}));
const SHIPPING_STATES = Object.fromEntries(Object.keys(countryData).filter(countryCode => {
  return countryData[countryCode].allowShipping === true;
}).map(countryCode => {
  return [countryCode, countryData[countryCode].states || []];
}));
const COUNTRY_LOCALE = Object.fromEntries(Object.keys(countryData).map(countryCode => {
  return [countryCode, countryData[countryCode].locale || []];
}));

/***/ }),

/***/ "./wc_components/js/settings/blocks/index.ts":
/*!***************************************************!*\
  !*** ./wc_components/js/settings/blocks/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALLOWED_COUNTRIES: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ALLOWED_COUNTRIES),
/* harmony export */   ALLOWED_STATES: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ALLOWED_STATES),
/* harmony export */   CART_PAGE_ID: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CART_PAGE_ID),
/* harmony export */   CART_URL: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CART_URL),
/* harmony export */   CHECKOUT_PAGE_ID: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHECKOUT_PAGE_ID),
/* harmony export */   CHECKOUT_URL: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHECKOUT_URL),
/* harmony export */   COUNTRY_LOCALE: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.COUNTRY_LOCALE),
/* harmony export */   LOCAL_PICKUP_ENABLED: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.LOCAL_PICKUP_ENABLED),
/* harmony export */   LOGIN_URL: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.LOGIN_URL),
/* harmony export */   PRIVACY_PAGE_NAME: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PRIVACY_PAGE_NAME),
/* harmony export */   PRIVACY_URL: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PRIVACY_URL),
/* harmony export */   SHIPPING_COUNTRIES: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SHIPPING_COUNTRIES),
/* harmony export */   SHIPPING_STATES: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SHIPPING_STATES),
/* harmony export */   SHOP_URL: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SHOP_URL),
/* harmony export */   TERMS_PAGE_NAME: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.TERMS_PAGE_NAME),
/* harmony export */   TERMS_URL: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.TERMS_URL),
/* harmony export */   WC_BLOCKS_BUILD_URL: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.WC_BLOCKS_BUILD_URL),
/* harmony export */   WC_BLOCKS_IMAGE_URL: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.WC_BLOCKS_IMAGE_URL),
/* harmony export */   WC_BLOCKS_PHASE: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.WC_BLOCKS_PHASE),
/* harmony export */   blocksConfig: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.blocksConfig)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./wc_components/js/settings/blocks/constants.ts");
/**
 * Internal dependencies
 */

// export * from './feature-flags';

/***/ }),

/***/ "./wc_components/js/settings/shared/default-address-fields.ts":
/*!********************************************************************!*\
  !*** ./wc_components/js/settings/shared/default-address-fields.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaultAddressFields: () => (/* binding */ defaultAddressFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Default address field properties.
 */
const defaultAddressFields = {
  first_name: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('First name', 'woo-gutenberg-products-block'),
    optionalLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('First name (optional)', 'woo-gutenberg-products-block'),
    autocomplete: 'given-name',
    autocapitalize: 'sentences',
    required: true,
    hidden: false,
    index: 10
  },
  last_name: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Last name', 'woo-gutenberg-products-block'),
    optionalLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Last name (optional)', 'woo-gutenberg-products-block'),
    autocomplete: 'family-name',
    autocapitalize: 'sentences',
    required: true,
    hidden: false,
    index: 20
  },
  company: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Company', 'woo-gutenberg-products-block'),
    optionalLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Company (optional)', 'woo-gutenberg-products-block'),
    autocomplete: 'organization',
    autocapitalize: 'sentences',
    required: false,
    hidden: false,
    index: 30
  },
  address_1: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Address', 'woo-gutenberg-products-block'),
    optionalLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Address (optional)', 'woo-gutenberg-products-block'),
    autocomplete: 'address-line1',
    autocapitalize: 'sentences',
    required: true,
    hidden: false,
    index: 40
  },
  address_2: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Apartment, suite, etc.', 'woo-gutenberg-products-block'),
    optionalLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Apartment, suite, etc. (optional)', 'woo-gutenberg-products-block'),
    autocomplete: 'address-line2',
    autocapitalize: 'sentences',
    required: false,
    hidden: false,
    index: 50
  },
  country: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Country/Region', 'woo-gutenberg-products-block'),
    optionalLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Country/Region (optional)', 'woo-gutenberg-products-block'),
    autocomplete: 'country',
    required: true,
    hidden: false,
    index: 60
  },
  city: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('City', 'woo-gutenberg-products-block'),
    optionalLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('City (optional)', 'woo-gutenberg-products-block'),
    autocomplete: 'address-level2',
    autocapitalize: 'sentences',
    required: true,
    hidden: false,
    index: 70
  },
  state: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('State/County', 'woo-gutenberg-products-block'),
    optionalLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('State/County (optional)', 'woo-gutenberg-products-block'),
    autocomplete: 'address-level1',
    autocapitalize: 'sentences',
    required: true,
    hidden: false,
    index: 80
  },
  postcode: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Postal code', 'woo-gutenberg-products-block'),
    optionalLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Postal code (optional)', 'woo-gutenberg-products-block'),
    autocomplete: 'postal-code',
    autocapitalize: 'characters',
    required: true,
    hidden: false,
    index: 90
  },
  phone: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Phone', 'woo-gutenberg-products-block'),
    optionalLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Phone (optional)', 'woo-gutenberg-products-block'),
    autocomplete: 'tel',
    type: 'tel',
    required: true,
    hidden: false,
    index: 100
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultAddressFields);

/***/ }),

/***/ "./wc_components/js/settings/shared/default-constants.ts":
/*!***************************************************************!*\
  !*** ./wc_components/js/settings/shared/default-constants.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADMIN_URL: () => (/* binding */ ADMIN_URL),
/* harmony export */   COUNTRIES: () => (/* binding */ COUNTRIES),
/* harmony export */   CURRENCY: () => (/* binding */ CURRENCY),
/* harmony export */   CURRENT_USER_IS_ADMIN: () => (/* binding */ CURRENT_USER_IS_ADMIN),
/* harmony export */   HOME_URL: () => (/* binding */ HOME_URL),
/* harmony export */   LOCALE: () => (/* binding */ LOCALE),
/* harmony export */   ORDER_STATUSES: () => (/* binding */ ORDER_STATUSES),
/* harmony export */   PLACEHOLDER_IMG_SRC: () => (/* binding */ PLACEHOLDER_IMG_SRC),
/* harmony export */   SITE_TITLE: () => (/* binding */ SITE_TITLE),
/* harmony export */   STORE_PAGES: () => (/* binding */ STORE_PAGES),
/* harmony export */   WC_ASSET_URL: () => (/* binding */ WC_ASSET_URL),
/* harmony export */   WC_VERSION: () => (/* binding */ WC_VERSION),
/* harmony export */   WP_LOGIN_URL: () => (/* binding */ WP_LOGIN_URL),
/* harmony export */   WP_VERSION: () => (/* binding */ WP_VERSION)
/* harmony export */ });
/* harmony import */ var _settings_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-init */ "./wc_components/js/settings/shared/settings-init.ts");
/**
 * Internal dependencies
 */


/**
 * This exports all default core settings as constants.
 */
const ADMIN_URL = _settings_init__WEBPACK_IMPORTED_MODULE_0__.allSettings.adminUrl;
const COUNTRIES = _settings_init__WEBPACK_IMPORTED_MODULE_0__.allSettings.countries;
const CURRENCY = _settings_init__WEBPACK_IMPORTED_MODULE_0__.allSettings.currency;
const CURRENT_USER_IS_ADMIN = _settings_init__WEBPACK_IMPORTED_MODULE_0__.allSettings.currentUserIsAdmin;
const HOME_URL = _settings_init__WEBPACK_IMPORTED_MODULE_0__.allSettings.homeUrl;
const LOCALE = _settings_init__WEBPACK_IMPORTED_MODULE_0__.allSettings.locale;
const ORDER_STATUSES = _settings_init__WEBPACK_IMPORTED_MODULE_0__.allSettings.orderStatuses;
const PLACEHOLDER_IMG_SRC = _settings_init__WEBPACK_IMPORTED_MODULE_0__.allSettings.placeholderImgSrc;
const SITE_TITLE = _settings_init__WEBPACK_IMPORTED_MODULE_0__.allSettings.siteTitle;
const STORE_PAGES = _settings_init__WEBPACK_IMPORTED_MODULE_0__.allSettings.storePages;
const WC_ASSET_URL = _settings_init__WEBPACK_IMPORTED_MODULE_0__.allSettings.wcAssetUrl;
const WC_VERSION = _settings_init__WEBPACK_IMPORTED_MODULE_0__.allSettings.wcVersion;
const WP_LOGIN_URL = _settings_init__WEBPACK_IMPORTED_MODULE_0__.allSettings.wpLoginUrl;
const WP_VERSION = _settings_init__WEBPACK_IMPORTED_MODULE_0__.allSettings.wpVersion;

/***/ }),

/***/ "./wc_components/js/settings/shared/index.ts":
/*!***************************************************!*\
  !*** ./wc_components/js/settings/shared/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADMIN_URL: () => (/* reexport safe */ _default_constants__WEBPACK_IMPORTED_MODULE_0__.ADMIN_URL),
/* harmony export */   COUNTRIES: () => (/* reexport safe */ _default_constants__WEBPACK_IMPORTED_MODULE_0__.COUNTRIES),
/* harmony export */   CURRENCY: () => (/* reexport safe */ _default_constants__WEBPACK_IMPORTED_MODULE_0__.CURRENCY),
/* harmony export */   CURRENT_USER_IS_ADMIN: () => (/* reexport safe */ _default_constants__WEBPACK_IMPORTED_MODULE_0__.CURRENT_USER_IS_ADMIN),
/* harmony export */   HOME_URL: () => (/* reexport safe */ _default_constants__WEBPACK_IMPORTED_MODULE_0__.HOME_URL),
/* harmony export */   LOCALE: () => (/* reexport safe */ _default_constants__WEBPACK_IMPORTED_MODULE_0__.LOCALE),
/* harmony export */   ORDER_STATUSES: () => (/* reexport safe */ _default_constants__WEBPACK_IMPORTED_MODULE_0__.ORDER_STATUSES),
/* harmony export */   PLACEHOLDER_IMG_SRC: () => (/* reexport safe */ _default_constants__WEBPACK_IMPORTED_MODULE_0__.PLACEHOLDER_IMG_SRC),
/* harmony export */   SITE_TITLE: () => (/* reexport safe */ _default_constants__WEBPACK_IMPORTED_MODULE_0__.SITE_TITLE),
/* harmony export */   STORE_PAGES: () => (/* reexport safe */ _default_constants__WEBPACK_IMPORTED_MODULE_0__.STORE_PAGES),
/* harmony export */   WC_ASSET_URL: () => (/* reexport safe */ _default_constants__WEBPACK_IMPORTED_MODULE_0__.WC_ASSET_URL),
/* harmony export */   WC_VERSION: () => (/* reexport safe */ _default_constants__WEBPACK_IMPORTED_MODULE_0__.WC_VERSION),
/* harmony export */   WP_LOGIN_URL: () => (/* reexport safe */ _default_constants__WEBPACK_IMPORTED_MODULE_0__.WP_LOGIN_URL),
/* harmony export */   WP_VERSION: () => (/* reexport safe */ _default_constants__WEBPACK_IMPORTED_MODULE_0__.WP_VERSION),
/* harmony export */   defaultAddressFields: () => (/* reexport safe */ _default_address_fields__WEBPACK_IMPORTED_MODULE_1__.defaultAddressFields),
/* harmony export */   getAdminLink: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getAdminLink),
/* harmony export */   getPaymentMethodData: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getPaymentMethodData),
/* harmony export */   getSetting: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getSetting),
/* harmony export */   getSettingWithCoercion: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getSettingWithCoercion),
/* harmony export */   isWcVersion: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.isWcVersion),
/* harmony export */   isWpVersion: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.isWpVersion)
/* harmony export */ });
/* harmony import */ var _default_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-constants */ "./wc_components/js/settings/shared/default-constants.ts");
/* harmony import */ var _default_address_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-address-fields */ "./wc_components/js/settings/shared/default-address-fields.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./wc_components/js/settings/shared/utils.ts");
/**
 * Internal dependencies
 */
// import '../../filters/exclude-draft-status-from-analytics';




// export { allSettings } from './settings-init';

/***/ }),

/***/ "./wc_components/js/settings/shared/settings-init.ts":
/*!***********************************************************!*\
  !*** ./wc_components/js/settings/shared/settings-init.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allSettings: () => (/* binding */ allSettings)
/* harmony export */ });
/**
 * External dependencies
 */

const defaults = {
  adminUrl: '',
  countries: [],
  currency: {
    code: 'USD',
    precision: 2,
    symbol: '$',
    symbolPosition: 'left',
    decimalSeparator: '.',
    priceFormat: '%1$s%2$s',
    thousandSeparator: ','
  },
  currentUserId: 0,
  currentUserIsAdmin: false,
  homeUrl: '',
  locale: {
    siteLocale: 'en_US',
    userLocale: 'en_US',
    weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  orderStatuses: [],
  placeholderImgSrc: '',
  siteTitle: '',
  storePages: [],
  wcAssetUrl: '',
  wcVersion: '',
  wpLoginUrl: '',
  wpVersion: ''
};
const globalSharedSettings = typeof window.wcSettings === 'object' ? window.wcSettings : {};
// Use defaults or global settings, depending on what is set.
const allSettings = {
  ...defaults,
  ...globalSharedSettings
};
allSettings.currency = {
  ...defaults.currency,
  ...allSettings.currency
};
allSettings.locale = {
  ...defaults.locale,
  ...allSettings.locale
};


/***/ }),

/***/ "./wc_components/js/settings/shared/utils.ts":
/*!***************************************************!*\
  !*** ./wc_components/js/settings/shared/utils.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAdminLink: () => (/* binding */ getAdminLink),
/* harmony export */   getPaymentMethodData: () => (/* binding */ getPaymentMethodData),
/* harmony export */   getSetting: () => (/* binding */ getSetting),
/* harmony export */   getSettingWithCoercion: () => (/* binding */ getSettingWithCoercion),
/* harmony export */   isWcVersion: () => (/* binding */ isWcVersion),
/* harmony export */   isWpVersion: () => (/* binding */ isWpVersion)
/* harmony export */ });
/* harmony import */ var compare_versions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! compare-versions */ "./node_modules/compare-versions/lib/esm/compareVersions.js");
/* harmony import */ var _settings_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-init */ "./wc_components/js/settings/shared/settings-init.ts");
/**
 * External dependencies
 */
// import compareVersions from 'compare-versions';

/**
 * Internal dependencies
 */


/**
 * Retrieves a setting value from the setting state.
 *
 * If a setting with key `name` does not exist or is undefined,
 * the `fallback` will be returned instead. An optional `filter`
 * callback can be passed to format the returned value.
 */
const getSetting = (name, fallback = false, filter = (val, fb) => typeof val !== 'undefined' ? val : fb) => {
  let value = fallback;
  if (name in _settings_init__WEBPACK_IMPORTED_MODULE_0__.allSettings) {
    value = _settings_init__WEBPACK_IMPORTED_MODULE_0__.allSettings[name];
  } else if (name.includes('_data')) {
    // This handles back compat with payment data _data properties after the move to camelCase and the dedicated
    // paymentMethodData setting.
    const nameWithoutData = name.replace('_data', '');
    const paymentMethodData = getSetting('paymentMethodData', {});
    value = nameWithoutData in paymentMethodData ? paymentMethodData[nameWithoutData] : fallback;
  }
  return filter(value, fallback);
};
const getSettingWithCoercion = (name, fallback, typeguard) => {
  const value = name in _settings_init__WEBPACK_IMPORTED_MODULE_0__.allSettings ? _settings_init__WEBPACK_IMPORTED_MODULE_0__.allSettings[name] : fallback;
  return typeguard(value, fallback) ? value : fallback;
};

/**
 * Note: this attempts to coerce the wpVersion to a semver for comparison
 * This will result in dropping any beta/rc values.
 *
 * `5.3-beta1-4252` would get converted to `5.3.0-rc.4252`
 * `5.3-beta1` would get converted to `5.3.0-rc`.
 * `5.3` would not be touched.
 *
 * For the purpose of these comparisons all pre-release versions are normalized
 * to `rc`.
 *
 * @param {string}                          setting  Setting name (e.g. wpVersion or wcVersion).
 * @param {string}                          version  Version to compare.
 * @param {compareVersions.CompareOperator} operator Comparison operator.
 */
const compareVersionSettingIgnorePrerelease = (setting, version, operator) => {
  const settingValue = getSetting(setting, '');
  let replacement = settingValue.replace(/-[a-zA-Z0-9]*[\-]*/, '.0-rc.');
  replacement = replacement.endsWith('.') ? replacement.substring(0, replacement.length - 1) : replacement;
  return compare_versions__WEBPACK_IMPORTED_MODULE_1__.compareVersions.compare(replacement, version, operator);
};

/**
 * Compare the current WP version with the provided `version` param using the
 * `operator`.
 *
 * For example `isWpVersion( '5.6', '<=' )` returns true if the site WP version
 * is smaller or equal than `5.6` .
 */
const isWpVersion = (version, operator = '=') => {
  return compareVersionSettingIgnorePrerelease('wpVersion', version, operator);
};

/**
 * Compare the current WC version with the provided `version` param using the
 * `operator`.
 *
 * For example `isWcVersion( '4.9.0', '<=' )` returns true if the site WC version
 * is smaller or equal than `4.9`.
 */
const isWcVersion = (version, operator = '=') => {
  return compareVersionSettingIgnorePrerelease('wcVersion', version, operator);
};

/**
 * Returns a string with the site's wp-admin URL appended. JS version of `admin_url`.
 *
 * @param {string} path Relative path.
 * @return {string} Full admin URL.
 */
const getAdminLink = path => getSetting('adminUrl') + path;

/**
 * Get payment method data from the paymentMethodData setting.
 */
const getPaymentMethodData = (paymentMethodId, defaultValue = null) => {
  var _paymentMethodData$pa;
  const paymentMethodData = getSetting('paymentMethodData', {});
  return (_paymentMethodData$pa = paymentMethodData[paymentMethodId]) !== null && _paymentMethodData$pa !== void 0 ? _paymentMethodData$pa : defaultValue;
};

/***/ }),

/***/ "./wc_components/js/types/index.ts":
/*!*****************************************!*\
  !*** ./wc_components/js/types/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertBatchResponseIsValid: () => (/* reexport safe */ _type_defs__WEBPACK_IMPORTED_MODULE_0__.assertBatchResponseIsValid),
/* harmony export */   assertResponseIsValid: () => (/* reexport safe */ _type_defs__WEBPACK_IMPORTED_MODULE_0__.assertResponseIsValid),
/* harmony export */   isApiErrorResponse: () => (/* reexport safe */ _type_guards__WEBPACK_IMPORTED_MODULE_1__.isApiErrorResponse),
/* harmony export */   isBoolean: () => (/* reexport safe */ _type_guards__WEBPACK_IMPORTED_MODULE_1__.isBoolean),
/* harmony export */   isEmptyObject: () => (/* reexport safe */ _type_guards__WEBPACK_IMPORTED_MODULE_1__.isEmptyObject),
/* harmony export */   isNumber: () => (/* reexport safe */ _type_guards__WEBPACK_IMPORTED_MODULE_1__.isNumber),
/* harmony export */   isObject: () => (/* reexport safe */ _type_guards__WEBPACK_IMPORTED_MODULE_1__.isObject),
/* harmony export */   isString: () => (/* reexport safe */ _type_guards__WEBPACK_IMPORTED_MODULE_1__.isString),
/* harmony export */   objectHasProp: () => (/* reexport safe */ _type_guards__WEBPACK_IMPORTED_MODULE_1__.objectHasProp)
/* harmony export */ });
/* harmony import */ var _type_defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type-defs */ "./wc_components/js/types/type-defs/index.ts");
/* harmony import */ var _type_guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-guards */ "./wc_components/js/types/type-guards/index.ts");



/***/ }),

/***/ "./wc_components/js/types/type-defs/api-error-response.ts":
/*!****************************************************************!*\
  !*** ./wc_components/js/types/type-defs/api-error-response.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./wc_components/js/types/type-defs/api-response.ts":
/*!**********************************************************!*\
  !*** ./wc_components/js/types/type-defs/api-response.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertBatchResponseIsValid: () => (/* binding */ assertBatchResponseIsValid),
/* harmony export */   assertResponseIsValid: () => (/* binding */ assertResponseIsValid)
/* harmony export */ });
function assertBatchResponseIsValid(response) {
  if (typeof response === 'object' && response !== null && response.hasOwnProperty('responses')) {
    return;
  }
  throw new Error('Response not valid');
}
function assertResponseIsValid(response) {
  if (typeof response === 'object' && response !== null && 'body' in response && 'headers' in response) {
    return;
  }
  throw new Error('Response not valid');
}

/***/ }),

/***/ "./wc_components/js/types/type-defs/cart-response.ts":
/*!***********************************************************!*\
  !*** ./wc_components/js/types/type-defs/cart-response.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./wc_components/js/types/type-defs/cart.ts":
/*!**************************************************!*\
  !*** ./wc_components/js/types/type-defs/cart.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./wc_components/js/types/type-defs/checkout.ts":
/*!******************************************************!*\
  !*** ./wc_components/js/types/type-defs/checkout.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./wc_components/js/types/type-defs/currency.ts":
/*!******************************************************!*\
  !*** ./wc_components/js/types/type-defs/currency.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./wc_components/js/types/type-defs/hooks.ts":
/*!***************************************************!*\
  !*** ./wc_components/js/types/type-defs/hooks.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./wc_components/js/types/type-defs/index.ts":
/*!***************************************************!*\
  !*** ./wc_components/js/types/type-defs/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertBatchResponseIsValid: () => (/* reexport safe */ _api_response__WEBPACK_IMPORTED_MODULE_1__.assertBatchResponseIsValid),
/* harmony export */   assertResponseIsValid: () => (/* reexport safe */ _api_response__WEBPACK_IMPORTED_MODULE_1__.assertResponseIsValid)
/* harmony export */ });
/* harmony import */ var _api_error_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-error-response */ "./wc_components/js/types/type-defs/api-error-response.ts");
/* harmony import */ var _api_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-response */ "./wc_components/js/types/type-defs/api-response.ts");
/* harmony import */ var _cart_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-response */ "./wc_components/js/types/type-defs/cart-response.ts");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart */ "./wc_components/js/types/type-defs/cart.ts");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkout */ "./wc_components/js/types/type-defs/checkout.ts");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./currency */ "./wc_components/js/types/type-defs/currency.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks */ "./wc_components/js/types/type-defs/hooks.ts");
/* harmony import */ var _payments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payments */ "./wc_components/js/types/type-defs/payments.ts");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validation */ "./wc_components/js/types/type-defs/validation.ts");


// export * from './attributes';
// export * from './blocks';



// export * from './contexts';

// export * from './events';
// export * from './hocs';

// export * from './notices';
// export * from './objects';
// export * from './payment-method-interface';

// export * from './product-response';
// export * from './product-category-response';
// export * from './shipping';
// export * from './stock-status';
// export * from './taxes';
// export * from './utils';


/***/ }),

/***/ "./wc_components/js/types/type-defs/payments.ts":
/*!******************************************************!*\
  !*** ./wc_components/js/types/type-defs/payments.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./wc_components/js/types/type-defs/validation.ts":
/*!********************************************************!*\
  !*** ./wc_components/js/types/type-defs/validation.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./wc_components/js/types/type-guards/address.ts":
/*!*******************************************************!*\
  !*** ./wc_components/js/types/type-guards/address.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBillingAddress: () => (/* binding */ isBillingAddress),
/* harmony export */   isShippingAddress: () => (/* binding */ isShippingAddress)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./wc_components/js/types/type-guards/object.ts");
/**
 * External dependencies
 */
// import type { BillingAddress, ShippingAddress } from '@woocommerce/settings';

// import { objectHasProp } from '@woocommerce/types';

const isShippingAddress = address => {
  const keys = ['first_name', 'last_name', 'company', 'address_1', 'address_2', 'city', 'state', 'postcode', 'country', 'phone'];
  return keys.every(key => (0,_object__WEBPACK_IMPORTED_MODULE_0__.objectHasProp)(address, key));
};
const isBillingAddress = address => {
  return isShippingAddress(address) && (0,_object__WEBPACK_IMPORTED_MODULE_0__.objectHasProp)(address, 'email');
};

/***/ }),

/***/ "./wc_components/js/types/type-guards/api-error-response.ts":
/*!******************************************************************!*\
  !*** ./wc_components/js/types/type-guards/api-error-response.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isApiErrorResponse: () => (/* binding */ isApiErrorResponse)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./wc_components/js/types/type-guards/object.ts");
/**
 * Internal dependencies
 */

// Type guard for ApiErrorResponse.
const isApiErrorResponse = response => {
  return (0,_object__WEBPACK_IMPORTED_MODULE_0__.isObject)(response) && (0,_object__WEBPACK_IMPORTED_MODULE_0__.objectHasProp)(response, 'code') && (0,_object__WEBPACK_IMPORTED_MODULE_0__.objectHasProp)(response, 'message');
};

/***/ }),

/***/ "./wc_components/js/types/type-guards/boolean.ts":
/*!*******************************************************!*\
  !*** ./wc_components/js/types/type-guards/boolean.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBoolean: () => (/* binding */ isBoolean)
/* harmony export */ });
const isBoolean = term => {
  return typeof term === 'boolean';
};

/***/ }),

/***/ "./wc_components/js/types/type-guards/index.ts":
/*!*****************************************************!*\
  !*** ./wc_components/js/types/type-guards/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isApiErrorResponse: () => (/* reexport safe */ _api_error_response__WEBPACK_IMPORTED_MODULE_4__.isApiErrorResponse),
/* harmony export */   isBoolean: () => (/* reexport safe */ _boolean__WEBPACK_IMPORTED_MODULE_0__.isBoolean),
/* harmony export */   isEmptyObject: () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_2__.isEmptyObject),
/* harmony export */   isNumber: () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_1__.isNumber),
/* harmony export */   isObject: () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_2__.isObject),
/* harmony export */   isString: () => (/* reexport safe */ _string__WEBPACK_IMPORTED_MODULE_3__.isString),
/* harmony export */   objectHasProp: () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_2__.objectHasProp)
/* harmony export */ });
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boolean */ "./wc_components/js/types/type-guards/boolean.ts");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number */ "./wc_components/js/types/type-guards/number.ts");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object */ "./wc_components/js/types/type-guards/object.ts");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./string */ "./wc_components/js/types/type-guards/string.ts");
/* harmony import */ var _api_error_response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-error-response */ "./wc_components/js/types/type-guards/api-error-response.ts");

// export * from './cart-response-totals';
// export * from './error';
// export * from './function';
// export * from './null';

// export * from './empty';


// export * from './attributes';
// export * from './ratings';
// export * from './stock-status';


/***/ }),

/***/ "./wc_components/js/types/type-guards/null.ts":
/*!****************************************************!*\
  !*** ./wc_components/js/types/type-guards/null.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNull: () => (/* binding */ isNull)
/* harmony export */ });
const isNull = term => {
  return term === null;
};

/***/ }),

/***/ "./wc_components/js/types/type-guards/number.ts":
/*!******************************************************!*\
  !*** ./wc_components/js/types/type-guards/number.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNumber: () => (/* binding */ isNumber)
/* harmony export */ });
const isNumber = term => {
  return typeof term === 'number';
};

/***/ }),

/***/ "./wc_components/js/types/type-guards/object.ts":
/*!******************************************************!*\
  !*** ./wc_components/js/types/type-guards/object.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isEmptyObject: () => (/* binding */ isEmptyObject),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   objectHasProp: () => (/* binding */ objectHasProp)
/* harmony export */ });
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./null */ "./wc_components/js/types/type-guards/null.ts");
/**
 * Internal dependencies
 */


const isObject = term => {
  return !(0,_null__WEBPACK_IMPORTED_MODULE_0__.isNull)(term) && term instanceof Object && term.constructor === Object;
};
function objectHasProp(target, property) {
  // The `in` operator throws a `TypeError` for non-object values.
  return isObject(target) && property in target;
}
const isEmptyObject = object => {
  return Object.keys(object).length === 0;
};

/***/ }),

/***/ "./wc_components/js/types/type-guards/observers.ts":
/*!*********************************************************!*\
  !*** ./wc_components/js/types/type-guards/observers.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isObserverResponse: () => (/* binding */ isObserverResponse)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./wc_components/js/types/index.ts");
/**
 * External dependencies
 */
// import { ObserverResponse } from '@woocommerce/base-context';

// import { isObject, objectHasProp } from '@woocommerce/types';


/**
 * Whether the passed object is an ObserverResponse.
 */
const isObserverResponse = response => {
  return (0,_index__WEBPACK_IMPORTED_MODULE_0__.isObject)(response) && (0,_index__WEBPACK_IMPORTED_MODULE_0__.objectHasProp)(response, 'type');
};

/***/ }),

/***/ "./wc_components/js/types/type-guards/string.ts":
/*!******************************************************!*\
  !*** ./wc_components/js/types/type-guards/string.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isString: () => (/* binding */ isString)
/* harmony export */ });
const isString = term => {
  return typeof term === 'string';
};

/***/ }),

/***/ "./wc_components/js/types/type-guards/validation.ts":
/*!**********************************************************!*\
  !*** ./wc_components/js/types/type-guards/validation.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidFieldValidationStatus: () => (/* binding */ isValidFieldValidationStatus),
/* harmony export */   isValidValidationErrorsObject: () => (/* binding */ isValidValidationErrorsObject)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./wc_components/js/types/index.ts");
/**
 * External dependencies
 */
// import {
// 	FieldValidationStatus,
// 	isBoolean,
// 	isObject,
// 	isString,
// 	objectHasProp,
// } from '@woocommerce/types';



/**
 * Whether the given status is a valid FieldValidationStatus.
 */
const isValidFieldValidationStatus = status => {
  return (0,_index__WEBPACK_IMPORTED_MODULE_0__.isObject)(status) && (0,_index__WEBPACK_IMPORTED_MODULE_0__.objectHasProp)(status, 'message') && (0,_index__WEBPACK_IMPORTED_MODULE_0__.objectHasProp)(status, 'hidden') && (0,_index__WEBPACK_IMPORTED_MODULE_0__.isString)(status.message) && (0,_index__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(status.hidden);
};

/**
 * Whether the passed object is a valid validation errors object. If this is true, it can be set on the
 * wc/store/validation store without any issue.
 */
const isValidValidationErrorsObject = errors => {
  return (0,_index__WEBPACK_IMPORTED_MODULE_0__.isObject)(errors) && Object.entries(errors).every(([key, value]) => (0,_index__WEBPACK_IMPORTED_MODULE_0__.isString)(key) && isValidFieldValidationStatus(value));
};

/***/ }),

/***/ "./wc_components/js/utils/index.ts":
/*!*****************************************!*\
  !*** ./wc_components/js/utils/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendMoreText: () => (/* reexport safe */ _trim_words__WEBPACK_IMPORTED_MODULE_0__.appendMoreText),
/* harmony export */   removeTags: () => (/* reexport safe */ _trim_words__WEBPACK_IMPORTED_MODULE_0__.removeTags),
/* harmony export */   trimCharacters: () => (/* reexport safe */ _trim_words__WEBPACK_IMPORTED_MODULE_0__.trimCharacters),
/* harmony export */   trimWords: () => (/* reexport safe */ _trim_words__WEBPACK_IMPORTED_MODULE_0__.trimWords)
/* harmony export */ });
/* harmony import */ var _trim_words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trim-words */ "./wc_components/js/utils/trim-words.ts");
// export * from './array-operations';
// export * from './attributes-query';
// export * from './attributes';
// export * from './filters';
// export * from './notices';
// export * from './object-operations';
// export * from './products';
// export * from './shared-attributes';
// export * from './sanitize-html';
// export * from './is-site-editor-page';
// export * from './is-widget-editor-page';

// export * from './find-block';
// export * from './interactivity';

/***/ }),

/***/ "./wc_components/js/utils/notices.ts":
/*!*******************************************!*\
  !*** ./wc_components/js/utils/notices.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasNoticesOfType: () => (/* binding */ hasNoticesOfType),
/* harmony export */   removeNoticesByStatus: () => (/* binding */ removeNoticesByStatus)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

const hasNoticesOfType = (type, context) => {
  const notices = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/notices').getNotices(context);
  return notices.some(notice => notice.type === type);
};

// Note, if context is blank, the default context is used.
const removeNoticesByStatus = (status, context) => {
  const notices = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/notices').getNotices(context);
  const {
    removeNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices');
  const noticesOfType = notices.filter(notice => notice.status === status);
  noticesOfType.forEach(notice => removeNotice(notice.id, context));
};

/***/ }),

/***/ "./wc_components/js/utils/trim-words.ts":
/*!**********************************************!*\
  !*** ./wc_components/js/utils/trim-words.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendMoreText: () => (/* binding */ appendMoreText),
/* harmony export */   removeTags: () => (/* binding */ removeTags),
/* harmony export */   trimCharacters: () => (/* binding */ trimCharacters),
/* harmony export */   trimWords: () => (/* binding */ trimWords)
/* harmony export */ });
/* harmony import */ var _wordpress_autop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/autop */ "@wordpress/autop");
/* harmony import */ var _wordpress_autop__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_autop__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */


/**
 * Remove HTML tags from a string.
 *
 * @param {string} htmlString String to remove tags from.
 * @return {string} Plain text string.
 */
const removeTags = htmlString => {
  const tagsRegExp = /<\/?[a-z][^>]*?>/gi;
  return htmlString.replace(tagsRegExp, '');
};

/**
 * Remove trailing punctuation and append some characters to a string.
 *
 * @param {string} text     Text to append to.
 * @param {string} moreText Text to append.
 * @return {string} String with appended characters.
 */
const appendMoreText = (text, moreText) => {
  return text.replace(/[\s|\.\,]+$/i, '') + moreText;
};

/**
 * Limit words in string and returned trimmed version.
 *
 * @param {string} text      Text to trim.
 * @param {number} maxLength Number of countType to limit to.
 * @param {string} moreText  Appended to the trimmed string.
 * @param {string} useAutop  Whether to format with autop before returning.
 * @return {string} Trimmed string.
 */
const trimWords = (text, maxLength, moreText = '&hellip;', useAutop = true) => {
  const textToTrim = removeTags(text);
  const trimmedText = textToTrim.split(' ').splice(0, maxLength).join(' ');
  if (trimmedText === textToTrim) {
    return useAutop ? (0,_wordpress_autop__WEBPACK_IMPORTED_MODULE_0__.autop)(textToTrim) : textToTrim;
  }
  if (!useAutop) {
    return appendMoreText(trimmedText, moreText);
  }
  return (0,_wordpress_autop__WEBPACK_IMPORTED_MODULE_0__.autop)(appendMoreText(trimmedText, moreText));
};

/**
 * Limit characters in string and returned trimmed version.
 *
 * @param {string}  text          Text to trim.
 * @param {number}  maxLength     Number of countType to limit to.
 * @param {boolean} includeSpaces Should spaces be included in the count.
 * @param {string}  moreText      Appended to the trimmed string.
 * @param {string}  useAutop      Whether to format with autop before returning.
 * @return {string} Trimmed string.
 */
const trimCharacters = (text, maxLength, includeSpaces = true, moreText = '&hellip;', useAutop = true) => {
  const textToTrim = removeTags(text);
  const trimmedText = textToTrim.slice(0, maxLength);
  if (trimmedText === textToTrim) {
    return useAutop ? (0,_wordpress_autop__WEBPACK_IMPORTED_MODULE_0__.autop)(textToTrim) : textToTrim;
  }
  if (includeSpaces) {
    return (0,_wordpress_autop__WEBPACK_IMPORTED_MODULE_0__.autop)(appendMoreText(trimmedText, moreText));
  }
  const matchSpaces = trimmedText.match(/([\s]+)/g);
  const spaceCount = matchSpaces ? matchSpaces.length : 0;
  const trimmedTextExcludingSpaces = textToTrim.slice(0, maxLength + spaceCount);
  if (!useAutop) {
    return appendMoreText(trimmedTextExcludingSpaces, moreText);
  }
  return (0,_wordpress_autop__WEBPACK_IMPORTED_MODULE_0__.autop)(appendMoreText(trimmedTextExcludingSpaces, moreText));
};

/***/ }),

/***/ "./wc_components/packages/checkout/filter-registry/index.ts":
/*!******************************************************************!*\
  !*** ./wc_components/packages/checkout/filter-registry/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __experimentalApplyCheckoutFilter: () => (/* binding */ __experimentalApplyCheckoutFilter),
/* harmony export */   __experimentalRegisterCheckoutFilters: () => (/* binding */ __experimentalRegisterCheckoutFilters),
/* harmony export */   applyCheckoutFilter: () => (/* binding */ applyCheckoutFilter),
/* harmony export */   registerCheckoutFilters: () => (/* binding */ registerCheckoutFilters)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/is-shallow-equal */ "@wordpress/is-shallow-equal");
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_types_type_guards_null__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../js/types/type-guards/null */ "./wc_components/js/types/type-guards/null.ts");
/* harmony import */ var _js_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../js/types */ "./wc_components/js/types/index.ts");
/* harmony import */ var _js_settings_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../js/settings/shared */ "./wc_components/js/settings/shared/index.ts");
/**
 * External dependencies
 */

// import { CURRENT_USER_IS_ADMIN } from '@woocommerce/settings';
// CURRENT_USER_IS_ADMIN


// import { isNull, isObject, objectHasProp } from '@woocommerce/types';






/**
 * A function that always return true.
 * We need to have a single instance of this function so it doesn't
 * invalidate our memo comparison.
 */
const returnTrue = () => true;
let checkoutFilters = {};
let cachedValues = {};

/**
 * Register filters for a specific extension.
 */
const registerCheckoutFilters = (namespace, filters) => {
  /**
   * Let the user know couponName is no longer available as a filter.
   *
   * See https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/4312
   */
  if (Object.keys(filters).includes('couponName')) {
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default()('couponName', {
      alternative: 'coupons',
      plugin: 'WooCommerce Blocks',
      link: 'https://github.com/woocommerce/woocommerce-gutenberg-products-block/blob/bb921d21f42e21f38df2b1c87b48e07aa4cb0538/docs/extensibility/available-filters.md#coupons'
    });
  }
  // Clear cached values when registering new filters because otherwise we get outdated results when applying them.
  cachedValues = {};
  checkoutFilters = {
    ...checkoutFilters,
    [namespace]: filters
  };
};

/**
 * Backward compatibility for __experimentalRegisterCheckoutFilters, this has been graduated to stable now.
 * Remove after July 2023.
 */
const __experimentalRegisterCheckoutFilters = (namespace, filters) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default()('__experimentalRegisterCheckoutFilters', {
    alternative: 'registerCheckoutFilters',
    plugin: 'WooCommerce Blocks',
    link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8346',
    since: '9.6.0',
    hint: '__experimentalRegisterCheckoutFilters has graduated to stable and this experimental function will be removed.'
  });
  registerCheckoutFilters(namespace, filters);
};

/**
 * Get all filters with a specific name.
 *
 * @param {string} filterName Name of the filter to search for.
 * @return {Function[]} Array of functions that are registered for that filter
 *                      name.
 */
const getCheckoutFilters = filterName => {
  const namespaces = Object.keys(checkoutFilters);
  const filters = namespaces.map(namespace => checkoutFilters[namespace][filterName]).filter(Boolean);
  return filters;
};
const cachedFilterRuns = {};
const updatePreviousFilterRun = (filterName, arg, extensions, defaultValue) => {
  cachedFilterRuns[filterName] = {
    arg,
    extensions,
    defaultValue
  };
};

/**
 * A function that checks the shallow equality of an object's members.
 */
const checkMembersShallowEqual = (a, b) => {
  // For the case when extensions is null across runs.
  if ((0,_js_types_type_guards_null__WEBPACK_IMPORTED_MODULE_3__.isNull)(a) && (0,_js_types_type_guards_null__WEBPACK_IMPORTED_MODULE_3__.isNull)(b)) {
    return true;
  }
  return (0,_js_types__WEBPACK_IMPORTED_MODULE_4__.isObject)(a) && (0,_js_types__WEBPACK_IMPORTED_MODULE_4__.isObject)(b) && Object.keys(a).length === Object.keys(b).length && Object.keys(a).every(aKey => {
    return (0,_js_types__WEBPACK_IMPORTED_MODULE_4__.objectHasProp)(b, aKey) && _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2___default()(a[aKey], b[aKey]);
  });
};

/**
 * A function that checks the arg and extensions that were passed the last time a specific filter ran.
 * If they are shallowly equal, then return the cached value and prevent third party code running. If they are
 * different then the third party filters are run and the result is cached.
 */
const shouldReRunFilters = (filterName, arg, extensions, defaultValue) => {
  const previousFilterRun = cachedFilterRuns[filterName];
  if (!previousFilterRun) {
    // This is the first time the filter is running so let it continue;
    updatePreviousFilterRun(filterName, arg, extensions, defaultValue);
    return true;
  }
  const {
    arg: previousArg = {},
    extensions: previousExtensions = {},
    defaultValue: previousDefaultValue = null
  } = previousFilterRun;

  // Check length of arg and previousArg, and that all keys are present in both arg and previousArg
  const argIsEqual = checkMembersShallowEqual(arg, previousArg);
  if (!argIsEqual) {
    updatePreviousFilterRun(filterName, arg, extensions, defaultValue);
    return true;
  }

  // Check length of arg and previousArg, and that all keys are present in both arg and previousArg
  const defaultValueIsEqual = defaultValue === previousDefaultValue;
  if (!defaultValueIsEqual) {
    updatePreviousFilterRun(filterName, arg, extensions, defaultValue);
    return true;
  }
  const extensionsIsEqual = checkMembersShallowEqual(extensions, previousExtensions);
  if (!extensionsIsEqual) {
    updatePreviousFilterRun(filterName, arg, extensions, defaultValue);
    return true;
  }
  return false;
};

/**
 * Apply a filter.
 */
const applyCheckoutFilter = ({
  filterName,
  defaultValue,
  extensions = null,
  arg = null,
  validation = returnTrue
}) => {
  if (!shouldReRunFilters(filterName, arg, extensions, defaultValue) && cachedValues[filterName] !== undefined) {
    return cachedValues[filterName];
  }
  const filters = getCheckoutFilters(filterName);
  let value = defaultValue;
  filters.forEach(filter => {
    try {
      const newValue = filter(value, extensions || {}, arg);
      if (typeof newValue !== typeof value) {
        throw new Error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)(/* translators: %1$s is the type of the variable passed to the filter function, %2$s is the type of the value returned by the filter function. */
        (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The type returned by checkout filters must be the same as the type they receive. The function received %1$s but returned %2$s.', 'woo-gutenberg-products-block'), typeof value, typeof newValue));
      }
      value = validation(newValue) ? newValue : value;
    } catch (e) {
      if (_js_settings_shared__WEBPACK_IMPORTED_MODULE_5__.CURRENT_USER_IS_ADMIN) {
        throw e;
      } else {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }
  });
  cachedValues[filterName] = value;
  return value;
};

/**
 * Backward compatibility for __experimentalApplyCheckoutFilter, this has been graduated to stable now.
 * Remove after July 2023.
 */
const __experimentalApplyCheckoutFilter = ({
  filterName,
  defaultValue,
  extensions = null,
  arg = null,
  validation = returnTrue
}) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default()('__experimentalApplyCheckoutFilter', {
    alternative: 'applyCheckoutFilter',
    plugin: 'WooCommerce Blocks',
    link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8346',
    since: '9.6.0',
    hint: '__experimentalApplyCheckoutFilter has graduated to stable and this experimental function will be removed.'
  });
  return applyCheckoutFilter({
    filterName,
    defaultValue,
    extensions,
    arg,
    validation
  });
};

/***/ }),

/***/ "./wc_components/packages/checkout/index.js":
/*!**************************************************!*\
  !*** ./wc_components/packages/checkout/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __experimentalApplyCheckoutFilter: () => (/* reexport safe */ _filter_registry__WEBPACK_IMPORTED_MODULE_1__.__experimentalApplyCheckoutFilter),
/* harmony export */   __experimentalRegisterCheckoutFilters: () => (/* reexport safe */ _filter_registry__WEBPACK_IMPORTED_MODULE_1__.__experimentalRegisterCheckoutFilters),
/* harmony export */   applyCheckoutFilter: () => (/* reexport safe */ _filter_registry__WEBPACK_IMPORTED_MODULE_1__.applyCheckoutFilter),
/* harmony export */   getValidityMessageForInput: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getValidityMessageForInput),
/* harmony export */   isPostcode: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.isPostcode),
/* harmony export */   mustContain: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.mustContain),
/* harmony export */   registerCheckoutFilters: () => (/* reexport safe */ _filter_registry__WEBPACK_IMPORTED_MODULE_1__.registerCheckoutFilters)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./wc_components/packages/checkout/utils/index.js");
/* harmony import */ var _filter_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-registry */ "./wc_components/packages/checkout/filter-registry/index.ts");
// export * from './components';

// export * from './slot';

// export * from './blocks-registry';
// export { SlotFillProvider } from 'wordpress-components';

/***/ }),

/***/ "./wc_components/packages/checkout/utils/index.js":
/*!********************************************************!*\
  !*** ./wc_components/packages/checkout/utils/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getValidityMessageForInput: () => (/* reexport safe */ _validation__WEBPACK_IMPORTED_MODULE_0__.getValidityMessageForInput),
/* harmony export */   isPostcode: () => (/* reexport safe */ _validation__WEBPACK_IMPORTED_MODULE_0__.isPostcode),
/* harmony export */   mustContain: () => (/* reexport safe */ _validation__WEBPACK_IMPORTED_MODULE_0__.mustContain)
/* harmony export */ });
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation */ "./wc_components/packages/checkout/utils/validation/index.ts");

// export { extensionCartUpdate } from './extension-cart-update';

/***/ }),

/***/ "./wc_components/packages/checkout/utils/validation/get-validity-message-for-input.ts":
/*!********************************************************************************************!*\
  !*** ./wc_components/packages/checkout/utils/validation/get-validity-message-for-input.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */


/**
 * Converts an input's validityState to a string to display on the frontend.
 *
 * This returns custom messages for invalid/required fields. Other error types use defaults from the browser (these
 * could be implemented in the future but are not currently used by the block checkout).
 */
const getValidityMessageForInput = (label, inputElement) => {
  const {
    valid,
    customError,
    valueMissing,
    badInput,
    typeMismatch
  } = inputElement.validity;

  // No errors, or custom error - return early.
  if (valid || customError) {
    return inputElement.validationMessage;
  }
  const invalidFieldMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)(/* translators: %s field label */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Please enter a valid %s', 'woo-gutenberg-products-block'), label.toLowerCase());
  if (valueMissing || badInput || typeMismatch) {
    return invalidFieldMessage;
  }
  return inputElement.validationMessage || invalidFieldMessage;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getValidityMessageForInput);

/***/ }),

/***/ "./wc_components/packages/checkout/utils/validation/index.ts":
/*!*******************************************************************!*\
  !*** ./wc_components/packages/checkout/utils/validation/index.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getValidityMessageForInput: () => (/* reexport safe */ _get_validity_message_for_input__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   isPostcode: () => (/* reexport safe */ _is_postcode__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   mustContain: () => (/* reexport safe */ _must_contain__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _must_contain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./must-contain */ "./wc_components/packages/checkout/utils/validation/must-contain.ts");
/* harmony import */ var _get_validity_message_for_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-validity-message-for-input */ "./wc_components/packages/checkout/utils/validation/get-validity-message-for-input.ts");
/* harmony import */ var _is_postcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-postcode */ "./wc_components/packages/checkout/utils/validation/is-postcode.ts");




/***/ }),

/***/ "./wc_components/packages/checkout/utils/validation/is-postcode.ts":
/*!*************************************************************************!*\
  !*** ./wc_components/packages/checkout/utils/validation/is-postcode.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var postcode_validator_lib_cjs_postcode_regexes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! postcode-validator/lib/cjs/postcode-regexes.js */ "./node_modules/postcode-validator/lib/cjs/postcode-regexes.js");
/**
 * External dependencies
 */

const CUSTOM_REGEXES = new Map([['BA', /^([7-8]{1})([0-9]{4})$/], ['GB', /^([A-Z]){1}([0-9]{1,2}|[A-Z][0-9][A-Z]|[A-Z][0-9]{2}|[A-Z][0-9]|[0-9][A-Z]){1}([ ])?([0-9][A-Z]{2}){1}|BFPO(?:\s)?([0-9]{1,4})$|BFPO(c\/o[0-9]{1,3})$/i], ['IN', /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/], ['JP', /^([0-9]{3})([-]?)([0-9]{4})$/], ['KH', /^[0-9]{6}$/],
// Cambodia (6-digit postal code).
['LI', /^(94[8-9][0-9])$/], ['NI', /^[1-9]{1}[0-9]{4}$/],
// Nicaragua (5-digit postal code)
['NL', /^([1-9][0-9]{3})(\s?)(?!SA|SD|SS)[A-Z]{2}$/i], ['SI', /^([1-9][0-9]{3})$/]]);
const DEFAULT_REGEXES = new Map([...postcode_validator_lib_cjs_postcode_regexes_js__WEBPACK_IMPORTED_MODULE_0__.POSTCODE_REGEXES, ...CUSTOM_REGEXES]);
const isPostcode = ({
  postcode,
  country
}) => {
  // If the country is not in the list of regexes, trying to test it would result in an error, so we skip and assume
  // that it is valid.
  const postcodeTest = DEFAULT_REGEXES.get(country)?.test(postcode);
  return typeof postcodeTest !== 'undefined' ? postcodeTest : true;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPostcode);

/***/ }),

/***/ "./wc_components/packages/checkout/utils/validation/must-contain.ts":
/*!**************************************************************************!*\
  !*** ./wc_components/packages/checkout/utils/validation/must-contain.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */


/**
 * Ensures that a given value contains a string, or throws an error.
 */
const mustContain = (value, requiredValue) => {
  if (!value.includes(requiredValue)) {
    throw Error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)(/* translators: %1$s value passed to filter, %2$s : value that must be included. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Returned value must include %1$s, you passed "%2$s"', 'woo-gutenberg-products-block'), requiredValue, value));
  }
  return true;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mustContain);

/***/ }),

/***/ "./wc_components/packages/components/formatted-monetary-amount/index.tsx":
/*!*******************************************************************************!*\
  !*** ./wc_components/packages/components/formatted-monetary-amount/index.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./wc_components/packages/components/formatted-monetary-amount/style.scss");

/**
 * External dependencies
 */


// import NumberFormat from 'react-number-format';

// import type {
// 	NumberFormatValues,
// 	NumberFormatProps,
// } from 'react-number-format';



// import type { Currency } from '@woocommerce/types';

/**
 * Internal dependencies
 */

/**
 * Formats currency data into the expected format for NumberFormat.
 */
const currencyToNumberFormat = currency => {
  return {
    thousandSeparator: currency?.thousandSeparator,
    decimalSeparator: currency?.decimalSeparator,
    fixedDecimalScale: true,
    prefix: currency?.prefix,
    suffix: currency?.suffix,
    isNumericString: true
  };
};
/**
 * FormattedMonetaryAmount component.
 *
 * Takes a price and returns a formatted price using the NumberFormat component.
 *
 * More detailed docs on the additional props can be found here:https://s-yadav.github.io/react-number-format/docs/intro
 */
const FormattedMonetaryAmount = ({
  className,
  value: rawValue,
  currency,
  onValueChange,
  displayType = 'text',
  ...props
}) => {
  var _props$decimalScale;
  const value = typeof rawValue === 'string' ? parseInt(rawValue, 10) : rawValue;
  if (!Number.isFinite(value)) {
    return null;
  }
  const priceValue = value / 10 ** currency.minorUnit;
  if (!Number.isFinite(priceValue)) {
    return null;
  }
  const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wc-block-formatted-money-amount', 'wc-block-components-formatted-money-amount', className);
  const decimalScale = (_props$decimalScale = props.decimalScale) !== null && _props$decimalScale !== void 0 ? _props$decimalScale : currency?.minorUnit;
  const numberFormatProps = {
    ...props,
    ...currencyToNumberFormat(currency),
    decimalScale,
    value: undefined,
    currency: undefined,
    onValueChange: undefined
  };

  // Wrapper for NumberFormat onValueChange which handles subunit conversion.
  const onValueChangeWrapper = onValueChange ? values => {
    const minorUnitValue = +values.value * 10 ** currency.minorUnit;
    onValueChange(minorUnitValue);
  } : () => void 0;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_number_format__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes,
    displayType: displayType,
    ...numberFormatProps,
    value: priceValue,
    onValueChange: onValueChangeWrapper
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormattedMonetaryAmount);

/***/ }),

/***/ "./wc_components/packages/components/index.ts":
/*!****************************************************!*\
  !*** ./wc_components/packages/components/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormattedMonetaryAmount: () => (/* reexport safe */ _formatted_monetary_amount__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Label: () => (/* reexport safe */ _label__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Panel: () => (/* reexport safe */ _panel__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   TextInput: () => (/* reexport safe */ _text_input_text_input__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   TotalsWrapper: () => (/* reexport safe */ _totals_wrapper__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   ValidatedTextInput: () => (/* reexport safe */ _text_input_validated_text_input__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   ValidationInputError: () => (/* reexport safe */ _validation_input_error__WEBPACK_IMPORTED_MODULE_6__["default"])
/* harmony export */ });
/* harmony import */ var _formatted_monetary_amount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatted-monetary-amount */ "./wc_components/packages/components/formatted-monetary-amount/index.tsx");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./label */ "./wc_components/packages/components/label/index.tsx");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel */ "./wc_components/packages/components/panel/index.tsx");
/* harmony import */ var _text_input_validated_text_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-input/validated-text-input */ "./wc_components/packages/components/text-input/validated-text-input.tsx");
/* harmony import */ var _text_input_text_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text-input/text-input */ "./wc_components/packages/components/text-input/text-input.tsx");
/* harmony import */ var _totals_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./totals-wrapper */ "./wc_components/packages/components/totals-wrapper/index.tsx");
/* harmony import */ var _validation_input_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validation-input-error */ "./wc_components/packages/components/validation-input-error/index.tsx");
// export { default as Button } from './button';
// export { default as CheckboxControl } from './checkbox-control';
// export { default as CheckboxList } from './checkbox-list';
// export { Chip, RemovableChip } from './chip';
// export { default as FormStep } from './form-step';



// export {
// 	default as RadioControl,
// 	RadioControlOption,
// 	RadioControlOptionLayout,
// } from './radio-control';
// export type { RadioControlOption as RadioControlOptionType } from './radio-control/types';
// export { default as RadioControlAccordion } from './radio-control-accordion';
// export { default as SortSelect } from './sort-select';
// export { default as Spinner } from './spinner';
// export { default as StoreNotice } from './store-notice';
// export { default as StoreNoticesContainer } from './store-notices-container';
// export { default as Textarea } from './textarea';


// export { default as Title } from './title';
// export * from './totals';



/***/ }),

/***/ "./wc_components/packages/components/label/index.tsx":
/*!***********************************************************!*\
  !*** ./wc_components/packages/components/label/index.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

/**
 * External dependencies
 */


/**
 * Component used to render an accessible text given a label and/or a
 * screenReaderLabel. The wrapper element and wrapper props can also be
 * specified via props.
 *
 */
const Label = ({
  label,
  screenReaderLabel,
  wrapperElement,
  wrapperProps = {}
}) => {
  let Wrapper;
  const hasLabel = typeof label !== 'undefined' && label !== null;
  const hasScreenReaderLabel = typeof screenReaderLabel !== 'undefined' && screenReaderLabel !== null;
  if (!hasLabel && hasScreenReaderLabel) {
    Wrapper = wrapperElement || 'span';
    wrapperProps = {
      ...wrapperProps,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(wrapperProps.className, 'screen-reader-text')
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Wrapper, {
      ...wrapperProps
    }, screenReaderLabel);
  }
  Wrapper = wrapperElement || _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment;
  if (hasLabel && hasScreenReaderLabel && label !== screenReaderLabel) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Wrapper, {
      ...wrapperProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      "aria-hidden": "true"
    }, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "screen-reader-text"
    }, screenReaderLabel));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Wrapper, {
    ...wrapperProps
  }, label);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);

/***/ }),

/***/ "./wc_components/packages/components/panel/index.tsx":
/*!***********************************************************!*\
  !*** ./wc_components/packages/components/panel/index.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-up.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-down.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./wc_components/packages/components/panel/style.scss");

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

const Panel = ({
  children,
  className,
  initialOpen = false,
  hasBorder = false,
  title,
  titleTag: TitleTag = 'div'
}) => {
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(initialOpen);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'wc-block-components-panel', {
      'has-border': hasBorder
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TitleTag, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    "aria-expanded": isOpen,
    className: "wc-block-components-panel__button",
    onClick: () => setIsOpen(!isOpen)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-hidden": "true",
    className: "wc-block-components-panel__button-icon",
    icon: isOpen ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), title)), isOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wc-block-components-panel__content"
  }, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Panel);

/***/ }),

/***/ "./wc_components/packages/components/text-input/text-input.tsx":
/*!*********************************************************************!*\
  !*** ./wc_components/packages/components/text-input/text-input.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../label */ "./wc_components/packages/components/label/index.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./wc_components/packages/components/text-input/style.scss");

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const TextInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({
  className,
  id,
  type = 'text',
  ariaLabel,
  ariaDescribedBy,
  label,
  screenReaderLabel,
  disabled,
  help,
  autoCapitalize = 'off',
  autoComplete = 'off',
  value = '',
  onChange,
  required = false,
  onBlur = () => {
    /* Do nothing */
  },
  feedback,
  ...rest
}, ref) => {
  const [isActive, setIsActive] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('wc-block-components-text-input', className, {
      'is-active': isActive || value
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: type,
    id: id,
    value: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(value),
    ref: ref,
    autoCapitalize: autoCapitalize,
    autoComplete: autoComplete,
    onChange: event => {
      onChange(event.target.value);
    },
    onFocus: () => setIsActive(true),
    onBlur: event => {
      onBlur(event.target.value);
      setIsActive(false);
    },
    "aria-label": ariaLabel || label,
    disabled: disabled,
    "aria-describedby": !!help && !ariaDescribedBy ? id + '__help' : ariaDescribedBy,
    required: required,
    ...rest
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_label__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: label,
    screenReaderLabel: screenReaderLabel || label,
    wrapperElement: "label",
    wrapperProps: {
      htmlFor: id
    },
    htmlFor: id
  }), !!help && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    id: id + '__help',
    className: "wc-block-components-text-input__help"
  }, help), feedback);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextInput);

/***/ }),

/***/ "./wc_components/packages/components/text-input/validated-text-input.tsx":
/*!*******************************************************************************!*\
  !*** ./wc_components/packages/components/text-input/validated-text-input.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../js/types */ "./wc_components/js/types/index.ts");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../js/data */ "./wc_components/js/data/index.ts");
/* harmony import */ var _js_base_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../js/base/hooks */ "./wc_components/js/base/hooks/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _text_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./text-input */ "./wc_components/packages/components/text-input/text-input.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.scss */ "./wc_components/packages/components/text-input/style.scss");
/* harmony import */ var _validation_input_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../validation-input-error */ "./wc_components/packages/components/validation-input-error/index.tsx");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../checkout */ "./wc_components/packages/checkout/index.js");

/**
 * External dependencies
 */


// import { isObject } from '@woocommerce/types';


// import { VALIDATION_STORE_KEY } from '@woocommerce/block-data';


// import { usePrevious } from '@woocommerce/base-hooks';



/**
 * Internal dependencies
 */



// import { getValidityMessageForInput } from '../../checkout/utils';

/**
 * A text based input which validates the input value.
 */
const ValidatedTextInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({
  className,
  id,
  type = 'text',
  ariaDescribedBy,
  errorId,
  focusOnMount = false,
  onChange,
  showError = true,
  errorMessage: passedErrorMessage = '',
  value = '',
  customValidation = () => true,
  customFormatter = newValue => newValue,
  label,
  validateOnMount = true,
  instanceId: preferredInstanceId = '',
  ...rest
}, forwardedRef) => {
  // True on mount.
  const [isPristine, setIsPristine] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  // Track incoming value.
  const previousValue = (0,_js_base_hooks__WEBPACK_IMPORTED_MODULE_6__.usePrevious)(value);

  // Ref for the input element.
  const inputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__.useInstanceId)(ValidatedTextInput, '', preferredInstanceId);
  const textInputId = typeof id !== 'undefined' ? id : 'textinput-' + instanceId;
  const errorIdString = errorId !== undefined ? errorId : textInputId;
  const {
    setValidationErrors,
    hideValidationError,
    clearValidationError
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_js_data__WEBPACK_IMPORTED_MODULE_5__.VALIDATION_STORE_KEY);

  // Ref for validation callback.
  const customValidationRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(customValidation);

  // Update ref when validation callback changes.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    customValidationRef.current = customValidation;
  }, [customValidation]);
  const {
    validationError,
    validationErrorId
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const store = select(_js_data__WEBPACK_IMPORTED_MODULE_5__.VALIDATION_STORE_KEY);
    return {
      validationError: store.getValidationError(errorIdString),
      validationErrorId: store.getValidationErrorId(errorIdString)
    };
  });
  const validateInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)((errorsHidden = true) => {
    const inputObject = inputRef.current || null;
    if (inputObject === null) {
      return;
    }

    // Trim white space before validation.
    inputObject.value = inputObject.value.trim();
    inputObject.setCustomValidity('');
    if (inputObject.checkValidity() && customValidationRef.current(inputObject)) {
      clearValidationError(errorIdString);
      return;
    }
    setValidationErrors({
      [errorIdString]: {
        message: label ? (0,_checkout__WEBPACK_IMPORTED_MODULE_11__.getValidityMessageForInput)(label, inputObject) : inputObject.validationMessage,
        hidden: errorsHidden
      }
    });
  }, [clearValidationError, errorIdString, setValidationErrors, label]);

  // Allows parent to trigger revalidation.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(forwardedRef, function () {
    return {
      revalidate() {
        validateInput(!value);
      }
    };
  }, [validateInput, value]);

  /**
   * Handle browser autofill / changes via data store.
   *
   * Trigger validation on incoming state change if the current element is not in focus. This is because autofilled
   * elements do not trigger the blur() event, and so values can be validated in the background if the state changes
   * elsewhere.
   *
   * Errors are immediately visible.
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (value !== previousValue && (value || previousValue) && inputRef && inputRef.current !== null && inputRef.current?.ownerDocument?.activeElement !== inputRef.current) {
      const formattedValue = customFormatter(inputRef.current.value);
      if (formattedValue !== value) {
        onChange(formattedValue);
      } else {
        validateInput(true);
      }
    }
  }, [validateInput, customFormatter, value, previousValue, onChange]);

  /**
   * Validation on mount.
   *
   * If the input is in pristine state on mount, focus the element (if focusOnMount is enabled), and validate in the
   * background.
   *
   * Errors are hidden until blur.
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!isPristine) {
      return;
    }
    setIsPristine(false);
    if (focusOnMount) {
      inputRef.current?.focus();
    }

    // if validateOnMount is false, only validate input if focusOnMount is also false
    if (validateOnMount || !focusOnMount) {
      validateInput(true);
    }
  }, [validateOnMount, focusOnMount, isPristine, setIsPristine, validateInput]);

  // Remove validation errors when unmounted.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    return () => {
      clearValidationError(errorIdString);
    };
  }, [clearValidationError, errorIdString]);
  if (passedErrorMessage !== '' && (0,_js_types__WEBPACK_IMPORTED_MODULE_3__.isObject)(validationError)) {
    validationError.message = passedErrorMessage;
  }
  const hasError = validationError?.message && !validationError?.hidden;
  const describedBy = showError && hasError && validationErrorId ? validationErrorId : ariaDescribedBy;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_input__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
      'has-error': hasError
    }),
    "aria-invalid": hasError === true,
    id: textInputId,
    type: type,
    feedback: showError ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_validation_input_error__WEBPACK_IMPORTED_MODULE_10__.ValidationInputError, {
      errorMessage: passedErrorMessage,
      propertyName: errorIdString
    }) : null,
    ref: inputRef,
    onChange: newValue => {
      // Hide errors while typing.
      hideValidationError(errorIdString);

      // Validate the input value.
      validateInput(true);

      // Push the changes up to the parent component.
      const formattedValue = customFormatter(newValue);
      if (formattedValue !== value) {
        onChange(formattedValue);
      }
    },
    onBlur: () => validateInput(false),
    ariaDescribedBy: describedBy,
    value: value,
    title: "" // This prevents the same error being shown on hover.
    ,
    label: label,
    ...rest
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidatedTextInput);

/***/ }),

/***/ "./wc_components/packages/components/totals-wrapper/index.tsx":
/*!********************************************************************!*\
  !*** ./wc_components/packages/components/totals-wrapper/index.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./wc_components/packages/components/totals-wrapper/style.scss");

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

const TotalsWrapper = ({
  children,
  slotWrapper = false,
  className
}) => {
  return _wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Children.count(children) ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'wc-block-components-totals-wrapper', {
      'slot-wrapper': slotWrapper
    })
  }, children) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TotalsWrapper);

/***/ }),

/***/ "./wc_components/packages/components/validation-input-error/index.tsx":
/*!****************************************************************************!*\
  !*** ./wc_components/packages/components/validation-input-error/index.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidationInputError: () => (/* binding */ ValidationInputError),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @woocommerce/block-data */ "@woocommerce/block-data");
/* harmony import */ var _woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./wc_components/packages/components/validation-input-error/style.scss");

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

const ValidationInputError = ({
  errorMessage = '',
  propertyName = '',
  elementId = ''
}) => {
  const {
    validationError,
    validationErrorId
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const store = select(_woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2__.VALIDATION_STORE_KEY);
    return {
      validationError: store.getValidationError(propertyName),
      validationErrorId: store.getValidationErrorId(elementId)
    };
  });
  if (!errorMessage || typeof errorMessage !== 'string') {
    if (validationError?.message && !validationError?.hidden) {
      errorMessage = validationError.message;
    } else {
      return null;
    }
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wc-block-components-validation-error",
    role: "alert"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    id: validationErrorId
  }, errorMessage));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationInputError);

/***/ }),

/***/ "./wc_components/packages/prices/index.js":
/*!************************************************!*\
  !*** ./wc_components/packages/prices/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatPrice: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.formatPrice),
/* harmony export */   getCurrency: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getCurrency),
/* harmony export */   getCurrencyFromPriceResponse: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getCurrencyFromPriceResponse)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./wc_components/packages/prices/utils/index.js");


/***/ }),

/***/ "./wc_components/packages/prices/utils/index.js":
/*!******************************************************!*\
  !*** ./wc_components/packages/prices/utils/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatPrice: () => (/* reexport safe */ _price__WEBPACK_IMPORTED_MODULE_0__.formatPrice),
/* harmony export */   getCurrency: () => (/* reexport safe */ _price__WEBPACK_IMPORTED_MODULE_0__.getCurrency),
/* harmony export */   getCurrencyFromPriceResponse: () => (/* reexport safe */ _price__WEBPACK_IMPORTED_MODULE_0__.getCurrencyFromPriceResponse)
/* harmony export */ });
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./price */ "./wc_components/packages/prices/utils/price.ts");


/***/ }),

/***/ "./wc_components/packages/prices/utils/price.ts":
/*!******************************************************!*\
  !*** ./wc_components/packages/prices/utils/price.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatPrice: () => (/* binding */ formatPrice),
/* harmony export */   getCurrency: () => (/* binding */ getCurrency),
/* harmony export */   getCurrencyFromPriceResponse: () => (/* binding */ getCurrencyFromPriceResponse)
/* harmony export */ });
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @woocommerce/settings */ "@woocommerce/settings");
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Get currency prefix.
 */
const getPrefix = (symbol, symbolPosition) => {
  const prefixes = {
    left: symbol,
    left_space: ' ' + symbol,
    right: '',
    right_space: ''
  };
  return prefixes[symbolPosition] || '';
};

/**
 * Get currency suffix.
 */
const getSuffix = (symbol, symbolPosition) => {
  const suffixes = {
    left: '',
    left_space: '',
    right: symbol,
    right_space: ' ' + symbol
  };
  return suffixes[symbolPosition] || '';
};

/**
 * Currency information in normalized format from server settings.
 */
const siteCurrencySettings = {
  code: _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.CURRENCY.code,
  symbol: _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.CURRENCY.symbol,
  thousandSeparator: _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.CURRENCY.thousandSeparator,
  decimalSeparator: _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.CURRENCY.decimalSeparator,
  minorUnit: _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.CURRENCY.precision,
  prefix: getPrefix(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.CURRENCY.symbol, _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.CURRENCY.symbolPosition),
  suffix: getSuffix(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.CURRENCY.symbol, _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__.CURRENCY.symbolPosition)
};

/**
 * Gets currency information in normalized format from an API response or the server.
 *
 * If no currency was provided, or currency_code is empty, the default store currency will be used.
 */
const getCurrencyFromPriceResponse = currencyData => {
  if (!currencyData?.currency_code) {
    return siteCurrencySettings;
  }
  const {
    currency_code: code,
    currency_symbol: symbol,
    currency_thousand_separator: thousandSeparator,
    currency_decimal_separator: decimalSeparator,
    currency_minor_unit: minorUnit,
    currency_prefix: prefix,
    currency_suffix: suffix
  } = currencyData;
  return {
    code: code || 'USD',
    symbol: symbol || '$',
    thousandSeparator: typeof thousandSeparator === 'string' ? thousandSeparator : ',',
    decimalSeparator: typeof decimalSeparator === 'string' ? decimalSeparator : '.',
    minorUnit: Number.isFinite(minorUnit) ? minorUnit : 2,
    prefix: typeof prefix === 'string' ? prefix : '$',
    suffix: typeof suffix === 'string' ? suffix : ''
  };
};

/**
 * Gets currency information in normalized format, allowing overrides.
 */
const getCurrency = (currencyData = {}) => {
  return {
    ...siteCurrencySettings,
    ...currencyData
  };
};
const applyThousandSeparator = (numberString, thousandSeparator) => {
  return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
};
const splitDecimal = numberString => {
  const parts = numberString.split('.');
  const beforeDecimal = parts[0];
  const afterDecimal = parts[1] || '';
  return {
    beforeDecimal,
    afterDecimal
  };
};
const applyDecimal = (afterDecimal, decimalSeparator, minorUnit) => {
  if (afterDecimal) {
    return `${decimalSeparator}${afterDecimal.padEnd(minorUnit, '0')}`;
  }
  if (minorUnit > 0) {
    return `${decimalSeparator}${'0'.repeat(minorUnit)}`;
  }
  return '';
};

/**
 * Format a price, provided using the smallest unit of the currency, as a
 * decimal complete with currency symbols using current store settings.
 */
const formatPrice = (price, currencyData) => {
  if (price === '' || price === undefined) {
    return '';
  }
  const priceInt = typeof price === 'number' ? price : parseInt(price, 10);
  if (!Number.isFinite(priceInt)) {
    return '';
  }
  const currency = getCurrency(currencyData);
  const {
    minorUnit,
    prefix,
    suffix,
    decimalSeparator,
    thousandSeparator
  } = currency;
  const formattedPrice = priceInt / 10 ** minorUnit;
  const {
    beforeDecimal,
    afterDecimal
  } = splitDecimal(formattedPrice.toString());
  const formattedValue = `${prefix}${applyThousandSeparator(beforeDecimal, thousandSeparator)}${applyDecimal(afterDecimal, decimalSeparator, minorUnit)}${suffix}`;

  // This uses a textarea to magically decode HTML currency symbols.
  const txt = document.createElement('textarea');
  txt.innerHTML = formattedValue;
  return txt.value;
};

/***/ }),

/***/ "./node_modules/camel-case/dist.es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/camel-case/dist.es2015/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelCase: () => (/* binding */ camelCase),
/* harmony export */   camelCaseTransform: () => (/* binding */ camelCaseTransform),
/* harmony export */   camelCaseTransformMerge: () => (/* binding */ camelCaseTransformMerge)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var pascal_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pascal-case */ "./node_modules/pascal-case/dist.es2015/index.js");


function camelCaseTransform(input, index) {
    if (index === 0)
        return input.toLowerCase();
    return (0,pascal_case__WEBPACK_IMPORTED_MODULE_0__.pascalCaseTransform)(input, index);
}
function camelCaseTransformMerge(input, index) {
    if (index === 0)
        return input.toLowerCase();
    return (0,pascal_case__WEBPACK_IMPORTED_MODULE_0__.pascalCaseTransformMerge)(input);
}
function camelCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,pascal_case__WEBPACK_IMPORTED_MODULE_0__.pascalCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ transform: camelCaseTransform }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/compare-versions/lib/esm/compareVersions.js":
/*!******************************************************************!*\
  !*** ./node_modules/compare-versions/lib/esm/compareVersions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareVersions: () => (/* binding */ compareVersions)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/compare-versions/lib/esm/utils.js");

/**
 * Compare [semver](https://semver.org/) version strings to find greater, equal or lesser.
 * This library supports the full semver specification, including comparing versions with different number of digits like `1.0.0`, `1.0`, `1`, and pre-release versions like `1.0.0-alpha`.
 * @param v1 - First version to compare
 * @param v2 - Second version to compare
 * @returns Numeric value compatible with the [Array.sort(fn) interface](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Parameters).
 */
const compareVersions = (v1, v2) => {
    // validate input and split into segments
    const n1 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.validateAndParse)(v1);
    const n2 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.validateAndParse)(v2);
    // pop off the patch
    const p1 = n1.pop();
    const p2 = n2.pop();
    // validate numbers
    const r = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.compareSegments)(n1, n2);
    if (r !== 0)
        return r;
    // validate pre-release
    if (p1 && p2) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.compareSegments)(p1.split('.'), p2.split('.'));
    }
    else if (p1 || p2) {
        return p1 ? -1 : 1;
    }
    return 0;
};
//# sourceMappingURL=compareVersions.js.map

/***/ }),

/***/ "./node_modules/compare-versions/lib/esm/utils.js":
/*!********************************************************!*\
  !*** ./node_modules/compare-versions/lib/esm/utils.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareSegments: () => (/* binding */ compareSegments),
/* harmony export */   semver: () => (/* binding */ semver),
/* harmony export */   validateAndParse: () => (/* binding */ validateAndParse)
/* harmony export */ });
const semver = /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
const validateAndParse = (version) => {
    if (typeof version !== 'string') {
        throw new TypeError('Invalid argument expected string');
    }
    const match = version.match(semver);
    if (!match) {
        throw new Error(`Invalid argument not valid semver ('${version}' received)`);
    }
    match.shift();
    return match;
};
const isWildcard = (s) => s === '*' || s === 'x' || s === 'X';
const tryParse = (v) => {
    const n = parseInt(v, 10);
    return isNaN(n) ? v : n;
};
const forceType = (a, b) => typeof a !== typeof b ? [String(a), String(b)] : [a, b];
const compareStrings = (a, b) => {
    if (isWildcard(a) || isWildcard(b))
        return 0;
    const [ap, bp] = forceType(tryParse(a), tryParse(b));
    if (ap > bp)
        return 1;
    if (ap < bp)
        return -1;
    return 0;
};
const compareSegments = (a, b) => {
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        const r = compareStrings(a[i] || '0', b[i] || '0');
        if (r !== 0)
            return r;
    }
    return 0;
};
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/dataloader/index.js":
/*!******************************************!*\
  !*** ./node_modules/dataloader/index.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";


/**
 * Copyright (c) 2019-present, GraphQL Foundation
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// A Function, which when given an Array of keys, returns a Promise of an Array
// of values or Errors.
// Optionally turn off batching or caching or provide a cache key function or a
// custom cache instance.
// If a custom cache is provided, it must be of this type (a subset of ES6 Map).

/**
 * A `DataLoader` creates a public API for loading data from a particular
 * data back-end with unique keys such as the `id` column of a SQL table or
 * document name in a MongoDB database, given a batch loading function.
 *
 * Each `DataLoader` instance contains a unique memoized cache. Use caution when
 * used in long-lived applications or those which serve many users with
 * different access permissions and consider creating a new instance per
 * web request.
 */
var DataLoader =
/*#__PURE__*/
function () {
  function DataLoader(batchLoadFn, options) {
    if (typeof batchLoadFn !== 'function') {
      throw new TypeError('DataLoader must be constructed with a function which accepts ' + ("Array<key> and returns Promise<Array<value>>, but got: " + batchLoadFn + "."));
    }

    this._batchLoadFn = batchLoadFn;
    this._maxBatchSize = getValidMaxBatchSize(options);
    this._batchScheduleFn = getValidBatchScheduleFn(options);
    this._cacheKeyFn = getValidCacheKeyFn(options);
    this._cacheMap = getValidCacheMap(options);
    this._batch = null;
    this.name = getValidName(options);
  } // Private


  var _proto = DataLoader.prototype;

  /**
   * Loads a key, returning a `Promise` for the value represented by that key.
   */
  _proto.load = function load(key) {
    if (key === null || key === undefined) {
      throw new TypeError('The loader.load() function must be called with a value, ' + ("but got: " + String(key) + "."));
    }

    var batch = getCurrentBatch(this);
    var cacheMap = this._cacheMap;

    var cacheKey = this._cacheKeyFn(key); // If caching and there is a cache-hit, return cached Promise.


    if (cacheMap) {
      var cachedPromise = cacheMap.get(cacheKey);

      if (cachedPromise) {
        var cacheHits = batch.cacheHits || (batch.cacheHits = []);
        return new Promise(function (resolve) {
          cacheHits.push(function () {
            resolve(cachedPromise);
          });
        });
      }
    } // Otherwise, produce a new Promise for this key, and enqueue it to be
    // dispatched along with the current batch.


    batch.keys.push(key);
    var promise = new Promise(function (resolve, reject) {
      batch.callbacks.push({
        resolve: resolve,
        reject: reject
      });
    }); // If caching, cache this promise.

    if (cacheMap) {
      cacheMap.set(cacheKey, promise);
    }

    return promise;
  }
  /**
   * Loads multiple keys, promising an array of values:
   *
   *     var [ a, b ] = await myLoader.loadMany([ 'a', 'b' ]);
   *
   * This is similar to the more verbose:
   *
   *     var [ a, b ] = await Promise.all([
   *       myLoader.load('a'),
   *       myLoader.load('b')
   *     ]);
   *
   * However it is different in the case where any load fails. Where
   * Promise.all() would reject, loadMany() always resolves, however each result
   * is either a value or an Error instance.
   *
   *     var [ a, b, c ] = await myLoader.loadMany([ 'a', 'b', 'badkey' ]);
   *     // c instanceof Error
   *
   */
  ;

  _proto.loadMany = function loadMany(keys) {
    if (!isArrayLike(keys)) {
      throw new TypeError('The loader.loadMany() function must be called with Array<key> ' + ("but got: " + keys + "."));
    } // Support ArrayLike by using only minimal property access


    var loadPromises = [];

    for (var i = 0; i < keys.length; i++) {
      loadPromises.push(this.load(keys[i])["catch"](function (error) {
        return error;
      }));
    }

    return Promise.all(loadPromises);
  }
  /**
   * Clears the value at `key` from the cache, if it exists. Returns itself for
   * method chaining.
   */
  ;

  _proto.clear = function clear(key) {
    var cacheMap = this._cacheMap;

    if (cacheMap) {
      var cacheKey = this._cacheKeyFn(key);

      cacheMap["delete"](cacheKey);
    }

    return this;
  }
  /**
   * Clears the entire cache. To be used when some event results in unknown
   * invalidations across this particular `DataLoader`. Returns itself for
   * method chaining.
   */
  ;

  _proto.clearAll = function clearAll() {
    var cacheMap = this._cacheMap;

    if (cacheMap) {
      cacheMap.clear();
    }

    return this;
  }
  /**
   * Adds the provided key and value to the cache. If the key already
   * exists, no change is made. Returns itself for method chaining.
   *
   * To prime the cache with an error at a key, provide an Error instance.
   */
  ;

  _proto.prime = function prime(key, value) {
    var cacheMap = this._cacheMap;

    if (cacheMap) {
      var cacheKey = this._cacheKeyFn(key); // Only add the key if it does not already exist.


      if (cacheMap.get(cacheKey) === undefined) {
        // Cache a rejected promise if the value is an Error, in order to match
        // the behavior of load(key).
        var promise;

        if (value instanceof Error) {
          promise = Promise.reject(value); // Since this is a case where an Error is intentionally being primed
          // for a given key, we want to disable unhandled promise rejection.

          promise["catch"](function () {});
        } else {
          promise = Promise.resolve(value);
        }

        cacheMap.set(cacheKey, promise);
      }
    }

    return this;
  }
  /**
   * The name given to this `DataLoader` instance. Useful for APM tools.
   *
   * Is `null` if not set in the constructor.
   */
  ;

  return DataLoader;
}(); // Private: Enqueue a Job to be executed after all "PromiseJobs" Jobs.
//
// ES6 JavaScript uses the concepts Job and JobQueue to schedule work to occur
// after the current execution context has completed:
// http://www.ecma-international.org/ecma-262/6.0/#sec-jobs-and-job-queues
//
// Node.js uses the `process.nextTick` mechanism to implement the concept of a
// Job, maintaining a global FIFO JobQueue for all Jobs, which is flushed after
// the current call stack ends.
//
// When calling `then` on a Promise, it enqueues a Job on a specific
// "PromiseJobs" JobQueue which is flushed in Node as a single Job on the
// global JobQueue.
//
// DataLoader batches all loads which occur in a single frame of execution, but
// should include in the batch all loads which occur during the flushing of the
// "PromiseJobs" JobQueue after that same execution frame.
//
// In order to avoid the DataLoader dispatch Job occuring before "PromiseJobs",
// A Promise Job is created with the sole purpose of enqueuing a global Job,
// ensuring that it always occurs after "PromiseJobs" ends.
//
// Node.js's job queue is unique. Browsers do not have an equivalent mechanism
// for enqueuing a job to be performed after promise microtasks and before the
// next macrotask. For browser environments, a macrotask is used (via
// setImmediate or setTimeout) at a potential performance penalty.


var enqueuePostPromiseJob = typeof process === 'object' && typeof process.nextTick === 'function' ? function (fn) {
  if (!resolvedPromise) {
    resolvedPromise = Promise.resolve();
  }

  resolvedPromise.then(function () {
    process.nextTick(fn);
  });
} : typeof setImmediate === 'function' ? function (fn) {
  setImmediate(fn);
} : function (fn) {
  setTimeout(fn);
}; // Private: cached resolved Promise instance

var resolvedPromise; // Private: Describes a batch of requests

// Private: Either returns the current batch, or creates and schedules a
// dispatch of a new batch for the given loader.
function getCurrentBatch(loader) {
  // If there is an existing batch which has not yet dispatched and is within
  // the limit of the batch size, then return it.
  var existingBatch = loader._batch;

  if (existingBatch !== null && !existingBatch.hasDispatched && existingBatch.keys.length < loader._maxBatchSize) {
    return existingBatch;
  } // Otherwise, create a new batch for this loader.


  var newBatch = {
    hasDispatched: false,
    keys: [],
    callbacks: []
  }; // Store it on the loader so it may be reused.

  loader._batch = newBatch; // Then schedule a task to dispatch this batch of requests.

  loader._batchScheduleFn(function () {
    dispatchBatch(loader, newBatch);
  });

  return newBatch;
}

function dispatchBatch(loader, batch) {
  // Mark this batch as having been dispatched.
  batch.hasDispatched = true; // If there's nothing to load, resolve any cache hits and return early.

  if (batch.keys.length === 0) {
    resolveCacheHits(batch);
    return;
  } // Call the provided batchLoadFn for this loader with the batch's keys and
  // with the loader as the `this` context.


  var batchPromise;

  try {
    batchPromise = loader._batchLoadFn(batch.keys);
  } catch (e) {
    return failedDispatch(loader, batch, new TypeError('DataLoader must be constructed with a function which accepts ' + 'Array<key> and returns Promise<Array<value>>, but the function ' + ("errored synchronously: " + String(e) + ".")));
  } // Assert the expected response from batchLoadFn


  if (!batchPromise || typeof batchPromise.then !== 'function') {
    return failedDispatch(loader, batch, new TypeError('DataLoader must be constructed with a function which accepts ' + 'Array<key> and returns Promise<Array<value>>, but the function did ' + ("not return a Promise: " + String(batchPromise) + ".")));
  } // Await the resolution of the call to batchLoadFn.


  batchPromise.then(function (values) {
    // Assert the expected resolution from batchLoadFn.
    if (!isArrayLike(values)) {
      throw new TypeError('DataLoader must be constructed with a function which accepts ' + 'Array<key> and returns Promise<Array<value>>, but the function did ' + ("not return a Promise of an Array: " + String(values) + "."));
    }

    if (values.length !== batch.keys.length) {
      throw new TypeError('DataLoader must be constructed with a function which accepts ' + 'Array<key> and returns Promise<Array<value>>, but the function did ' + 'not return a Promise of an Array of the same length as the Array ' + 'of keys.' + ("\n\nKeys:\n" + String(batch.keys)) + ("\n\nValues:\n" + String(values)));
    } // Resolve all cache hits in the same micro-task as freshly loaded values.


    resolveCacheHits(batch); // Step through values, resolving or rejecting each Promise in the batch.

    for (var i = 0; i < batch.callbacks.length; i++) {
      var value = values[i];

      if (value instanceof Error) {
        batch.callbacks[i].reject(value);
      } else {
        batch.callbacks[i].resolve(value);
      }
    }
  })["catch"](function (error) {
    failedDispatch(loader, batch, error);
  });
} // Private: do not cache individual loads if the entire batch dispatch fails,
// but still reject each request so they do not hang.


function failedDispatch(loader, batch, error) {
  // Cache hits are resolved, even though the batch failed.
  resolveCacheHits(batch);

  for (var i = 0; i < batch.keys.length; i++) {
    loader.clear(batch.keys[i]);
    batch.callbacks[i].reject(error);
  }
} // Private: Resolves the Promises for any cache hits in this batch.


function resolveCacheHits(batch) {
  if (batch.cacheHits) {
    for (var i = 0; i < batch.cacheHits.length; i++) {
      batch.cacheHits[i]();
    }
  }
} // Private: given the DataLoader's options, produce a valid max batch size.


function getValidMaxBatchSize(options) {
  var shouldBatch = !options || options.batch !== false;

  if (!shouldBatch) {
    return 1;
  }

  var maxBatchSize = options && options.maxBatchSize;

  if (maxBatchSize === undefined) {
    return Infinity;
  }

  if (typeof maxBatchSize !== 'number' || maxBatchSize < 1) {
    throw new TypeError("maxBatchSize must be a positive number: " + maxBatchSize);
  }

  return maxBatchSize;
} // Private


function getValidBatchScheduleFn(options) {
  var batchScheduleFn = options && options.batchScheduleFn;

  if (batchScheduleFn === undefined) {
    return enqueuePostPromiseJob;
  }

  if (typeof batchScheduleFn !== 'function') {
    throw new TypeError("batchScheduleFn must be a function: " + batchScheduleFn);
  }

  return batchScheduleFn;
} // Private: given the DataLoader's options, produce a cache key function.


function getValidCacheKeyFn(options) {
  var cacheKeyFn = options && options.cacheKeyFn;

  if (cacheKeyFn === undefined) {
    return function (key) {
      return key;
    };
  }

  if (typeof cacheKeyFn !== 'function') {
    throw new TypeError("cacheKeyFn must be a function: " + cacheKeyFn);
  }

  return cacheKeyFn;
} // Private: given the DataLoader's options, produce a CacheMap to be used.


function getValidCacheMap(options) {
  var shouldCache = !options || options.cache !== false;

  if (!shouldCache) {
    return null;
  }

  var cacheMap = options && options.cacheMap;

  if (cacheMap === undefined) {
    return new Map();
  }

  if (cacheMap !== null) {
    var cacheFunctions = ['get', 'set', 'delete', 'clear'];
    var missingFunctions = cacheFunctions.filter(function (fnName) {
      return cacheMap && typeof cacheMap[fnName] !== 'function';
    });

    if (missingFunctions.length !== 0) {
      throw new TypeError('Custom cacheMap missing methods: ' + missingFunctions.join(', '));
    }
  }

  return cacheMap;
}

function getValidName(options) {
  if (options && options.name) {
    return options.name;
  }

  return null;
} // Private


function isArrayLike(x) {
  return typeof x === 'object' && x !== null && typeof x.length === 'number' && (x.length === 0 || x.length > 0 && Object.prototype.hasOwnProperty.call(x, x.length - 1));
}

module.exports = DataLoader;

/***/ }),

/***/ "./node_modules/dinero.js/build/esm/dinero.js":
/*!****************************************************!*\
  !*** ./node_modules/dinero.js/build/esm/dinero.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Default values for all Dinero objects.
 *
 * You can override default values for all subsequent Dinero objects by changing them directly on the global `Dinero` object.
 * Existing instances won't be affected.
 *
 * @property {Number} defaultAmount - The default amount for new Dinero objects (see {@link module:Dinero Dinero} for format).
 * @property {String} defaultCurrency - The default currency for new Dinero objects (see {@link module:Dinero Dinero} for format).
 * @property {Number} defaultPrecision - The default precision for new Dinero objects (see {@link module:Dinero Dinero} for format).
 *
 * @example
 * // Will set currency to 'EUR' for all Dinero objects.
 * Dinero.defaultCurrency = 'EUR'
 *
 * @type {Object}
 */
var Defaults = {
  defaultAmount: 0,
  defaultCurrency: 'USD',
  defaultPrecision: 2
};
/**
 * Global settings for all Dinero objects.
 *
 * You can override global values for all subsequent Dinero objects by changing them directly on the global `Dinero` object.
 * Existing instances won't be affected.
 *
 * @property {String}  globalLocale - The global locale for new Dinero objects (see {@link module:Dinero~setLocale setLocale} for format).
 * @property {String}  globalFormat - The global format for new Dinero objects (see {@link module:Dinero~toFormat toFormat} for format).
 * @property {String}  globalRoundingMode - The global rounding mode for new Dinero objects (see {@link module:Dinero~multiply multiply} or {@link module:Dinero~divide divide} for format).
 * @property {String}  globalFormatRoundingMode - The global rounding mode to format new Dinero objects (see {@link module:Dinero~toFormat toFormat} or {@link module:Dinero~toRoundedUnit toRoundedUnit} for format).
 * @property {(String|Promise)}  globalExchangeRatesApi.endpoint - The global exchange rate API endpoint for new Dinero objects, or the global promise that resolves to the exchanges rates (see {@link module:Dinero~convert convert} for format).
 * @property {String}  globalExchangeRatesApi.propertyPath - The global exchange rate API property path for new Dinero objects (see {@link module:Dinero~convert convert} for format).
 * @property {Object}  globalExchangeRatesApi.headers - The global exchange rate API headers for new Dinero objects (see {@link module:Dinero~convert convert} for format).
 *
 * @example
 * // Will set locale to 'fr-FR' for all Dinero objects.
 * Dinero.globalLocale = 'fr-FR'
 * @example
 * // Will set global exchange rate API parameters for all Dinero objects.
 * Dinero.globalExchangeRatesApi = {
 *  endpoint: 'https://yourexchangerates.api/latest?base={{from}}',
 *  propertyPath: 'data.rates.{{to}}',
 *  headers: {
 *    'user-key': 'xxxxxxxxx'
 *  }
 * }
 *
 * @type {Object}
 */

var Globals = {
  globalLocale: 'en-US',
  globalFormat: '$0,0.00',
  globalRoundingMode: 'HALF_EVEN',
  globalFormatRoundingMode: 'HALF_AWAY_FROM_ZERO',
  globalExchangeRatesApi: {
    endpoint: undefined,
    headers: undefined,
    propertyPath: undefined
  }
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/**
 * Static methods for Dinero.
 * @ignore
 *
 * @type {Object}
 */
var Static = {
  /**
   * Returns an array of Dinero objects, normalized to the same precision (the highest).
   *
   * @memberof module:Dinero
   * @method
   *
   * @param {Dinero[]} objects - An array of Dinero objects
   *
   * @example
   * // returns an array of Dinero objects
   * // both with a precision of 3
   * // and an amount of 1000
   * Dinero.normalizePrecision([
   *   Dinero({ amount: 100, precision: 2 }),
   *   Dinero({ amount: 1000, precision: 3 })
   * ])
   *
   * @return {Dinero[]}
   */
  normalizePrecision: function normalizePrecision(objects) {
    var highestPrecision = objects.reduce(function (a, b) {
      return Math.max(a.getPrecision(), b.getPrecision());
    });
    return objects.map(function (object) {
      return object.getPrecision() !== highestPrecision ? object.convertPrecision(highestPrecision) : object;
    });
  },

  /**
   * Returns the smallest Dinero object from an array of Dinero objects
   *
   * @memberof module:Dinero
   * @method
   *
   * @param {Dinero[]} objects - An array of Dinero objects
   *
   * @example
   * // returns the smallest Dinero object with amount of 500 from an array of Dinero objects with different precisions
   * Dinero.minimum([
   *   Dinero({ amount: 500, precision: 3 }),
   *   Dinero({ amount: 100, precision: 2 })
   * ])
   * @example
   * // returns the smallest Dinero object with amount of 50 from an array of Dinero objects
   * Dinero.minimum([
   *   Dinero({ amount: 50 }),
   *   Dinero({ amount: 100 })
   * ])
   *
   * @return {Dinero[]}
   */
  minimum: function minimum(objects) {
    var _objects = _toArray(objects),
        firstObject = _objects[0],
        tailObjects = _objects.slice(1);

    var currentMinimum = firstObject;
    tailObjects.forEach(function (obj) {
      currentMinimum = currentMinimum.lessThan(obj) ? currentMinimum : obj;
    });
    return currentMinimum;
  },

  /**
   * Returns the biggest Dinero object from an array of Dinero objects
   *
   * @memberof module:Dinero
   * @method
   *
   * @param {Dinero[]} objects - An array of Dinero objects
   *
   * @example
   * // returns the biggest Dinero object with amount of 20, from an array of Dinero objects with different precisions
   * Dinero.maximum([
   *   Dinero({ amount: 20, precision: 2 }),
   *   Dinero({ amount: 150, precision: 3 })
   * ])
   * @example
   * // returns the biggest Dinero object with amount of 100, from an array of Dinero objects
   * Dinero.maximum([
   *   Dinero({ amount: 100 }),
   *   Dinero({ amount: 50 })
   * ])
   *
   * @return {Dinero[]}
   */
  maximum: function maximum(objects) {
    var _objects2 = _toArray(objects),
        firstObject = _objects2[0],
        tailObjects = _objects2.slice(1);

    var currentMaximum = firstObject;
    tailObjects.forEach(function (obj) {
      currentMaximum = currentMaximum.greaterThan(obj) ? currentMaximum : obj;
    });
    return currentMaximum;
  }
};

/**
 * Returns whether a value is numeric.
 * @ignore
 *
 * @param  {} value - The value to test.
 *
 * @return {Boolean}
 */
function isNumeric(value) {
  return !isNaN(parseInt(value)) && isFinite(value);
}
/**
 * Returns whether a value is a percentage.
 * @ignore
 *
 * @param  {}  percentage - The percentage to test.
 *
 * @return {Boolean}
 */

function isPercentage(percentage) {
  return isNumeric(percentage) && percentage <= 100 && percentage >= 0;
}
/**
 * Returns whether an array of ratios is valid.
 * @ignore
 *
 * @param  {}  ratios - The ratios to test.
 *
 * @return {Boolean}
 */

function areValidRatios(ratios) {
  return ratios.length > 0 && ratios.every(function (ratio) {
    return ratio >= 0;
  }) && ratios.some(function (ratio) {
    return ratio > 0;
  });
}
/**
 * Returns whether a value is even.
 * @ignore
 *
 * @param  {Number} value - The value to test.
 *
 * @return {Boolean}
 */

function isEven(value) {
  return value % 2 === 0;
}
/**
 * Returns whether a value is a float.
 * @ignore
 *
 * @param  {}  value - The value to test.
 *
 * @return {Boolean}
 */

function isFloat(value) {
  return isNumeric(value) && !Number.isInteger(value);
}
/**
 * Returns how many fraction digits a number has.
 * @ignore
 *
 * @param  {Number} [number=0] - The number to test.
 *
 * @return {Number}
 */

function countFractionDigits() {
  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var stringRepresentation = number.toString();

  if (stringRepresentation.indexOf('e-') > 0) {
    // It's too small for a normal string representation, e.g. 1e-7 instead of 0.00000001
    return parseInt(stringRepresentation.split('e-')[1]);
  } else {
    var fractionDigits = stringRepresentation.split('.')[1];
    return fractionDigits ? fractionDigits.length : 0;
  }
}
/**
 * Returns whether a number is half.
 * @ignore
 *
 * @param {Number} number - The number to test.
 *
 * @return {Number}
 */

function isHalf(number) {
  return Math.abs(number) % 1 === 0.5;
}
/**
 * Fetches a JSON resource.
 * @ignore
 *
 * @param  {String} url - The resource to fetch.
 * @param  {Object} [options.headers] - The headers to pass.
 *
 * @throws {Error} If `request.status` is lesser than 200 or greater or equal to 400.
 * @throws {Error} If network fails.
 *
 * @return {JSON}
 */

function getJSON(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise(function (resolve, reject) {
    var request = Object.assign(new XMLHttpRequest(), {
      onreadystatechange: function onreadystatechange() {
        if (request.readyState === 4) {
          if (request.status >= 200 && request.status < 400) resolve(JSON.parse(request.responseText));else reject(new Error(request.statusText));
        }
      },
      onerror: function onerror() {
        reject(new Error('Network error'));
      }
    });
    request.open('GET', url, true);
    setXHRHeaders(request, options.headers);
    request.send();
  });
}
/**
 * Returns an XHR object with attached headers.
 * @ignore
 *
 * @param {XMLHttpRequest} xhr - The XHR request to set headers to.
 * @param {Object} headers - The headers to set.
 *
 * @return {XMLHttpRequest}
 */

function setXHRHeaders(xhr) {
  var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  for (var header in headers) {
    xhr.setRequestHeader(header, headers[header]);
  }

  return xhr;
}
/**
 * Returns whether a value is undefined.
 * @ignore
 *
 * @param {} value - The value to test.
 *
 * @return {Boolean}
 */

function isUndefined(value) {
  return typeof value === 'undefined';
}
/**
 * Returns an object flattened to one level deep.
 * @ignore
 *
 * @param {Object} object - The object to flatten.
 * @param {String} separator - The separator to use between flattened nodes.
 *
 * @return {Object}
 */

function flattenObject(object) {
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';
  var finalObject = {};
  Object.entries(object).forEach(function (item) {
    if (_typeof(item[1]) === 'object') {
      var flatObject = flattenObject(item[1]);
      Object.entries(flatObject).forEach(function (node) {
        finalObject[item[0] + separator + node[0]] = node[1];
      });
    } else {
      finalObject[item[0]] = item[1];
    }
  });
  return finalObject;
}
/**
 * Returns whether a value is thenable.
 * @ignore
 *
 * @param {} value - The value to test.
 *
 * @return {Boolean}
 */

function isThenable(value) {
  return Boolean(value) && (_typeof(value) === 'object' || typeof value === 'function') && typeof value.then === 'function';
}

function Calculator() {
  var floatMultiply = function floatMultiply(a, b) {
    var getFactor = function getFactor(number) {
      return Math.pow(10, countFractionDigits(number));
    };

    var factor = Math.max(getFactor(a), getFactor(b));
    return Math.round(a * factor) * Math.round(b * factor) / (factor * factor);
  };

  var roundingModes = {
    HALF_ODD: function HALF_ODD(number) {
      var rounded = Math.round(number);
      return isHalf(number) ? isEven(rounded) ? rounded - 1 : rounded : rounded;
    },
    HALF_EVEN: function HALF_EVEN(number) {
      var rounded = Math.round(number);
      return isHalf(number) ? isEven(rounded) ? rounded : rounded - 1 : rounded;
    },
    HALF_UP: function HALF_UP(number) {
      return Math.round(number);
    },
    HALF_DOWN: function HALF_DOWN(number) {
      return isHalf(number) ? Math.floor(number) : Math.round(number);
    },
    HALF_TOWARDS_ZERO: function HALF_TOWARDS_ZERO(number) {
      return isHalf(number) ? Math.sign(number) * Math.floor(Math.abs(number)) : Math.round(number);
    },
    HALF_AWAY_FROM_ZERO: function HALF_AWAY_FROM_ZERO(number) {
      return isHalf(number) ? Math.sign(number) * Math.ceil(Math.abs(number)) : Math.round(number);
    },
    DOWN: function DOWN(number) {
      return Math.floor(number);
    }
  };
  return {
    /**
     * Returns the sum of two numbers.
     * @ignore
     *
     * @param {Number} a - The first number to add.
     * @param {Number} b - The second number to add.
     *
     * @return {Number}
     */
    add: function add(a, b) {
      return a + b;
    },

    /**
     * Returns the difference of two numbers.
     * @ignore
     *
     * @param {Number} a - The first number to subtract.
     * @param {Number} b - The second number to subtract.
     *
     * @return {Number}
     */
    subtract: function subtract(a, b) {
      return a - b;
    },

    /**
     * Returns the product of two numbers.
     * @ignore
     *
     * @param {Number} a - The first number to multiply.
     * @param {Number} b - The second number to multiply.
     *
     * @return {Number}
     */
    multiply: function multiply(a, b) {
      return isFloat(a) || isFloat(b) ? floatMultiply(a, b) : a * b;
    },

    /**
     * Returns the quotient of two numbers.
     * @ignore
     *
     * @param {Number} a - The first number to divide.
     * @param {Number} b - The second number to divide.
     *
     * @return {Number}
     */
    divide: function divide(a, b) {
      return a / b;
    },

    /**
     * Returns the remainder of two numbers.
     * @ignore
     *
     * @param  {Number} a - The first number to divide.
     * @param  {Number} b - The second number to divide.
     *
     * @return {Number}
     */
    modulo: function modulo(a, b) {
      return a % b;
    },

    /**
     * Returns a rounded number based off a specific rounding mode.
     * @ignore
     *
     * @param {Number} number - The number to round.
     * @param {String} [roundingMode='HALF_EVEN'] - The rounding mode to use.
     *
     * @returns {Number}
     */
    round: function round(number) {
      var roundingMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'HALF_EVEN';
      return roundingModes[roundingMode](number);
    }
  };
}

var calculator = Calculator();
function Format(format) {
  var matches = /^(?:(\$|USD)?0(?:(,)0)?(\.)?(0+)?|0(?:(,)0)?(\.)?(0+)?\s?(dollar)?)$/gm.exec(format);
  return {
    /**
     * Returns the matches.
     * @ignore
     *
     * @return {Array}
     */
    getMatches: function getMatches() {
      return matches !== null ? matches.slice(1).filter(function (match) {
        return !isUndefined(match);
      }) : [];
    },

    /**
     * Returns the amount of fraction digits to display.
     * @ignore
     *
     * @return {Number}
     */
    getMinimumFractionDigits: function getMinimumFractionDigits() {
      var decimalPosition = function decimalPosition(match) {
        return match === '.';
      };

      return !isUndefined(this.getMatches().find(decimalPosition)) ? this.getMatches()[calculator.add(this.getMatches().findIndex(decimalPosition), 1)].split('').length : 0;
    },

    /**
     * Returns the currency display mode.
     * @ignore
     *
     * @return {String}
     */
    getCurrencyDisplay: function getCurrencyDisplay() {
      var modes = {
        USD: 'code',
        dollar: 'name',
        $: 'symbol'
      };
      return modes[this.getMatches().find(function (match) {
        return match === 'USD' || match === 'dollar' || match === '$';
      })];
    },

    /**
     * Returns the formatting style.
     * @ignore
     *
     * @return {String}
     */
    getStyle: function getStyle() {
      return !isUndefined(this.getCurrencyDisplay(this.getMatches())) ? 'currency' : 'decimal';
    },

    /**
     * Returns whether grouping should be used or not.
     * @ignore
     *
     * @return {Boolean}
     */
    getUseGrouping: function getUseGrouping() {
      return !isUndefined(this.getMatches().find(function (match) {
        return match === ',';
      }));
    }
  };
}

function CurrencyConverter(options) {
  /* istanbul ignore next */
  var mergeTags = function mergeTags() {
    var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var tags = arguments.length > 1 ? arguments[1] : undefined;

    for (var tag in tags) {
      string = string.replace("{{".concat(tag, "}}"), tags[tag]);
    }

    return string;
  };
  /* istanbul ignore next */


  var getRatesFromRestApi = function getRatesFromRestApi(from, to) {
    return getJSON(mergeTags(options.endpoint, {
      from: from,
      to: to
    }), {
      headers: options.headers
    });
  };

  return {
    /**
     * Returns the exchange rate.
     * @ignore
     *
     * @param  {String} from - The base currency.
     * @param  {String} to   - The destination currency.
     *
     * @return {Promise}
     */
    getExchangeRate: function getExchangeRate(from, to) {
      return (isThenable(options.endpoint) ? options.endpoint : getRatesFromRestApi(from, to)).then(function (data) {
        return flattenObject(data)[mergeTags(options.propertyPath, {
          from: from,
          to: to
        })];
      });
    }
  };
}

/**
 * Performs an assertion.
 * @ignore
 *
 * @param  {Boolean} condition - The expression to assert.
 * @param  {String}  errorMessage - The message to throw if the assertion fails
 * @param  {ErrorConstructor}   [ErrorType=Error] - The error to throw if the assertion fails.
 *
 * @throws {Error} If `condition` returns `false`.
 */

function assert(condition, errorMessage) {
  var ErrorType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Error;
  if (!condition) throw new ErrorType(errorMessage);
}
/**
 * Asserts a value is a percentage.
 * @ignore
 *
 * @param  {}  percentage - The percentage to test.
 *
 * @throws {RangeError} If `percentage` is out of range.
 */

function assertPercentage(percentage) {
  assert(isPercentage(percentage), 'You must provide a numeric value between 0 and 100.', RangeError);
}
/**
 * Asserts an array of ratios is valid.
 * @ignore
 *
 * @param  {}  ratios - The ratios to test.
 *
 * @throws {TypeError} If `ratios` are invalid.
 */

function assertValidRatios(ratios) {
  assert(areValidRatios(ratios), 'You must provide a non-empty array of numeric values greater than 0.', TypeError);
}
/**
 * Asserts a value is an integer.
 * @ignore
 *
 * @param  {}  number - The value to test.
 *
 * @throws {TypeError}
 */

function assertInteger(number) {
  assert(Number.isInteger(number), 'You must provide an integer.', TypeError);
}

var calculator$1 = Calculator();
/**
 * A Dinero object is an immutable data structure representing a specific monetary value.
 * It comes with methods for creating, parsing, manipulating, testing, transforming and formatting them.
 *
 * A Dinero object has:
 *
 * * An `amount`, expressed in minor currency units, as an integer.
 * * A `currency`, expressed as an {@link https://en.wikipedia.org/wiki/ISO_4217#Active_codes ISO 4217 currency code}.
 * * A `precision`, expressed as an integer, to represent the number of decimal places in the `amount`.
 *   This is helpful when you want to represent fractional minor currency units (e.g.: $10.4545).
 *   You can also use it to represent a currency with a different [exponent](https://en.wikipedia.org/wiki/ISO_4217#Treatment_of_minor_currency_units_.28the_.22exponent.22.29) than `2` (e.g.: Iraqi dinar with 1000 fils in 1 dinar (exponent of `3`), Japanese yen with no sub-units (exponent of `0`)).
 * * An optional `locale` property that affects how output strings are formatted.
 *
 * Here's an overview of the public API:
 *
 * * **Access:** {@link module:Dinero~getAmount getAmount}, {@link module:Dinero~getCurrency getCurrency}, {@link module:Dinero~getLocale getLocale} and {@link module:Dinero~getPrecision getPrecision}.
 * * **Manipulation:** {@link module:Dinero~add add}, {@link module:Dinero~subtract subtract}, {@link module:Dinero~multiply multiply}, {@link module:Dinero~divide divide}, {@link module:Dinero~percentage percentage}, {@link module:Dinero~allocate allocate} and {@link module:Dinero~convert convert}.
 * * **Testing:** {@link module:Dinero~equalsTo equalsTo}, {@link module:Dinero~lessThan lessThan}, {@link module:Dinero~lessThanOrEqual lessThanOrEqual}, {@link module:Dinero~greaterThan greaterThan}, {@link module:Dinero~greaterThanOrEqual greaterThanOrEqual}, {@link module:Dinero~isZero isZero}, {@link module:Dinero~isPositive isPositive}, {@link module:Dinero~isNegative isNegative}, {@link module:Dinero~hasSubUnits hasSubUnits}, {@link module:Dinero~hasSameCurrency hasSameCurrency} and {@link module:Dinero~hasSameAmount hasSameAmount}.
 * * **Configuration:** {@link module:Dinero~setLocale setLocale}.
 * * **Conversion & formatting:** {@link module:Dinero~toFormat toFormat}, {@link module:Dinero~toUnit toUnit}, {@link module:Dinero~toRoundedUnit toRoundedUnit}, {@link module:Dinero~toObject toObject}, {@link module:Dinero~toJSON toJSON}, {@link module:Dinero~convertPrecision convertPrecision} and {@link module:Dinero.normalizePrecision normalizePrecision}.
 *
 * Dinero.js uses `number`s under the hood, so it's constrained by the [double-precision floating-point format](https://en.wikipedia.org/wiki/Double-precision_floating-point_format). Using values over [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number/MAX_SAFE_INTEGER) or below [`Number.MIN_SAFE_INTEGER`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number/MIN_SAFE_INTEGER) will yield unpredictable results.
 * Same goes with performing calculations: once the internal `amount` value exceeds those limits, precision is no longer guaranteed.
 *
 * @module Dinero
 * @param  {Number} [options.amount=0] - The amount in minor currency units (as an integer).
 * @param  {String} [options.currency='USD'] - An ISO 4217 currency code.
 * @param  {String} [options.precision=2] - The number of decimal places to represent.
 *
 * @throws {TypeError} If `amount` or `precision` is invalid. Integers over [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number/MAX_SAFE_INTEGER) or below [`Number.MIN_SAFE_INTEGER`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number/MIN_SAFE_INTEGER) are considered valid, even though they can lead to imprecise amounts.
 *
 * @return {Object}
 */

var Dinero = function Dinero(options) {
  var _Object$assign = Object.assign({}, {
    amount: Dinero.defaultAmount,
    currency: Dinero.defaultCurrency,
    precision: Dinero.defaultPrecision
  }, options),
      amount = _Object$assign.amount,
      currency = _Object$assign.currency,
      precision = _Object$assign.precision;

  assertInteger(amount);
  assertInteger(precision);
  var globalLocale = Dinero.globalLocale,
      globalFormat = Dinero.globalFormat,
      globalRoundingMode = Dinero.globalRoundingMode,
      globalFormatRoundingMode = Dinero.globalFormatRoundingMode;
  var globalExchangeRatesApi = Object.assign({}, Dinero.globalExchangeRatesApi);
  /**
   * Uses ES5 function notation so `this` can be passed through call, apply and bind
   * @ignore
   */

  var create = function create(options) {
    var obj = Object.assign({}, Object.assign({}, {
      amount: amount,
      currency: currency,
      precision: precision
    }, options), Object.assign({}, {
      locale: this.locale
    }, options));
    return Object.assign(Dinero({
      amount: obj.amount,
      currency: obj.currency,
      precision: obj.precision
    }), {
      locale: obj.locale
    });
  };
  /**
   * Uses ES5 function notation so `this` can be passed through call, apply and bind
   * @ignore
   */


  var assertSameCurrency = function assertSameCurrency(comparator) {
    assert(this.hasSameCurrency(comparator), 'You must provide a Dinero instance with the same currency.', TypeError);
  };

  return {
    /**
     * Returns the amount.
     *
     * @example
     * // returns 500
     * Dinero({ amount: 500 }).getAmount()
     *
     * @return {Number}
     */
    getAmount: function getAmount() {
      return amount;
    },

    /**
     * Returns the currency.
     *
     * @example
     * // returns 'EUR'
     * Dinero({ currency: 'EUR' }).getCurrency()
     *
     * @return {String}
     */
    getCurrency: function getCurrency() {
      return currency;
    },

    /**
     * Returns the locale.
     *
     * @example
     * // returns 'fr-FR'
     * Dinero().setLocale('fr-FR').getLocale()
     *
     * @return {String}
     */
    getLocale: function getLocale() {
      return this.locale || globalLocale;
    },

    /**
     * Returns a new Dinero object with an embedded locale.
     *
     * @param {String} newLocale - The new locale as an {@link http://tools.ietf.org/html/rfc5646 BCP 47 language tag}.
     *
     * @example
     * // Returns a Dinero object with locale 'ja-JP'
     * Dinero().setLocale('ja-JP')
     *
     * @return {Dinero}
     */
    setLocale: function setLocale(newLocale) {
      return create.call(this, {
        locale: newLocale
      });
    },

    /**
     * Returns the precision.
     *
     * @example
     * // returns 3
     * Dinero({ precision: 3 }).getPrecision()
     *
     * @return {Number}
     */
    getPrecision: function getPrecision() {
      return precision;
    },

    /**
     * Returns a new Dinero object with a new precision and a converted amount.
     *
     * By default, fractional minor currency units are rounded using the **half to even** rule ([banker's rounding](http://wiki.c2.com/?BankersRounding)).
     * This can be necessary when you need to convert objects to a smaller precision.
     *
     * Rounding *can* lead to accuracy issues as you chain many times. Consider a minimal amount of subsequent conversions for safer results.
     * You can also specify a different `roundingMode` to better fit your needs.
     *
     * @param {Number} newPrecision - The new precision.
     * @param {String} [roundingMode='HALF_EVEN'] - The rounding mode to use: `'HALF_ODD'`, `'HALF_EVEN'`, `'HALF_UP'`, `'HALF_DOWN'`, `'HALF_TOWARDS_ZERO'`, `'HALF_AWAY_FROM_ZERO'` or `'DOWN'`.
     *
     * @example
     * // Returns a Dinero object with precision 3 and amount 1000
     * Dinero({ amount: 100, precision: 2 }).convertPrecision(3)
     *
     * @throws {TypeError} If `newPrecision` is invalid.
     *
     * @return {Dinero}
     */
    convertPrecision: function convertPrecision(newPrecision) {
      var roundingMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalFormatRoundingMode;
      assertInteger(newPrecision);
      var precision = this.getPrecision();
      var isNewPrecisionLarger = newPrecision > precision;
      var operation = isNewPrecisionLarger ? calculator$1.multiply : calculator$1.divide;
      var terms = isNewPrecisionLarger ? [newPrecision, precision] : [precision, newPrecision];
      var factor = Math.pow(10, calculator$1.subtract.apply(calculator$1, terms));
      return create.call(this, {
        amount: calculator$1.round(operation(this.getAmount(), factor), roundingMode),
        precision: newPrecision
      });
    },

    /**
     * Returns a new Dinero object that represents the sum of this and an other Dinero object.
     *
     * If Dinero objects have a different `precision`, they will be first converted to the highest.
     *
     * @param {Dinero} addend - The Dinero object to add.
     *
     * @example
     * // returns a Dinero object with amount 600
     * Dinero({ amount: 400 }).add(Dinero({ amount: 200 }))
     * @example
     * // returns a Dinero object with amount 144545 and precision 4
     * Dinero({ amount: 400 }).add(Dinero({ amount: 104545, precision: 4 }))
     *
     * @throws {TypeError} If `addend` has a different currency.
     *
     * @return {Dinero}
     */
    add: function add(addend) {
      assertSameCurrency.call(this, addend);
      var addends = Dinero.normalizePrecision([this, addend]);
      return create.call(this, {
        amount: calculator$1.add(addends[0].getAmount(), addends[1].getAmount()),
        precision: addends[0].getPrecision()
      });
    },

    /**
     * Returns a new Dinero object that represents the difference of this and an other Dinero object.
     *
     * If Dinero objects have a different `precision`, they will be first converted to the highest.
     *
     * @param  {Dinero} subtrahend - The Dinero object to subtract.
     *
     * @example
     * // returns a Dinero object with amount 200
     * Dinero({ amount: 400 }).subtract(Dinero({ amount: 200 }))
     * @example
     * // returns a Dinero object with amount 64545 and precision 4
     * Dinero({ amount: 104545, precision: 4 }).subtract(Dinero({ amount: 400 }))
     *
     * @throws {TypeError} If `subtrahend` has a different currency.
     *
     * @return {Dinero}
     */
    subtract: function subtract(subtrahend) {
      assertSameCurrency.call(this, subtrahend);
      var subtrahends = Dinero.normalizePrecision([this, subtrahend]);
      return create.call(this, {
        amount: calculator$1.subtract(subtrahends[0].getAmount(), subtrahends[1].getAmount()),
        precision: subtrahends[0].getPrecision()
      });
    },

    /**
     * Returns a new Dinero object that represents the multiplied value by the given factor.
     *
     * By default, fractional minor currency units are rounded using the **half to even** rule ([banker's rounding](http://wiki.c2.com/?BankersRounding)).
     *
     * Rounding *can* lead to accuracy issues as you chain many times. Consider a minimal amount of subsequent calculations for safer results.
     * You can also specify a different `roundingMode` to better fit your needs.
     *
     * @param  {Number} multiplier - The factor to multiply by.
     * @param  {String} [roundingMode='HALF_EVEN'] - The rounding mode to use: `'HALF_ODD'`, `'HALF_EVEN'`, `'HALF_UP'`, `'HALF_DOWN'`, `'HALF_TOWARDS_ZERO'`, `'HALF_AWAY_FROM_ZERO'` or `'DOWN'`.
     *
     * @example
     * // returns a Dinero object with amount 1600
     * Dinero({ amount: 400 }).multiply(4)
     * @example
     * // returns a Dinero object with amount 800
     * Dinero({ amount: 400 }).multiply(2.001)
     * @example
     * // returns a Dinero object with amount 801
     * Dinero({ amount: 400 }).multiply(2.00125, 'HALF_UP')
     *
     * @return {Dinero}
     */
    multiply: function multiply(multiplier) {
      var roundingMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalRoundingMode;
      return create.call(this, {
        amount: calculator$1.round(calculator$1.multiply(this.getAmount(), multiplier), roundingMode)
      });
    },

    /**
     * Returns a new Dinero object that represents the divided value by the given factor.
     *
     * By default, fractional minor currency units are rounded using the **half to even** rule ([banker's rounding](http://wiki.c2.com/?BankersRounding)).
     *
     * Rounding *can* lead to accuracy issues as you chain many times. Consider a minimal amount of subsequent calculations for safer results.
     * You can also specify a different `roundingMode` to better fit your needs.
     *
     * As rounding is applied, precision may be lost in the process. If you want to accurately split a Dinero object, use {@link module:Dinero~allocate allocate} instead.
     *
     * @param  {Number} divisor - The factor to divide by.
     * @param  {String} [roundingMode='HALF_EVEN'] - The rounding mode to use: `'HALF_ODD'`, `'HALF_EVEN'`, `'HALF_UP'`, `'HALF_DOWN'`, `'HALF_TOWARDS_ZERO'`, `'HALF_AWAY_FROM_ZERO'` or `'DOWN'`.
     *
     * @example
     * // returns a Dinero object with amount 100
     * Dinero({ amount: 400 }).divide(4)
     * @example
     * // returns a Dinero object with amount 52
     * Dinero({ amount: 105 }).divide(2)
     * @example
     * // returns a Dinero object with amount 53
     * Dinero({ amount: 105 }).divide(2, 'HALF_UP')
     *
     * @return {Dinero}
     */
    divide: function divide(divisor) {
      var roundingMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalRoundingMode;
      return create.call(this, {
        amount: calculator$1.round(calculator$1.divide(this.getAmount(), divisor), roundingMode)
      });
    },

    /**
     * Returns a new Dinero object that represents a percentage of this.
     *
     * As rounding is applied, precision may be lost in the process. If you want to accurately split a Dinero object, use {@link module:Dinero~allocate allocate} instead.
     *
     * @param  {Number} percentage - The percentage to extract (between 0 and 100).
     * @param  {String} [roundingMode='HALF_EVEN'] - The rounding mode to use: `'HALF_ODD'`, `'HALF_EVEN'`, `'HALF_UP'`, `'HALF_DOWN'`, `'HALF_TOWARDS_ZERO'`, `'HALF_AWAY_FROM_ZERO'` or `'DOWN'`.
     *
     * @example
     * // returns a Dinero object with amount 5000
     * Dinero({ amount: 10000 }).percentage(50)
     * @example
     * // returns a Dinero object with amount 29
     * Dinero({ amount: 57 }).percentage(50, "HALF_ODD")
     *
     * @throws {RangeError} If `percentage` is out of range.
     *
     * @return {Dinero}
     */
    percentage: function percentage(_percentage) {
      var roundingMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalRoundingMode;
      assertPercentage(_percentage);
      return this.multiply(calculator$1.divide(_percentage, 100), roundingMode);
    },

    /**
     * Allocates the amount of a Dinero object according to a list of ratios.
     *
     * Sometimes you need to split monetary values but percentages can't cut it without adding or losing pennies.
     * A good example is invoicing: let's say you need to bill $1,000.03 and you want a 50% downpayment.
     * If you use {@link module:Dinero~percentage percentage}, you'll get an accurate Dinero object but the amount won't be billable: you can't split a penny.
     * If you round it, you'll bill a penny extra.
     * With {@link module:Dinero~allocate allocate}, you can split a monetary amount then distribute the remainder as evenly as possible.
     *
     * You can use percentage style or ratio style for `ratios`: `[25, 75]` and `[1, 3]` will do the same thing.
     *
     * Since v1.8.0, you can use zero ratios (such as [0, 50, 50]). If there's a remainder to distribute, zero ratios are skipped and return a Dinero object with amount zero.
     *
     * @param  {Number[]} ratios - The ratios to allocate the money to.
     *
     * @example
     * // returns an array of two Dinero objects
     * // the first one with an amount of 502
     * // the second one with an amount of 501
     * Dinero({ amount: 1003 }).allocate([50, 50])
     * @example
     * // returns an array of two Dinero objects
     * // the first one with an amount of 25
     * // the second one with an amount of 75
     * Dinero({ amount: 100 }).allocate([1, 3])
     * @example
     * // since version 1.8.0
     * // returns an array of three Dinero objects
     * // the first one with an amount of 0
     * // the second one with an amount of 502
     * // the third one with an amount of 501
     * Dinero({ amount: 1003 }).allocate([0, 50, 50])
     *
     * @throws {TypeError} If ratios are invalid.
     *
     * @return {Dinero[]}
     */
    allocate: function allocate(ratios) {
      var _this = this;

      assertValidRatios(ratios);
      var total = ratios.reduce(function (a, b) {
        return calculator$1.add(a, b);
      });
      var remainder = this.getAmount();
      var shares = ratios.map(function (ratio) {
        var share = Math.floor(calculator$1.divide(calculator$1.multiply(_this.getAmount(), ratio), total));
        remainder = calculator$1.subtract(remainder, share);
        return create.call(_this, {
          amount: share
        });
      });
      var i = 0;

      while (remainder > 0) {
        if (ratios[i] > 0) {
          shares[i] = shares[i].add(create.call(this, {
            amount: 1
          }));
          remainder = calculator$1.subtract(remainder, 1);
        }

        i += 1;
      }

      return shares;
    },

    /**
     * Returns a Promise containing a new Dinero object converted to another currency.
     *
     * You have two options to provide the exchange rates:
     *
     * 1. **Use an exchange rate REST API, and let Dinero handle the fetching and conversion.**
     *   This is a simple option if you have access to an exchange rate REST API and want Dinero to do the rest.
     * 2. **Fetch the exchange rates on your own and provide them directly.**
     *   This is useful if you're fetching your rates from somewhere else (a file, a database), use a different protocol or query language than REST (SOAP, GraphQL) or want to fetch rates once and cache them instead of making new requests every time.
     *
     * **If you want to use a REST API**, you must provide a third-party endpoint yourself. Dinero doesn't come bundled with an exchange rates endpoint.
     *
     * Here are some exchange rate APIs you can use:
     *
     * * [Fixer](https://fixer.io)
     * * [Open Exchange Rates](https://openexchangerates.org)
     * * [Coinbase](https://api.coinbase.com/v2/exchange-rates)
     * * More [foreign](https://github.com/toddmotto/public-apis#currency-exchange) and [crypto](https://github.com/toddmotto/public-apis#cryptocurrency) exchange rate APIs.
     *
     * **If you want to fetch your own rates and provide them directly**, you need to pass a promise that resolves to the exchanges rates.
     *
     * In both cases, you need to specify at least:
     *
     * * a **destination currency**: the currency in which you want to convert your Dinero object. You can specify it with `currency`.
     * * an **endpoint**: the API URL to query exchange rates, with parameters, or a promise that resolves to the exchange rates. You can specify it with `options.endpoint`.
     * * a **property path**: the path to access the wanted rate in your API's JSON response (or the custom promise's payload). For example, with a response of:
     * ```json
     * {
     *     "data": {
     *       "base": "USD",
     *       "destination": "EUR",
     *       "rate": "0.827728919"
     *     }
     * }
     * ```
     * Then the property path is `'data.rate'`. You can specify it with `options.propertyPath`.
     *
     * The base currency (the one of your Dinero object) and the destination currency can be used as "merge tags" with the mustache syntax, respectively `{{from}}` and `{{to}}`.
     * You can use these tags to refer to these values in `options.endpoint` and `options.propertyPath`.
     *
     * For example, if you need to specify the base currency as a query parameter, you can do the following:
     *
     * ```js
     * {
     *   endpoint: 'https://yourexchangerates.api/latest?base={{from}}'
     * }
     * ```
     *
     * @param  {String} currency - The destination currency, expressed as an {@link https://en.wikipedia.org/wiki/ISO_4217#Active_codes ISO 4217 currency code}.
     * @param  {(String|Promise)} options.endpoint - The API endpoint to retrieve exchange rates. You can substitute this with a promise that resolves to the exchanges rates if you already have them.
     * @param  {String} [options.propertyPath='rates.{{to}}'] - The property path to the rate.
     * @param  {Object} [options.headers] - The HTTP headers to provide, if needed.
     * @param  {String} [options.roundingMode='HALF_EVEN'] - The rounding mode to use: `'HALF_ODD'`, `'HALF_EVEN'`, `'HALF_UP'`, `'HALF_DOWN'`, `'HALF_TOWARDS_ZERO'`, `'HALF_AWAY_FROM_ZERO'` or `'DOWN'`.
     *
     * @example
     * // your global API parameters
     * Dinero.globalExchangeRatesApi = { ... }
     *
     * // returns a Promise containing a Dinero object with the destination currency
     * // and the initial amount converted to the new currency.
     * Dinero({ amount: 500 }).convert('EUR')
     * @example
     * // returns a Promise containing a Dinero object,
     * // with specific API parameters and rounding mode for this specific instance.
     * Dinero({ amount: 500 })
     *   .convert('XBT', {
     *     endpoint: 'https://yourexchangerates.api/latest?base={{from}}',
     *     propertyPath: 'data.rates.{{to}}',
     *     headers: {
     *       'user-key': 'xxxxxxxxx'
     *     },
     *     roundingMode: 'HALF_UP'
     *   })
     * @example
     * // usage with exchange rates provided as a custom promise
     * // using the default `propertyPath` format (so it doesn't have to be specified)
     * const rates = {
     *   rates: {
     *     EUR: 0.81162
     *   }
     * }
     *
     * Dinero({ amount: 500 })
     *   .convert('EUR', {
     *     endpoint: new Promise(resolve => resolve(rates))
     *   })
     * @example
     * // usage with Promise.prototype.then and Promise.prototype.catch
     * Dinero({ amount: 500 })
     *   .convert('EUR')
     *   .then(dinero => {
     *     dinero.getCurrency() // returns 'EUR'
     *   })
     *   .catch(err => {
     *     // handle errors
     *   })
     * @example
     * // usage with async/await
     * (async () => {
     *   const price = await Dinero({ amount: 500 }).convert('EUR')
     *   price.getCurrency() // returns 'EUR'
     * })()
     *
     * @return {Promise}
     */
    convert: function convert(currency) {
      var _this2 = this;

      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$endpoint = _ref.endpoint,
          endpoint = _ref$endpoint === void 0 ? globalExchangeRatesApi.endpoint : _ref$endpoint,
          _ref$propertyPath = _ref.propertyPath,
          propertyPath = _ref$propertyPath === void 0 ? globalExchangeRatesApi.propertyPath || 'rates.{{to}}' : _ref$propertyPath,
          _ref$headers = _ref.headers,
          headers = _ref$headers === void 0 ? globalExchangeRatesApi.headers : _ref$headers,
          _ref$roundingMode = _ref.roundingMode,
          roundingMode = _ref$roundingMode === void 0 ? globalRoundingMode : _ref$roundingMode;

      var options = Object.assign({}, {
        endpoint: endpoint,
        propertyPath: propertyPath,
        headers: headers,
        roundingMode: roundingMode
      });
      return CurrencyConverter(options).getExchangeRate(this.getCurrency(), currency).then(function (rate) {
        assert(!isUndefined(rate), "No rate was found for the destination currency \"".concat(currency, "\"."), TypeError);
        return create.call(_this2, {
          amount: calculator$1.round(calculator$1.multiply(_this2.getAmount(), parseFloat(rate)), options.roundingMode),
          currency: currency
        });
      });
    },

    /**
     * Checks whether the value represented by this object equals to the other.
     *
     * @param  {Dinero} comparator - The Dinero object to compare to.
     *
     * @example
     * // returns true
     * Dinero({ amount: 500, currency: 'EUR' }).equalsTo(Dinero({ amount: 500, currency: 'EUR' }))
     * @example
     * // returns false
     * Dinero({ amount: 500, currency: 'EUR' }).equalsTo(Dinero({ amount: 800, currency: 'EUR' }))
     * @example
     * // returns false
     * Dinero({ amount: 500, currency: 'USD' }).equalsTo(Dinero({ amount: 500, currency: 'EUR' }))
     * @example
     * // returns false
     * Dinero({ amount: 500, currency: 'USD' }).equalsTo(Dinero({ amount: 800, currency: 'EUR' }))
     * @example
     * // returns true
     * Dinero({ amount: 1000, currency: 'EUR', precision: 2 }).equalsTo(Dinero({ amount: 10000, currency: 'EUR', precision: 3 }))
     * @example
     * // returns false
     * Dinero({ amount: 10000, currency: 'EUR', precision: 2 }).equalsTo(Dinero({ amount: 10000, currency: 'EUR', precision: 3 }))
     *
     * @return {Boolean}
     */
    equalsTo: function equalsTo(comparator) {
      return this.hasSameAmount(comparator) && this.hasSameCurrency(comparator);
    },

    /**
     * Checks whether the value represented by this object is less than the other.
     *
     * @param  {Dinero} comparator - The Dinero object to compare to.
     *
     * @example
     * // returns true
     * Dinero({ amount: 500 }).lessThan(Dinero({ amount: 800 }))
     * @example
     * // returns false
     * Dinero({ amount: 800 }).lessThan(Dinero({ amount: 500 }))
     * @example
     * // returns true
     * Dinero({ amount: 5000, precision: 3 }).lessThan(Dinero({ amount: 800 }))
     * @example
     * // returns false
     * Dinero({ amount: 800 }).lessThan(Dinero({ amount: 5000, precision: 3 }))
     *
     * @throws {TypeError} If `comparator` has a different currency.
     *
     * @return {Boolean}
     */
    lessThan: function lessThan(comparator) {
      assertSameCurrency.call(this, comparator);
      var comparators = Dinero.normalizePrecision([this, comparator]);
      return comparators[0].getAmount() < comparators[1].getAmount();
    },

    /**
     * Checks whether the value represented by this object is less than or equal to the other.
     *
     * @param  {Dinero} comparator - The Dinero object to compare to.
     *
     * @example
     * // returns true
     * Dinero({ amount: 500 }).lessThanOrEqual(Dinero({ amount: 800 }))
     * @example
     * // returns true
     * Dinero({ amount: 500 }).lessThanOrEqual(Dinero({ amount: 500 }))
     * @example
     * // returns false
     * Dinero({ amount: 500 }).lessThanOrEqual(Dinero({ amount: 300 }))
     * @example
     * // returns true
     * Dinero({ amount: 5000, precision: 3 }).lessThanOrEqual(Dinero({ amount: 800 }))
     * @example
     * // returns true
     * Dinero({ amount: 5000, precision: 3 }).lessThanOrEqual(Dinero({ amount: 500 }))
     * @example
     * // returns false
     * Dinero({ amount: 800 }).lessThanOrEqual(Dinero({ amount: 5000, precision: 3 }))
     *
     * @throws {TypeError} If `comparator` has a different currency.
     *
     * @return {Boolean}
     */
    lessThanOrEqual: function lessThanOrEqual(comparator) {
      assertSameCurrency.call(this, comparator);
      var comparators = Dinero.normalizePrecision([this, comparator]);
      return comparators[0].getAmount() <= comparators[1].getAmount();
    },

    /**
     * Checks whether the value represented by this object is greater than the other.
     *
     * @param  {Dinero} comparator - The Dinero object to compare to.
     *
     * @example
     * // returns false
     * Dinero({ amount: 500 }).greaterThan(Dinero({ amount: 800 }))
     * @example
     * // returns true
     * Dinero({ amount: 800 }).greaterThan(Dinero({ amount: 500 }))
     * @example
     * // returns true
     * Dinero({ amount: 800 }).greaterThan(Dinero({ amount: 5000, precision: 3 }))
     * @example
     * // returns false
     * Dinero({ amount: 5000, precision: 3 }).greaterThan(Dinero({ amount: 800 }))
     *
     * @throws {TypeError} If `comparator` has a different currency.
     *
     * @return {Boolean}
     */
    greaterThan: function greaterThan(comparator) {
      assertSameCurrency.call(this, comparator);
      var comparators = Dinero.normalizePrecision([this, comparator]);
      return comparators[0].getAmount() > comparators[1].getAmount();
    },

    /**
     * Checks whether the value represented by this object is greater than or equal to the other.
     *
     * @param  {Dinero} comparator - The Dinero object to compare to.
     *
     * @example
     * // returns true
     * Dinero({ amount: 500 }).greaterThanOrEqual(Dinero({ amount: 300 }))
     * @example
     * // returns true
     * Dinero({ amount: 500 }).greaterThanOrEqual(Dinero({ amount: 500 }))
     * @example
     * // returns false
     * Dinero({ amount: 500 }).greaterThanOrEqual(Dinero({ amount: 800 }))
     * @example
     * // returns true
     * Dinero({ amount: 800 }).greaterThanOrEqual(Dinero({ amount: 5000, precision: 3 }))
     * @example
     * // returns true
     * Dinero({ amount: 500 }).greaterThanOrEqual(Dinero({ amount: 5000, precision: 3 }))
     * @example
     * // returns false
     * Dinero({ amount: 5000, precision: 3 }).greaterThanOrEqual(Dinero({ amount: 800 }))
     *
     * @throws {TypeError} If `comparator` has a different currency.
     *
     * @return {Boolean}
     */
    greaterThanOrEqual: function greaterThanOrEqual(comparator) {
      assertSameCurrency.call(this, comparator);
      var comparators = Dinero.normalizePrecision([this, comparator]);
      return comparators[0].getAmount() >= comparators[1].getAmount();
    },

    /**
     * Checks if the value represented by this object is zero.
     *
     * @example
     * // returns true
     * Dinero({ amount: 0 }).isZero()
     * @example
     * // returns false
     * Dinero({ amount: 100 }).isZero()
     *
     * @return {Boolean}
     */
    isZero: function isZero() {
      return this.getAmount() === 0;
    },

    /**
     * Checks if the value represented by this object is positive.
     *
     * @example
     * // returns false
     * Dinero({ amount: -10 }).isPositive()
     * @example
     * // returns true
     * Dinero({ amount: 10 }).isPositive()
     * @example
     * // returns true
     * Dinero({ amount: 0 }).isPositive()
     *
     * @return {Boolean}
     */
    isPositive: function isPositive() {
      return this.getAmount() >= 0;
    },

    /**
     * Checks if the value represented by this object is negative.
     *
     * @example
     * // returns true
     * Dinero({ amount: -10 }).isNegative()
     * @example
     * // returns false
     * Dinero({ amount: 10 }).isNegative()
     * @example
     * // returns false
     * Dinero({ amount: 0 }).isNegative()
     *
     * @return {Boolean}
     */
    isNegative: function isNegative() {
      return this.getAmount() < 0;
    },

    /**
     * Checks if this has minor currency units.
     * Deprecates {@link module:Dinero~hasCents hasCents}.
     *
     * @example
     * // returns false
     * Dinero({ amount: 1100 }).hasSubUnits()
     * @example
     * // returns true
     * Dinero({ amount: 1150 }).hasSubUnits()
     *
     * @return {Boolean}
     */
    hasSubUnits: function hasSubUnits() {
      return calculator$1.modulo(this.getAmount(), Math.pow(10, precision)) !== 0;
    },

    /**
     * Checks if this has minor currency units.
     *
     * @deprecated since version 1.4.0, will be removed in 2.0.0
     * Use {@link module:Dinero~hasSubUnits hasSubUnits} instead.
     *
     * @example
     * // returns false
     * Dinero({ amount: 1100 }).hasCents()
     * @example
     * // returns true
     * Dinero({ amount: 1150 }).hasCents()
     *
     * @return {Boolean}
     */
    hasCents: function hasCents() {
      return calculator$1.modulo(this.getAmount(), Math.pow(10, precision)) !== 0;
    },

    /**
     * Checks whether the currency represented by this object equals to the other.
     *
     * @param  {Dinero}  comparator - The Dinero object to compare to.
     *
     * @example
     * // returns true
     * Dinero({ amount: 2000, currency: 'EUR' }).hasSameCurrency(Dinero({ amount: 1000, currency: 'EUR' }))
     * @example
     * // returns false
     * Dinero({ amount: 1000, currency: 'EUR' }).hasSameCurrency(Dinero({ amount: 1000, currency: 'USD' }))
     *
     * @return {Boolean}
     */
    hasSameCurrency: function hasSameCurrency(comparator) {
      return this.getCurrency() === comparator.getCurrency();
    },

    /**
     * Checks whether the amount represented by this object equals to the other.
     *
     * @param  {Dinero}  comparator - The Dinero object to compare to.
     *
     * @example
     * // returns true
     * Dinero({ amount: 1000, currency: 'EUR' }).hasSameAmount(Dinero({ amount: 1000 }))
     * @example
     * // returns false
     * Dinero({ amount: 2000, currency: 'EUR' }).hasSameAmount(Dinero({ amount: 1000, currency: 'EUR' }))
     * @example
     * // returns true
     * Dinero({ amount: 1000, currency: 'EUR', precision: 2 }).hasSameAmount(Dinero({ amount: 10000, precision: 3 }))
     * @example
     * // returns false
     * Dinero({ amount: 10000, currency: 'EUR', precision: 2 }).hasSameAmount(Dinero({ amount: 10000, precision: 3 }))
     *
     * @return {Boolean}
     */
    hasSameAmount: function hasSameAmount(comparator) {
      var comparators = Dinero.normalizePrecision([this, comparator]);
      return comparators[0].getAmount() === comparators[1].getAmount();
    },

    /**
     * Returns this object formatted as a string.
     *
     * The format is a mask which defines how the output string will be formatted.
     * It defines whether to display a currency, in what format, how many fraction digits to display and whether to use grouping separators.
     * The output is formatted according to the applying locale.
     *
     * Object                       | Format            | String
     * :--------------------------- | :---------------- | :---
     * `Dinero({ amount: 500050 })` | `'$0,0.00'`       | $5,000.50
     * `Dinero({ amount: 500050 })` | `'$0,0'`          | $5,001
     * `Dinero({ amount: 500050 })` | `'$0'`            | $5001
     * `Dinero({ amount: 500050 })` | `'$0.0'`          | $5000.5
     * `Dinero({ amount: 500050 })` | `'USD0,0.0'`      | USD5,000.5
     * `Dinero({ amount: 500050 })` | `'0,0.0 dollar'`  | 5,000.5 dollars
     *
     * Don't try to substitute the `$` sign or the `USD` code with your target currency, nor adapt the format string to the exact format you want.
     * The format is a mask which defines a pattern and returns a valid, localized currency string.
     * If you want to display the object in a custom way, either use {@link module:Dinero~getAmount getAmount}, {@link module:Dinero~toUnit toUnit} or {@link module:Dinero~toRoundedUnit toRoundedUnit} and manipulate the output string as you wish.
     *
     * {@link module:Dinero~toFormat toFormat} wraps around `Number.prototype.toLocaleString`. For that reason, **format will vary depending on how it's implemented in the end user's environment**.
     *
     * You can also use `toLocaleString` directly:
     * `Dinero().toRoundedUnit(digits, roundingMode).toLocaleString(locale, options)`.
     *
     * By default, amounts are rounded using the **half away from zero** rule ([commercial rounding](https://en.wikipedia.org/wiki/Rounding#Round_half_away_from_zero)).
     * You can also specify a different `roundingMode` to better fit your needs.
     *
     * @param  {String} [format='$0,0.00'] - The format mask to format to.
     * @param  {String} [roundingMode='HALF_AWAY_FROM_ZERO'] - The rounding mode to use: `'HALF_ODD'`, `'HALF_EVEN'`, `'HALF_UP'`, `'HALF_DOWN'`, `'HALF_TOWARDS_ZERO'`, `'HALF_AWAY_FROM_ZERO'` or `'DOWN'`.
     *
     * @example
     * // returns $2,000
     * Dinero({ amount: 200000 }).toFormat('$0,0')
     * @example
     * // returns €50.5
     * Dinero({ amount: 5050, currency: 'EUR' }).toFormat('$0,0.0')
     * @example
     * // returns 100 euros
     * Dinero({ amount: 10000, currency: 'EUR' }).setLocale('fr-FR').toFormat('0,0 dollar')
     * @example
     * // returns 2000
     * Dinero({ amount: 200000, currency: 'EUR' }).toFormat()
     * @example
     * // returns $10
     * Dinero({ amount: 1050 }).toFormat('$0', 'HALF_EVEN')
     *
     * @return {String}
     */
    toFormat: function toFormat() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : globalFormat;
      var roundingMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalFormatRoundingMode;
      var formatter = Format(format);
      return this.toRoundedUnit(formatter.getMinimumFractionDigits(), roundingMode).toLocaleString(this.getLocale(), {
        currencyDisplay: formatter.getCurrencyDisplay(),
        useGrouping: formatter.getUseGrouping(),
        minimumFractionDigits: formatter.getMinimumFractionDigits(),
        style: formatter.getStyle(),
        currency: this.getCurrency()
      });
    },

    /**
     * Returns the amount represented by this object in units.
     *
     * @example
     * // returns 10.5
     * Dinero({ amount: 1050 }).toUnit()
     * @example
     * // returns 10.545
     * Dinero({ amount: 10545, precision: 3 }).toUnit()
     *
     * @return {Number}
     */
    toUnit: function toUnit() {
      return calculator$1.divide(this.getAmount(), Math.pow(10, precision));
    },

    /**
     * Returns the amount represented by this object in rounded units.
     *
     * By default, the method uses the **half away from zero** rule ([commercial rounding](https://en.wikipedia.org/wiki/Rounding#Round_half_away_from_zero)).
     * You can also specify a different `roundingMode` to better fit your needs.
     *
     * @example
     * // returns 10.6
     * Dinero({ amount: 1055 }).toRoundedUnit(1)
     * @example
     * // returns 10
     * Dinero({ amount: 1050 }).toRoundedUnit(0, 'HALF_EVEN')
     *
     * @param  {Number} digits - The number of fraction digits to round to.
     * @param  {String} [roundingMode='HALF_AWAY_FROM_ZERO'] - The rounding mode to use: `'HALF_ODD'`, `'HALF_EVEN'`, `'HALF_UP'`, `'HALF_DOWN'`, `'HALF_TOWARDS_ZERO'`, `'HALF_AWAY_FROM_ZERO'` or `'DOWN'`.
     *
     * @return {Number}
     */
    toRoundedUnit: function toRoundedUnit(digits) {
      var roundingMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalFormatRoundingMode;
      var factor = Math.pow(10, digits);
      return calculator$1.divide(calculator$1.round(calculator$1.multiply(this.toUnit(), factor), roundingMode), factor);
    },

    /**
     * Returns the object's data as an object literal.
     *
     * @example
     * // returns { amount: 500, currency: 'EUR', precision: 2 }
     * Dinero({ amount: 500, currency: 'EUR', precision: 2 }).toObject()
     *
     * @return {Object}
     */
    toObject: function toObject() {
      return {
        amount: amount,
        currency: currency,
        precision: precision
      };
    },

    /**
     * Returns the object's data as an object literal.
     *
     * Alias of {@link module:Dinero~toObject toObject}.
     * It is defined so that calling `JSON.stringify` on a Dinero object will automatically extract the relevant data.
     *
     * @example
     * // returns '{"amount":500,"currency":"EUR","precision":2}'
     * JSON.stringify(Dinero({ amount: 500, currency: 'EUR', precision: 2 }))
     *
     * @return {Object}
     */
    toJSON: function toJSON() {
      return this.toObject();
    }
  };
};

var dinero = Object.assign(Dinero, Defaults, Globals, Static);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dinero);


/***/ }),

/***/ "./node_modules/dot-case/dist.es2015/index.js":
/*!****************************************************!*\
  !*** ./node_modules/dot-case/dist.es2015/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dotCase: () => (/* binding */ dotCase)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! no-case */ "./node_modules/no-case/dist.es2015/index.js");


function dotCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,no_case__WEBPACK_IMPORTED_MODULE_0__.noCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ delimiter: "." }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/fast-deep-equal/es6/index.js":
/*!***************************************************!*\
  !*** ./node_modules/fast-deep-equal/es6/index.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


// do not edit .js files directly - edit src/index.jst


  var envHasBigInt64Array = typeof BigInt64Array !== 'undefined';


module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }


    if ((a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      for (i of a.entries())
        if (!equal(i[1], b.get(i[0]))) return false;
      return true;
    }

    if ((a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      return true;
    }

    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }


    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/lower-case/dist.es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/lower-case/dist.es2015/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localeLowerCase: () => (/* binding */ localeLowerCase),
/* harmony export */   lowerCase: () => (/* binding */ lowerCase)
/* harmony export */ });
/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
var SUPPORTED_LOCALE = {
    tr: {
        regexp: /\u0130|\u0049|\u0049\u0307/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069",
        },
    },
    az: {
        regexp: /\u0130/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069",
        },
    },
    lt: {
        regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
        map: {
            I: "\u0069\u0307",
            J: "\u006A\u0307",
            Į: "\u012F\u0307",
            Ì: "\u0069\u0307\u0300",
            Í: "\u0069\u0307\u0301",
            Ĩ: "\u0069\u0307\u0303",
        },
    },
};
/**
 * Localized lower case.
 */
function localeLowerCase(str, locale) {
    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
    if (lang)
        return lowerCase(str.replace(lang.regexp, function (m) { return lang.map[m]; }));
    return lowerCase(str);
}
/**
 * Lower case as a function.
 */
function lowerCase(str) {
    return str.toLowerCase();
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wc_components/js/base/components/cart-checkout/order-summary/style.scss":
/*!*********************************************************************************!*\
  !*** ./wc_components/js/base/components/cart-checkout/order-summary/style.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wc_components/js/base/components/cart-checkout/product-badge/style.scss":
/*!*********************************************************************************!*\
  !*** ./wc_components/js/base/components/cart-checkout/product-badge/style.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wc_components/js/base/components/cart-checkout/product-details/style.scss":
/*!***********************************************************************************!*\
  !*** ./wc_components/js/base/components/cart-checkout/product-details/style.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wc_components/js/base/components/cart-checkout/product-metadata/style.scss":
/*!************************************************************************************!*\
  !*** ./wc_components/js/base/components/cart-checkout/product-metadata/style.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wc_components/js/base/components/combobox/style.scss":
/*!**************************************************************!*\
  !*** ./wc_components/js/base/components/combobox/style.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wc_components/js/base/components/country-input/style.scss":
/*!*******************************************************************!*\
  !*** ./wc_components/js/base/components/country-input/style.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wc_components/js/base/components/product-name/style.scss":
/*!******************************************************************!*\
  !*** ./wc_components/js/base/components/product-name/style.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wc_components/js/base/components/product-price/style.scss":
/*!*******************************************************************!*\
  !*** ./wc_components/js/base/components/product-price/style.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wc_components/js/base/components/quantity-selector/style.scss":
/*!***********************************************************************!*\
  !*** ./wc_components/js/base/components/quantity-selector/style.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wc_components/js/base/components/state-input/style.scss":
/*!*****************************************************************!*\
  !*** ./wc_components/js/base/components/state-input/style.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wc_components/packages/components/formatted-monetary-amount/style.scss":
/*!********************************************************************************!*\
  !*** ./wc_components/packages/components/formatted-monetary-amount/style.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wc_components/packages/components/panel/style.scss":
/*!************************************************************!*\
  !*** ./wc_components/packages/components/panel/style.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wc_components/packages/components/text-input/style.scss":
/*!*****************************************************************!*\
  !*** ./wc_components/packages/components/text-input/style.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wc_components/packages/components/totals-wrapper/style.scss":
/*!*********************************************************************!*\
  !*** ./wc_components/packages/components/totals-wrapper/style.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wc_components/packages/components/validation-input-error/style.scss":
/*!*****************************************************************************!*\
  !*** ./wc_components/packages/components/validation-input-error/style.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/no-case/dist.es2015/index.js":
/*!***************************************************!*\
  !*** ./node_modules/no-case/dist.es2015/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noCase: () => (/* binding */ noCase)
/* harmony export */ });
/* harmony import */ var lower_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lower-case */ "./node_modules/lower-case/dist.es2015/index.js");

// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
// Remove all non-word characters.
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
/**
 * Normalize the string into something other libraries can manipulate easier.
 */
function noCase(input, options) {
    if (options === void 0) { options = {}; }
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lower_case__WEBPACK_IMPORTED_MODULE_0__.lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    var start = 0;
    var end = result.length;
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === "\0")
        start++;
    while (result.charAt(end - 1) === "\0")
        end--;
    // Transform each token independently.
    return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
/**
 * Replace `re` in the input string with the replacement value.
 */
function replace(input, re, value) {
    if (re instanceof RegExp)
        return input.replace(re, value);
    return re.reduce(function (input, re) { return input.replace(re, value); }, input);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/param-case/dist.es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/param-case/dist.es2015/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   paramCase: () => (/* binding */ paramCase)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var dot_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dot-case */ "./node_modules/dot-case/dist.es2015/index.js");


function paramCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,dot_case__WEBPACK_IMPORTED_MODULE_0__.dotCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ delimiter: "-" }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/pascal-case/dist.es2015/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/pascal-case/dist.es2015/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pascalCase: () => (/* binding */ pascalCase),
/* harmony export */   pascalCaseTransform: () => (/* binding */ pascalCaseTransform),
/* harmony export */   pascalCaseTransformMerge: () => (/* binding */ pascalCaseTransformMerge)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! no-case */ "./node_modules/no-case/dist.es2015/index.js");


function pascalCaseTransform(input, index) {
    var firstChar = input.charAt(0);
    var lowerChars = input.substr(1).toLowerCase();
    if (index > 0 && firstChar >= "0" && firstChar <= "9") {
        return "_" + firstChar + lowerChars;
    }
    return "" + firstChar.toUpperCase() + lowerChars;
}
function pascalCaseTransformMerge(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
function pascalCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,no_case__WEBPACK_IMPORTED_MODULE_0__.noCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ delimiter: "", transform: pascalCaseTransform }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/postcode-validator/lib/cjs/postcode-regexes.js":
/*!*********************************************************************!*\
  !*** ./node_modules/postcode-validator/lib/cjs/postcode-regexes.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.POSTCODE_REGEXES = void 0;
const postcode_types_1 = __webpack_require__(/*! ./postcode-types */ "./node_modules/postcode-validator/lib/cjs/postcode-types.js");
// TODO: Remove CountryCode.UK in next major version release
exports.POSTCODE_REGEXES = new Map([
    [
        postcode_types_1.CountryCode.UK,
        /^([A-Z]){1}([0-9][0-9]|[0-9]|[A-Z][0-9][A-Z]|[A-Z][0-9][0-9]|[A-Z][0-9]|[0-9][A-Z]){1}([ ])?([0-9][A-z][A-z]){1}$/i,
    ],
    [
        postcode_types_1.CountryCode.GB,
        /^([A-Z]){1}([0-9][0-9]|[0-9]|[A-Z][0-9][A-Z]|[A-Z][0-9][0-9]|[A-Z][0-9]|[0-9][A-Z]){1}([ ])?([0-9][A-z][A-z]){1}$/i,
    ],
    [postcode_types_1.CountryCode.JE, /^JE\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],
    [postcode_types_1.CountryCode.GG, /^GY\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],
    [postcode_types_1.CountryCode.IM, /^IM\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],
    [postcode_types_1.CountryCode.US, /^([0-9]{5})(?:-([0-9]{4}))?$/],
    [postcode_types_1.CountryCode.CA, /^([ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ])\s*([0-9][ABCEGHJKLMNPRSTVWXYZ][0-9])$/i],
    [postcode_types_1.CountryCode.IE, /^([AC-FHKNPRTV-Y][0-9]{2}|D6W)[ -]?[0-9AC-FHKNPRTV-Y]{4}$/],
    [postcode_types_1.CountryCode.DE, /^\d{5}$/],
    [postcode_types_1.CountryCode.JP, /^\d{3}-\d{4}$/],
    [postcode_types_1.CountryCode.FR, /^\d{2}[ ]?\d{3}$/],
    [postcode_types_1.CountryCode.AU, /^\d{4}$/],
    [postcode_types_1.CountryCode.IT, /^\d{5}$/],
    [postcode_types_1.CountryCode.CH, /^\d{4}$/],
    [postcode_types_1.CountryCode.AT, /^(?!0)\d{4}$/],
    [postcode_types_1.CountryCode.ES, /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/],
    [postcode_types_1.CountryCode.NL, /^\d{4}[ ]?[A-Z]{2}$/], [postcode_types_1.CountryCode.BE, /^\d{4}$/],
    [postcode_types_1.CountryCode.DK, /^\d{4}$/],
    [postcode_types_1.CountryCode.SE, /^(SE-)?\d{3}[ ]?\d{2}$/],
    [postcode_types_1.CountryCode.NO, /^\d{4}$/],
    [postcode_types_1.CountryCode.BR, /^\d{5}[\-]?\d{3}$/],
    [postcode_types_1.CountryCode.PT, /^\d{4}([\-]\d{3})?$/],
    [postcode_types_1.CountryCode.FI, /^(FI-|AX-)?\d{5}$/],
    [postcode_types_1.CountryCode.AX, /^22\d{3}$/],
    [postcode_types_1.CountryCode.KR, /^\d{5}$/],
    [postcode_types_1.CountryCode.CN, /^\d{6}$/],
    [postcode_types_1.CountryCode.TW, /^\d{3}(\d{2,3})?$/],
    [postcode_types_1.CountryCode.SG, /^\d{6}$/],
    [postcode_types_1.CountryCode.DZ, /^\d{5}$/],
    [postcode_types_1.CountryCode.AD, /^AD\d{3}$/],
    [postcode_types_1.CountryCode.AR, /^([A-HJ-NP-Z])?\d{4}([A-Z]{3})?$/],
    [postcode_types_1.CountryCode.AM, /^(37)?\d{4}$/],
    [postcode_types_1.CountryCode.AZ, /^\d{4}$/],
    [postcode_types_1.CountryCode.BH, /^((1[0-2]|[2-9])\d{2})?$/],
    [postcode_types_1.CountryCode.BD, /^\d{4}$/],
    [postcode_types_1.CountryCode.BB, /^(BB\d{5})?$/],
    [postcode_types_1.CountryCode.BY, /^\d{6}$/],
    [postcode_types_1.CountryCode.BM, /^[A-Z]{2}[ ]?[A-Z0-9]{2}$/],
    [postcode_types_1.CountryCode.BA, /^\d{5}$/],
    [postcode_types_1.CountryCode.IO, /^BBND 1ZZ$/],
    [postcode_types_1.CountryCode.BN, /^[A-Z]{2}[ ]?\d{4}$/],
    [postcode_types_1.CountryCode.BG, /^\d{4}$/],
    [postcode_types_1.CountryCode.KH, /^\d{5}$/],
    [postcode_types_1.CountryCode.CV, /^\d{4}$/],
    [postcode_types_1.CountryCode.CL, /^\d{7}$/],
    [postcode_types_1.CountryCode.CR, /^(\d{4,5}|\d{3}-\d{4})$/],
    [postcode_types_1.CountryCode.HR, /^(HR-)?\d{5}$/],
    [postcode_types_1.CountryCode.CY, /^\d{4}$/],
    [postcode_types_1.CountryCode.CZ, /^\d{3}[ ]?\d{2}$/],
    [postcode_types_1.CountryCode.DO, /^\d{5}$/],
    [postcode_types_1.CountryCode.EC, /^([A-Z]\d{4}[A-Z]|(?:[A-Z]{2})?\d{6})?$/],
    [postcode_types_1.CountryCode.EG, /^\d{5}$/],
    [postcode_types_1.CountryCode.EE, /^\d{5}$/],
    [postcode_types_1.CountryCode.FO, /^\d{3}$/],
    [postcode_types_1.CountryCode.GE, /^\d{4}$/],
    [postcode_types_1.CountryCode.GR, /^\d{3}[ ]?\d{2}$/],
    [postcode_types_1.CountryCode.GL, /^39\d{2}$/],
    [postcode_types_1.CountryCode.GT, /^\d{5}$/],
    [postcode_types_1.CountryCode.HT, /^\d{4}$/],
    [postcode_types_1.CountryCode.HN, /^(?:\d{5})?$/],
    [postcode_types_1.CountryCode.HU, /^\d{4}$/],
    [postcode_types_1.CountryCode.IS, /^\d{3}$/],
    [postcode_types_1.CountryCode.IN, /^\d{6}$/],
    [postcode_types_1.CountryCode.ID, /^\d{5}$/],
    [postcode_types_1.CountryCode.IL, /^\d{5,7}$/],
    [postcode_types_1.CountryCode.JO, /^\d{5}$/],
    [postcode_types_1.CountryCode.KZ, /^\d{6}$/],
    [postcode_types_1.CountryCode.KE, /^\d{5}$/],
    [postcode_types_1.CountryCode.KW, /^\d{5}$/],
    [postcode_types_1.CountryCode.KY, /^KY[123]-\d{4}$/],
    [postcode_types_1.CountryCode.LA, /^\d{5}$/],
    [postcode_types_1.CountryCode.LV, /^(LV-)?\d{4}$/],
    [postcode_types_1.CountryCode.LB, /^(\d{4}([ ]?\d{4})?)?$/],
    [postcode_types_1.CountryCode.LI, /^(948[5-9])|(949[0-7])$/],
    [postcode_types_1.CountryCode.LT, /^(LT-)?\d{5}$/],
    [postcode_types_1.CountryCode.LU, /^(L-)?\d{4}$/],
    [postcode_types_1.CountryCode.MK, /^\d{4}$/],
    [postcode_types_1.CountryCode.MY, /^\d{5}$/],
    [postcode_types_1.CountryCode.MV, /^\d{5}$/],
    [postcode_types_1.CountryCode.MT, /^[A-Z]{3}[ ]?\d{2,4}$/],
    [postcode_types_1.CountryCode.MU, /^((\d|[A-Z])\d{4})?$/],
    [postcode_types_1.CountryCode.MX, /^\d{5}$/],
    [postcode_types_1.CountryCode.MD, /^\d{4}$/],
    [postcode_types_1.CountryCode.MC, /^980\d{2}$/],
    [postcode_types_1.CountryCode.MA, /^\d{5}$/],
    [postcode_types_1.CountryCode.NP, /^\d{5}$/],
    [postcode_types_1.CountryCode.NZ, /^\d{4}$/],
    [postcode_types_1.CountryCode.NI, /^((\d{4}-)?\d{3}-\d{3}(-\d{1})?)?$/],
    [postcode_types_1.CountryCode.NG, /^(\d{6})?$/],
    [postcode_types_1.CountryCode.OM, /^(PC )?\d{3}$/],
    [postcode_types_1.CountryCode.PA, /^\d{4}$/],
    [postcode_types_1.CountryCode.PK, /^\d{5}$/],
    [postcode_types_1.CountryCode.PY, /^\d{4}$/],
    [postcode_types_1.CountryCode.PH, /^\d{4}$/],
    [postcode_types_1.CountryCode.PL, /^\d{2}-\d{3}$/],
    [postcode_types_1.CountryCode.PR, /^00[679]\d{2}([ \-]\d{4})?$/],
    [postcode_types_1.CountryCode.RO, /^\d{6}$/],
    [postcode_types_1.CountryCode.RU, /^\d{6}$/],
    [postcode_types_1.CountryCode.SM, /^4789\d$/],
    [postcode_types_1.CountryCode.SA, /^\d{5}$/],
    [postcode_types_1.CountryCode.SN, /^\d{5}$/],
    [postcode_types_1.CountryCode.SK, /^\d{3}[ ]?\d{2}$/],
    [postcode_types_1.CountryCode.SI, /^(SI-)?\d{4}$/],
    [postcode_types_1.CountryCode.ZA, /^\d{4}$/],
    [postcode_types_1.CountryCode.LK, /^\d{5}$/],
    [postcode_types_1.CountryCode.TJ, /^\d{6}$/],
    [postcode_types_1.CountryCode.TH, /^\d{5}$/],
    [postcode_types_1.CountryCode.TN, /^\d{4}$/],
    [postcode_types_1.CountryCode.TR, /^\d{5}$/],
    [postcode_types_1.CountryCode.TM, /^\d{6}$/],
    [postcode_types_1.CountryCode.UA, /^\d{5}$/],
    [postcode_types_1.CountryCode.UY, /^\d{5}$/],
    [postcode_types_1.CountryCode.UZ, /^\d{6}$/],
    [postcode_types_1.CountryCode.VA, /^00120$/],
    [postcode_types_1.CountryCode.VE, /^\d{4}$/],
    [postcode_types_1.CountryCode.ZM, /^\d{5}$/],
    [postcode_types_1.CountryCode.AS, /^96799$/],
    [postcode_types_1.CountryCode.CC, /^6799$/],
    [postcode_types_1.CountryCode.CK, /^\d{4}$/],
    [postcode_types_1.CountryCode.RS, /^\d{5,6}$/],
    [postcode_types_1.CountryCode.ME, /^8\d{4}$/],
    [postcode_types_1.CountryCode.CS, /^\d{5}$/],
    [postcode_types_1.CountryCode.YU, /^\d{5}$/],
    [postcode_types_1.CountryCode.CX, /^6798$/],
    [postcode_types_1.CountryCode.ET, /^\d{4}$/],
    [postcode_types_1.CountryCode.FK, /^FIQQ 1ZZ$/],
    [postcode_types_1.CountryCode.NF, /^2899$/],
    [postcode_types_1.CountryCode.FM, /^(9694[1-4])([ \-]\d{4})?$/],
    [postcode_types_1.CountryCode.GF, /^9[78]3\d{2}$/],
    [postcode_types_1.CountryCode.GN, /^\d{3}$/],
    [postcode_types_1.CountryCode.GP, /^9[78][01]\d{2}$/],
    [postcode_types_1.CountryCode.GS, /^SIQQ 1ZZ$/],
    [postcode_types_1.CountryCode.GU, /^969[123]\d([ \-]\d{4})?$/],
    [postcode_types_1.CountryCode.GW, /^\d{4}$/],
    [postcode_types_1.CountryCode.HM, /^\d{4}$/],
    [postcode_types_1.CountryCode.IQ, /^\d{5}$/],
    [postcode_types_1.CountryCode.KG, /^\d{6}$/],
    [postcode_types_1.CountryCode.LR, /^\d{4}$/],
    [postcode_types_1.CountryCode.LS, /^\d{3}$/],
    [postcode_types_1.CountryCode.MG, /^\d{3}$/],
    [postcode_types_1.CountryCode.MH, /^969[67]\d([ \-]\d{4})?$/],
    [postcode_types_1.CountryCode.MN, /^\d{6}$/],
    [postcode_types_1.CountryCode.MP, /^9695[012]([ \-]\d{4})?$/],
    [postcode_types_1.CountryCode.MQ, /^9[78]2\d{2}$/],
    [postcode_types_1.CountryCode.NC, /^988\d{2}$/],
    [postcode_types_1.CountryCode.NE, /^\d{4}$/],
    [postcode_types_1.CountryCode.VI, /^008(([0-4]\d)|(5[01]))([ \-]\d{4})?$/],
    [postcode_types_1.CountryCode.VN, /^\d{6}$/],
    [postcode_types_1.CountryCode.PF, /^987\d{2}$/],
    [postcode_types_1.CountryCode.PG, /^\d{3}$/],
    [postcode_types_1.CountryCode.PM, /^9[78]5\d{2}$/],
    [postcode_types_1.CountryCode.PN, /^PCRN 1ZZ$/],
    [postcode_types_1.CountryCode.PW, /^96940$/],
    [postcode_types_1.CountryCode.RE, /^9[78]4\d{2}$/],
    [postcode_types_1.CountryCode.SH, /^(ASCN|STHL) 1ZZ$/],
    [postcode_types_1.CountryCode.SJ, /^\d{4}$/],
    [postcode_types_1.CountryCode.SO, /^\d{5}$/],
    [postcode_types_1.CountryCode.SZ, /^[HLMS]\d{3}$/],
    [postcode_types_1.CountryCode.TC, /^TKCA 1ZZ$/],
    [postcode_types_1.CountryCode.WF, /^986\d{2}$/],
    [postcode_types_1.CountryCode.XK, /^\d{5}$/],
    [postcode_types_1.CountryCode.YT, /^976\d{2}$/],
    [postcode_types_1.CountryCode.PE, /^\d{5}$/],
    [postcode_types_1.CountryCode.INTL, /^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/i],
]);


/***/ }),

/***/ "./node_modules/postcode-validator/lib/cjs/postcode-types.js":
/*!*******************************************************************!*\
  !*** ./node_modules/postcode-validator/lib/cjs/postcode-types.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountryCode = void 0;
var CountryCode;
(function (CountryCode) {
    CountryCode["UK"] = "UK";
    CountryCode["GB"] = "GB";
    CountryCode["JE"] = "JE";
    CountryCode["GG"] = "GG";
    CountryCode["IM"] = "IM";
    CountryCode["US"] = "US";
    CountryCode["CA"] = "CA";
    CountryCode["IE"] = "IE";
    CountryCode["DE"] = "DE";
    CountryCode["JP"] = "JP";
    CountryCode["FR"] = "FR";
    CountryCode["AU"] = "AU";
    CountryCode["IT"] = "IT";
    CountryCode["CH"] = "CH";
    CountryCode["AT"] = "AT";
    CountryCode["ES"] = "ES";
    CountryCode["NL"] = "NL";
    CountryCode["BE"] = "BE";
    CountryCode["DK"] = "DK";
    CountryCode["SE"] = "SE";
    CountryCode["NO"] = "NO";
    CountryCode["BR"] = "BR";
    CountryCode["PT"] = "PT";
    CountryCode["FI"] = "FI";
    CountryCode["AX"] = "AX";
    CountryCode["KR"] = "KR";
    CountryCode["CN"] = "CN";
    CountryCode["TW"] = "TW";
    CountryCode["SG"] = "SG";
    CountryCode["DZ"] = "DZ";
    CountryCode["AD"] = "AD";
    CountryCode["AR"] = "AR";
    CountryCode["AM"] = "AM";
    CountryCode["AZ"] = "AZ";
    CountryCode["BH"] = "BH";
    CountryCode["BD"] = "BD";
    CountryCode["BB"] = "BB";
    CountryCode["BY"] = "BY";
    CountryCode["BM"] = "BM";
    CountryCode["BA"] = "BA";
    CountryCode["IO"] = "IO";
    CountryCode["BN"] = "BN";
    CountryCode["BG"] = "BG";
    CountryCode["KH"] = "KH";
    CountryCode["CV"] = "CV";
    CountryCode["CL"] = "CL";
    CountryCode["CR"] = "CR";
    CountryCode["HR"] = "HR";
    CountryCode["CY"] = "CY";
    CountryCode["CZ"] = "CZ";
    CountryCode["DO"] = "DO";
    CountryCode["EC"] = "EC";
    CountryCode["EG"] = "EG";
    CountryCode["EE"] = "EE";
    CountryCode["FO"] = "FO";
    CountryCode["GE"] = "GE";
    CountryCode["GR"] = "GR";
    CountryCode["GL"] = "GL";
    CountryCode["GT"] = "GT";
    CountryCode["HT"] = "HT";
    CountryCode["HN"] = "HN";
    CountryCode["HU"] = "HU";
    CountryCode["IS"] = "IS";
    CountryCode["IN"] = "IN";
    CountryCode["ID"] = "ID";
    CountryCode["IL"] = "IL";
    CountryCode["JO"] = "JO";
    CountryCode["KZ"] = "KZ";
    CountryCode["KE"] = "KE";
    CountryCode["KW"] = "KW";
    CountryCode["KY"] = "KY";
    CountryCode["LA"] = "LA";
    CountryCode["LV"] = "LV";
    CountryCode["LB"] = "LB";
    CountryCode["LI"] = "LI";
    CountryCode["LT"] = "LT";
    CountryCode["LU"] = "LU";
    CountryCode["MK"] = "MK";
    CountryCode["MY"] = "MY";
    CountryCode["MV"] = "MV";
    CountryCode["MT"] = "MT";
    CountryCode["MU"] = "MU";
    CountryCode["MX"] = "MX";
    CountryCode["MD"] = "MD";
    CountryCode["MC"] = "MC";
    CountryCode["MA"] = "MA";
    CountryCode["NP"] = "NP";
    CountryCode["NZ"] = "NZ";
    CountryCode["NI"] = "NI";
    CountryCode["NG"] = "NG";
    CountryCode["OM"] = "OM";
    CountryCode["PA"] = "PA";
    CountryCode["PK"] = "PK";
    CountryCode["PY"] = "PY";
    CountryCode["PH"] = "PH";
    CountryCode["PL"] = "PL";
    CountryCode["PR"] = "PR";
    CountryCode["RO"] = "RO";
    CountryCode["RU"] = "RU";
    CountryCode["SM"] = "SM";
    CountryCode["SA"] = "SA";
    CountryCode["SN"] = "SN";
    CountryCode["SK"] = "SK";
    CountryCode["SI"] = "SI";
    CountryCode["ZA"] = "ZA";
    CountryCode["LK"] = "LK";
    CountryCode["TJ"] = "TJ";
    CountryCode["TH"] = "TH";
    CountryCode["TN"] = "TN";
    CountryCode["TR"] = "TR";
    CountryCode["TM"] = "TM";
    CountryCode["UA"] = "UA";
    CountryCode["UY"] = "UY";
    CountryCode["UZ"] = "UZ";
    CountryCode["VA"] = "VA";
    CountryCode["VE"] = "VE";
    CountryCode["ZM"] = "ZM";
    CountryCode["AS"] = "AS";
    CountryCode["CC"] = "CC";
    CountryCode["CK"] = "CK";
    CountryCode["RS"] = "RS";
    CountryCode["ME"] = "ME";
    CountryCode["CS"] = "CS";
    CountryCode["YU"] = "YU";
    CountryCode["CX"] = "CX";
    CountryCode["ET"] = "ET";
    CountryCode["FK"] = "FK";
    CountryCode["NF"] = "NF";
    CountryCode["FM"] = "FM";
    CountryCode["GF"] = "GF";
    CountryCode["GN"] = "GN";
    CountryCode["GP"] = "GP";
    CountryCode["GS"] = "GS";
    CountryCode["GU"] = "GU";
    CountryCode["GW"] = "GW";
    CountryCode["HM"] = "HM";
    CountryCode["IQ"] = "IQ";
    CountryCode["KG"] = "KG";
    CountryCode["LR"] = "LR";
    CountryCode["LS"] = "LS";
    CountryCode["MG"] = "MG";
    CountryCode["MH"] = "MH";
    CountryCode["MN"] = "MN";
    CountryCode["MP"] = "MP";
    CountryCode["MQ"] = "MQ";
    CountryCode["NC"] = "NC";
    CountryCode["NE"] = "NE";
    CountryCode["VI"] = "VI";
    CountryCode["VN"] = "VN";
    CountryCode["PF"] = "PF";
    CountryCode["PG"] = "PG";
    CountryCode["PM"] = "PM";
    CountryCode["PN"] = "PN";
    CountryCode["PW"] = "PW";
    CountryCode["RE"] = "RE";
    CountryCode["SH"] = "SH";
    CountryCode["SJ"] = "SJ";
    CountryCode["SO"] = "SO";
    CountryCode["SZ"] = "SZ";
    CountryCode["TC"] = "TC";
    CountryCode["WF"] = "WF";
    CountryCode["XK"] = "XK";
    CountryCode["YT"] = "YT";
    CountryCode["PE"] = "PE";
    CountryCode["INTL"] = "INTL";
})(CountryCode = exports.CountryCode || (exports.CountryCode = {}));


/***/ }),

/***/ "./node_modules/react-number-format/dist/react-number-format.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-number-format/dist/react-number-format.es.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * react-number-format - 4.9.3
 * Author : Sudhanshu Yadav
 * Copyright (c) 2016, 2022 to Sudhanshu Yadav, released under the MIT license.
 * https://github.com/s-yadav/react-number-format
 */



//     

                                                               

// basic noop function
function noop() {}
function returnTrue() {
  return true;
}

function charIsNumber(char         ) {
  return !!(char || '').match(/\d/);
}

function isNil(val     ) {
  return val === null || val === undefined;
}

function escapeRegExp(str        ) {
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}

function getThousandsGroupRegex(thousandsGroupStyle        ) {
  switch (thousandsGroupStyle) {
    case 'lakh':
      return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
    case 'wan':
      return /(\d)(?=(\d{4})+(?!\d))/g;
    case 'thousand':
    default:
      return /(\d)(?=(\d{3})+(?!\d))/g;
  }
}

function applyThousandSeparator(
  str        ,
  thousandSeparator        ,
  thousandsGroupStyle        
) {
  var thousandsGroupRegex = getThousandsGroupRegex(thousandsGroupStyle);
  var index = str.search(/[1-9]/);
  index = index === -1 ? str.length : index;
  return (
    str.substring(0, index) +
    str.substring(index, str.length).replace(thousandsGroupRegex, '$1' + thousandSeparator)
  );
}

//spilt a float number into different parts beforeDecimal, afterDecimal, and negation
function splitDecimal(numStr        , allowNegative) {
  if ( allowNegative === void 0 ) allowNegative          = true;

  var hasNagation = numStr[0] === '-';
  var addNegation = hasNagation && allowNegative;
  numStr = numStr.replace('-', '');

  var parts = numStr.split('.');
  var beforeDecimal = parts[0];
  var afterDecimal = parts[1] || '';

  return {
    beforeDecimal: beforeDecimal,
    afterDecimal: afterDecimal,
    hasNagation: hasNagation,
    addNegation: addNegation,
  };
}

function fixLeadingZero(numStr         ) {
  if (!numStr) { return numStr; }
  var isNegative = numStr[0] === '-';
  if (isNegative) { numStr = numStr.substring(1, numStr.length); }
  var parts = numStr.split('.');
  var beforeDecimal = parts[0].replace(/^0+/, '') || '0';
  var afterDecimal = parts[1] || '';

  return ("" + (isNegative ? '-' : '') + beforeDecimal + (afterDecimal ? ("." + afterDecimal) : ''));
}

/**
 * limit decimal numbers to given scale
 * Not used .fixedTo because that will break with big numbers
 */
function limitToScale(numStr        , scale        , fixedDecimalScale         ) {
  var str = '';
  var filler = fixedDecimalScale ? '0' : '';
  for (var i = 0; i <= scale - 1; i++) {
    str += numStr[i] || filler;
  }
  return str;
}

function repeat(str, count) {
  return Array(count + 1).join(str);
}

function toNumericString(num) {
  num += ''; // typecast number to string

  // store the sign and remove it from the number.
  var sign = num[0] === '-' ? '-' : '';
  if (sign) { num = num.substring(1); }

  // split the number into cofficient and exponent
  var ref = num.split(/[eE]/g);
  var coefficient = ref[0];
  var exponent = ref[1];

  // covert exponent to number;
  exponent = Number(exponent);

  // if there is no exponent part or its 0, return the coffiecient with sign
  if (!exponent) { return sign + coefficient; }

  coefficient = coefficient.replace('.', '');

  /**
   * for scientific notation the current decimal index will be after first number (index 0)
   * So effective decimal index will always be 1 + exponent value
   */
  var decimalIndex = 1 + exponent;

  var coffiecientLn = coefficient.length;

  if (decimalIndex < 0) {
    // if decimal index is less then 0 add preceding 0s
    // add 1 as join will have
    coefficient = '0.' + repeat('0', Math.abs(decimalIndex)) + coefficient;
  } else if (decimalIndex >= coffiecientLn) {
    // if decimal index is less then 0 add leading 0s
    coefficient = coefficient + repeat('0', decimalIndex - coffiecientLn);
  } else {
    // else add decimal point at proper index
    coefficient =
      (coefficient.substring(0, decimalIndex) || '0') + '.' + coefficient.substring(decimalIndex);
  }

  return sign + coefficient;
}

/**
 * This method is required to round prop value to given scale.
 * Not used .round or .fixedTo because that will break with big numbers
 */
function roundToPrecision(numStr        , scale        , fixedDecimalScale         ) {
  //if number is empty don't do anything return empty string
  if (['', '-'].indexOf(numStr) !== -1) { return numStr; }

  var shoudHaveDecimalSeparator = numStr.indexOf('.') !== -1 && scale;
  var ref = splitDecimal(numStr);
  var beforeDecimal = ref.beforeDecimal;
  var afterDecimal = ref.afterDecimal;
  var hasNagation = ref.hasNagation;
  var floatValue = parseFloat(("0." + (afterDecimal || '0')));
  var floatValueStr =
    afterDecimal.length <= scale ? ("0." + afterDecimal) : floatValue.toFixed(scale);
  var roundedDecimalParts = floatValueStr.split('.');
  var intPart = beforeDecimal
    .split('')
    .reverse()
    .reduce(function (roundedStr, current, idx) {
      if (roundedStr.length > idx) {
        return (
          (Number(roundedStr[0]) + Number(current)).toString() +
          roundedStr.substring(1, roundedStr.length)
        );
      }
      return current + roundedStr;
    }, roundedDecimalParts[0]);

  var decimalPart = limitToScale(
    roundedDecimalParts[1] || '',
    Math.min(scale, afterDecimal.length),
    fixedDecimalScale
  );
  var negation = hasNagation ? '-' : '';
  var decimalSeparator = shoudHaveDecimalSeparator ? '.' : '';
  return ("" + negation + intPart + decimalSeparator + decimalPart);
}

/** set the caret positon in an input field **/
function setCaretPosition(el                  , caretPos        ) {
  el.value = el.value;
  // ^ this is used to not only get 'focus', but
  // to make sure we don't have it everything -selected-
  // (it causes an issue in chrome, and having it doesn't hurt any other browser)
  if (el !== null) {
    if (el.createTextRange) {
      var range = el.createTextRange();
      range.move('character', caretPos);
      range.select();
      return true;
    }
    // (el.selectionStart === 0 added for Firefox bug)
    if (el.selectionStart || el.selectionStart === 0) {
      el.focus();
      el.setSelectionRange(caretPos, caretPos);
      return true;
    }

    // fail city, fortunately this never happens (as far as I've tested) :)
    el.focus();
    return false;
  }
}

/**
  Given previous value and newValue it returns the index
  start - end to which values have changed.
  This function makes assumption about only consecutive
  characters are changed which is correct assumption for caret input.
*/
function findChangedIndex(prevValue        , newValue        ) {
  var i = 0,
    j = 0;
  var prevLength = prevValue.length;
  var newLength = newValue.length;
  while (prevValue[i] === newValue[i] && i < prevLength) { i++; }

  //check what has been changed from last
  while (
    prevValue[prevLength - 1 - j] === newValue[newLength - 1 - j] &&
    newLength - j > i &&
    prevLength - j > i
  ) {
    j++;
  }

  return { start: i, end: prevLength - j };
}

/*
  Returns a number whose value is limited to the given range
*/
function clamp(num        , min        , max        ) {
  return Math.min(Math.max(num, min), max);
}

function getCurrentCaretPosition(el                  ) {
  /*Max of selectionStart and selectionEnd is taken for the patch of pixel and other mobile device caret bug*/
  return Math.max(el.selectionStart, el.selectionEnd);
}

function addInputMode(format                                   ) {
  return (
    format ||
    (typeof navigator !== 'undefined' &&
      !(navigator.platform && /iPhone|iPod/.test(navigator.platform)))
  );
}

//     
function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var defaultProps = {
  displayType: 'input',
  decimalSeparator: '.',
  thousandsGroupStyle: 'thousand',
  fixedDecimalScale: false,
  prefix: '',
  suffix: '',
  allowNegative: true,
  allowEmptyFormatting: false,
  allowLeadingZeros: false,
  isNumericString: false,
  type: 'text',
  onValueChange: noop,
  onChange: noop,
  onKeyDown: noop,
  onMouseUp: noop,
  onFocus: noop,
  onBlur: noop,
  isAllowed: returnTrue,
};
var NumberFormat = /*@__PURE__*/(function (superclass) {
  function NumberFormat(props        ) {
    superclass.call(this, props);
    var defaultValue = props.defaultValue;

    //validate props
    this.validateProps();

    var formattedValue = this.formatValueProp(defaultValue);

    this.state = {
      value: formattedValue,
      numAsString: this.removeFormatting(formattedValue),
      mounted: false,
    };

    this.selectionBeforeInput = {
      selectionStart: 0,
      selectionEnd: 0,
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  if ( superclass ) NumberFormat.__proto__ = superclass;
  NumberFormat.prototype = Object.create( superclass && superclass.prototype );
  NumberFormat.prototype.constructor = NumberFormat;

  NumberFormat.prototype.componentDidMount = function componentDidMount () {
    // set mounted state
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      mounted: true,
    });
  };

  NumberFormat.prototype.componentDidUpdate = function componentDidUpdate (prevProps        ) {
    this.updateValueIfRequired(prevProps);
  };

  NumberFormat.prototype.componentWillUnmount = function componentWillUnmount () {
    clearTimeout(this.focusTimeout);
    clearTimeout(this.caretPositionTimeout);
  };

  NumberFormat.prototype.updateValueIfRequired = function updateValueIfRequired (prevProps        ) {
    var ref = this;
    var props = ref.props;
    var state = ref.state;
    var focusedElm = ref.focusedElm;
    var stateValue = state.value;
    var lastNumStr = state.numAsString; if ( lastNumStr === void 0 ) lastNumStr = '';

    // If only state changed no need to do any thing
    if (prevProps !== props) {
      //validate props
      this.validateProps();

      var lastValueWithNewFormat = this.formatNumString(lastNumStr);

      var formattedValue = isNil(props.value) ? lastValueWithNewFormat : this.formatValueProp();
      var numAsString = this.removeFormatting(formattedValue);

      var floatValue = parseFloat(numAsString);
      var lastFloatValue = parseFloat(lastNumStr);

      if (
        //while typing set state only when float value changes
        ((!isNaN(floatValue) || !isNaN(lastFloatValue)) && floatValue !== lastFloatValue) ||
        //can also set state when float value is same and the format props changes
        lastValueWithNewFormat !== stateValue ||
        //set state always when not in focus and formatted value is changed
        (focusedElm === null && formattedValue !== stateValue)
      ) {
        this.updateValue({
          formattedValue: formattedValue,
          numAsString: numAsString,
          input: focusedElm,
          source: 'prop',
          event: null,
        });
      }
    }
  };

  /** Misc methods **/
  NumberFormat.prototype.getFloatString = function getFloatString (num) {
    if ( num === void 0 ) num         = '';

    var ref = this.props;
    var decimalScale = ref.decimalScale;
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;
    var numRegex = this.getNumberRegex(true);

    //remove negation for regex check
    var hasNegation = num[0] === '-';
    if (hasNegation) { num = num.replace('-', ''); }

    //if decimal scale is zero remove decimal and number after decimalSeparator
    if (decimalSeparator && decimalScale === 0) {
      num = num.split(decimalSeparator)[0];
    }

    num = (num.match(numRegex) || []).join('').replace(decimalSeparator, '.');

    //remove extra decimals
    var firstDecimalIndex = num.indexOf('.');

    if (firstDecimalIndex !== -1) {
      num = (num.substring(0, firstDecimalIndex)) + "." + (num
        .substring(firstDecimalIndex + 1, num.length)
        .replace(new RegExp(escapeRegExp(decimalSeparator), 'g'), ''));
    }

    //add negation back
    if (hasNegation) { num = '-' + num; }

    return num;
  };

  //returned regex assumes decimalSeparator is as per prop
  NumberFormat.prototype.getNumberRegex = function getNumberRegex (g         , ignoreDecimalSeparator          ) {
    var ref = this.props;
    var format = ref.format;
    var decimalScale = ref.decimalScale;
    var customNumerals = ref.customNumerals;
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;
    return new RegExp(
      '[0-9' +
        (customNumerals ? customNumerals.join('') : '') +
        ']' +
        (decimalSeparator && decimalScale !== 0 && !ignoreDecimalSeparator && !format
          ? '|' + escapeRegExp(decimalSeparator)
          : ''),
      g ? 'g' : undefined
    );
  };

  NumberFormat.prototype.getSeparators = function getSeparators () {
    var ref = this.props;
    var decimalSeparator = ref.decimalSeparator;
    var ref$1 = this.props;
    var thousandSeparator = ref$1.thousandSeparator;
    var allowedDecimalSeparators = ref$1.allowedDecimalSeparators;

    if (thousandSeparator === true) {
      thousandSeparator = ',';
    }
    if (!allowedDecimalSeparators) {
      allowedDecimalSeparators = [decimalSeparator, '.'];
    }

    return {
      decimalSeparator: decimalSeparator,
      thousandSeparator: thousandSeparator,
      allowedDecimalSeparators: allowedDecimalSeparators,
    };
  };

  NumberFormat.prototype.getMaskAtIndex = function getMaskAtIndex (index        ) {
    var ref = this.props;
    var mask = ref.mask; if ( mask === void 0 ) mask = ' ';
    if (typeof mask === 'string') {
      return mask;
    }

    return mask[index] || ' ';
  };

  NumberFormat.prototype.getValueObject = function getValueObject (formattedValue        , numAsString        ) {
    var floatValue = parseFloat(numAsString);

    return {
      formattedValue: formattedValue,
      value: numAsString,
      floatValue: isNaN(floatValue) ? undefined : floatValue,
    };
  };

  NumberFormat.prototype.validateProps = function validateProps () {
    var ref = this.props;
    var mask = ref.mask;

    //validate decimalSeparator and thousandSeparator
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;
    var thousandSeparator = ref$1.thousandSeparator;

    if (decimalSeparator === thousandSeparator) {
      throw new Error(("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: " + thousandSeparator + " (thousandSeparator = {true} is same as thousandSeparator = \",\")\n          decimalSeparator: " + decimalSeparator + " (default value for decimalSeparator is .)\n       "));
    }

    //validate mask
    if (mask) {
      var maskAsStr = mask === 'string' ? mask : mask.toString();
      if (maskAsStr.match(/\d/g)) {
        throw new Error(("\n          Mask " + mask + " should not contain numeric character;\n        "));
      }
    }
  };
  /** Misc methods end **/

  /** caret specific methods **/
  NumberFormat.prototype.setPatchedCaretPosition = function setPatchedCaretPosition (el                  , caretPos        , currentValue        ) {
    /* setting caret position within timeout of 0ms is required for mobile chrome,
    otherwise browser resets the caret position after we set it
    We are also setting it without timeout so that in normal browser we don't see the flickering */
    setCaretPosition(el, caretPos);
    this.caretPositionTimeout = setTimeout(function () {
      if (el.value === currentValue) { setCaretPosition(el, caretPos); }
    }, 0);
  };

  /* This keeps the caret within typing area so people can't type in between prefix or suffix */
  NumberFormat.prototype.correctCaretPosition = function correctCaretPosition (value        , caretPos        , direction         ) {
    var ref = this.props;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var format = ref.format;

    //if value is empty return 0
    if (value === '') { return 0; }

    //caret position should be between 0 and value length
    caretPos = clamp(caretPos, 0, value.length);

    //in case of format as number limit between prefix and suffix
    if (!format) {
      var hasNegation = value[0] === '-';
      return clamp(caretPos, prefix.length + (hasNegation ? 1 : 0), value.length - suffix.length);
    }

    //in case if custom format method don't do anything
    if (typeof format === 'function') { return caretPos; }

    /* in case format is string find the closest # position from the caret position */

    //in case the caretPos have input value on it don't do anything
    if (format[caretPos] === '#' && charIsNumber(value[caretPos])) {
      return caretPos;
    }

    //if caretPos is just after input value don't do anything
    if (format[caretPos - 1] === '#' && charIsNumber(value[caretPos - 1])) {
      return caretPos;
    }

    //find the nearest caret position
    var firstHashPosition = format.indexOf('#');
    var lastHashPosition = format.lastIndexOf('#');

    //limit the cursor between the first # position and the last # position
    caretPos = clamp(caretPos, firstHashPosition, lastHashPosition + 1);

    var nextPos = format.substring(caretPos, format.length).indexOf('#');
    var caretLeftBound = caretPos;
    var caretRightBound = caretPos + (nextPos === -1 ? 0 : nextPos);

    //get the position where the last number is present
    while (
      caretLeftBound > firstHashPosition &&
      (format[caretLeftBound] !== '#' || !charIsNumber(value[caretLeftBound]))
    ) {
      caretLeftBound -= 1;
    }

    var goToLeft =
      !charIsNumber(value[caretRightBound]) ||
      (direction === 'left' && caretPos !== firstHashPosition) ||
      caretPos - caretLeftBound < caretRightBound - caretPos;

    if (goToLeft) {
      //check if number should be taken after the bound or after it
      //if number preceding a valid number keep it after
      return charIsNumber(value[caretLeftBound]) ? caretLeftBound + 1 : caretLeftBound;
    }

    return caretRightBound;
  };

  NumberFormat.prototype.getCaretPosition = function getCaretPosition (inputValue        , formattedValue        , caretPos        ) {
    var ref = this.props;
    var format = ref.format;
    var stateValue = this.state.value;
    var numRegex = this.getNumberRegex(true);
    var inputNumber = (inputValue.match(numRegex) || []).join('');
    var formattedNumber = (formattedValue.match(numRegex) || []).join('');
    var j, i;

    j = 0;

    for (i = 0; i < caretPos; i++) {
      var currentInputChar = inputValue[i] || '';
      var currentFormatChar = formattedValue[j] || '';
      //no need to increase new cursor position if formatted value does not have those characters
      //case inputValue = 1a23 and formattedValue =  123
      if (!currentInputChar.match(numRegex) && currentInputChar !== currentFormatChar) {
        continue;
      }

      //When we are striping out leading zeros maintain the new cursor position
      //Case inputValue = 00023 and formattedValue = 23;
      if (
        currentInputChar === '0' &&
        currentFormatChar.match(numRegex) &&
        currentFormatChar !== '0' &&
        inputNumber.length !== formattedNumber.length
      ) {
        continue;
      }

      //we are not using currentFormatChar because j can change here
      while (currentInputChar !== formattedValue[j] && j < formattedValue.length) {
        j++;
      }
      j++;
    }

    if (typeof format === 'string' && !stateValue) {
      //set it to the maximum value so it goes after the last number
      j = formattedValue.length;
    }

    //correct caret position if its outside of editable area
    j = this.correctCaretPosition(formattedValue, j);

    return j;
  };
  /** caret specific methods ends **/

  /** methods to remove formattting **/
  NumberFormat.prototype.removePrefixAndSuffix = function removePrefixAndSuffix (val        ) {
    var ref = this.props;
    var format = ref.format;
    var prefix = ref.prefix;
    var suffix = ref.suffix;

    //remove prefix and suffix
    if (!format && val) {
      var isNegative = val[0] === '-';

      //remove negation sign
      if (isNegative) { val = val.substring(1, val.length); }

      //remove prefix
      val = prefix && val.indexOf(prefix) === 0 ? val.substring(prefix.length, val.length) : val;

      //remove suffix
      var suffixLastIndex = val.lastIndexOf(suffix);
      val =
        suffix && suffixLastIndex !== -1 && suffixLastIndex === val.length - suffix.length
          ? val.substring(0, suffixLastIndex)
          : val;

      //add negation sign back
      if (isNegative) { val = '-' + val; }
    }

    return val;
  };

  NumberFormat.prototype.removePatternFormatting = function removePatternFormatting (val        ) {
    var ref = this.props;
    var format = ref.format;
    var formatArray = format.split('#').filter(function (str) { return str !== ''; });
    var start = 0;
    var numStr = '';

    for (var i = 0, ln = formatArray.length; i <= ln; i++) {
      var part = formatArray[i] || '';

      //if i is the last fragment take the index of end of the value
      //For case like +1 (911) 911 91 91 having pattern +1 (###) ### ## ##
      var index = i === ln ? val.length : val.indexOf(part, start);

      /* in any case if we don't find the pattern part in the value assume the val as numeric string
      This will be also in case if user has started typing, in any other case it will not be -1
      unless wrong prop value is provided */
      if (index === -1) {
        numStr = val;
        break;
      } else {
        numStr += val.substring(start, index);
        start = index + part.length;
      }
    }

    return (numStr.match(this.getNumberRegex(true)) || []).join('');
  };

  NumberFormat.prototype.removeFormatting = function removeFormatting (val        ) {
    var ref = this.props;
    var format = ref.format;
    var removeFormatting = ref.removeFormatting;
    if (!val) { return val; }

    if (!format) {
      val = this.removePrefixAndSuffix(val);
      val = this.getFloatString(val);
    } else if (typeof format === 'string') {
      val = this.removePatternFormatting(val);
    } else if (typeof removeFormatting === 'function') {
      //condition need to be handled if format method is provide,
      val = removeFormatting(val);
    } else {
      val = (val.match(this.getNumberRegex(true)) || []).join('');
    }
    return val;
  };
  /** methods to remove formattting end **/

  /*** format specific methods start ***/
  /**
   * Format when # based string is provided
   * @param  {string} numStr Numeric String
   * @return {string}        formatted Value
   */
  NumberFormat.prototype.formatWithPattern = function formatWithPattern (numStr        ) {
    var ref = this.props;
    var format = ref.format;
    var hashCount = 0;
    var formattedNumberAry = format.split('');
    for (var i = 0, ln = format.length; i < ln; i++) {
      if (format[i] === '#') {
        formattedNumberAry[i] = numStr[hashCount] || this.getMaskAtIndex(hashCount);
        hashCount += 1;
      }
    }
    return formattedNumberAry.join('');
  };
  /**
   * @param  {string} numStr Numeric string/floatString] It always have decimalSeparator as .
   * @return {string} formatted Value
   */
  NumberFormat.prototype.formatAsNumber = function formatAsNumber (numStr        ) {
    var ref = this.props;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var allowNegative = ref.allowNegative;
    var thousandsGroupStyle = ref.thousandsGroupStyle;
    var ref$1 = this.getSeparators();
    var thousandSeparator = ref$1.thousandSeparator;
    var decimalSeparator = ref$1.decimalSeparator;

    var hasDecimalSeparator = numStr.indexOf('.') !== -1 || (decimalScale && fixedDecimalScale);
    var ref$2 = splitDecimal(numStr, allowNegative);
    var beforeDecimal = ref$2.beforeDecimal;
    var afterDecimal = ref$2.afterDecimal;
    var addNegation = ref$2.addNegation; // eslint-disable-line prefer-const

    //apply decimal precision if its defined
    if (decimalScale !== undefined) {
      afterDecimal = limitToScale(afterDecimal, decimalScale, fixedDecimalScale);
    }

    if (thousandSeparator) {
      beforeDecimal = applyThousandSeparator(beforeDecimal, thousandSeparator, thousandsGroupStyle);
    }

    //add prefix and suffix
    if (prefix) { beforeDecimal = prefix + beforeDecimal; }
    if (suffix) { afterDecimal = afterDecimal + suffix; }

    //restore negation sign
    if (addNegation) { beforeDecimal = '-' + beforeDecimal; }

    numStr = beforeDecimal + ((hasDecimalSeparator && decimalSeparator) || '') + afterDecimal;

    return numStr;
  };

  NumberFormat.prototype.formatNumString = function formatNumString (numStr) {
    if ( numStr === void 0 ) numStr         = '';

    var ref = this.props;
    var format = ref.format;
    var allowEmptyFormatting = ref.allowEmptyFormatting;
    var customNumerals = ref.customNumerals;
    var formattedValue = numStr;

    if (customNumerals && customNumerals.length === 10) {
      var customNumeralRegex = new RegExp('[' + customNumerals.join('') + ']', 'g');
      formattedValue = numStr.replace(customNumeralRegex, function (digit) { return customNumerals.indexOf(digit).toString(); }
      );
    }

    if (numStr === '' && !allowEmptyFormatting) {
      formattedValue = '';
    } else if (numStr === '-' && !format) {
      formattedValue = '-';
    } else if (typeof format === 'string') {
      formattedValue = this.formatWithPattern(formattedValue);
    } else if (typeof format === 'function') {
      formattedValue = format(formattedValue);
    } else {
      formattedValue = this.formatAsNumber(formattedValue);
    }

    return formattedValue;
  };

  NumberFormat.prototype.formatValueProp = function formatValueProp (defaultValue                 ) {
    var ref = this.props;
    var format = ref.format;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var allowEmptyFormatting = ref.allowEmptyFormatting;
    var ref$1 = this.props;
    var value = ref$1.value;
    var isNumericString = ref$1.isNumericString;

    // if value is undefined or null, use defaultValue instead
    value = isNil(value) ? defaultValue : value;

    var isNonNumericFalsy = !value && value !== 0;

    if (isNonNumericFalsy && allowEmptyFormatting) {
      value = '';
    }

    // if value is not defined return empty string
    if (isNonNumericFalsy && !allowEmptyFormatting) { return ''; }

    if (typeof value === 'number') {
      value = toNumericString(value);
      isNumericString = true;
    }

    //change infinity value to empty string
    if (value === 'Infinity' && isNumericString) {
      value = '';
    }

    //round the number based on decimalScale
    //format only if non formatted value is provided
    if (isNumericString && !format && typeof decimalScale === 'number') {
      value = roundToPrecision(value, decimalScale, fixedDecimalScale);
    }

    var formattedValue = isNumericString ? this.formatNumString(value) : this.formatInput(value);

    return formattedValue;
  };

  NumberFormat.prototype.formatNegation = function formatNegation (value) {
    if ( value === void 0 ) value         = '';

    var ref = this.props;
    var allowNegative = ref.allowNegative;
    var negationRegex = new RegExp('(-)');
    var doubleNegationRegex = new RegExp('(-)(.)*(-)');

    // Check number has '-' value
    var hasNegation = negationRegex.test(value);

    // Check number has 2 or more '-' values
    var removeNegation = doubleNegationRegex.test(value);

    //remove negation
    value = value.replace(/-/g, '');

    if (hasNegation && !removeNegation && allowNegative) {
      value = '-' + value;
    }

    return value;
  };

  NumberFormat.prototype.formatInput = function formatInput (value) {
    if ( value === void 0 ) value         = '';

    var ref = this.props;
    var format = ref.format;

    //format negation only if we are formatting as number
    if (!format) {
      value = this.removePrefixAndSuffix(value);
      value = this.formatNegation(value);
    }

    //remove formatting from number
    value = this.removeFormatting(value);

    return this.formatNumString(value);
  };

  /*** format specific methods end ***/
  NumberFormat.prototype.isCharacterAFormat = function isCharacterAFormat (caretPos        , value        ) {
    var ref = this.props;
    var format = ref.format;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;

    //check within format pattern
    if (typeof format === 'string' && format[caretPos] !== '#') { return true; }

    //check in number format
    if (
      !format &&
      (caretPos < prefix.length ||
        caretPos >= value.length - suffix.length ||
        (decimalScale && fixedDecimalScale && value[caretPos] === decimalSeparator))
    ) {
      return true;
    }

    return false;
  };

  /**
   * This will check if any formatting got removed by the delete or backspace and reset the value
   * It will also work as fallback if android chome keyDown handler does not work
   **/
  NumberFormat.prototype.correctInputValue = function correctInputValue (caretPos        , lastValue        , value        ) {
    var this$1 = this;

    var ref = this.props;
    var format = ref.format;
    var allowNegative = ref.allowNegative;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var decimalScale = ref.decimalScale;
    var ref$1 = this.getSeparators();
    var allowedDecimalSeparators = ref$1.allowedDecimalSeparators;
    var decimalSeparator = ref$1.decimalSeparator;
    var lastNumStr = this.state.numAsString || '';
    var ref$2 = this.selectionBeforeInput;
    var selectionStart = ref$2.selectionStart;
    var selectionEnd = ref$2.selectionEnd;
    var ref$3 = findChangedIndex(lastValue, value);
    var start = ref$3.start;
    var end = ref$3.end;

    /** Check for any allowed decimal separator is added in the numeric format and replace it with decimal separator */
    if (
      !format &&
      start === end &&
      allowedDecimalSeparators.indexOf(value[selectionStart]) !== -1
    ) {
      var separator = decimalScale === 0 ? '' : decimalSeparator;
      return (
        value.substr(0, selectionStart) + separator + value.substr(selectionStart + 1, value.length)
      );
    }

    var leftBound = !!format ? 0 : prefix.length;
    var rightBound = lastValue.length - (!!format ? 0 : suffix.length);

    if (
      // don't do anything if something got added
      value.length > lastValue.length ||
      // or if the new value is an empty string
      !value.length ||
      // or if nothing has changed, in which case start will be same as end
      start === end ||
      // or in case if whole input is selected and new value is typed
      (selectionStart === 0 && selectionEnd === lastValue.length) ||
      // or in case if the whole content is replaced by browser, example (autocomplete)
      (start === 0 && end === lastValue.length) ||
      // or if charcters between prefix and suffix is selected.
      // For numeric inputs we apply the format so, prefix and suffix can be ignored
      (selectionStart === leftBound && selectionEnd === rightBound)
    ) {
      return value;
    }

    // check whether the deleted portion has a character that is part of a format
    var deletedValues = lastValue.substr(start, end - start);
    var formatGotDeleted = !![].concat( deletedValues ).find(function (deletedVal, idx) { return this$1.isCharacterAFormat(idx + start, lastValue); }
    );

    // if it has, only remove characters that are not part of the format
    if (formatGotDeleted) {
      var deletedValuePortion = lastValue.substr(start);
      var recordIndexOfFormatCharacters = {};
      var resolvedPortion = [];
      [].concat( deletedValuePortion ).forEach(function (currentPortion, idx) {
        if (this$1.isCharacterAFormat(idx + start, lastValue)) {
          recordIndexOfFormatCharacters[idx] = currentPortion;
        } else if (idx > deletedValues.length - 1) {
          resolvedPortion.push(currentPortion);
        }
      });

      Object.keys(recordIndexOfFormatCharacters).forEach(function (idx) {
        if (resolvedPortion.length > idx) {
          resolvedPortion.splice(idx, 0, recordIndexOfFormatCharacters[idx]);
        } else {
          resolvedPortion.push(recordIndexOfFormatCharacters[idx]);
        }
      });

      value = lastValue.substr(0, start) + resolvedPortion.join('');
    }

    //for numbers check if beforeDecimal got deleted and there is nothing after decimal,
    //clear all numbers in such case while keeping the - sign
    if (!format) {
      var numericString = this.removeFormatting(value);
      var ref$4 = splitDecimal(
        numericString,
        allowNegative
      );
      var beforeDecimal = ref$4.beforeDecimal;
      var afterDecimal = ref$4.afterDecimal;
      var addNegation = ref$4.addNegation; // eslint-disable-line prefer-const

      //clear only if something got deleted
      var isBeforeDecimalPoint = caretPos < value.indexOf(decimalSeparator) + 1;
      if (
        numericString.length < lastNumStr.length &&
        isBeforeDecimalPoint &&
        beforeDecimal === '' &&
        !parseFloat(afterDecimal)
      ) {
        return addNegation ? '-' : '';
      }
    }

    return value;
  };

  /** Update value and caret position */
  NumberFormat.prototype.updateValue = function updateValue (params   
                           
                        
                       
                            
                               
                   
                     
                              
   ) {
    var formattedValue = params.formattedValue;
    var input = params.input;
    var setCaretPosition = params.setCaretPosition; if ( setCaretPosition === void 0 ) setCaretPosition = true;
    var source = params.source;
    var event = params.event;
    var numAsString = params.numAsString;
    var caretPos = params.caretPos;
    var ref = this.props;
    var onValueChange = ref.onValueChange;
    var ref$1 = this.state;
    var lastValue = ref$1.value;

    if (input) {
      //calculate caret position if not defined
      if (caretPos === undefined && setCaretPosition) {
        var inputValue = params.inputValue || input.value;

        var currentCaretPosition = getCurrentCaretPosition(input);

        /**
         * set the value imperatively, this is required for IE fix
         * This is also required as if new caret position is beyond the previous value.
         * Caret position will not be set correctly
         */
        input.value = formattedValue;

        //get the caret position
        caretPos = this.getCaretPosition(inputValue, formattedValue, currentCaretPosition);
      }

      /**
       * set the value imperatively, as we set the caret position as well imperatively.
       * This is to keep value and caret position in sync
       */
      input.value = formattedValue;

      //set caret position, and value imperatively when element is provided
      if (setCaretPosition) {
        //set caret position
        this.setPatchedCaretPosition(input, caretPos, formattedValue);
      }
    }

    //calculate numeric string if not passed
    if (numAsString === undefined) {
      numAsString = this.removeFormatting(formattedValue);
    }

    //update state if value is changed
    if (formattedValue !== lastValue) {
      this.setState({ value: formattedValue, numAsString: numAsString });

      // trigger onValueChange synchronously, so parent is updated along with the number format. Fix for #277, #287
      onValueChange(this.getValueObject(formattedValue, numAsString), { event: event, source: source });
    }
  };

  NumberFormat.prototype.onChange = function onChange (e                     ) {
    var el = e.target;
    var inputValue = el.value;
    var ref = this;
    var state = ref.state;
    var props = ref.props;
    var isAllowed = props.isAllowed;
    var lastValue = state.value || '';

    var currentCaretPosition = getCurrentCaretPosition(el);

    inputValue = this.correctInputValue(currentCaretPosition, lastValue, inputValue);

    var formattedValue = this.formatInput(inputValue) || '';
    var numAsString = this.removeFormatting(formattedValue);

    var valueObj = this.getValueObject(formattedValue, numAsString);
    var isChangeAllowed = isAllowed(valueObj);

    if (!isChangeAllowed) {
      formattedValue = lastValue;
    }

    this.updateValue({
      formattedValue: formattedValue,
      numAsString: numAsString,
      inputValue: inputValue,
      input: el,
      event: e,
      source: 'event',
    });

    if (isChangeAllowed) {
      props.onChange(e);
    }
  };

  NumberFormat.prototype.onBlur = function onBlur (e                     ) {
    var ref = this;
    var props = ref.props;
    var state = ref.state;
    var format = props.format;
    var onBlur = props.onBlur;
    var allowLeadingZeros = props.allowLeadingZeros;
    var numAsString = state.numAsString;
    var lastValue = state.value;
    this.focusedElm = null;

    clearTimeout(this.focusTimeout);
    clearTimeout(this.caretPositionTimeout);

    if (!format) {
      // if the numAsString is not a valid number reset it to empty
      if (isNaN(parseFloat(numAsString))) {
        numAsString = '';
      }

      if (!allowLeadingZeros) {
        numAsString = fixLeadingZero(numAsString);
      }

      var formattedValue = this.formatNumString(numAsString);

      //change the state
      if (formattedValue !== lastValue) {
        // the event needs to be persisted because its properties can be accessed in an asynchronous way
        this.updateValue({
          formattedValue: formattedValue,
          numAsString: numAsString,
          input: e.target,
          setCaretPosition: false,
          event: e,
          source: 'event',
        });
        onBlur(e);
        return;
      }
    }
    onBlur(e);
  };

  NumberFormat.prototype.onKeyDown = function onKeyDown (e                             ) {
    var el = e.target;
    var key = e.key;
    var selectionStart = el.selectionStart;
    var selectionEnd = el.selectionEnd;
    var value = el.value; if ( value === void 0 ) value = '';
    var expectedCaretPosition;
    var ref = this.props;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var format = ref.format;
    var onKeyDown = ref.onKeyDown;
    var ignoreDecimalSeparator = decimalScale !== undefined && fixedDecimalScale;
    var numRegex = this.getNumberRegex(false, ignoreDecimalSeparator);
    var negativeRegex = new RegExp('-');
    var isPatternFormat = typeof format === 'string';

    this.selectionBeforeInput = {
      selectionStart: selectionStart,
      selectionEnd: selectionEnd,
    };

    //Handle backspace and delete against non numerical/decimal characters or arrow keys
    if (key === 'ArrowLeft' || key === 'Backspace') {
      expectedCaretPosition = selectionStart - 1;
    } else if (key === 'ArrowRight') {
      expectedCaretPosition = selectionStart + 1;
    } else if (key === 'Delete') {
      expectedCaretPosition = selectionStart;
    }

    //if expectedCaretPosition is not set it means we don't want to Handle keyDown
    //also if multiple characters are selected don't handle
    if (expectedCaretPosition === undefined || selectionStart !== selectionEnd) {
      onKeyDown(e);
      return;
    }

    var newCaretPosition = expectedCaretPosition;
    var leftBound = isPatternFormat ? format.indexOf('#') : prefix.length;
    var rightBound = isPatternFormat ? format.lastIndexOf('#') + 1 : value.length - suffix.length;

    if (key === 'ArrowLeft' || key === 'ArrowRight') {
      var direction = key === 'ArrowLeft' ? 'left' : 'right';
      newCaretPosition = this.correctCaretPosition(value, expectedCaretPosition, direction);
    } else if (
      key === 'Delete' &&
      !numRegex.test(value[expectedCaretPosition]) &&
      !negativeRegex.test(value[expectedCaretPosition])
    ) {
      while (!numRegex.test(value[newCaretPosition]) && newCaretPosition < rightBound) {
        newCaretPosition++;
      }
    } else if (key === 'Backspace' && !numRegex.test(value[expectedCaretPosition])) {
      /* NOTE: This is special case when backspace is pressed on a
      negative value while the cursor position is after prefix. We can't handle it on onChange because
      we will not have any information of keyPress
      */
      if (selectionStart <= leftBound + 1 && value[0] === '-' && typeof format === 'undefined') {
        var newValue = value.substring(1);
        this.updateValue({
          formattedValue: newValue,
          caretPos: newCaretPosition,
          input: el,
          event: e,
          source: 'event',
        });
      } else if (!negativeRegex.test(value[expectedCaretPosition])) {
        while (!numRegex.test(value[newCaretPosition - 1]) && newCaretPosition > leftBound) {
          newCaretPosition--;
        }
        newCaretPosition = this.correctCaretPosition(value, newCaretPosition, 'left');
      }
    }

    if (
      newCaretPosition !== expectedCaretPosition ||
      expectedCaretPosition < leftBound ||
      expectedCaretPosition > rightBound
    ) {
      e.preventDefault();
      this.setPatchedCaretPosition(el, newCaretPosition, value);
    }

    /* NOTE: this is just required for unit test as we need to get the newCaretPosition,
            Remove this when you find different solution */
    if (e.isUnitTestRun) {
      this.setPatchedCaretPosition(el, newCaretPosition, value);
    }

    onKeyDown(e);
  };

  /** required to handle the caret position when click anywhere within the input **/
  NumberFormat.prototype.onMouseUp = function onMouseUp (e                          ) {
    var el = e.target;

    /**
     * NOTE: we have to give default value for value as in case when custom input is provided
     * value can come as undefined when nothing is provided on value prop.
     */
    var selectionStart = el.selectionStart;
    var selectionEnd = el.selectionEnd;
    var value = el.value; if ( value === void 0 ) value = '';

    if (selectionStart === selectionEnd) {
      var caretPosition = this.correctCaretPosition(value, selectionStart);
      if (caretPosition !== selectionStart) {
        this.setPatchedCaretPosition(el, caretPosition, value);
      }
    }

    this.props.onMouseUp(e);
  };

  NumberFormat.prototype.onFocus = function onFocus (e                     ) {
    var this$1 = this;

    // Workaround Chrome and Safari bug https://bugs.chromium.org/p/chromium/issues/detail?id=779328
    // (onFocus event target selectionStart is always 0 before setTimeout)
    e.persist();

    this.focusedElm = e.target;
    this.focusTimeout = setTimeout(function () {
      var el = e.target;
      var selectionStart = el.selectionStart;
      var selectionEnd = el.selectionEnd;
      var value = el.value; if ( value === void 0 ) value = '';

      var caretPosition = this$1.correctCaretPosition(value, selectionStart);

      //setPatchedCaretPosition only when everything is not selected on focus (while tabbing into the field)
      if (
        caretPosition !== selectionStart &&
        !(selectionStart === 0 && selectionEnd === value.length)
      ) {
        this$1.setPatchedCaretPosition(el, caretPosition, value);
      }

      this$1.props.onFocus(e);
    }, 0);
  };

  NumberFormat.prototype.render = function render () {
    var ref = this.props;
    var type = ref.type;
    var displayType = ref.displayType;
    var customInput = ref.customInput;
    var renderText = ref.renderText;
    var getInputRef = ref.getInputRef;
    var format = ref.format;
    var thousandSeparator = ref.thousandSeparator;
    var decimalSeparator = ref.decimalSeparator;
    var allowedDecimalSeparators = ref.allowedDecimalSeparators;
    var thousandsGroupStyle = ref.thousandsGroupStyle;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var removeFormatting = ref.removeFormatting;
    var mask = ref.mask;
    var defaultValue = ref.defaultValue;
    var isNumericString = ref.isNumericString;
    var allowNegative = ref.allowNegative;
    var allowEmptyFormatting = ref.allowEmptyFormatting;
    var allowLeadingZeros = ref.allowLeadingZeros;
    var onValueChange = ref.onValueChange;
    var isAllowed = ref.isAllowed;
    var customNumerals = ref.customNumerals;
    var onChange = ref.onChange;
    var onKeyDown = ref.onKeyDown;
    var onMouseUp = ref.onMouseUp;
    var onFocus = ref.onFocus;
    var onBlur = ref.onBlur;
    var propValue = ref.value;
    var rest = objectWithoutProperties( ref, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "thousandSeparator", "decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "decimalScale", "fixedDecimalScale", "prefix", "suffix", "removeFormatting", "mask", "defaultValue", "isNumericString", "allowNegative", "allowEmptyFormatting", "allowLeadingZeros", "onValueChange", "isAllowed", "customNumerals", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value"] );
    var otherProps = rest;
    var ref$1 = this.state;
    var value = ref$1.value;
    var mounted = ref$1.mounted;

    // add input mode on element based on format prop and device once the component is mounted
    var inputMode = mounted && addInputMode(format) ? 'numeric' : undefined;

    var inputProps = Object.assign({ inputMode: inputMode }, otherProps, {
      type: type,
      value: value,
      onChange: this.onChange,
      onKeyDown: this.onKeyDown,
      onMouseUp: this.onMouseUp,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
    });

    if (displayType === 'text') {
      return renderText ? (
        renderText(value, otherProps) || null
      ) : (
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement( 'span', Object.assign({}, otherProps, { ref: getInputRef }),
          value
        )
      );
    } else if (customInput) {
      var CustomInput = customInput;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement( CustomInput, Object.assign({}, inputProps, { ref: getInputRef }));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement( 'input', Object.assign({}, inputProps, { ref: getInputRef }));
  };

  return NumberFormat;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component)));

NumberFormat.defaultProps = defaultProps;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberFormat);


/***/ }),

/***/ "./node_modules/use-debounce/dist/index.module.js":
/*!********************************************************!*\
  !*** ./node_modules/use-debounce/dist/index.module.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDebounce: () => (/* binding */ o),
/* harmony export */   useDebouncedCallback: () => (/* binding */ c),
/* harmony export */   useThrottledCallback: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function c(e,u,c){var i=this,a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),v=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!0);d.current=e;var p="undefined"!=typeof window,w=!u&&0!==u&&p;if("function"!=typeof e)throw new TypeError("Expected a function");u=+u||0;var s=!!(c=c||{}).leading,x=!("trailing"in c)||!!c.trailing,h="maxWait"in c,y="debounceOnServer"in c&&!!c.debounceOnServer,F=h?Math.max(+c.maxWait||0,u):null;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){return g.current=!0,function(){g.current=!1}},[]);var A=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){var r=function(r){var n=l.current,t=v.current;return l.current=v.current=null,o.current=r,m.current=d.current.apply(t,n)},n=function(r,n){w&&cancelAnimationFrame(f.current),f.current=w?requestAnimationFrame(r):setTimeout(r,n)},t=function(r){if(!g.current)return!1;var n=r-a.current;return!a.current||n>=u||n<0||h&&r-o.current>=F},e=function(n){return f.current=null,x&&l.current?r(n):(l.current=v.current=null,m.current)},c=function r(){var c=Date.now();if(t(c))return e(c);if(g.current){var i=u-(c-a.current),f=h?Math.min(i,F-(c-o.current)):i;n(r,f)}},A=function(){if(p||y){var e=Date.now(),d=t(e);if(l.current=[].slice.call(arguments),v.current=i,a.current=e,d){if(!f.current&&g.current)return o.current=a.current,n(c,u),s?r(a.current):m.current;if(h)return n(c,u),r(a.current)}return f.current||n(c,u),m.current}};return A.cancel=function(){f.current&&(w?cancelAnimationFrame(f.current):clearTimeout(f.current)),o.current=0,l.current=a.current=v.current=f.current=null},A.isPending=function(){return!!f.current},A.flush=function(){return f.current?e(Date.now()):m.current},A},[s,h,u,F,x,w,p,y]);return A}function i(r,n){return r===n}function a(r,n){return n}function o(n,t,o){var f=o&&o.equalityFn||i,l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(a,n),v=l[0],m=l[1],d=c((0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(r){return m(r)},[m]),t,o),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(n);return f(g.current,n)||(d(n),g.current=n),[v,d]}function f(r,n,t){var e=void 0===t?{}:t,u=e.leading,i=e.trailing;return c(r,n,{maxWait:n,leading:void 0===u||u,trailing:void 0===i||i})}
//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@woocommerce/blocks-checkout":
/*!****************************************!*\
  !*** external ["wc","blocksCheckout"] ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wc"]["blocksCheckout"];

/***/ }),

/***/ "@woocommerce/blocks-components":
/*!******************************************!*\
  !*** external ["wc","blocksComponents"] ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wc"]["blocksComponents"];

/***/ }),

/***/ "@woocommerce/block-data":
/*!**************************************!*\
  !*** external ["wc","wcBlocksData"] ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wc"]["wcBlocksData"];

/***/ }),

/***/ "@woocommerce/blocks-registry":
/*!******************************************!*\
  !*** external ["wc","wcBlocksRegistry"] ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wc"]["wcBlocksRegistry"];

/***/ }),

/***/ "@woocommerce/settings":
/*!************************************!*\
  !*** external ["wc","wcSettings"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wc"]["wcSettings"];

/***/ }),

/***/ "@wordpress/a11y":
/*!******************************!*\
  !*** external ["wp","a11y"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["a11y"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/autop":
/*!*******************************!*\
  !*** external ["wp","autop"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["autop"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/data-controls":
/*!**************************************!*\
  !*** external ["wp","dataControls"] ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["dataControls"];

/***/ }),

/***/ "@wordpress/deprecated":
/*!************************************!*\
  !*** external ["wp","deprecated"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["deprecated"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/is-shallow-equal":
/*!****************************************!*\
  !*** external ["wp","isShallowEqual"] ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["isShallowEqual"];

/***/ }),

/***/ "@wordpress/keycodes":
/*!**********************************!*\
  !*** external ["wp","keycodes"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["keycodes"];

/***/ }),

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["notices"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["url"];

/***/ }),

/***/ "@wordpress/wordcount":
/*!***********************************!*\
  !*** external ["wp","wordcount"] ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["wordcount"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.mjs":
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"cqoc/checkout-order-summary-cart-items-block","version":"1.0.0","title":"CQOC Cart Summary","category":"woocommerce","parent":["woocommerce/checkout-order-summary-block"],"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"textdomain":"cqoc-checkout-order-summary-cart-items-block","editorScript":"file:./build/index.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkchange_quantity_on_checkout_woocommerce"] = self["webpackChunkchange_quantity_on_checkout_woocommerce"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map