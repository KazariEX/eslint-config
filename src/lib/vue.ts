import { prefixary } from "../utils";
import recommended from "./recommended";
import standard from "./standard";
import stylistic from "./stylistic";

export default prefixary("vue", {
    // Priority A
    "no-arrow-functions-in-watch": "warn",
    "no-async-in-computed-properties": "warn",
    "no-child-content": "warn",
    "no-computed-properties-in-data": "warn",
    "no-deprecated-data-object-declaration": "warn",
    "no-deprecated-destroyed-lifecycle": "warn",
    "no-deprecated-dollar-listeners-api": "warn",
    "no-deprecated-dollar-scopedslots-api": "warn",
    "no-deprecated-events-api": "warn",
    "no-deprecated-filter": "warn",
    "no-deprecated-functional-template": "warn",
    "no-deprecated-html-element-is": "warn",
    "no-deprecated-inline-template": "warn",
    "no-deprecated-props-default-this": "warn",
    "no-deprecated-router-link-tag-prop": "warn",
    "no-deprecated-scope-attribute": "warn",
    "no-deprecated-slot-attribute": "warn",
    "no-deprecated-slot-scope-attribute": "warn",
    "no-deprecated-v-bind-sync": "warn",
    "no-deprecated-v-is": "warn",
    "no-deprecated-v-on-native-modifier": "warn",
    "no-deprecated-v-on-number-modifiers": "warn",
    "no-deprecated-vue-config-keycodes": "warn",
    "no-dupe-keys": "warn",
    "no-dupe-v-else-if": "warn",
    "no-duplicate-attributes": "warn",
    "no-export-in-script-setup": "warn",
    "no-expose-after-await": "warn",
    "no-lifecycle-after-await": "warn",
    "no-mutating-props": "warn",
    "no-parsing-error": "warn",
    "no-ref-as-operand": "warn",
    "no-reserved-component-names": "warn",
    "no-reserved-keys": "warn",
    "no-reserved-props": "warn",
    "no-shared-component-data": "warn",
    "no-side-effects-in-computed-properties": "warn",
    "no-template-key": "warn",
    "no-textarea-mustache": "warn",
    "no-unused-components": "warn",
    "no-unused-vars": "warn",
    "no-use-computed-property-like-method": "warn",
    "no-use-v-if-with-v-for": "warn",
    "no-useless-template-attributes": "warn",
    "no-v-for-template-key-on-child": "warn",
    "no-v-text-v-html-on-component": "warn",
    "no-watch-after-await": "warn",
    "prefer-import-from-vue": "warn",
    "require-component-is": "warn",
    "require-prop-type-constructor": "warn",
    "require-render-return": "warn",
    "require-slots-as-functions": "warn",
    "require-toggle-inside-transition": "warn",
    "require-valid-default-prop": "warn",
    "return-in-computed-property": "warn",
    "return-in-emits-validator": "warn",
    "use-v-on-exact": "warn",
    "valid-attribute-name": "warn",
    "valid-define-emits": "warn",
    "valid-define-props": "warn",
    "valid-next-tick": "warn",
    "valid-template-root": "warn",
    "valid-v-bind": "warn",
    "valid-v-cloak": "warn",
    "valid-v-else-if": "warn",
    "valid-v-else": "warn",
    "valid-v-html": "warn",
    "valid-v-if": "warn",
    "valid-v-memo": "warn",
    "valid-v-model": "warn",
    "valid-v-on": "warn",
    "valid-v-once": "warn",
    "valid-v-pre": "warn",
    "valid-v-show": "warn",
    "valid-v-slot": "warn",
    "valid-v-text": "warn",

    // Priority B
    "attribute-hyphenation": "warn",
    "component-definition-name-casing": ["warn", "kebab-case"],
    "first-attribute-linebreak": ["warn", {
        singleline: "beside",
        multiline: "below"
    }],
    "html-closing-bracket-newline": ["warn", {
        singleline: "never",
        multiline: "always"
    }],
    "html-end-tags": "warn",
    "html-indent": ["warn", 4],
    "html-quotes": ["warn", "double"],
    "html-self-closing": ["warn", {
        html: {
            void: "always",
            normal: "never",
            component: "always"
        },
        svg: "always",
        math: "always"
    }],
    "mustache-interpolation-spacing": ["warn", "always"],
    "no-multi-spaces": "warn",
    "no-spaces-around-equal-signs-in-attribute": "warn",
    "no-template-shadow": "warn",
    "one-component-per-file": "warn",
    "prop-name-casing": ["warn", "camelCase"],
    "require-prop-types": "warn",
    "v-bind-style": ["warn", "shorthand", {
        sameNameShorthand: "always"
    }],
    "v-on-event-hyphenation": ["warn", "always"],
    "v-on-style": ["warn", "shorthand"],
    "v-slot-style": ["warn", {
        atComponent: "v-slot",
        default: "shorthand",
        named: "shorthand"
    }],

    // Priority C
    "attributes-order": ["warn", {
        order: [
            "LIST_RENDERING",
            "CONDITIONALS",
            "RENDER_MODIFIERS",
            "OTHER_DIRECTIVES",
            "SLOT",
            "DEFINITION",
            "UNIQUE",
            "GLOBAL",
            ["ATTR_DYNAMIC", "ATTR_STATIC", "ATTR_SHORTHAND_BOOL"],
            "TWO_WAY_BINDING",
            "EVENTS",
            "CONTENT"
        ]
    }],
    "no-lone-template": "warn",
    "no-multiple-slot-args": "warn",
    "order-in-components": "warn",
    "this-in-template": ["warn", "never"],

    // Uncategorized
    "block-order": ["warn", {
        order: [
            "script",
            "template",
            "style"
        ]
    }],
    "block-tag-newline": ["warn", {
        singleline: "always",
        multiline: "always"
    }],
    "comma-dangle": ["warn", "never"],
    "component-api-style": ["warn", [
        "script-setup",
        "composition"
    ]],
    "component-name-in-template-casing": ["warn", "kebab-case", {
        registeredComponentsOnly: false
    }],
    "component-options-name-casing": ["warn", "PascalCase"],
    "custom-event-name-casing": ["warn", "camelCase"],
    "define-emits-declaration": ["warn", "type-literal"],
    "define-macros-order": ["warn", {
        order: [
            "defineOptions",
            "defineProps",
            "defineModel",
            "defineEmits",
            "defineSlots"
        ],
        defineExposeLast: true
    }],
    "define-props-declaration": ["warn", "type-based"],
    "html-comment-content-newline": ["warn", {
        singleline: "never",
        multiline: "always"
    }],
    "html-comment-content-spacing": ["warn", "always"],
    "html-comment-indent": ["warn", 4],
    "no-deprecated-model-definition": "warn",
    "no-duplicate-attr-inheritance": "warn",
    "no-empty-component-block": "warn",
    "no-multiple-objects-in-class": "warn",
    "no-potential-component-option-typo": ["warn", {
        presets: ["all"]
    }],
    "no-required-prop-with-default": ["warn", {
        autofix: true
    }],
    "no-static-inline-styles": "warn",
    "no-this-in-before-route-enter": "warn",
    "no-unused-refs": "warn",
    "no-unused-emit-declarations": "warn",
    "no-use-v-else-with-v-for": "warn",
    "no-useless-mustaches": ["warn", {
        ignoreIncludesComment: true,
        ignoreStringEscape: true
    }],
    "no-useless-v-bind": ["warn", {
        ignoreIncludesComment: true,
        ignoreStringEscape: true
    }],
    "padding-line-between-blocks": ["warn", "always"],
    "prefer-define-options": "warn",
    "prefer-prop-type-boolean-first": "warn",
    "prefer-separate-static-class": "warn",
    "prefer-true-attribute-shorthand": ["warn", "always"],
    "require-default-export": "warn",
    "require-direct-export": "warn",
    "require-emit-validator": "warn",
    "require-explicit-emits": "warn",
    "require-macro-variable-name": "warn",
    "require-typed-object-prop": "warn",
    "require-typed-ref": "warn",
    "valid-define-options": "warn",
    "v-for-delimiter-style": ["warn", "in"],

    // Extension
    ...Object.fromEntries([
        "no-constant-condition",
        "no-empty-pattern",
        "no-irregular-whitespace",
        "no-loss-of-precision",
        "no-sparse-arrays"
    ].map((rule) => [rule, recommended[rule]])),

    ...Object.fromEntries([
        "camelcase",
        "dot-notation",
        "eqeqeq",
        "no-console",
        "no-restricted-syntax",
        "no-useless-concat",
        "object-shorthand",
        "prefer-template"
    ].map((rule) => [rule, standard[rule]])),

    ...Object.fromEntries([
        "array-bracket-newline",
        "array-bracket-spacing",
        "array-element-newline",
        "arrow-spacing",
        "block-spacing",
        "brace-style",
        "comma-dangle",
        "comma-spacing",
        "comma-style",
        "dot-location",
        "key-spacing",
        "keyword-spacing",
        "max-len",
        "multiline-ternary",
        "no-extra-parens",
        "object-curly-newline",
        "object-curly-spacing",
        "object-property-newline",
        "operator-linebreak",
        "quote-props",
        "space-in-parens",
        "space-infix-ops",
        "space-unary-ops",
        "template-curly-spacing"
    ].map((rule) => [rule, stylistic[`style/${rule}`]])),

    // Conflict with Nuxt
    "no-undef-components": "off",
    "require-name-property": "off",

    // Have spacial cases
    "no-ref-object-reactivity-loss": "off",
    "no-root-v-if": "off",
    "no-setup-props-reactivity-loss": "off",
    "no-unused-properties": "off",

    // Lack of personalization
    "html-closing-bracket-spacing": "off",
    "script-indent": "off",

    // Should be delegated
    "no-restricted-block": "off",
    "no-restricted-call-after-await": "off",
    "no-restricted-class": "off",
    "no-restricted-component-names": "off",
    "no-restricted-component-options": "off",
    "no-restricted-custom-event": "off",
    "no-restricted-html-elements": "off",
    "no-restricted-props": "off",
    "no-restricted-static-attribute": "off",
    "no-restricted-v-bind": "off",
    "no-restricted-v-on": "off",

    // Should loose
    "block-lang": "off",
    "enforce-style-attribute": "off",
    "max-attributes-per-line": "off",
    "max-lines-per-block": "off",
    "max-props": "off",
    "max-template-depth": "off",
    "multi-word-component-names": "off",
    "multiline-html-element-content-newline": "off",
    "next-tick-style": "off",
    "new-line-between-multi-line-property": "off",
    "no-v-html": "off",
    "no-v-text": "off",
    "padding-line-between-tags": "off",
    "padding-lines-in-component-definition": "off",
    "require-default-prop": "off",
    "require-expose": "off",
    "require-prop-comment": "off",
    "require-v-for-key": "off",
    "singleline-html-element-content-newline": "off",
    "sort-keys": "off",
    "static-class-names-order": "off",
    "v-on-handler-style": "off",
    "valid-v-for": "off",

    // Too narrow
    "html-button-has-type": "off",
    "match-component-file-name": "off",
    "match-component-import-name": "off",
    "no-bare-strings-in-template": "off",
    "no-boolean-default": "off",
    "no-template-target-blank": "off",

    // TS instead of
    "no-undef-properties": "off",
    "no-unsupported-features": "off",

    // Useless in Vue 3
    "v-if-else-key": "off",
    "valid-v-is": "off"
});