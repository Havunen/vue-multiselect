/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ !function() {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = function(exports, definition) {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ !function() {
/******/ 	__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ }();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ !function() {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ }();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Multiselect: function() { return /* reexport */ Multiselect; },
  "default": function() { return /* reexport */ Multiselect; },
  multiselectMixin: function() { return /* reexport */ multiselectMixin; },
  pointerMixin: function() { return /* reexport */ pointerMixin; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/Multiselect.vue?vue&type=template&id=4cbadfac&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "div",
    {
      staticClass: "multiselect",
      class: {
        "multiselect--active": _vm.isOpen,
        "multiselect--disabled": _vm.disabled,
        "multiselect--above": _vm.isAbove,
        "multiselect--has-options-group": _vm.hasOptionGroup,
      },
      attrs: {
        tabindex: _vm.searchable ? -1 : _vm.tabindex,
        role: "combobox",
        "aria-owns": "listbox-" + _vm.id,
      },
      on: {
        focus: function ($event) {
          return _vm.activate()
        },
        blur: function ($event) {
          _vm.searchable ? false : _vm.deactivate()
        },
        keydown: [
          function ($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "down", 40, $event.key, [
                "Down",
                "ArrowDown",
              ])
            )
              return null
            if ($event.target !== $event.currentTarget) return null
            $event.preventDefault()
            return _vm.pointerForward()
          },
          function ($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])
            )
              return null
            if ($event.target !== $event.currentTarget) return null
            $event.preventDefault()
            return _vm.pointerBackward()
          },
        ],
        keypress: function ($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "enter", 13, $event.key, "Enter") &&
            _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")
          )
            return null
          $event.stopPropagation()
          if ($event.target !== $event.currentTarget) return null
          return _vm.addPointerElement($event)
        },
        keyup: function ($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
          )
            return null
          return _vm.deactivate()
        },
      },
    },
    [
      _vm._t(
        "caret",
        function () {
          return [
            _c("div", {
              staticClass: "multiselect__select",
              on: {
                mousedown: function ($event) {
                  $event.preventDefault()
                  $event.stopPropagation()
                  return _vm.toggle()
                },
              },
            }),
          ]
        },
        { toggle: _vm.toggle }
      ),
      _vm._v(" "),
      _vm._t("clear", null, { search: _vm.search }),
      _vm._v(" "),
      _c(
        "div",
        { ref: "tags", staticClass: "multiselect__tags" },
        [
          _vm._t(
            "selection",
            function () {
              return [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.visibleValues.length > 0,
                        expression: "visibleValues.length > 0",
                      },
                    ],
                    staticClass: "multiselect__tags-wrap",
                  },
                  [
                    _vm._l(_vm.visibleValues, function (option, index) {
                      return [
                        _vm._t(
                          "tag",
                          function () {
                            return [
                              _c(
                                "span",
                                { key: index, staticClass: "multiselect__tag" },
                                [
                                  _c("span", {
                                    domProps: {
                                      textContent: _vm._s(
                                        _vm.getOptionLabel(option)
                                      ),
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("i", {
                                    staticClass: "multiselect__tag-icon",
                                    attrs: { tabindex: "1" },
                                    on: {
                                      keypress: function ($event) {
                                        if (
                                          !$event.type.indexOf("key") &&
                                          _vm._k(
                                            $event.keyCode,
                                            "enter",
                                            13,
                                            $event.key,
                                            "Enter"
                                          )
                                        )
                                          return null
                                        $event.preventDefault()
                                        return _vm.removeElement(option)
                                      },
                                      mousedown: function ($event) {
                                        $event.preventDefault()
                                        return _vm.removeElement(option)
                                      },
                                    },
                                  }),
                                ]
                              ),
                            ]
                          },
                          {
                            option: option,
                            search: _vm.search,
                            remove: _vm.removeElement,
                          }
                        ),
                      ]
                    }),
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.internalValue && _vm.internalValue.length > _vm.limit
                  ? [
                      _vm._t("limit", function () {
                        return [
                          _c("strong", {
                            staticClass: "multiselect__strong",
                            domProps: {
                              textContent: _vm._s(
                                _vm.limitText(
                                  _vm.internalValue.length - _vm.limit
                                )
                              ),
                            },
                          }),
                        ]
                      }),
                    ]
                  : _vm._e(),
              ]
            },
            {
              search: _vm.search,
              remove: _vm.removeElement,
              values: _vm.visibleValues,
              isOpen: _vm.isOpen,
            }
          ),
          _vm._v(" "),
          _c(
            "transition",
            { attrs: { name: "multiselect__loading" } },
            [
              _vm._t("loading", function () {
                return [
                  _c("div", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.loading,
                        expression: "loading",
                      },
                    ],
                    staticClass: "multiselect__spinner",
                  }),
                ]
              }),
            ],
            2
          ),
          _vm._v(" "),
          _vm.searchable
            ? _c("input", {
                ref: "search",
                staticClass: "multiselect__input",
                style: _vm.inputStyle,
                attrs: {
                  name: _vm.name,
                  id: _vm.id,
                  type: "text",
                  autocomplete: "off",
                  spellcheck: "false",
                  placeholder: _vm.placeholder,
                  disabled: _vm.disabled,
                  tabindex: _vm.tabindex,
                  "aria-controls": "listbox-" + _vm.id,
                },
                domProps: { value: _vm.search },
                on: {
                  input: function ($event) {
                    return _vm.updateSearch($event.target.value)
                  },
                  focus: function ($event) {
                    $event.preventDefault()
                    return _vm.activate()
                  },
                  blur: function ($event) {
                    $event.preventDefault()
                    return _vm.deactivate()
                  },
                  keyup: function ($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "esc", 27, $event.key, [
                        "Esc",
                        "Escape",
                      ])
                    )
                      return null
                    return _vm.deactivate()
                  },
                  keydown: [
                    function ($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "down", 40, $event.key, [
                          "Down",
                          "ArrowDown",
                        ])
                      )
                        return null
                      $event.preventDefault()
                      return _vm.pointerForward()
                    },
                    function ($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "up", 38, $event.key, [
                          "Up",
                          "ArrowUp",
                        ])
                      )
                        return null
                      $event.preventDefault()
                      return _vm.pointerBackward()
                    },
                    function ($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "delete", [8, 46], $event.key, [
                          "Backspace",
                          "Delete",
                          "Del",
                        ])
                      )
                        return null
                      $event.stopPropagation()
                      return _vm.removeLastElement()
                    },
                  ],
                  keypress: function ($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    )
                      return null
                    $event.preventDefault()
                    $event.stopPropagation()
                    if ($event.target !== $event.currentTarget) return null
                    return _vm.addPointerElement($event)
                  },
                },
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.isSingleLabelVisible
            ? _c(
                "span",
                {
                  staticClass: "multiselect__single",
                  on: {
                    mousedown: function ($event) {
                      $event.preventDefault()
                      return _vm.toggle.apply(null, arguments)
                    },
                  },
                },
                [
                  _vm._t(
                    "singleLabel",
                    function () {
                      return [[_vm._v(_vm._s(_vm.currentOptionLabel))]]
                    },
                    { option: _vm.singleValue }
                  ),
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.isPlaceholderVisible
            ? _c(
                "span",
                {
                  staticClass: "multiselect__placeholder",
                  on: {
                    mousedown: function ($event) {
                      $event.preventDefault()
                      return _vm.toggle.apply(null, arguments)
                    },
                  },
                },
                [
                  _vm._t("placeholder", function () {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.placeholder) + "\n        "
                      ),
                    ]
                  }),
                ],
                2
              )
            : _vm._e(),
        ],
        2
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "multiselect" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isOpen,
                expression: "isOpen",
              },
            ],
            ref: "list",
            staticClass: "multiselect__content-wrapper",
            style: { maxHeight: _vm.optimizedHeight + "px" },
            attrs: { tabindex: "-1" },
            on: {
              focus: _vm.activate,
              mousedown: function ($event) {
                $event.preventDefault()
              },
            },
          },
          [
            _c(
              "ul",
              {
                staticClass: "multiselect__content",
                style: _vm.contentStyle,
                attrs: { role: "listbox", id: "listbox-" + _vm.id },
              },
              [
                _vm._t("beforeList"),
                _vm._v(" "),
                _vm.multiple && _vm.max === _vm.internalValue.length
                  ? _c("li", [
                      _c(
                        "span",
                        { staticClass: "multiselect__option" },
                        [
                          _vm._t("maxElements", function () {
                            return [
                              _vm._v(
                                "Maximum of " +
                                  _vm._s(_vm.max) +
                                  " options selected. First remove a selected option to select another."
                              ),
                            ]
                          }),
                        ],
                        2
                      ),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.max || _vm.internalValue.length < _vm.max
                  ? _vm._l(_vm.filteredOptions, function (option, index) {
                      return _c(
                        "li",
                        {
                          key: index,
                          staticClass: "multiselect__element",
                          attrs: {
                            id: _vm.id + "-" + index,
                            role: !(
                              option &&
                              (option.$isLabel || option.$isDisabled)
                            )
                              ? "option"
                              : null,
                          },
                        },
                        [
                          !(option && (option.$isLabel || option.$isDisabled))
                            ? _c(
                                "span",
                                {
                                  staticClass: "multiselect__option",
                                  class: _vm.optionHighlight(index, option),
                                  attrs: {
                                    "data-select":
                                      option && option.isTag
                                        ? _vm.tagPlaceholder
                                        : _vm.selectLabelText,
                                    "data-selected": _vm.selectedLabelText,
                                    "data-deselect": _vm.deselectLabelText,
                                  },
                                  on: {
                                    click: function ($event) {
                                      $event.stopPropagation()
                                      return _vm.select(option)
                                    },
                                    mouseenter: function ($event) {
                                      if (
                                        $event.target !== $event.currentTarget
                                      )
                                        return null
                                      return _vm.pointerSet(index)
                                    },
                                  },
                                },
                                [
                                  _vm._t(
                                    "option",
                                    function () {
                                      return [
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(_vm.getOptionLabel(option))
                                          ),
                                        ]),
                                      ]
                                    },
                                    {
                                      option: option,
                                      search: _vm.search,
                                      index: index,
                                    }
                                  ),
                                ],
                                2
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          option && (option.$isLabel || option.$isDisabled)
                            ? _c(
                                "span",
                                {
                                  staticClass: "multiselect__option",
                                  class: _vm.groupHighlight(index, option),
                                  attrs: {
                                    "data-select":
                                      _vm.groupSelect &&
                                      _vm.selectGroupLabelText,
                                    "data-deselect":
                                      _vm.groupSelect &&
                                      _vm.deselectGroupLabelText,
                                  },
                                  on: {
                                    mouseenter: function ($event) {
                                      if (
                                        $event.target !== $event.currentTarget
                                      )
                                        return null
                                      _vm.groupSelect && _vm.pointerSet(index)
                                    },
                                    mousedown: function ($event) {
                                      $event.preventDefault()
                                      return _vm.selectGroup(option)
                                    },
                                  },
                                },
                                [
                                  _vm._t(
                                    "option",
                                    function () {
                                      return [
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(_vm.getOptionLabel(option))
                                          ),
                                        ]),
                                      ]
                                    },
                                    {
                                      option: option,
                                      search: _vm.search,
                                      index: index,
                                    }
                                  ),
                                ],
                                2
                              )
                            : _vm._e(),
                        ]
                      )
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          _vm.showNoResults &&
                          _vm.filteredOptions.length === 0 &&
                          _vm.search &&
                          !_vm.loading,
                        expression:
                          "showNoResults && (filteredOptions.length === 0 && search && !loading)",
                      },
                    ],
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "multiselect__option" },
                      [
                        _vm._t(
                          "noResult",
                          function () {
                            return [
                              _vm._v(
                                "No elements found. Consider changing the search query."
                              ),
                            ]
                          },
                          { search: _vm.search }
                        ),
                      ],
                      2
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          _vm.showNoOptions &&
                          (_vm.options.length === 0 ||
                            (_vm.hasOptionGroup === true &&
                              _vm.filteredOptions.length === 0)) &&
                          !_vm.search &&
                          !_vm.loading,
                        expression:
                          "showNoOptions && ((options.length === 0 || (hasOptionGroup === true && filteredOptions.length === 0)) && !search && !loading)",
                      },
                    ],
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "multiselect__option" },
                      [
                        _vm._t("noOptions", function () {
                          return [_vm._v("List is empty.")]
                        }),
                      ],
                      2
                    ),
                  ]
                ),
                _vm._v(" "),
                _vm._t("afterList"),
              ],
              2
            ),
          ]
        ),
      ]),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/Multiselect.vue?vue&type=template&id=4cbadfac&

;// CONCATENATED MODULE: ./src/multiselectMixin.js
function isEmpty (opt) {
  if (opt === 0) return false
  if (Array.isArray(opt) && opt.length === 0) return true
  return !opt
}

function not (fun) {
  return (...params) => !fun(...params)
}

function includes (str, query) {
  /* istanbul ignore else */
  if (str === undefined) str = 'undefined'
  if (str === null) str = 'null'
  if (str === false) str = 'false'
  const text = str.toString().toLowerCase()
  return text.indexOf(query.trim()) !== -1
}

function filterOptions (options, search, label, customLabel) {
  return options.filter(option => includes(customLabel(option, label), search))
}

function stripGroups (options) {
  return options.filter(option => !option.$isLabel)
}

function flattenOptions (values, label) {
  return (options) =>
    options.reduce((prev, curr) => {
      /* istanbul ignore else */
      if (curr[values] && curr[values].length) {
        prev.push({
          $groupLabel: curr[label],
          $isLabel: true
        })
        return prev.concat(curr[values])
      }
      return prev
    }, [])
}

function filterGroups (search, label, values, groupLabel, customLabel) {
  return (groups) =>
    groups.map(group => {
      /* istanbul ignore else */
      if (!group[values]) {
        console.warn('Options passed to vue-multiselect do not contain groups, despite the config.')
        return []
      }
      const groupOptions = filterOptions(group[values], search, label, customLabel)

      return groupOptions.length
        ? {
            [groupLabel]: group[groupLabel],
            [values]: groupOptions
          }
        : []
    })
}

const flow = (...fns) => x => fns.reduce((v, f) => f(v), x)

/* harmony default export */ var multiselectMixin = ({
  data () {
    return {
      search: '',
      isOpen: false,
      preferredOpenDirection: 'below',
      optimizedHeight: this.maxHeight
    }
  },
  props: {
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
      type: Boolean,
      default: true
    },
    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
      type: Array,
      required: true
    },
    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
      default: false
    },
    /**
     * Presets the selected options value.
     * @type {Object||Array||String||Integer}
     */
    value: {
      type: null,
      default () {
        return []
      }
    },
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
      type: String
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String
    },
    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
      type: Boolean,
      default: true
    },
    /**
     * Clear the search input after `)
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
      type: Boolean,
      default: false
    },
    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
      type: String,
      default: 'Select option'
    },
    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
      type: Boolean,
      default: true
    },
    /**
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
      type: Boolean,
      default: false
    },
    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
      type: Function,
      default (option, label) {
        if (isEmpty(option)) return ''
        return label ? option[label] : option
      }
    },
    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
      type: Boolean,
      default: false
    },
    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
    */
    tagPlaceholder: {
      type: String,
      default: 'Press enter to create a tag'
    },
    /**
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
    */
    tagPosition: {
      type: String,
      default: 'top'
    },
    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
    */
    max: {
      type: [Number, Boolean],
      default: false
    },
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
    */
    id: {
      default: null
    },
    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
    */
    optionsLimit: {
      type: Number,
      default: 1000
    },
    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
    */
    groupValues: {
      type: String
    },
    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
    */
    groupLabel: {
      type: String
    },
    /**
     * Allow to select all group values
     * by selecting the group label
     * @default false
     * @type {Boolean}
     */
    groupSelect: {
      type: Boolean,
      default: false
    },
    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
    */
    blockKeys: {
      type: Array,
      default () {
        return []
      }
    },
    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
    */
    preserveSearch: {
      type: Boolean,
      default: false
    },
    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
    */
    preselectFirst: {
      type: Boolean,
      default: false
    },
    /**
     * Prevent autofocus
     * @default false
     * @type {Boolean}
    */
    preventAutofocus: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    /* istanbul ignore else */
    if (!this.multiple && this.max) {
      console.warn('[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.')
    }
    if (
      this.preselectFirst &&
      !this.internalValue.length &&
      this.options.length
    ) {
      this.select(this.filteredOptions[0])
    }
  },
  computed: {
    internalValue () {
      return this.value || this.value === 0
        ? Array.isArray(this.value) ? this.value : [this.value]
        : []
    },
    filteredOptions () {
      const search = this.search || ''
      const normalizedSearch = search.toLowerCase().trim()

      let options = this.options.concat()

      /* istanbul ignore else */
      if (this.internalSearch) {
        options = this.groupValues
          ? this.filterAndFlat(options, normalizedSearch, this.label)
          : filterOptions(options, normalizedSearch, this.label, this.customLabel)
      } else {
        options = this.groupValues ? flattenOptions(this.groupValues, this.groupLabel)(options) : options
      }

      options = this.hideSelected
        ? options.filter(not(this.isSelected))
        : options

      /* istanbul ignore else */
      if (this.taggable && normalizedSearch.length && !this.isExistingOption(normalizedSearch)) {
        if (this.tagPosition === 'bottom') {
          options.push({ isTag: true, label: search })
        } else {
          options.unshift({ isTag: true, label: search })
        }
      }

      return options.slice(0, this.optionsLimit)
    },
    valueKeys () {
      if (this.trackBy) {
        return this.internalValue.map(element => element[this.trackBy])
      } else {
        return this.internalValue
      }
    },
    optionKeys () {
      const options = this.groupValues ? this.flatAndStrip(this.options) : this.options
      return options.map(element => this.customLabel(element, this.label).toString().toLowerCase())
    },
    currentOptionLabel () {
      return this.multiple
        ? this.searchable ? '' : this.placeholder
        : this.internalValue.length
          ? this.getOptionLabel(this.internalValue[0])
          : this.searchable ? '' : this.placeholder
    }
  },
  watch: {
    internalValue () {
      /* istanbul ignore else */
      if (this.resetAfter && this.internalValue.length) {
        this.search = ''
        this.$emit('input', this.multiple ? [] : null)
      }
    },
    search () {
      this.$emit('search-change', this.search, this.id)
    }
  },
  methods: {
    /**
     * Returns the internalValue in a way it can be emited to the parent
     * @returns {Object||Array||String||Integer}
     */
    getValue () {
      return this.multiple
        ? this.internalValue
        : this.internalValue.length === 0
          ? null
          : this.internalValue[0]
    },
    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @returns {Array} returns a filtered and flat options list
     */
    filterAndFlat (options, search, label) {
      return flow(
        filterGroups(search, label, this.groupValues, this.groupLabel, this.customLabel),
        flattenOptions(this.groupValues, this.groupLabel)
      )(options)
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @returns {Array} returns a flat options list without group labels
     */
    flatAndStrip (options) {
      return flow(
        flattenOptions(this.groupValues, this.groupLabel),
        stripGroups
      )(options)
    },
    /**
     * Updates the search value
     * @param  {String}
     */
    updateSearch (query) {
      this.search = query
    },
    /**
     * Finds out if the given query is already present
     * in the available options
     * @param  {String}
     * @returns {Boolean} returns true if element is available
     */
    isExistingOption (query) {
      return !this.options
        ? false
        : this.optionKeys.indexOf(query) > -1
    },
    /**
     * Finds out if the given element is already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is selected
     */
    isSelected (option) {
      const opt = this.trackBy
        ? option[this.trackBy]
        : option
      return this.valueKeys.indexOf(opt) > -1
    },
    /**
     * Finds out if the given option is disabled
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is disabled
     */
    isOptionDisabled (option) {
      return !!option.$isDisabled
    },
    /**
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    getOptionLabel (option) {
      if (isEmpty(option)) return ''
      /* istanbul ignore else */
      if (option.isTag) return option.label
      /* istanbul ignore else */
      if (option.$isLabel) return option.$groupLabel

      const label = this.customLabel(option, this.label)
      /* istanbul ignore else */
      if (isEmpty(label)) return ''
      return label
    },
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select (option, key) {
      /* istanbul ignore else */
      if (option.$isLabel && this.groupSelect) {
        this.selectGroup(option)
        return
      }
      if (this.blockKeys.indexOf(key) !== -1 ||
        this.disabled ||
        option.$isDisabled ||
        option.$isLabel
      ) return
      /* istanbul ignore else */
      if (this.max && this.multiple && this.internalValue.length === this.max) return
      /* istanbul ignore else */
      if (key === 'Tab' && !this.pointerDirty) return
      if (option.isTag) {
        this.$emit('tag', option.label, this.id)
        this.search = ''
        if (this.closeOnSelect && !this.multiple) this.deactivate()
      } else {
        const isSelected = this.isSelected(option)

        if (isSelected) {
          if (key !== 'Tab') this.removeElement(option)
          return
        }

        if (this.multiple) {
          this.$emit('input', this.internalValue.concat([option]), this.id)
        } else {
          this.$emit('input', option, this.id)
        }

        this.$emit('select', option, this.id)

        /* istanbul ignore else */
        if (this.clearOnSelect) this.search = ''
      }
      /* istanbul ignore else */
      if (this.closeOnSelect) this.deactivate()
    },
    /**
     * Add the given group options to the list of selected options
     * If all group optiona are already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} group to select/deselect
     */
    selectGroup (selectedGroup) {
      const group = this.options.find(option => {
        return option[this.groupLabel] === selectedGroup.$groupLabel
      })

      if (!group) return

      if (this.wholeGroupSelected(group)) {
        this.$emit('remove', group[this.groupValues], this.id)

        const newValue = this.internalValue.filter(
          option => group[this.groupValues].indexOf(option) === -1
        )

        this.$emit('input', newValue, this.id)
      } else {
        const optionsToAdd = group[this.groupValues].filter(
          option => !(this.isOptionDisabled(option) || this.isSelected(option))
        )

        // if max is defined then just select options respecting max
        if (this.max) {
          optionsToAdd.splice(this.max - this.internalValue.length)
        }

        this.$emit('select', optionsToAdd, this.id)
        this.$emit(
          'input',
          this.internalValue.concat(optionsToAdd),
          this.id
        )
      }

      if (this.closeOnSelect) this.deactivate()
    },
    /**
     * Helper to identify if all values in a group are selected
     *
     * @param {Object} group to validated selected values against
     */
    wholeGroupSelected (group) {
      return group[this.groupValues].every(option => this.isSelected(option) || this.isOptionDisabled(option)
      )
    },
    /**
     * Helper to identify if all values in a group are disabled
     *
     * @param {Object} group to check for disabled values
     */
    wholeGroupDisabled (group) {
      return group[this.groupValues].every(this.isOptionDisabled)
    },
    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @returns {type}        description
     */
    removeElement (option, shouldClose = true) {
      /* istanbul ignore else */
      if (this.disabled) return
      /* istanbul ignore else */
      if (option.$isDisabled) return
      /* istanbul ignore else */
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate()
        return
      }

      const index = typeof option === 'object'
        ? this.valueKeys.indexOf(option[this.trackBy])
        : this.valueKeys.indexOf(option)

      if (this.multiple) {
        const newValue = this.internalValue.slice(0, index).concat(this.internalValue.slice(index + 1))
        this.$emit('input', newValue, this.id)
      } else {
        this.$emit('input', null, this.id)
      }
      this.$emit('remove', option, this.id)

      /* istanbul ignore else */
      if (this.closeOnSelect && shouldClose) this.deactivate()
    },
    /**
     * Calls this.removeElement() with the last element
     * from this.internalValue (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement () {
      /* istanbul ignore else */
      if (this.blockKeys.indexOf('Delete') !== -1) return
      /* istanbul ignore else */
      if (this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length) {
        this.removeElement(this.internalValue[this.internalValue.length - 1], false)
      }
    },
    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate () {
      /* istanbul ignore else */
      if (this.isOpen || this.disabled) return

      this.adjustPosition()
      /* istanbul ignore else  */
      if (this.groupValues && this.pointer === 0 && this.filteredOptions.length) {
        this.pointer = 1
      }

      this.isOpen = true
      /* istanbul ignore else  */
      if (this.searchable) {
        if (!this.preserveSearch) this.search = ''
        if (!this.preventAutofocus) this.$nextTick(() => this.$refs.search && this.$refs.search.focus())
      } else if (!this.preventAutofocus) {
        if (typeof this.$el !== 'undefined') this.$el.focus()
      }
      this.$emit('open', this.id)
    },
    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate () {
      /* istanbul ignore else */
      if (!this.isOpen) return

      this.isOpen = false
      /* istanbul ignore else  */
      if (this.searchable) {
        if (typeof this.$refs.search !== 'undefined') this.$refs.search.blur()
      } else {
        if (typeof this.$el !== 'undefined') this.$el.blur()
      }
      if (!this.preserveSearch) this.search = ''
      this.$emit('close', this.getValue(), this.id)
    },
    /**
     * Call this.activate() or this.deactivate()
     * depending on this.isOpen value.
     *
     * @fires this#activate || this#deactivate
     * @property {Boolean} isOpen indicates if dropdown is open
     */
    toggle () {
      this.isOpen
        ? this.deactivate()
        : this.activate()
    },
    /**
     * Updates the hasEnoughSpace variable used for
     * detecting where to expand the dropdown
     */
    adjustPosition () {
      if (typeof window === 'undefined') return

      const spaceAbove = this.$el.getBoundingClientRect().top
      const spaceBelow = window.innerHeight - this.$el.getBoundingClientRect().bottom
      const hasEnoughSpaceBelow = spaceBelow > this.maxHeight

      if (hasEnoughSpaceBelow || spaceBelow > spaceAbove || this.openDirection === 'below' || this.openDirection === 'bottom') {
        this.preferredOpenDirection = 'below'
        this.optimizedHeight = Math.min(spaceBelow - 40, this.maxHeight)
      } else {
        this.preferredOpenDirection = 'above'
        this.optimizedHeight = Math.min(spaceAbove - 40, this.maxHeight)
      }
    }
  }
});

;// CONCATENATED MODULE: ./src/pointerMixin.js
/* harmony default export */ var pointerMixin = ({
  data () {
    return {
      pointer: 0,
      pointerDirty: false
    }
  },
  props: {
    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
      type: Boolean,
      default: true
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition () {
      return this.pointer * this.optionHeight
    },
    visibleElements () {
      return this.optimizedHeight / this.optionHeight
    }
  },
  watch: {
    filteredOptions () {
      this.pointerAdjust()
    },
    isOpen () {
      this.pointerDirty = false
    },
    pointer () {
      this.$refs.search && this.$refs.search.setAttribute('aria-activedescendant', this.id + '-' + this.pointer.toString())
    }
  },
  methods: {
    optionHighlight (index, option) {
      return {
        'multiselect__option--highlight': index === this.pointer && this.showPointer,
        'multiselect__option--selected': this.isSelected(option)
      }
    },
    groupHighlight (index, selectedGroup) {
      if (!this.groupSelect) {
        return [
          'multiselect__option--disabled',
          { 'multiselect__option--group': selectedGroup.$isLabel }
        ]
      }

      const group = this.options.find(option => {
        return option[this.groupLabel] === selectedGroup.$groupLabel
      })

      return group && !this.wholeGroupDisabled(group)
        ? [
            'multiselect__option--group',
            { 'multiselect__option--highlight': index === this.pointer && this.showPointer },
            { 'multiselect__option--group-selected': this.wholeGroupSelected(group) }
          ]
        : 'multiselect__option--disabled'
    },
    addPointerElement ({ key } = 'Enter') {
      /* istanbul ignore else */
      if (this.filteredOptions.length > 0) {
        this.select(this.filteredOptions[this.pointer], key)
      }
      this.pointerReset()
    },
    pointerForward () {
      /* istanbul ignore else */
      if (this.pointer < this.filteredOptions.length - 1) {
        this.pointer++
        /* istanbul ignore next */
        if (this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight) {
          this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight
        }
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[this.pointer].$isLabel &&
          !this.groupSelect
        ) this.pointerForward()
      }
      this.pointerDirty = true
    },
    pointerBackward () {
      if (this.pointer > 0) {
        this.pointer--
        /* istanbul ignore else */
        if (this.$refs.list.scrollTop >= this.pointerPosition) {
          this.$refs.list.scrollTop = this.pointerPosition
        }
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[this.pointer].$isLabel &&
          !this.groupSelect
        ) this.pointerBackward()
      } else {
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[0].$isLabel &&
          !this.groupSelect
        ) this.pointerForward()
      }
      this.pointerDirty = true
    },
    pointerReset () {
      /* istanbul ignore else */
      if (!this.closeOnSelect) return
      this.pointer = 0
      /* istanbul ignore else */
      if (this.$refs.list) {
        this.$refs.list.scrollTop = 0
      }
    },
    pointerAdjust () {
      /* istanbul ignore else */
      if (this.pointer >= this.filteredOptions.length - 1) {
        this.pointer = this.filteredOptions.length
          ? this.filteredOptions.length - 1
          : 0
      }

      if (this.filteredOptions.length > 0 &&
        this.filteredOptions[this.pointer].$isLabel &&
        !this.groupSelect
      ) {
        this.pointerForward()
      }
    },
    pointerSet (index) {
      this.pointer = index
      this.pointerDirty = true
    }
  }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/Multiselect.vue?vue&type=script&lang=js&




/* harmony default export */ var Multiselectvue_type_script_lang_js_ = ({
  name: 'vue-multiselect',
  mixins: [multiselectMixin, pointerMixin],
  props: {
    /**
     * name attribute to match optional label element
     * @default ''
     * @type {String}
     */
    name: {
      type: String,
      default: ''
    },
    /**
     * String to show when pointing to an option
     * @default 'Press enter to select'
     * @type {String}
     */
    selectLabel: {
      type: String,
      default: 'Press enter to select'
    },
    /**
     * String to show when pointing to an option
     * @default 'Press enter to select'
     * @type {String}
     */
    selectGroupLabel: {
      type: String,
      default: 'Press enter to select group'
    },
    /**
     * String to show next to selected option
     * @default 'Selected'
     * @type {String}
     */
    selectedLabel: {
      type: String,
      default: 'Selected'
    },
    /**
     * String to show when pointing to an already selected option
     * @default 'Press enter to remove'
     * @type {String}
     */
    deselectLabel: {
      type: String,
      default: 'Press enter to remove'
    },
    /**
     * String to show when pointing to an already selected option
     * @default 'Press enter to remove'
     * @type {String}
     */
    deselectGroupLabel: {
      type: String,
      default: 'Press enter to deselect group'
    },
    /**
     * Decide whether to show pointer labels
     * @default true
     * @type {Boolean}
     */
    showLabels: {
      type: Boolean,
      default: true
    },
    /**
     * Limit the display of selected options. The rest will be hidden within the limitText string.
     * @default 99999
     * @type {Integer}
     */
    limit: {
      type: Number,
      default: 99999
    },
    /**
     * Sets maxHeight style value of the dropdown
     * @default 300
     * @type {Integer}
     */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
     * Function that process the message shown when selected
     * elements pass the defined limit.
     * @default 'and * more'
     * @param {Int} count Number of elements more than limit
     * @type {Function}
     */
    limitText: {
      type: Function,
      default: count => `and ${count} more`
    },
    /**
     * Set true to trigger the loading spinner.
     * @default False
     * @type {Boolean}
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * Disables the multiselect if true.
     * @default false
     * @type {Boolean}
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Fixed opening direction
     * @default ''
     * @type {String}
     */
    openDirection: {
      type: String,
      default: ''
    },
    /**
     * Shows slot with message about empty options
     * @default true
     * @type {Boolean}
     */
    showNoOptions: {
      type: Boolean,
      default: true
    },
    showNoResults: {
      type: Boolean,
      default: true
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    hasOptionGroup () {
      return this.groupValues && this.groupLabel && this.groupSelect
    },
    isSingleLabelVisible () {
      return (
        (this.singleValue || this.singleValue === 0) &&
        (!this.isOpen || !this.searchable) &&
        !this.visibleValues.length
      )
    },
    isPlaceholderVisible () {
      return !this.internalValue.length && (!this.searchable || !this.isOpen)
    },
    visibleValues () {
      return this.multiple ? this.internalValue.slice(0, this.limit) : []
    },
    singleValue () {
      return this.internalValue[0]
    },
    deselectLabelText () {
      return this.showLabels ? this.deselectLabel : ''
    },
    deselectGroupLabelText () {
      return this.showLabels ? this.deselectGroupLabel : ''
    },
    selectLabelText () {
      return this.showLabels ? this.selectLabel : ''
    },
    selectGroupLabelText () {
      return this.showLabels ? this.selectGroupLabel : ''
    },
    selectedLabelText () {
      return this.showLabels ? this.selectedLabel : ''
    },
    inputStyle () {
      if (
        this.searchable ||
        (this.multiple && this.value && this.value.length)
      ) {
        // Hide input by setting the width to 0 allowing it to receive focus
        return this.isOpen
          ? { width: '100%' }
          : { width: '0', position: 'absolute', padding: '0' }
      }
      return ''
    },
    contentStyle () {
      return this.options.length
        ? { display: 'inline-block' }
        : { display: 'block' }
    },
    isAbove () {
      if (this.openDirection === 'above' || this.openDirection === 'top') {
        return true
      } else if (
        this.openDirection === 'below' ||
        this.openDirection === 'bottom'
      ) {
        return false
      } else {
        return this.preferredOpenDirection === 'above'
      }
    },
    showSearchInput () {
      return (
        this.searchable &&
        (this.hasSingleSelectedSlot &&
        (this.visibleSingleValue || this.visibleSingleValue === 0)
          ? this.isOpen
          : true)
      )
    }
  }
});

;// CONCATENATED MODULE: ./src/Multiselect.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Multiselectvue_type_script_lang_js_ = (Multiselectvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/Multiselect.vue



;


/* normalize component */

var component = normalizeComponent(
  src_Multiselectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Multiselect = (component.exports);
;// CONCATENATED MODULE: ./src/index.js






module.exports = __webpack_exports__;

//# sourceMappingURL=vue-multiselect.cjs.map