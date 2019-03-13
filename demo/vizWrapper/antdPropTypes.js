module.exports = {
  "AffixProps": {
    "type": "object",
    "properties": {
      "offsetTop": {
        "type": "number"
      },
      "offset": {
        "type": "number"
      },
      "offsetBottom": {
        "type": "number"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(affixed?: boolean) => void"
      },
      "target": {
        "type": "string",
        "format": "Function",
        "description": "() => Window | HTMLElement | null"
      },
      "prefixCls": {
        "type": "string"
      }
    },
    "required": []
  },
  "AffixState": {
    "type": "object",
    "properties": {
      "affixStyle": {
        "type": "string",
        "oneOf": [
          {
            "type": "object",
            "properties": {},
            "format": "CSS"
          }
        ]
      },
      "placeholderStyle": {
        "type": "string",
        "oneOf": [
          {
            "type": "object",
            "properties": {},
            "format": "CSS"
          }
        ]
      }
    },
    "required": [
      "affixStyle",
      "placeholderStyle"
    ]
  },
  "AlertProps": {
    "type": "object",
    "properties": {
      "type": {
        "type": "string",
        "enum": [
          "success",
          "info",
          "warning",
          "error"
        ]
      },
      "closable": {
        "type": "boolean"
      },
      "closeText": {
        "type": "string",
        "format": "Element"
      },
      "message": {
        "type": "string",
        "format": "Element"
      },
      "description": {
        "type": "string",
        "format": "Element"
      },
      "onClose": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "showIcon": {
        "type": "boolean"
      },
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "banner": {
        "type": "boolean"
      }
    },
    "required": [
      "message"
    ]
  },
  "AnchorProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "children": {
        "type": "string",
        "format": "Element"
      },
      "offsetTop": {
        "type": "number"
      },
      "bounds": {
        "type": "number"
      },
      "affix": {
        "type": "boolean"
      },
      "showInkInFixed": {
        "type": "boolean"
      },
      "target": {
        "type": "string",
        "format": "Function",
        "description": "() => HTMLElement | Window"
      }
    },
    "required": []
  },
  "AnchorLinkProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "href": {
        "type": "string"
      },
      "title": {
        "type": "string",
        "format": "Element"
      },
      "children": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": [
      "href",
      "title"
    ]
  },
  "InputElementProps": {
    "type": "object",
    "properties": {
      "children": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": [
      "children"
    ]
  },
  "DataSourceItemObject": {
    "type": "object",
    "properties": {
      "value": {
        "type": "string"
      },
      "text": {
        "type": "string"
      }
    },
    "required": [
      "value",
      "text"
    ]
  },
  "InputProps": {
    "type": "object",
    "properties": {
      "placeholder": {
        "type": "string"
      },
      "type": {
        "type": "string"
      },
      "id": {
        "type": "string",
        "oneOf": [
          {
            "type": "number"
          },
          {
            "type": "string"
          }
        ]
      },
      "name": {
        "type": "string"
      },
      "size": {
        "type": "string",
        "enum": [
          "large",
          "default",
          "small"
        ]
      },
      "maxLength": {
        "type": "string"
      },
      "disabled": {
        "type": "boolean"
      },
      "readOnly": {
        "type": "boolean"
      },
      "addonBefore": {
        "type": "string",
        "format": "Element"
      },
      "addonAfter": {
        "type": "string",
        "format": "Element"
      },
      "onPressEnter": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "onKeyDown": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(value: string[]) => any"
      },
      "onClick": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "onFocus": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "onBlur": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "autoComplete": {
        "type": "string"
      },
      "prefix": {
        "type": "string",
        "format": "Element"
      },
      "suffix": {
        "type": "string",
        "format": "Element"
      },
      "spellCheck": {
        "type": "boolean"
      },
      "autoFocus": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "AutoCompleteProps": {
    "type": "object",
    "properties": {
      "value": {
        "type": "string",
        "oneOf": [
          {
            "type": "string"
          },
          null,
          {
            "type": "array"
          }
        ]
      },
      "defaultValue": {
        "type": "string",
        "oneOf": [
          {
            "type": "string"
          },
          null,
          {
            "type": "array"
          }
        ]
      },
      "dataSource": {
        "type": "array",
        "items": [
          {
            "type": "string",
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string"
                  },
                  "text": {
                    "type": "string"
                  }
                },
                "required": [
                  "value",
                  "text"
                ]
              }
            ]
          }
        ]
      },
      "optionLabelProp": {
        "type": "string"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(value: SelectValue) => void"
      },
      "onSelect": {
        "type": "string",
        "format": "Function",
        "description": "(value: SelectValue, option: Object) => any"
      },
      "children": {
        "type": "string",
        "oneOf": [
          {
            "type": "string",
            "format": "Element"
          },
          {
            "type": "string",
            "format": "Element"
          },
          {
            "type": "array",
            "items": [
              {
                "type": "string",
                "format": "Element"
              }
            ]
          }
        ]
      }
    },
    "required": [
      "dataSource"
    ]
  },
  "AvatarProps": {
    "type": "object",
    "properties": {
      "shape": {
        "type": "string",
        "enum": [
          "circle",
          "square"
        ]
      },
      "size": {
        "type": "string",
        "enum": [
          "large",
          "small",
          "default"
        ]
      },
      "src": {
        "type": "string"
      },
      "icon": {
        "type": "string"
      },
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "children": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": []
  },
  "AvatarState": {
    "type": "object",
    "properties": {
      "scale": {
        "type": "number"
      },
      "isImgExist": {
        "type": "boolean"
      }
    },
    "required": [
      "scale",
      "isImgExist"
    ]
  },
  "BackTopProps": {
    "type": "object",
    "properties": {
      "visibilityHeight": {
        "type": "number"
      },
      "onClick": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "target": {
        "type": "string",
        "format": "Function",
        "description": "() => HTMLElement | Window"
      },
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      }
    },
    "required": []
  },
  "ScrollNumberProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "count": {
        "type": "string",
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "number"
          }
        ]
      },
      "component": {
        "type": "string"
      },
      "onAnimated": {
        "type": "string",
        "format": "Function"
      },
      "title": {
        "type": "string",
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "number"
          }
        ]
      }
    },
    "required": []
  },
  "ScrollNumberState": {
    "type": "object",
    "properties": {
      "animateStarted": {
        "type": "boolean"
      },
      "count": {
        "type": "string",
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "number"
          }
        ]
      }
    },
    "required": []
  },
  "BadgeProps": {
    "type": "object",
    "properties": {
      "count": {
        "type": "string",
        "oneOf": [
          {
            "type": "number"
          },
          {
            "type": "string"
          }
        ]
      },
      "showZero": {
        "type": "boolean"
      },
      "overflowCount": {
        "type": "number"
      },
      "dot": {
        "type": "boolean"
      },
      "prefixCls": {
        "type": "string"
      },
      "scrollNumberPrefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "status": {
        "type": "string",
        "enum": [
          "success",
          "processing",
          "default",
          "error",
          "warning"
        ]
      },
      "text": {
        "type": "string"
      },
      "offset": {
        "type": "string",
        "allOf": [
          [
            "number | string",
            "number | string"
          ],
          {
            "number | string": {
              "type": "string",
              "oneOf": [
                {
                  "type": "number"
                },
                {
                  "type": "string"
                }
              ]
            }
          }
        ],
        "required": [
          "number | string",
          "number | string"
        ]
      }
    },
    "required": []
  },
  "Route": {
    "type": "object",
    "properties": {
      "path": {
        "type": "string"
      },
      "breadcrumbName": {
        "type": "string"
      }
    },
    "required": [
      "path",
      "breadcrumbName"
    ]
  },
  "BreadcrumbProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "routes": {
        "type": "array",
        "items": {
          "path": {
            "type": "string"
          },
          "breadcrumbName": {
            "type": "string"
          }
        }
      },
      "params": {
        "type": "string",
        "format": "Element"
      },
      "separator": {
        "type": "string",
        "format": "Element"
      },
      "itemRender": {
        "type": "string",
        "format": "Function",
        "description": "(route: any, params: any, routes: Array<any>, paths: Array<string>) => React.ReactNode"
      },
      "className": {
        "type": "string"
      }
    },
    "required": []
  },
  "BreadcrumbItemProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "separator": {
        "type": "string",
        "format": "Element"
      },
      "href": {
        "type": "string"
      }
    },
    "required": []
  },
  "ButtonGroupProps": {
    "type": "object",
    "properties": {
      "size": {
        "type": "string",
        "enum": [
          "small",
          "default",
          "large"
        ]
      },
      "className": {
        "type": "string"
      },
      "prefixCls": {
        "type": "string"
      }
    },
    "required": []
  },
  "ButtonProps": {
    "type": "object",
    "properties": {
      "type": {
        "type": "string",
        "enum": [
          "primary",
          "ghost",
          "dashed",
          "danger"
        ]
      },
      "htmlType": {
        "type": "string"
      },
      "icon": {
        "type": "string"
      },
      "shape": {
        "type": "string",
        "enum": [
          "circle",
          "circle-outline"
        ]
      },
      "size": {
        "type": "string",
        "enum": [
          "small",
          "default",
          "large"
        ]
      },
      "onClick": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "onMouseUp": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "onMouseDown": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "loading": {
        "type": "string",
        "oneOf": [
          {
            "type": "boolean"
          },
          {
            "type": "object",
            "properties": {
              "delay": {
                "type": "number"
              }
            },
            "required": []
          }
        ]
      }
    },
    "required": []
  },
  "HeaderProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "fullscreen": {
        "type": "boolean"
      },
      "yearSelectOffset": {
        "type": "number"
      },
      "yearSelectTotal": {
        "type": "number"
      },
      "type": {
        "type": "string"
      },
      "onValueChange": {
        "type": "string",
        "format": "Function",
        "description": "(value: moment.Moment) => void"
      },
      "onTypeChange": {
        "type": "string",
        "format": "Function",
        "description": "(type: string) => void"
      },
      "value": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": [
      "value"
    ]
  },
  "CalendarProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "value": {
        "type": "string",
        "format": "Moment"
      },
      "defaultValue": {
        "type": "string",
        "format": "Moment"
      },
      "mode": {
        "type": "string",
        "enum": [
          "month",
          "year"
        ]
      },
      "fullscreen": {
        "type": "boolean"
      },
      "dateCellRender": {
        "type": "string",
        "format": "Function",
        "description": "(date: moment.Moment) => React.ReactNode"
      },
      "monthCellRender": {
        "type": "string",
        "format": "Function",
        "description": "(date: moment.Moment) => React.ReactNode"
      },
      "dateFullCellRender": {
        "type": "string",
        "format": "Function",
        "description": "(date: moment.Moment) => React.ReactNode"
      },
      "monthFullCellRender": {
        "type": "string",
        "format": "Function",
        "description": "(date: moment.Moment) => React.ReactNode"
      },
      "onPanelChange": {
        "type": "string",
        "format": "Function",
        "description": "(date?: moment.Moment, mode?: CalendarMode) => void"
      },
      "onSelect": {
        "type": "string",
        "format": "Function",
        "description": "(date?: moment.Moment) => void"
      },
      "disabledDate": {
        "type": "string",
        "format": "Function",
        "description": "(current: moment.Moment) => boolean"
      }
    },
    "required": []
  },
  "CalendarState": {
    "type": "object",
    "properties": {
      "value": {
        "type": "string",
        "format": "Moment"
      },
      "mode": {
        "type": "string",
        "enum": [
          "month",
          "year"
        ]
      }
    },
    "required": [
      "value"
    ]
  },
  "CardGridProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      }
    },
    "required": []
  },
  "CardMetaProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "avatar": {
        "type": "string",
        "format": "Element"
      },
      "title": {
        "type": "string",
        "format": "Element"
      },
      "description": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": []
  },
  "CardTabListType": {
    "type": "object",
    "properties": {
      "key": {
        "type": "string"
      },
      "tab": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": [
      "key",
      "tab"
    ]
  },
  "CardProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "title": {
        "type": "string",
        "format": "Element"
      },
      "extra": {
        "type": "string",
        "format": "Element"
      },
      "bordered": {
        "type": "boolean"
      },
      "bodyStyle": {
        "type": "object",
        "properties": {},
        "format": "CSS"
      },
      "loading": {
        "type": "boolean"
      },
      "noHovering": {
        "type": "boolean"
      },
      "hoverable": {
        "type": "boolean"
      },
      "children": {
        "type": "string",
        "format": "Element"
      },
      "id": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "type": {
        "type": "string",
        "default": "inner"
      },
      "cover": {
        "type": "string",
        "format": "Element"
      },
      "actions": {
        "type": "array",
        "items": [
          {
            "type": "string",
            "format": "Element"
          }
        ]
      },
      "tabList": {
        "type": "array",
        "items": {
          "key": {
            "type": "string"
          },
          "tab": {
            "type": "string",
            "format": "Element"
          }
        }
      },
      "onTabChange": {
        "type": "string",
        "format": "Function",
        "description": "(key: string) => void"
      }
    },
    "required": []
  },
  "CarouselProps": {
    "type": "object",
    "properties": {
      "effect": {
        "type": "string",
        "enum": [
          "scrollx",
          "fade"
        ]
      },
      "dots": {
        "type": "boolean"
      },
      "vertical": {
        "type": "boolean"
      },
      "autoplay": {
        "type": "boolean"
      },
      "easing": {
        "type": "string"
      },
      "beforeChange": {
        "type": "string",
        "format": "Function",
        "description": "(from: number, to: number) => void"
      },
      "afterChange": {
        "type": "string",
        "format": "Function",
        "description": "(current: number) => void"
      },
      "prefixCls": {
        "type": "string"
      },
      "accessibility": {
        "type": "boolean"
      },
      "nextArrow": {
        "type": "string",
        "oneOf": [
          {
            "type": "string",
            "format": "Element"
          },
          {
            "type": "string",
            "format": "Element"
          }
        ]
      },
      "prevArrow": {
        "type": "string",
        "oneOf": [
          {
            "type": "string",
            "format": "Element"
          },
          {
            "type": "string",
            "format": "Element"
          }
        ]
      },
      "pauseOnHover": {
        "type": "boolean"
      },
      "className": {
        "type": "string"
      },
      "adaptiveHeight": {
        "type": "boolean"
      },
      "arrows": {
        "type": "boolean"
      },
      "autoplaySpeed": {
        "type": "number"
      },
      "centerMode": {
        "type": "boolean"
      },
      "centerPadding": {
        "type": "string",
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "string",
            "format": "Element"
          }
        ]
      },
      "cssEase": {
        "type": "string",
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "string",
            "format": "Element"
          }
        ]
      },
      "dotsClass": {
        "type": "string"
      },
      "draggable": {
        "type": "boolean"
      },
      "fade": {
        "type": "boolean"
      },
      "focusOnSelect": {
        "type": "boolean"
      },
      "infinite": {
        "type": "boolean"
      },
      "initialSlide": {
        "type": "number"
      },
      "lazyLoad": {
        "type": "boolean"
      },
      "rtl": {
        "type": "boolean"
      },
      "slide": {
        "type": "string"
      },
      "slidesToShow": {
        "type": "number"
      },
      "slidesToScroll": {
        "type": "number"
      },
      "speed": {
        "type": "number"
      },
      "swipe": {
        "type": "boolean"
      },
      "swipeToSlide": {
        "type": "boolean"
      },
      "touchMove": {
        "type": "boolean"
      },
      "touchThreshold": {
        "type": "number"
      },
      "variableWidth": {
        "type": "boolean"
      },
      "useCSS": {
        "type": "boolean"
      },
      "slickGoTo": {
        "type": "number"
      }
    },
    "required": []
  },
  "CascaderOptionType": {
    "type": "object",
    "properties": {
      "value": {
        "type": "string"
      },
      "label": {
        "type": "string",
        "format": "Element"
      },
      "disabled": {
        "type": "boolean"
      },
      "children": {
        "type": "array",
        "items": {
          "value": {
            "type": "string"
          },
          "label": {
            "type": "string",
            "format": "Element"
          },
          "disabled": {
            "type": "boolean"
          }
        }
      },
      "__IS_FILTERED_OPTION": {
        "type": "boolean"
      }
    },
    "required": [
      "value",
      "label"
    ]
  },
  "ShowSearchType": {
    "type": "object",
    "properties": {
      "filter": {
        "type": "string",
        "format": "Function",
        "description": "(inputValue: string, path: CascaderOptionType[]) => boolean"
      },
      "render": {
        "type": "string",
        "format": "Function",
        "description": "(inputValue: string, path: CascaderOptionType[], prefixCls: string | undefined) => React.ReactNode"
      },
      "sort": {
        "type": "string",
        "format": "Function",
        "description": "(a: CascaderOptionType[], b: CascaderOptionType[], inputValue: string) => number"
      },
      "matchInputWidth": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "CascaderProps": {
    "type": "object",
    "properties": {
      "options": {
        "type": "array",
        "items": {
          "value": {
            "type": "string"
          },
          "label": {
            "type": "string",
            "format": "Element"
          },
          "disabled": {
            "type": "boolean"
          },
          "children": {
            "type": "array",
            "items": {
              "value": {
                "type": "string"
              },
              "label": {
                "type": "string",
                "format": "Element"
              },
              "disabled": {
                "type": "boolean"
              }
            }
          },
          "__IS_FILTERED_OPTION": {
            "type": "boolean"
          }
        }
      },
      "defaultValue": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "value": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(value: string[], selectedOptions?: CascaderOptionType[]) => void"
      },
      "displayRender": {
        "type": "string",
        "format": "Function",
        "description": "(label: string[], selectedOptions?: CascaderOptionType[]) => React.ReactNode"
      },
      "className": {
        "type": "string"
      },
      "popupClassName": {
        "type": "string"
      },
      "popupPlacement": {
        "type": "string"
      },
      "placeholder": {
        "type": "string"
      },
      "size": {
        "type": "string"
      },
      "disabled": {
        "type": "boolean"
      },
      "allowClear": {
        "type": "boolean"
      },
      "showSearch": {
        "type": "string",
        "oneOf": [
          {
            "type": "boolean"
          },
          {
            "type": "object",
            "properties": {
              "filter": {
                "type": "string",
                "format": "Function",
                "description": "(inputValue: string, path: CascaderOptionType[]) => boolean"
              },
              "render": {
                "type": "string",
                "format": "Function",
                "description": "(inputValue: string, path: CascaderOptionType[], prefixCls: string | undefined) => React.ReactNode"
              },
              "sort": {
                "type": "string",
                "format": "Function",
                "description": "(a: CascaderOptionType[], b: CascaderOptionType[], inputValue: string) => number"
              },
              "matchInputWidth": {
                "type": "boolean"
              }
            },
            "required": []
          }
        ]
      },
      "notFoundContent": {
        "type": "string",
        "format": "Element"
      },
      "loadData": {
        "type": "string",
        "format": "Function",
        "description": "(selectedOptions?: CascaderOptionType[]) => void"
      },
      "expandTrigger": {
        "type": "string",
        "enum": [
          "click",
          "hover"
        ]
      },
      "changeOnSelect": {
        "type": "boolean"
      },
      "onPopupVisibleChange": {
        "type": "string",
        "format": "Function",
        "description": "(popupVisible: boolean) => void"
      },
      "prefixCls": {
        "type": "string"
      },
      "inputPrefixCls": {
        "type": "string"
      },
      "getPopupContainer": {
        "type": "string",
        "format": "Function",
        "description": "(triggerNode?: HTMLElement) => HTMLElement"
      },
      "popupVisible": {
        "type": "boolean"
      }
    },
    "required": [
      "options"
    ]
  },
  "CascaderState": {
    "type": "object",
    "properties": {
      "inputFocused": {
        "type": "boolean"
      },
      "inputValue": {
        "type": "string"
      },
      "value": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "popupVisible": {
        "type": "string",
        "oneOf": [
          {
            "type": "boolean"
          }
        ]
      },
      "flattenOptions": {
        "type": "array",
        "items": {}
      }
    },
    "required": [
      "inputFocused",
      "inputValue",
      "value",
      "popupVisible",
      "flattenOptions"
    ]
  },
  "AbstractCheckboxProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "defaultChecked": {
        "type": "boolean"
      },
      "checked": {
        "type": "boolean"
      },
      "disabled": {
        "type": "boolean"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(value: string[]) => any"
      },
      "onMouseEnter": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "onMouseLeave": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "value": {
        "type": "string",
        "format": "Element"
      },
      "name": {
        "type": "string"
      },
      "children": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": []
  },
  "CheckboxProps": {
    "type": "object",
    "properties": {
      "indeterminate": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "CollapseProps": {
    "type": "object",
    "properties": {
      "activeKey": {
        "type": "string",
        "oneOf": [
          {
            "type": "array",
            "items": [
              {
                "type": "string"
              }
            ]
          },
          {
            "type": "string"
          }
        ]
      },
      "defaultActiveKey": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "accordion": {
        "type": "boolean"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(key: string | string[]) => void"
      },
      "className": {
        "type": "string"
      },
      "bordered": {
        "type": "boolean"
      },
      "prefixCls": {
        "type": "string"
      }
    },
    "required": []
  },
  "CollapsePanelProps": {
    "type": "object",
    "properties": {
      "key": {
        "type": "string"
      },
      "header": {
        "type": "string",
        "format": "Element"
      },
      "disabled": {
        "type": "boolean"
      },
      "className": {
        "type": "string"
      }
    },
    "required": [
      "key",
      "header"
    ]
  },
  "CheckboxOptionType": {
    "type": "object",
    "properties": {
      "label": {
        "type": "string"
      },
      "value": {
        "type": "string",
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "number"
          }
        ]
      },
      "disabled": {
        "type": "boolean"
      }
    },
    "required": [
      "label",
      "value"
    ]
  },
  "AbstractCheckboxGroupProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "options": {
        "type": "string",
        "oneOf": [
          {
            "type": "object",
            "properties": {
              "label": {
                "type": "string"
              },
              "value": {
                "type": "string",
                "oneOf": [
                  {
                    "type": "string"
                  },
                  {
                    "type": "number"
                  }
                ]
              },
              "disabled": {
                "type": "boolean"
              }
            },
            "required": [
              "label",
              "value"
            ]
          },
          {
            "type": "string"
          }
        ]
      },
      "disabled": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "CheckboxGroupProps": {
    "type": "object",
    "properties": {
      "defaultValue": {
        "type": "array",
        "items": [
          {
            "type": "string",
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "number"
              }
            ]
          }
        ]
      },
      "value": {
        "type": "array",
        "items": [
          {
            "type": "string",
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "number"
              }
            ]
          }
        ]
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(checkedValue: Array<CheckboxValueType>) => void"
      }
    },
    "required": []
  },
  "CheckboxGroupState": {
    "type": "object",
    "properties": {
      "value": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": [
      "value"
    ]
  },
  "CheckboxGroupContext": {
    "type": "object",
    "properties": {
      "checkboxGroup": {
        "type": "object",
        "properties": {
          "toggleOption": {
            "type": "string",
            "format": "Function",
            "description": "(option: CheckboxOptionType) => void"
          },
          "value": {
            "type": "string",
            "format": "Element"
          },
          "disabled": {
            "type": "boolean"
          }
        },
        "required": [
          "toggleOption",
          "value",
          "disabled"
        ]
      }
    },
    "required": [
      "checkboxGroup"
    ]
  },
  "PickerProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "inputPrefixCls": {
        "type": "string"
      },
      "format": {
        "type": "string"
      },
      "disabled": {
        "type": "boolean"
      },
      "allowClear": {
        "type": "boolean"
      },
      "className": {
        "type": "string"
      },
      "popupStyle": {
        "type": "object",
        "properties": {},
        "format": "CSS"
      },
      "size": {
        "type": "string",
        "enum": [
          "large",
          "small",
          "default"
        ]
      },
      "getCalendarContainer": {
        "type": "string",
        "format": "Function",
        "description": "(triggerNode: Element) => HTMLElement"
      },
      "open": {
        "type": "boolean"
      },
      "onOpenChange": {
        "type": "string",
        "format": "Function",
        "description": "(status: boolean) => void"
      },
      "disabledDate": {
        "type": "string",
        "format": "Function",
        "description": "(current: moment.Moment) => boolean"
      },
      "renderExtraFooter": {
        "type": "string",
        "format": "Function",
        "description": "() => React.ReactNode"
      },
      "dateRender": {
        "type": "string",
        "format": "Function",
        "description": "(current: moment.Moment, today: moment.Moment) => React.ReactNode"
      }
    },
    "required": []
  },
  "SinglePickerProps": {
    "type": "object",
    "properties": {
      "value": {
        "type": "string",
        "format": "Moment"
      },
      "defaultValue": {
        "type": "string",
        "format": "Moment"
      },
      "defaultPickerValue": {
        "type": "string",
        "format": "Moment"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(date: moment.Moment, dateString: string) => void"
      }
    },
    "required": []
  },
  "DatePickerProps": {
    "type": "object",
    "properties": {
      "className": {
        "type": "string"
      },
      "showTime": {
        "type": "string",
        "oneOf": [
          {
            "type": "object",
            "properties": {},
            "required": []
          },
          {
            "type": "boolean"
          }
        ]
      },
      "showToday": {
        "type": "boolean"
      },
      "open": {
        "type": "boolean"
      },
      "disabledTime": {
        "type": "string",
        "format": "Function",
        "description": "(current: moment.Moment) => {\n        disabledHours?: () => number[];\n        disabledMinutes?: () => number[];\n        disabledSeconds?: () => number[];\n    }"
      }
    },
    "required": []
  },
  "MonthPickerProps": {
    "type": "object",
    "properties": {
      "className": {
        "type": "string"
      },
      "placeholder": {
        "type": "string"
      }
    },
    "required": []
  },
  "RangePickerProps": {
    "type": "object",
    "properties": {
      "className": {
        "type": "string"
      },
      "value": {
        "type": "string",
        "allOf": [
          [
            "moment.Moment",
            "moment.Moment"
          ],
          {
            "moment.Moment": {
              "type": "string",
              "format": "Moment"
            }
          }
        ],
        "required": [
          "moment.Moment",
          "moment.Moment"
        ]
      },
      "defaultValue": {
        "type": "string",
        "allOf": [
          [
            "moment.Moment",
            "moment.Moment"
          ],
          {
            "moment.Moment": {
              "type": "string",
              "format": "Moment"
            }
          }
        ],
        "required": [
          "moment.Moment",
          "moment.Moment"
        ]
      },
      "defaultPickerValue": {
        "type": "string",
        "allOf": [
          [
            "moment.Moment",
            "moment.Moment"
          ],
          {
            "moment.Moment": {
              "type": "string",
              "format": "Moment"
            }
          }
        ],
        "required": [
          "moment.Moment",
          "moment.Moment"
        ]
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(dates: [moment.Moment, moment.Moment], dateStrings: [string, string]) => void"
      },
      "onCalendarChange": {
        "type": "string",
        "format": "Function",
        "description": "(dates: [moment.Moment, moment.Moment], dateStrings: [string, string]) => void"
      },
      "onOk": {
        "type": "string",
        "format": "Function",
        "description": "(selectedTime: moment.Moment) => void"
      },
      "showTime": {
        "type": "string",
        "oneOf": [
          {
            "type": "object",
            "properties": {},
            "required": []
          },
          {
            "type": "boolean"
          }
        ]
      },
      "ranges": {
        "type": "object",
        "properties": {
          "range": {
            "type": "array",
            "items": [
              {
                "type": "string",
                "format": "Moment"
              }
            ]
          }
        },
        "required": [
          "range"
        ]
      }
    },
    "required": []
  },
  "WeexPickerProps": {
    "type": "object",
    "properties": {
      "className": {
        "type": "string"
      },
      "placeholder": {
        "type": "string"
      }
    },
    "required": []
  },
  "DatePickerDecorator": {
    "type": "object",
    "properties": {
      "RangePicker": {
        "type": "string",
        "format": "Antd"
      },
      "MonthPicker": {
        "type": "string",
        "format": "Antd"
      },
      "WeekPicker": {
        "type": "string",
        "format": "Antd"
      }
    },
    "required": [
      "RangePicker",
      "MonthPicker",
      "WeekPicker"
    ]
  },
  "DividerProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "type": {
        "type": "string",
        "enum": [
          "horizontal",
          "vertical"
        ]
      },
      "className": {
        "type": "string"
      },
      "children": {
        "type": "string",
        "format": "Element"
      },
      "dashed": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "DropdownButtonProps": {
    "type": "object",
    "properties": {
      "type": {
        "type": "string",
        "enum": [
          "primary",
          "ghost",
          "dashed"
        ]
      },
      "disabled": {
        "type": "boolean"
      },
      "onClick": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "children": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": []
  },
  "DropDownProps": {
    "type": "object",
    "properties": {
      "trigger": {
        "type": "string",
        "format": "Function",
        "description": "('click' | 'hover')[]"
      },
      "overlay": {
        "type": "string",
        "format": "Element"
      },
      "onVisibleChange": {
        "type": "string",
        "format": "Function",
        "description": "(visible?: boolean) => void"
      },
      "visible": {
        "type": "boolean"
      },
      "disabled": {
        "type": "boolean"
      },
      "align": {
        "type": "object",
        "properties": {},
        "required": []
      },
      "getPopupContainer": {
        "type": "string",
        "format": "Function",
        "description": "(triggerNode: Element) => HTMLElement"
      },
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "placement": {
        "type": "string",
        "enum": [
          "topLeft",
          "topCenter",
          "topRight",
          "bottomLeft",
          "bottomCenter",
          "bottomRight"
        ]
      },
      "forceRender": {
        "type": "boolean"
      }
    },
    "required": [
      "overlay"
    ]
  },
  "FormCreateOption": {
    "type": "object",
    "properties": {
      "onFieldsChange": {
        "type": "string",
        "format": "Function",
        "description": "(props: T, fields: Array<any>) => void"
      },
      "onValuesChange": {
        "type": "string",
        "format": "Function",
        "description": "(props: T, values: any) => void"
      },
      "mapPropsToFields": {
        "type": "string",
        "format": "Function",
        "description": "(props: T) => void"
      },
      "withRef": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "FormProps": {
    "type": "object",
    "properties": {
      "layout": {
        "type": "string",
        "enum": [
          "horizontal",
          "inline",
          "vertical"
        ]
      },
      "form": {
        "type": "object",
        "properties": {}
      },
      "onSubmit": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "className": {
        "type": "string"
      },
      "prefixCls": {
        "type": "string"
      },
      "hideRequiredMark": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "FormComponentProps": {
    "type": "object",
    "properties": {
      "form": {
        "type": "object",
        "properties": {}
      }
    },
    "required": [
      "form"
    ]
  },
  "ComponentDecorator": {
    "type": "object",
    "properties": {
      "component": {
        "type": "string",
        "format": "Antd"
      }
    },
    "required": [
      "component"
    ]
  },
  "FormItemProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "id": {
        "type": "string"
      },
      "label": {
        "type": "string",
        "format": "Element"
      },
      "labelCol": {
        "type": "object",
        "properties": {},
        "required": []
      },
      "wrapperCol": {
        "type": "object",
        "properties": {},
        "required": []
      },
      "help": {
        "type": "string",
        "format": "Element"
      },
      "extra": {
        "type": "string",
        "format": "Element"
      },
      "validateStatus": {
        "type": "string",
        "enum": [
          "success",
          "warning",
          "error",
          "validating"
        ]
      },
      "hasFeedback": {
        "type": "boolean"
      },
      "required": {
        "type": "boolean"
      },
      "colon": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "FormItemContext": {
    "type": "object",
    "properties": {
      "vertical": {
        "type": "boolean"
      }
    },
    "required": [
      "vertical"
    ]
  },
  "ColSize": {
    "type": "object",
    "properties": {
      "span": {
        "type": "number"
      },
      "order": {
        "type": "number"
      },
      "offset": {
        "type": "number"
      },
      "push": {
        "type": "number"
      },
      "pull": {
        "type": "number"
      }
    },
    "required": []
  },
  "ColProps": {
    "type": "object",
    "properties": {
      "className": {
        "type": "string"
      },
      "span": {
        "type": "number"
      },
      "order": {
        "type": "number"
      },
      "offset": {
        "type": "number"
      },
      "push": {
        "type": "number"
      },
      "pull": {
        "type": "number"
      },
      "xs": {
        "type": "string",
        "oneOf": [
          {
            "type": "number"
          },
          {
            "type": "object",
            "properties": {
              "span": {
                "type": "number"
              },
              "order": {
                "type": "number"
              },
              "offset": {
                "type": "number"
              },
              "push": {
                "type": "number"
              },
              "pull": {
                "type": "number"
              }
            },
            "required": []
          }
        ]
      },
      "sm": {
        "type": "string",
        "oneOf": [
          {
            "type": "number"
          },
          {
            "type": "object",
            "properties": {
              "span": {
                "type": "number"
              },
              "order": {
                "type": "number"
              },
              "offset": {
                "type": "number"
              },
              "push": {
                "type": "number"
              },
              "pull": {
                "type": "number"
              }
            },
            "required": []
          }
        ]
      },
      "md": {
        "type": "string",
        "oneOf": [
          {
            "type": "number"
          },
          {
            "type": "object",
            "properties": {
              "span": {
                "type": "number"
              },
              "order": {
                "type": "number"
              },
              "offset": {
                "type": "number"
              },
              "push": {
                "type": "number"
              },
              "pull": {
                "type": "number"
              }
            },
            "required": []
          }
        ]
      },
      "lg": {
        "type": "string",
        "oneOf": [
          {
            "type": "number"
          },
          {
            "type": "object",
            "properties": {
              "span": {
                "type": "number"
              },
              "order": {
                "type": "number"
              },
              "offset": {
                "type": "number"
              },
              "push": {
                "type": "number"
              },
              "pull": {
                "type": "number"
              }
            },
            "required": []
          }
        ]
      },
      "xl": {
        "type": "string",
        "oneOf": [
          {
            "type": "number"
          },
          {
            "type": "object",
            "properties": {
              "span": {
                "type": "number"
              },
              "order": {
                "type": "number"
              },
              "offset": {
                "type": "number"
              },
              "push": {
                "type": "number"
              },
              "pull": {
                "type": "number"
              }
            },
            "required": []
          }
        ]
      },
      "prefixCls": {
        "type": "string"
      }
    },
    "required": []
  },
  "RowProps": {
    "type": "object",
    "properties": {
      "className": {
        "type": "string"
      },
      "gutter": {
        "type": "string",
        "oneOf": [
          {
            "type": "number"
          },
          {
            "type": "object",
            "properties": {
              "xs": {
                "type": "string"
              },
              "sm": {
                "type": "string"
              },
              "md": {
                "type": "string"
              },
              "lg": {
                "type": "string"
              },
              "xl": {
                "type": "string"
              },
              "xxl": {
                "type": "string"
              }
            }
          }
        ]
      },
      "type": {
        "type": "string",
        "enum": [
          "flex"
        ]
      },
      "align": {
        "type": "string",
        "enum": [
          "top",
          "middle",
          "bottom"
        ]
      },
      "justify": {
        "type": "string",
        "enum": [
          "start",
          "end",
          "center",
          "space-around",
          "space-between"
        ]
      },
      "prefixCls": {
        "type": "string"
      }
    },
    "required": []
  },
  "RowState": {
    "type": "object",
    "properties": {
      "screens": {
        "type": "object",
        "properties": {
          "xs": {
            "type": "string"
          },
          "sm": {
            "type": "string"
          },
          "md": {
            "type": "string"
          },
          "lg": {
            "type": "string"
          },
          "xl": {
            "type": "string"
          },
          "xxl": {
            "type": "string"
          }
        }
      }
    },
    "required": [
      "screens"
    ]
  },
  "IconProps": {
    "type": "object",
    "properties": {
      "type": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "title": {
        "type": "string"
      },
      "onClick": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "spin": {
        "type": "boolean"
      }
    },
    "required": [
      "type"
    ]
  },
  "GroupProps": {
    "type": "object",
    "properties": {
      "className": {
        "type": "string"
      },
      "size": {
        "type": "string",
        "enum": [
          "large",
          "small",
          "default"
        ]
      },
      "children": {
        "type": "string",
        "format": "Element"
      },
      "prefixCls": {
        "type": "string"
      },
      "compact": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "AbstractInputProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "defaultValue": {
        "type": "string",
        "format": "Element"
      },
      "value": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": []
  },
  "SearchProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "placeholder": {
        "type": "string"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(e: React.FormEvent<any>) => void"
      },
      "handleClear": {
        "type": "string",
        "format": "Function",
        "description": "(e: React.MouseEvent<any>) => void"
      },
      "value": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": []
  },
  "AutoSizeType": {
    "type": "object",
    "properties": {
      "minRows": {
        "type": "number"
      },
      "maxRows": {
        "type": "number"
      }
    },
    "required": []
  },
  "TextAreaProps": {
    "type": "object",
    "properties": {
      "autosize": {
        "type": "string",
        "oneOf": [
          {
            "type": "boolean"
          },
          {
            "type": "object",
            "properties": {
              "minRows": {
                "type": "number"
              },
              "maxRows": {
                "type": "number"
              }
            },
            "required": []
          }
        ]
      },
      "onPressEnter": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      }
    },
    "required": []
  },
  "TextAreaState": {
    "type": "object",
    "properties": {
      "textareaStyles": {
        "type": "object",
        "properties": {},
        "format": "CSS"
      }
    },
    "required": []
  },
  "NodeType": {
    "type": "object",
    "properties": {
      "sizingStyle": {
        "type": "string"
      },
      "paddingSize": {
        "type": "number"
      },
      "borderSize": {
        "type": "number"
      },
      "boxSizing": {
        "type": "string"
      }
    },
    "required": [
      "sizingStyle",
      "paddingSize",
      "borderSize",
      "boxSizing"
    ]
  },
  "SiderProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "collapsible": {
        "type": "boolean"
      },
      "collapsed": {
        "type": "boolean"
      },
      "defaultCollapsed": {
        "type": "boolean"
      },
      "reverseArrow": {
        "type": "boolean"
      },
      "onCollapse": {
        "type": "string",
        "format": "Function",
        "description": "(collapsed: boolean, type: CollapseType) => void"
      },
      "trigger": {
        "type": "string",
        "format": "Element"
      },
      "width": {
        "type": "string",
        "oneOf": [
          {
            "type": "number"
          },
          {
            "type": "string"
          }
        ]
      },
      "collapsedWidth": {
        "type": "string",
        "oneOf": [
          {
            "type": "number"
          },
          {
            "type": "string"
          }
        ]
      },
      "breakpoint": {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
          "xl"
        ]
      }
    },
    "required": []
  },
  "SliderState": {
    "type": "object",
    "properties": {
      "visibles": {
        "type": "object",
        "properties": {
          "index": {
            "type": "boolean"
          }
        },
        "required": [
          "index"
        ]
      }
    },
    "required": [
      "visibles"
    ]
  },
  "SliderContext": {
    "type": "object",
    "properties": {
      "siderCollapsed": {
        "type": "boolean"
      }
    },
    "required": [
      "siderCollapsed"
    ]
  },
  "InputNumberProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "min": {
        "type": "number"
      },
      "max": {
        "type": "number"
      },
      "value": {
        "type": "number"
      },
      "step": {
        "type": "string",
        "oneOf": [
          {
            "type": "number"
          },
          {
            "type": "string"
          }
        ]
      },
      "defaultValue": {
        "type": "number"
      },
      "onKeyDown": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(value: number | string | undefined) => void"
      },
      "disabled": {
        "type": "boolean"
      },
      "size": {
        "type": "string",
        "enum": [
          "large",
          "small",
          "default"
        ]
      },
      "formatter": {
        "type": "string",
        "format": "Function",
        "description": "(value: number | string | undefined) => string"
      },
      "parser": {
        "type": "string",
        "format": "Function",
        "description": "(displayValue: string | undefined) => number"
      },
      "placeholder": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "id": {
        "type": "string"
      },
      "precision": {
        "type": "number"
      }
    },
    "required": []
  },
  "BasicProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      }
    },
    "required": []
  },
  "ListItemProps": {
    "type": "object",
    "properties": {
      "className": {
        "type": "string"
      },
      "children": {
        "type": "string",
        "format": "Element"
      },
      "prefixCls": {
        "type": "string"
      },
      "extra": {
        "type": "string",
        "format": "Element"
      },
      "actions": {
        "type": "array",
        "items": [
          {
            "type": "string",
            "format": "Element"
          }
        ]
      },
      "grid": {
        "type": "object",
        "properties": {},
        "required": []
      }
    },
    "required": [
      "extra"
    ]
  },
  "ListItemMetaProps": {
    "type": "object",
    "properties": {
      "avatar": {
        "type": "string",
        "format": "Element"
      },
      "className": {
        "type": "string"
      },
      "children": {
        "type": "string",
        "format": "Element"
      },
      "description": {
        "type": "string",
        "format": "Element"
      },
      "prefixCls": {
        "type": "string"
      },
      "title": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": [
      "description",
      "title"
    ]
  },
  "ListGridType": {
    "type": "object",
    "properties": {
      "gutter": {
        "type": "number"
      },
      "column": {
        "type": "number",
        "enum": [
          1,
          2,
          3,
          4,
          6,
          8,
          12,
          24
        ]
      },
      "xs": {
        "type": "number",
        "enum": [
          1,
          2,
          3,
          4,
          6,
          8,
          12,
          24
        ]
      },
      "sm": {
        "type": "number",
        "enum": [
          1,
          2,
          3,
          4,
          6,
          8,
          12,
          24
        ]
      },
      "md": {
        "type": "number",
        "enum": [
          1,
          2,
          3,
          4,
          6,
          8,
          12,
          24
        ]
      },
      "lg": {
        "type": "number",
        "enum": [
          1,
          2,
          3,
          4,
          6,
          8,
          12,
          24
        ]
      },
      "xl": {
        "type": "number",
        "enum": [
          1,
          2,
          3,
          4,
          6,
          8,
          12,
          24
        ]
      }
    },
    "required": []
  },
  "ListProps": {
    "type": "object",
    "properties": {
      "bordered": {
        "type": "boolean"
      },
      "className": {
        "type": "string"
      },
      "children": {
        "type": "string",
        "format": "Element"
      },
      "dataSource": {
        "type": "string",
        "format": "Element"
      },
      "extra": {
        "type": "string",
        "format": "Element"
      },
      "grid": {
        "type": "object",
        "properties": {
          "gutter": {
            "type": "number"
          },
          "column": {
            "type": "number",
            "enum": [
              1,
              2,
              3,
              4,
              6,
              8,
              12,
              24
            ]
          },
          "xs": {
            "type": "number",
            "enum": [
              1,
              2,
              3,
              4,
              6,
              8,
              12,
              24
            ]
          },
          "sm": {
            "type": "number",
            "enum": [
              1,
              2,
              3,
              4,
              6,
              8,
              12,
              24
            ]
          },
          "md": {
            "type": "number",
            "enum": [
              1,
              2,
              3,
              4,
              6,
              8,
              12,
              24
            ]
          },
          "lg": {
            "type": "number",
            "enum": [
              1,
              2,
              3,
              4,
              6,
              8,
              12,
              24
            ]
          },
          "xl": {
            "type": "number",
            "enum": [
              1,
              2,
              3,
              4,
              6,
              8,
              12,
              24
            ]
          }
        },
        "required": []
      },
      "id": {
        "type": "string"
      },
      "itemLayout": {
        "type": "string"
      },
      "loading": {
        "type": "boolean"
      },
      "loadMore": {
        "type": "string",
        "format": "Element"
      },
      "pagination": {
        "type": "string",
        "format": "Element"
      },
      "prefixCls": {
        "type": "string"
      },
      "rowKey": {
        "type": "string",
        "format": "Element"
      },
      "renderItem": {
        "type": "string",
        "format": "Element"
      },
      "size": {
        "type": "string",
        "enum": [
          "small",
          "default",
          "large"
        ]
      },
      "split": {
        "type": "boolean"
      },
      "header": {
        "type": "string",
        "format": "Element"
      },
      "footer": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": [
      "dataSource",
      "renderItem"
    ]
  },
  "ListLocale": {
    "type": "object",
    "properties": {
      "emptyText": {
        "type": "string"
      }
    },
    "required": [
      "emptyText"
    ]
  },
  "LocaleReceiverProps": {
    "type": "object",
    "properties": {
      "componentName": {
        "type": "string"
      },
      "defaultLocale": {
        "type": "string",
        "oneOf": [
          {
            "type": "object",
            "properties": {},
            "required": []
          },
          {
            "type": "string",
            "format": "Function"
          }
        ]
      },
      "children": {
        "type": "string",
        "format": "Function",
        "description": "(locale: object, localeCode?: string) => React.ReactElement<any>"
      }
    },
    "required": [
      "componentName",
      "defaultLocale",
      "children"
    ]
  },
  "LocaleReceiverContext": {
    "type": "object",
    "properties": {
      "antLocale": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "format": "Element"
          }
        },
        "required": [
          "key"
        ]
      }
    },
    "required": []
  },
  "LocaleProviderProps": {
    "type": "object",
    "properties": {
      "locale": {
        "type": "object",
        "properties": {
          "Pagination": {
            "type": "object",
            "properties": {},
            "required": []
          },
          "DatePicker": {
            "type": "object",
            "properties": {},
            "required": []
          },
          "TimePicker": {
            "type": "object",
            "properties": {},
            "required": []
          },
          "Calendar": {
            "type": "object",
            "properties": {},
            "required": []
          },
          "Table": {
            "type": "object",
            "properties": {},
            "required": []
          },
          "Modal": {
            "type": "object",
            "properties": {},
            "required": []
          },
          "Popconfirm": {
            "type": "object",
            "properties": {},
            "required": []
          },
          "Transfer": {
            "type": "object",
            "properties": {},
            "required": []
          },
          "Select": {
            "type": "object",
            "properties": {},
            "required": []
          },
          "Upload": {
            "type": "object",
            "properties": {},
            "required": []
          }
        },
        "required": []
      }
    },
    "required": [
      "locale"
    ]
  },
  "MentionProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "suggestionStyle": {
        "type": "object",
        "properties": {},
        "format": "CSS"
      },
      "suggestions": {
        "type": "array",
        "items": [
          {
            "type": "string",
            "format": "Element"
          }
        ]
      },
      "onSearchChange": {
        "type": "string",
        "format": "Function"
      },
      "onChange": {
        "type": "string",
        "format": "Function"
      },
      "notFoundContent": {
        "type": "string",
        "format": "Element"
      },
      "loading": {
        "type": "boolean"
      },
      "defaultValue": {
        "type": "string",
        "format": "Element"
      },
      "value": {
        "type": "string",
        "format": "Element"
      },
      "className": {
        "type": "string"
      },
      "multiLines": {
        "type": "boolean"
      },
      "prefix": {
        "type": "string"
      },
      "placeholder": {
        "type": "string"
      },
      "getSuggestionContainer": {
        "type": "string",
        "format": "Function",
        "description": "(triggerNode: Element) => HTMLElement"
      },
      "onFocus": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "onBlur": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "readOnly": {
        "type": "boolean"
      },
      "disabled": {
        "type": "boolean"
      },
      "placement": {
        "type": "string",
        "enum": [
          "top",
          "bottom"
        ]
      }
    },
    "required": []
  },
  "MentionState": {
    "type": "object",
    "properties": {
      "suggestions": {
        "type": "array",
        "items": [
          {
            "type": "string",
            "format": "Element"
          }
        ]
      },
      "focus": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "SelectParam": {
    "type": "object",
    "properties": {
      "key": {
        "type": "string"
      },
      "keyPath": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "item": {
        "type": "string",
        "format": "Element"
      },
      "domEvent": {
        "type": "string",
        "format": "Element"
      },
      "selectedKeys": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      }
    },
    "required": [
      "key",
      "keyPath",
      "item",
      "domEvent",
      "selectedKeys"
    ]
  },
  "ClickParam": {
    "type": "object",
    "properties": {
      "key": {
        "type": "string"
      },
      "keyPath": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "item": {
        "type": "string",
        "format": "Element"
      },
      "domEvent": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": [
      "key",
      "keyPath",
      "item",
      "domEvent"
    ]
  },
  "MenuProps": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "theme": {
        "type": "string",
        "enum": [
          "light",
          "dark"
        ]
      },
      "mode": {
        "type": "string",
        "enum": [
          "vertical",
          "vertical-left",
          "vertical-right",
          "horizontal",
          "inline"
        ]
      },
      "selectable": {
        "type": "boolean"
      },
      "selectedKeys": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "defaultSelectedKeys": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "openKeys": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "defaultOpenKeys": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "onOpenChange": {
        "type": "string",
        "format": "Function",
        "description": "(openKeys: string[]) => void"
      },
      "onSelect": {
        "type": "string",
        "format": "Function",
        "description": "(param: SelectParam) => void"
      },
      "onDeselect": {
        "type": "string",
        "format": "Function",
        "description": "(param: SelectParam) => void"
      },
      "onClick": {
        "type": "string",
        "format": "Function",
        "description": "(param: ClickParam) => void"
      },
      "openAnimation": {
        "type": "string",
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "object",
            "properties": {},
            "required": []
          }
        ]
      },
      "openTransitionName": {
        "type": "string",
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "object",
            "properties": {},
            "required": []
          }
        ]
      },
      "className": {
        "type": "string"
      },
      "prefixCls": {
        "type": "string"
      },
      "multiple": {
        "type": "boolean"
      },
      "inlineIndent": {
        "type": "number"
      },
      "inlineCollapsed": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "MenuState": {
    "type": "object",
    "properties": {
      "openKeys": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      }
    },
    "required": [
      "openKeys"
    ]
  },
  "ConfigOptions": {
    "type": "object",
    "properties": {
      "top": {
        "type": "number"
      },
      "duration": {
        "type": "number"
      },
      "prefixCls": {
        "type": "string"
      },
      "getContainer": {
        "type": "string",
        "format": "Function",
        "description": "() => HTMLElement"
      }
    },
    "required": []
  },
  "ActionButtonProps": {
    "type": "object",
    "properties": {
      "type": {
        "type": "string",
        "enum": [
          "primary",
          "ghost",
          "dashed",
          "danger"
        ]
      },
      "actionFn": {
        "type": "string",
        "format": "Function",
        "description": "(...args: any[]) => any | PromiseLike<any>"
      },
      "closeModal": {
        "type": "string",
        "format": "Function"
      },
      "autoFocus": {
        "type": "boolean"
      }
    },
    "required": [
      "closeModal"
    ]
  },
  "ActionButtonState": {
    "type": "object",
    "properties": {
      "loading": {
        "type": "boolean"
      }
    },
    "required": [
      "loading"
    ]
  },
  "ModalProps": {
    "type": "object",
    "properties": {
      "visible": {
        "type": "boolean"
      },
      "confirmLoading": {
        "type": "boolean"
      },
      "title": {
        "type": "string",
        "oneOf": [
          {
            "type": "string",
            "format": "Element"
          },
          {
            "type": "string"
          }
        ]
      },
      "closable": {
        "type": "boolean"
      },
      "onOk": {
        "type": "string",
        "format": "Function",
        "description": "(e: React.MouseEvent<any>) => void"
      },
      "onCancel": {
        "type": "string",
        "format": "Function",
        "description": "(e: React.MouseEvent<any>) => void"
      },
      "afterClose": {
        "type": "string",
        "format": "Function",
        "description": "() => void"
      },
      "width": {
        "type": "string",
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "number"
          }
        ]
      },
      "footer": {
        "type": "string",
        "format": "Element"
      },
      "okText": {
        "type": "string"
      },
      "okType": {
        "type": "string",
        "enum": [
          "primary",
          "ghost",
          "dashed",
          "danger"
        ]
      },
      "cancelText": {
        "type": "string"
      },
      "maskClosable": {
        "type": "boolean"
      },
      "wrapClassName": {
        "type": "string"
      },
      "maskTransitionName": {
        "type": "string"
      },
      "transitionName": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "getContainer": {
        "type": "string",
        "format": "Function",
        "description": "(instance: React.ReactInstance) => HTMLElement"
      },
      "zIndex": {
        "type": "number"
      },
      "bodyStyle": {
        "type": "object",
        "properties": {},
        "format": "CSS"
      },
      "maskStyle": {
        "type": "object",
        "properties": {},
        "format": "CSS"
      },
      "mask": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "ModalFuncProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "visible": {
        "type": "boolean"
      },
      "title": {
        "type": "string",
        "format": "Element"
      },
      "content": {
        "type": "string",
        "format": "Element"
      },
      "onOk": {
        "type": "string",
        "format": "Function",
        "description": "(...args: any[]) => any | PromiseLike<any>"
      },
      "onCancel": {
        "type": "string",
        "format": "Function",
        "description": "(...args: any[]) => any | PromiseLike<any>"
      },
      "width": {
        "type": "string",
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "number"
          }
        ]
      },
      "iconClassName": {
        "type": "string"
      },
      "okText": {
        "type": "string"
      },
      "okType": {
        "type": "string",
        "enum": [
          "primary",
          "ghost",
          "dashed",
          "danger"
        ]
      },
      "cancelText": {
        "type": "string"
      },
      "iconType": {
        "type": "string"
      },
      "maskClosable": {
        "type": "boolean"
      },
      "zIndex": {
        "type": "number"
      },
      "okCancel": {
        "type": "boolean"
      },
      "type": {
        "type": "string"
      }
    },
    "required": []
  },
  "ModalLocale": {
    "type": "object",
    "properties": {
      "okText": {
        "type": "string"
      },
      "cancelText": {
        "type": "string"
      },
      "justOkText": {
        "type": "string"
      }
    },
    "required": [
      "okText",
      "cancelText",
      "justOkText"
    ]
  },
  "ConfigProps": {
    "type": "object",
    "properties": {
      "top": {
        "type": "number"
      },
      "bottom": {
        "type": "number"
      },
      "duration": {
        "type": "number"
      },
      "placement": {
        "type": "string",
        "enum": [
          "topLeft",
          "topRight",
          "bottomLeft",
          "bottomRight"
        ]
      },
      "getContainer": {
        "type": "string",
        "format": "Function",
        "description": "() => HTMLElement"
      }
    },
    "required": []
  },
  "ArgsProps": {
    "type": "object",
    "properties": {
      "message": {
        "type": "string",
        "format": "Element"
      },
      "description": {
        "type": "string",
        "format": "Element"
      },
      "btn": {
        "type": "string",
        "format": "Element"
      },
      "key": {
        "type": "string"
      },
      "onClose": {
        "type": "string",
        "format": "Function",
        "description": "() => void"
      },
      "duration": {
        "type": "number"
      },
      "icon": {
        "type": "string",
        "format": "Element"
      },
      "placement": {
        "type": "string",
        "enum": [
          "topLeft",
          "topRight",
          "bottomLeft",
          "bottomRight"
        ]
      },
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "type": {
        "type": "string",
        "enum": [
          "success",
          "info",
          "error",
          "warning"
        ]
      }
    },
    "required": [
      "message",
      "description"
    ]
  },
  "NotificationApi": {
    "type": "object",
    "properties": {},
    "required": [
      "args",
      "args",
      "args",
      "args",
      "args",
      "args",
      "key",
      "options"
    ]
  },
  "PaginationProps": {
    "type": "object",
    "properties": {
      "total": {
        "type": "number"
      },
      "defaultCurrent": {
        "type": "number"
      },
      "current": {
        "type": "number"
      },
      "defaultPageSize": {
        "type": "number"
      },
      "pageSize": {
        "type": "number"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(page: number, pageSize?: number) => void"
      },
      "showSizeChanger": {
        "type": "boolean"
      },
      "pageSizeOptions": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "onShowSizeChange": {
        "type": "string",
        "format": "Function",
        "description": "(current: number, size: number) => void"
      },
      "showQuickJumper": {
        "type": "boolean"
      },
      "showTotal": {
        "type": "string",
        "format": "Function",
        "description": "(total: number, range: [number, number]) => React.ReactNode"
      },
      "size": {
        "type": "string"
      },
      "simple": {
        "type": "boolean"
      },
      "className": {
        "type": "string"
      },
      "prefixCls": {
        "type": "string"
      },
      "selectPrefixCls": {
        "type": "string"
      },
      "itemRender": {
        "type": "string",
        "format": "Function",
        "description": "(page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next') => React.ReactNode"
      }
    },
    "required": []
  },
  "PopconfirmProps": {
    "type": "object",
    "properties": {
      "title": {
        "type": "string",
        "format": "Element"
      },
      "onConfirm": {
        "type": "string",
        "format": "Function",
        "description": "(e: React.MouseEvent<any>) => void"
      },
      "onCancel": {
        "type": "string",
        "format": "Function",
        "description": "(e: React.MouseEvent<any>) => void"
      },
      "okText": {
        "type": "string",
        "format": "Element"
      },
      "okType": {
        "type": "string",
        "enum": [
          "primary",
          "ghost",
          "dashed",
          "danger"
        ]
      },
      "cancelText": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": [
      "title"
    ]
  },
  "PopconfirmState": {
    "type": "object",
    "properties": {
      "visible": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "PopconfirmLocale": {
    "type": "object",
    "properties": {
      "okText": {
        "type": "string"
      },
      "cancelText": {
        "type": "string"
      }
    },
    "required": [
      "okText",
      "cancelText"
    ]
  },
  "PopoverProps": {
    "type": "object",
    "properties": {
      "title": {
        "type": "string",
        "format": "Element"
      },
      "content": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": []
  },
  "ProgressProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "type": {
        "type": "string",
        "enum": [
          "line",
          "circle",
          "dashboard"
        ]
      },
      "percent": {
        "type": "number"
      },
      "format": {
        "type": "string",
        "format": "Function",
        "description": "(percent: number) => string"
      },
      "status": {
        "type": "string",
        "enum": [
          "success",
          "active",
          "exception"
        ]
      },
      "showInfo": {
        "type": "boolean"
      },
      "strokeWidth": {
        "type": "number"
      },
      "trailColor": {
        "type": "string"
      },
      "width": {
        "type": "number"
      },
      "gapDegree": {
        "type": "number"
      },
      "gapPosition": {
        "type": "string",
        "enum": [
          "top",
          "bottom",
          "left",
          "right"
        ]
      },
      "size": {
        "type": "string",
        "enum": [
          "default",
          "small"
        ]
      }
    },
    "required": []
  },
  "RadioGroupProps": {
    "type": "object",
    "properties": {
      "defaultValue": {
        "type": "string",
        "format": "Element"
      },
      "value": {
        "type": "string",
        "format": "Element"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(value: string[]) => any"
      },
      "size": {
        "type": "string",
        "enum": [
          "large",
          "default",
          "small"
        ]
      },
      "onMouseEnter": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "onMouseLeave": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "name": {
        "type": "string"
      },
      "children": {
        "type": "string",
        "format": "Element"
      },
      "id": {
        "type": "string"
      }
    },
    "required": []
  },
  "RadioGroupState": {
    "type": "object",
    "properties": {
      "value": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": [
      "value"
    ]
  },
  "RadioGroupContext": {
    "type": "object",
    "properties": {
      "radioGroup": {
        "type": "object",
        "properties": {
          "onChange": {
            "type": "string",
            "format": "Function",
            "description": "(value: string[]) => any"
          },
          "value": {
            "type": "string",
            "format": "Element"
          },
          "disabled": {
            "type": "boolean"
          },
          "name": {
            "type": "string"
          }
        },
        "required": [
          "onChange",
          "value",
          "disabled",
          "name"
        ]
      }
    },
    "required": [
      "radioGroup"
    ]
  },
  "RateProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "count": {
        "type": "number"
      },
      "value": {
        "type": "number"
      },
      "defaultValue": {
        "type": "number"
      },
      "allowHalf": {
        "type": "boolean"
      },
      "disabled": {
        "type": "boolean"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(value: number) => any"
      },
      "onHoverChange": {
        "type": "string",
        "format": "Function",
        "description": "(value: number) => any"
      },
      "character": {
        "type": "string",
        "format": "Element"
      },
      "className": {
        "type": "string"
      }
    },
    "required": []
  },
  "AbstractSelectProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "size": {
        "type": "string",
        "enum": [
          "default",
          "large",
          "small"
        ]
      },
      "notFoundContent": {
        "type": "string",
        "oneOf": [
          {
            "type": "string",
            "format": "Element"
          },
          {
            "type": "null"
          }
        ]
      },
      "transitionName": {
        "type": "string"
      },
      "choiceTransitionName": {
        "type": "string"
      },
      "showSearch": {
        "type": "boolean"
      },
      "allowClear": {
        "type": "boolean"
      },
      "disabled": {
        "type": "boolean"
      },
      "placeholder": {
        "type": "string"
      },
      "dropdownClassName": {
        "type": "string"
      },
      "dropdownStyle": {
        "type": "object",
        "properties": {},
        "format": "CSS"
      },
      "dropdownMenuStyle": {
        "type": "object",
        "properties": {},
        "format": "CSS"
      },
      "onSearch": {
        "type": "string",
        "format": "Function",
        "description": "(value: string) => any"
      },
      "filterOption": {
        "type": "string",
        "oneOf": [
          {
            "type": "boolean"
          },
          {
            "type": "string",
            "format": "Function",
            "description": "((inputValue: string, option: React.ReactElement<OptionProps>) => any)"
          }
        ]
      }
    },
    "required": []
  },
  "LabeledValue": {
    "type": "object",
    "properties": {
      "key": {
        "type": "string"
      },
      "label": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": [
      "key",
      "label"
    ]
  },
  "SelectProps": {
    "type": "object",
    "properties": {
      "value": {
        "type": "string",
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "object",
            "properties": {
              "key": {
                "type": "string"
              },
              "label": {
                "type": "string",
                "format": "Element"
              }
            },
            "required": [
              "key",
              "label"
            ]
          },
          {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "key": {
                  "type": "string"
                },
                "label": {
                  "type": "string",
                  "format": "Element"
                }
              },
              "required": [
                "key",
                "label"
              ]
            }
          }
        ]
      },
      "defaultValue": {
        "type": "string",
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "object",
            "properties": {
              "key": {
                "type": "string"
              },
              "label": {
                "type": "string",
                "format": "Element"
              }
            },
            "required": [
              "key",
              "label"
            ]
          },
          {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "key": {
                  "type": "string"
                },
                "label": {
                  "type": "string",
                  "format": "Element"
                }
              },
              "required": [
                "key",
                "label"
              ]
            }
          }
        ]
      },
      "mode": {
        "type": "string",
        "enum": [
          "default",
          "multiple",
          "tags",
          "combobox"
        ]
      },
      "optionLabelProp": {
        "type": "string"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(value: SelectValue) => void"
      },
      "onSelect": {
        "type": "string",
        "format": "Function",
        "description": "(value: SelectValue, option: Object) => any"
      },
      "onDeselect": {
        "type": "string",
        "format": "Function",
        "description": "(value: SelectValue) => any"
      },
      "onBlur": {
        "type": "string",
        "format": "Function",
        "description": "() => any"
      },
      "onFocus": {
        "type": "string",
        "format": "Function",
        "description": "() => any"
      },
      "dropdownMatchSelectWidth": {
        "type": "boolean"
      },
      "optionFilterProp": {
        "type": "string"
      },
      "defaultActiveFirstOption": {
        "type": "boolean"
      },
      "labelInValue": {
        "type": "boolean"
      },
      "getPopupContainer": {
        "type": "string",
        "format": "Function",
        "description": "(triggerNode: Element) => HTMLElement"
      },
      "tokenSeparators": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "getInputElement": {
        "type": "string",
        "format": "Function",
        "description": "() => React.ReactElement<any>"
      },
      "autoFocus": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "OptionProps": {
    "type": "object",
    "properties": {
      "disabled": {
        "type": "boolean"
      },
      "value": {
        "type": "string",
        "format": "Element"
      },
      "title": {
        "type": "string"
      },
      "children": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": []
  },
  "OptGroupProps": {
    "type": "object",
    "properties": {
      "label": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": []
  },
  "SelectLocale": {
    "type": "object",
    "properties": {
      "notFoundContent": {
        "type": "string"
      }
    },
    "required": []
  },
  "SliderMarks": {
    "type": "object",
    "properties": {
      "key": {
        "type": "string",
        "oneOf": [
          {
            "type": "string",
            "format": "Element"
          },
          {
            "type": "object",
            "properties": {
              "style": {
                "type": "object",
                "properties": {},
                "format": "CSS"
              },
              "label": {
                "type": "string",
                "format": "Element"
              }
            },
            "required": [
              "style",
              "label"
            ]
          }
        ]
      }
    },
    "required": [
      "key"
    ]
  },
  "SliderProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "tooltipPrefixCls": {
        "type": "string"
      },
      "range": {
        "type": "boolean"
      },
      "min": {
        "type": "number"
      },
      "max": {
        "type": "number"
      },
      "step": {
        "type": "string",
        "oneOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "marks": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "oneOf": [
              {
                "type": "string",
                "format": "Element"
              },
              {
                "type": "object",
                "properties": {
                  "style": {
                    "type": "object",
                    "properties": {},
                    "format": "CSS"
                  },
                  "label": {
                    "type": "string",
                    "format": "Element"
                  }
                },
                "required": [
                  "style",
                  "label"
                ]
              }
            ]
          }
        },
        "required": [
          "key"
        ]
      },
      "dots": {
        "type": "boolean"
      },
      "value": {
        "type": "number",
        "oneOf": [
          {
            "type": "number"
          },
          {
            "type": "array",
            "items": [
              {
                "type": "number"
              },
              {
                "type": "number"
              }
            ]
          }
        ]
      },
      "defaultValue": {
        "type": "number",
        "oneOf": [
          {
            "type": "number"
          },
          {
            "type": "array",
            "items": [
              {
                "type": "number"
              },
              {
                "type": "number"
              }
            ]
          }
        ]
      },
      "included": {
        "type": "boolean"
      },
      "disabled": {
        "type": "boolean"
      },
      "vertical": {
        "type": "boolean"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(value: SliderValue) => void"
      },
      "onAfterChange": {
        "type": "string",
        "format": "Function",
        "description": "(value: SliderValue) => void"
      },
      "tipFormatter": {
        "type": "string",
        "oneOf": [
          {
            "type": "null"
          },
          {
            "type": "string",
            "format": "Function",
            "description": "((value: number) => React.ReactNode)"
          }
        ]
      },
      "className": {
        "type": "string"
      },
      "id": {
        "type": "string"
      }
    },
    "required": []
  },
  "SpinProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "spinning": {
        "type": "boolean"
      },
      "size": {
        "type": "string",
        "enum": [
          "small",
          "default",
          "large"
        ]
      },
      "tip": {
        "type": "string"
      },
      "delay": {
        "type": "number"
      },
      "wrapperClassName": {
        "type": "string"
      },
      "indicator": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": []
  },
  "SpinState": {
    "type": "object",
    "properties": {
      "spinning": {
        "type": "boolean"
      },
      "notCssAnimationSupported": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "StepsProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "iconPrefix": {
        "type": "string"
      },
      "current": {
        "type": "number"
      },
      "status": {
        "type": "string",
        "enum": [
          "wait",
          "process",
          "finish",
          "error"
        ]
      },
      "size": {
        "type": "string",
        "enum": [
          "default",
          "small"
        ]
      },
      "direction": {
        "type": "string",
        "enum": [
          "horizontal",
          "vertical"
        ]
      },
      "progressDot": {
        "type": "string",
        "oneOf": [
          {
            "type": "boolean"
          },
          {
            "type": "string",
            "format": "Function"
          }
        ]
      }
    },
    "required": []
  },
  "SwitchProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "size": {
        "type": "string",
        "enum": [
          "small",
          "default"
        ]
      },
      "className": {
        "type": "string"
      },
      "checked": {
        "type": "boolean"
      },
      "defaultChecked": {
        "type": "boolean"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(checked: boolean) => any"
      },
      "checkedChildren": {
        "type": "string",
        "format": "Element"
      },
      "unCheckedChildren": {
        "type": "string",
        "format": "Element"
      },
      "disabled": {
        "type": "boolean"
      },
      "loading": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "ColumnGroupProps": {
    "type": "object",
    "properties": {
      "title": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": []
  },
  "FilterDropdownMenuWrapperProps": {
    "type": "object",
    "properties": {
      "onClick": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "children": {
        "type": "string",
        "format": "Element"
      },
      "className": {
        "type": "string"
      }
    },
    "required": []
  },
  "BodyRowClass": {
    "type": "object",
    "properties": {},
    "required": []
  },
  "Store": {
    "type": "object",
    "properties": {
      "setState": {
        "type": "string",
        "format": "Function",
        "description": "(partial: Object) => void"
      },
      "getState": {
        "type": "string",
        "format": "Function",
        "description": "() => any"
      },
      "subscribe": {
        "type": "string",
        "format": "Function",
        "description": "(listener: () => void) => () => void"
      }
    },
    "required": [
      "setState",
      "getState",
      "subscribe"
    ]
  },
  "ColumnProps": {
    "type": "object",
    "properties": {
      "title": {
        "type": "string",
        "format": "Element"
      },
      "key": {
        "type": "string"
      },
      "dataIndex": {
        "type": "string"
      },
      "render": {
        "type": "string",
        "format": "Function",
        "description": "(text: any, record: T, index: number) => React.ReactNode"
      },
      "filters": {
        "type": "array",
        "items": {
          "text": {
            "type": "string"
          },
          "value": {
            "type": "string"
          },
          "children": {
            "type": "string",
            "format": "Element"
          }
        }
      },
      "onFilter": {
        "type": "string",
        "format": "Function",
        "description": "(value: any, record: T) => boolean"
      },
      "filterMultiple": {
        "type": "boolean"
      },
      "filterDropdown": {
        "type": "string",
        "format": "Element"
      },
      "filterDropdownVisible": {
        "type": "boolean"
      },
      "onFilterDropdownVisibleChange": {
        "type": "string",
        "format": "Function",
        "description": "(visible: boolean) => void"
      },
      "sorter": {
        "type": "string",
        "oneOf": [
          {
            "type": "boolean"
          },
          {
            "type": "string",
            "format": "Function",
            "description": "((a: T, b: T) => number)"
          }
        ]
      },
      "defaultSortOrder": {
        "type": "string",
        "enum": [
          "ascend",
          "descend"
        ]
      },
      "colSpan": {
        "type": "number"
      },
      "width": {
        "type": "string",
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "number"
          }
        ]
      },
      "className": {
        "type": "string"
      },
      "fixed": {
        "type": "string",
        "oneOf": [
          {
            "type": "boolean"
          },
          {
            "type": "string",
            "format": "Function",
            "description": "('left'"
          },
          {
            "type": "string",
            "enum": [
              "right)"
            ]
          }
        ]
      },
      "filterIcon": {
        "type": "string",
        "format": "Element"
      },
      "filteredValue": {
        "type": "array",
        "items": [
          {
            "type": "string",
            "format": "Element"
          }
        ]
      },
      "sortOrder": {
        "type": "string",
        "oneOf": [
          {
            "type": "boolean"
          },
          {
            "type": "string",
            "format": "Function",
            "description": "('ascend'"
          },
          {
            "type": "string",
            "enum": [
              "descend)"
            ]
          }
        ]
      },
      "children": {
        "type": "array",
        "items": {
          "title": {
            "type": "string",
            "format": "Element"
          },
          "key": {
            "type": "string"
          },
          "dataIndex": {
            "type": "string"
          },
          "render": {
            "type": "string",
            "format": "Function",
            "description": "(text: any, record: T, index: number) => React.ReactNode"
          },
          "filters": {
            "type": "array",
            "items": {
              "text": {
                "type": "string"
              },
              "value": {
                "type": "string"
              },
              "children": {
                "type": "string",
                "format": "Element"
              }
            }
          },
          "onFilter": {
            "type": "string",
            "format": "Function",
            "description": "(value: any, record: T) => boolean"
          },
          "filterMultiple": {
            "type": "boolean"
          },
          "filterDropdown": {
            "type": "string",
            "format": "Element"
          },
          "filterDropdownVisible": {
            "type": "boolean"
          },
          "onFilterDropdownVisibleChange": {
            "type": "string",
            "format": "Function",
            "description": "(visible: boolean) => void"
          },
          "sorter": {
            "type": "string",
            "oneOf": [
              {
                "type": "boolean"
              },
              {
                "type": "string",
                "format": "Function",
                "description": "((a: T, b: T) => number)"
              }
            ]
          },
          "defaultSortOrder": {
            "type": "string",
            "enum": [
              "ascend",
              "descend"
            ]
          },
          "colSpan": {
            "type": "number"
          },
          "width": {
            "type": "string",
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "number"
              }
            ]
          },
          "className": {
            "type": "string"
          },
          "fixed": {
            "type": "string",
            "oneOf": [
              {
                "type": "boolean"
              },
              {
                "type": "string",
                "format": "Function",
                "description": "('left'"
              },
              {
                "type": "string",
                "enum": [
                  "right)"
                ]
              }
            ]
          },
          "filterIcon": {
            "type": "string",
            "format": "Element"
          },
          "filteredValue": {
            "type": "array",
            "items": [
              {
                "type": "string",
                "format": "Element"
              }
            ]
          },
          "sortOrder": {
            "type": "string",
            "oneOf": [
              {
                "type": "boolean"
              },
              {
                "type": "string",
                "format": "Function",
                "description": "('ascend'"
              },
              {
                "type": "string",
                "enum": [
                  "descend)"
                ]
              }
            ]
          }
        }
      },
      "onCellClick": {
        "type": "string",
        "format": "Function",
        "description": "(record: T, event: any) => void"
      },
      "onCell": {
        "type": "string",
        "format": "Function",
        "description": "(record: T) => any"
      }
    },
    "required": []
  },
  "TableComponents": {
    "type": "object",
    "properties": {
      "table": {
        "type": "string",
        "format": "Element"
      },
      "header": {
        "type": "object",
        "properties": {
          "wrapper": {
            "type": "string",
            "format": "Element"
          },
          "row": {
            "type": "string",
            "format": "Element"
          },
          "cell": {
            "type": "string",
            "format": "Element"
          }
        },
        "required": []
      }
    },
    "required": []
  },
  "TableLocale": {
    "type": "object",
    "properties": {
      "filterTitle": {
        "type": "string"
      },
      "filterConfirm": {
        "type": "string"
      },
      "filterReset": {
        "type": "string"
      },
      "emptyText": {
        "type": "string"
      },
      "selectAll": {
        "type": "string"
      },
      "selectInvert": {
        "type": "string"
      }
    },
    "required": []
  },
  "TableRowSelection": {
    "type": "object",
    "properties": {
      "type": {
        "type": "string",
        "enum": [
          "checkbox",
          "radio"
        ]
      },
      "selectedRowKeys": {
        "type": "string",
        "oneOf": [
          {
            "type": "array",
            "items": [
              {
                "type": "string"
              }
            ]
          },
          {
            "type": "array",
            "items": [
              {
                "type": "number"
              }
            ]
          }
        ]
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(selectedRowKeys: string[] | number[], selectedRows: Object[]) => any"
      },
      "getCheckboxProps": {
        "type": "string",
        "format": "Function",
        "description": "(record: T) => Object"
      },
      "onSelect": {
        "type": "string",
        "format": "Function",
        "description": "(record: T, selected: boolean, selectedRows: Object[]) => any"
      },
      "onSelectAll": {
        "type": "string",
        "format": "Function",
        "description": "(selected: boolean, selectedRows: Object[], changeRows: Object[]) => any"
      },
      "onSelectInvert": {
        "type": "string",
        "format": "Function",
        "description": "(selectedRows: Object[]) => any"
      },
      "selections": {
        "type": "string",
        "oneOf": [
          {
            "type": "array",
            "items": {}
          },
          {
            "type": "boolean"
          }
        ]
      },
      "hideDefaultSelections": {
        "type": "boolean"
      },
      "fixed": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "TableProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "dropdownPrefixCls": {
        "type": "string"
      },
      "rowSelection": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "checkbox",
              "radio"
            ]
          },
          "selectedRowKeys": {
            "type": "string",
            "oneOf": [
              {
                "type": "array",
                "items": [
                  {
                    "type": "string"
                  }
                ]
              },
              {
                "type": "array",
                "items": [
                  {
                    "type": "number"
                  }
                ]
              }
            ]
          },
          "onChange": {
            "type": "string",
            "format": "Function",
            "description": "(selectedRowKeys: string[] | number[], selectedRows: Object[]) => any"
          },
          "getCheckboxProps": {
            "type": "string",
            "format": "Function",
            "description": "(record: T) => Object"
          },
          "onSelect": {
            "type": "string",
            "format": "Function",
            "description": "(record: T, selected: boolean, selectedRows: Object[]) => any"
          },
          "onSelectAll": {
            "type": "string",
            "format": "Function",
            "description": "(selected: boolean, selectedRows: Object[], changeRows: Object[]) => any"
          },
          "onSelectInvert": {
            "type": "string",
            "format": "Function",
            "description": "(selectedRows: Object[]) => any"
          },
          "selections": {
            "type": "string",
            "oneOf": [
              {
                "type": "array",
                "items": {}
              },
              {
                "type": "boolean"
              }
            ]
          },
          "hideDefaultSelections": {
            "type": "boolean"
          },
          "fixed": {
            "type": "boolean"
          }
        },
        "required": []
      },
      "pagination": {
        "type": "string",
        "oneOf": [
          {
            "type": "object",
            "properties": {
              "total": {
                "type": "number"
              },
              "defaultCurrent": {
                "type": "number"
              },
              "current": {
                "type": "number"
              },
              "defaultPageSize": {
                "type": "number"
              },
              "pageSize": {
                "type": "number"
              },
              "onChange": {
                "type": "string",
                "format": "Function",
                "description": "(page: number, pageSize?: number) => void"
              },
              "showSizeChanger": {
                "type": "boolean"
              },
              "pageSizeOptions": {
                "type": "array",
                "items": [
                  {
                    "type": "string"
                  }
                ]
              },
              "onShowSizeChange": {
                "type": "string",
                "format": "Function",
                "description": "(current: number, size: number) => void"
              },
              "showQuickJumper": {
                "type": "boolean"
              },
              "showTotal": {
                "type": "string",
                "format": "Function",
                "description": "(total: number, range: [number, number]) => React.ReactNode"
              },
              "size": {
                "type": "string"
              },
              "simple": {
                "type": "boolean"
              },
              "className": {
                "type": "string"
              },
              "prefixCls": {
                "type": "string"
              },
              "selectPrefixCls": {
                "type": "string"
              },
              "itemRender": {
                "type": "string",
                "format": "Function",
                "description": "(page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next') => React.ReactNode"
              }
            },
            "required": []
          },
          {
            "type": "boolean",
            "default": false
          }
        ]
      },
      "size": {
        "type": "string",
        "enum": [
          "default",
          "middle",
          "small"
        ]
      },
      "dataSource": {
        "type": "array",
        "items": [
          {
            "type": "string",
            "format": "JSON"
          }
        ]
      },
      "components": {
        "type": "object",
        "properties": {
          "table": {
            "type": "string",
            "format": "Element"
          },
          "header": {
            "type": "object",
            "properties": {
              "wrapper": {
                "type": "string",
                "format": "Element"
              },
              "row": {
                "type": "string",
                "format": "Element"
              },
              "cell": {
                "type": "string",
                "format": "Element"
              }
            },
            "required": []
          }
        },
        "required": []
      },
      "columns": {
        "type": "array",
        "items": {
          "title": {
            "type": "string",
            "format": "Element"
          },
          "key": {
            "type": "string"
          },
          "dataIndex": {
            "type": "string"
          },
          "render": {
            "type": "string",
            "format": "Function",
            "description": "(text: any, record: T, index: number) => React.ReactNode"
          },
          "filters": {
            "type": "array",
            "items": {
              "text": {
                "type": "string"
              },
              "value": {
                "type": "string"
              },
              "children": {
                "type": "string",
                "format": "Element"
              }
            }
          },
          "onFilter": {
            "type": "string",
            "format": "Function",
            "description": "(value: any, record: T) => boolean"
          },
          "filterMultiple": {
            "type": "boolean"
          },
          "filterDropdown": {
            "type": "string",
            "format": "Element"
          },
          "filterDropdownVisible": {
            "type": "boolean"
          },
          "onFilterDropdownVisibleChange": {
            "type": "string",
            "format": "Function",
            "description": "(visible: boolean) => void"
          },
          "sorter": {
            "type": "string",
            "oneOf": [
              {
                "type": "boolean"
              },
              {
                "type": "string",
                "format": "Function",
                "description": "((a: T, b: T) => number)"
              }
            ]
          },
          "defaultSortOrder": {
            "type": "string",
            "enum": [
              "ascend",
              "descend"
            ]
          },
          "colSpan": {
            "type": "number"
          },
          "width": {
            "type": "string",
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "number"
              }
            ]
          },
          "className": {
            "type": "string"
          },
          "fixed": {
            "type": "string",
            "oneOf": [
              {
                "type": "boolean"
              },
              {
                "type": "string",
                "format": "Function",
                "description": "('left'"
              },
              {
                "type": "string",
                "enum": [
                  "right)"
                ]
              }
            ]
          },
          "filterIcon": {
            "type": "string",
            "format": "Element"
          },
          "filteredValue": {
            "type": "array",
            "items": [
              {
                "type": "string",
                "format": "Element"
              }
            ]
          },
          "sortOrder": {
            "type": "string",
            "oneOf": [
              {
                "type": "boolean"
              },
              {
                "type": "string",
                "format": "Function",
                "description": "('ascend'"
              },
              {
                "type": "string",
                "enum": [
                  "descend)"
                ]
              }
            ]
          },
          "children": {
            "type": "array",
            "items": {
              "title": {
                "type": "string",
                "format": "Element"
              },
              "key": {
                "type": "string"
              },
              "dataIndex": {
                "type": "string"
              },
              "render": {
                "type": "string",
                "format": "Function",
                "description": "(text: any, record: T, index: number) => React.ReactNode"
              },
              "filters": {
                "type": "array",
                "items": {
                  "text": {
                    "type": "string"
                  },
                  "value": {
                    "type": "string"
                  },
                  "children": {
                    "type": "string",
                    "format": "Element"
                  }
                }
              },
              "onFilter": {
                "type": "string",
                "format": "Function",
                "description": "(value: any, record: T) => boolean"
              },
              "filterMultiple": {
                "type": "boolean"
              },
              "filterDropdown": {
                "type": "string",
                "format": "Element"
              },
              "filterDropdownVisible": {
                "type": "boolean"
              },
              "onFilterDropdownVisibleChange": {
                "type": "string",
                "format": "Function",
                "description": "(visible: boolean) => void"
              },
              "sorter": {
                "type": "string",
                "oneOf": [
                  {
                    "type": "boolean"
                  },
                  {
                    "type": "string",
                    "format": "Function",
                    "description": "((a: T, b: T) => number)"
                  }
                ]
              },
              "defaultSortOrder": {
                "type": "string",
                "enum": [
                  "ascend",
                  "descend"
                ]
              },
              "colSpan": {
                "type": "number"
              },
              "width": {
                "type": "string",
                "oneOf": [
                  {
                    "type": "string"
                  },
                  {
                    "type": "number"
                  }
                ]
              },
              "className": {
                "type": "string"
              },
              "fixed": {
                "type": "string",
                "oneOf": [
                  {
                    "type": "boolean"
                  },
                  {
                    "type": "string",
                    "format": "Function",
                    "description": "('left'"
                  },
                  {
                    "type": "string",
                    "enum": [
                      "right)"
                    ]
                  }
                ]
              },
              "filterIcon": {
                "type": "string",
                "format": "Element"
              },
              "filteredValue": {
                "type": "array",
                "items": [
                  {
                    "type": "string",
                    "format": "Element"
                  }
                ]
              },
              "sortOrder": {
                "type": "string",
                "oneOf": [
                  {
                    "type": "boolean"
                  },
                  {
                    "type": "string",
                    "format": "Function",
                    "description": "('ascend'"
                  },
                  {
                    "type": "string",
                    "enum": [
                      "descend)"
                    ]
                  }
                ]
              }
            }
          },
          "onCellClick": {
            "type": "string",
            "format": "Function",
            "description": "(record: T, event: any) => void"
          },
          "onCell": {
            "type": "string",
            "format": "Function",
            "description": "(record: T) => any"
          }
        }
      },
      "rowKey": {
        "type": "string",
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "string",
            "format": "Function",
            "description": "((record: T, index: number) => string)"
          }
        ]
      },
      "rowClassName": {
        "type": "string",
        "format": "Function",
        "description": "(record: T, index: number) => string"
      },
      "expandedRowRender": {
        "type": "string",
        "format": "Element"
      },
      "defaultExpandedRowKeys": {
        "type": "string",
        "oneOf": [
          {
            "type": "array",
            "items": [
              {
                "type": "string"
              }
            ]
          },
          {
            "type": "array",
            "items": [
              {
                "type": "number"
              }
            ]
          }
        ]
      },
      "expandedRowKeys": {
        "type": "string",
        "oneOf": [
          {
            "type": "array",
            "items": [
              {
                "type": "string"
              }
            ]
          },
          {
            "type": "array",
            "items": [
              {
                "type": "number"
              }
            ]
          }
        ]
      },
      "expandIconAsCell": {
        "type": "boolean"
      },
      "expandIconColumnIndex": {
        "type": "number"
      },
      "onExpandedRowsChange": {
        "type": "string",
        "format": "Function",
        "description": "(expandedRowKeys: string[] | number[]) => void"
      },
      "onExpand": {
        "type": "string",
        "format": "Function",
        "description": "(expanded: boolean, record: T) => void"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(pagination: PaginationProps | boolean, filters: string[], sorter: Object) => any"
      },
      "loading": {
        "type": "string",
        "oneOf": [
          {
            "type": "boolean"
          },
          {
            "type": "object",
            "properties": {
              "prefixCls": {
                "type": "string"
              },
              "className": {
                "type": "string"
              },
              "spinning": {
                "type": "boolean"
              },
              "size": {
                "type": "string",
                "enum": [
                  "small",
                  "default",
                  "large"
                ]
              },
              "tip": {
                "type": "string"
              },
              "delay": {
                "type": "number"
              },
              "wrapperClassName": {
                "type": "string"
              },
              "indicator": {
                "type": "string",
                "format": "Element"
              }
            },
            "required": []
          }
        ]
      },
      "indentSize": {
        "type": "number"
      },
      "onRowClick": {
        "type": "string",
        "format": "Function",
        "description": "(record: T, index: number, event: Event) => any"
      },
      "onRow": {
        "type": "string",
        "format": "Function",
        "description": "(record: T, index: number) => any"
      },
      "useFixedHeader": {
        "type": "boolean"
      },
      "bordered": {
        "type": "boolean"
      },
      "showHeader": {
        "type": "boolean"
      },
      "footer": {
        "type": "string",
        "format": "Function",
        "description": "(currentPageData: Object[]) => React.ReactNode"
      },
      "title": {
        "type": "string",
        "format": "Function",
        "description": "(currentPageData: Object[]) => React.ReactNode"
      },
      "scroll": {
        "type": "string",
        "oneOf": [
          {
            "type": "object",
            "properties": {},
            "required": []
          },
          {
            "type": "number"
          }
        ]
      }
    },
    "required": []
  },
  "TableStateFilters": {
    "type": "object",
    "properties": {
      "key": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      }
    },
    "required": [
      "key"
    ]
  },
  "TableState": {
    "type": "object",
    "properties": {
      "pagination": {
        "type": "object",
        "properties": {
          "total": {
            "type": "number"
          },
          "defaultCurrent": {
            "type": "number"
          },
          "current": {
            "type": "number"
          },
          "defaultPageSize": {
            "type": "number"
          },
          "pageSize": {
            "type": "number"
          },
          "onChange": {
            "type": "string",
            "format": "Function",
            "description": "(page: number, pageSize?: number) => void"
          },
          "showSizeChanger": {
            "type": "boolean"
          },
          "pageSizeOptions": {
            "type": "array",
            "items": [
              {
                "type": "string"
              }
            ]
          },
          "onShowSizeChange": {
            "type": "string",
            "format": "Function",
            "description": "(current: number, size: number) => void"
          },
          "showQuickJumper": {
            "type": "boolean"
          },
          "showTotal": {
            "type": "string",
            "format": "Function",
            "description": "(total: number, range: [number, number]) => React.ReactNode"
          },
          "size": {
            "type": "string"
          },
          "simple": {
            "type": "boolean"
          },
          "className": {
            "type": "string"
          },
          "prefixCls": {
            "type": "string"
          },
          "selectPrefixCls": {
            "type": "string"
          },
          "itemRender": {
            "type": "string",
            "format": "Function",
            "description": "(page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next') => React.ReactNode"
          }
        },
        "required": []
      },
      "filters": {
        "type": "object",
        "properties": {
          "key": {
            "type": "array",
            "items": [
              {
                "type": "string"
              }
            ]
          }
        },
        "required": [
          "key"
        ]
      },
      "sortColumn": {
        "type": "string",
        "oneOf": [
          {
            "type": "object",
            "properties": {
              "title": {
                "type": "string",
                "format": "Element"
              },
              "key": {
                "type": "string"
              },
              "dataIndex": {
                "type": "string"
              },
              "render": {
                "type": "string",
                "format": "Function",
                "description": "(text: any, record: T, index: number) => React.ReactNode"
              },
              "filters": {
                "type": "array",
                "items": {
                  "text": {
                    "type": "string"
                  },
                  "value": {
                    "type": "string"
                  },
                  "children": {
                    "type": "string",
                    "format": "Element"
                  }
                }
              },
              "onFilter": {
                "type": "string",
                "format": "Function",
                "description": "(value: any, record: T) => boolean"
              },
              "filterMultiple": {
                "type": "boolean"
              },
              "filterDropdown": {
                "type": "string",
                "format": "Element"
              },
              "filterDropdownVisible": {
                "type": "boolean"
              },
              "onFilterDropdownVisibleChange": {
                "type": "string",
                "format": "Function",
                "description": "(visible: boolean) => void"
              },
              "sorter": {
                "type": "string",
                "oneOf": [
                  {
                    "type": "boolean"
                  },
                  {
                    "type": "string",
                    "format": "Function",
                    "description": "((a: T, b: T) => number)"
                  }
                ]
              },
              "defaultSortOrder": {
                "type": "string",
                "enum": [
                  "ascend",
                  "descend"
                ]
              },
              "colSpan": {
                "type": "number"
              },
              "width": {
                "type": "string",
                "oneOf": [
                  {
                    "type": "string"
                  },
                  {
                    "type": "number"
                  }
                ]
              },
              "className": {
                "type": "string"
              },
              "fixed": {
                "type": "string",
                "oneOf": [
                  {
                    "type": "boolean"
                  },
                  {
                    "type": "string",
                    "format": "Function",
                    "description": "('left'"
                  },
                  {
                    "type": "string",
                    "enum": [
                      "right)"
                    ]
                  }
                ]
              },
              "filterIcon": {
                "type": "string",
                "format": "Element"
              },
              "filteredValue": {
                "type": "array",
                "items": [
                  {
                    "type": "string",
                    "format": "Element"
                  }
                ]
              },
              "sortOrder": {
                "type": "string",
                "oneOf": [
                  {
                    "type": "boolean"
                  },
                  {
                    "type": "string",
                    "format": "Function",
                    "description": "('ascend'"
                  },
                  {
                    "type": "string",
                    "enum": [
                      "descend)"
                    ]
                  }
                ]
              },
              "children": {
                "type": "array",
                "items": {
                  "title": {
                    "type": "string",
                    "format": "Element"
                  },
                  "key": {
                    "type": "string"
                  },
                  "dataIndex": {
                    "type": "string"
                  },
                  "render": {
                    "type": "string",
                    "format": "Function",
                    "description": "(text: any, record: T, index: number) => React.ReactNode"
                  },
                  "filters": {
                    "type": "array",
                    "items": {
                      "text": {
                        "type": "string"
                      },
                      "value": {
                        "type": "string"
                      },
                      "children": {
                        "type": "string",
                        "format": "Element"
                      }
                    }
                  },
                  "onFilter": {
                    "type": "string",
                    "format": "Function",
                    "description": "(value: any, record: T) => boolean"
                  },
                  "filterMultiple": {
                    "type": "boolean"
                  },
                  "filterDropdown": {
                    "type": "string",
                    "format": "Element"
                  },
                  "filterDropdownVisible": {
                    "type": "boolean"
                  },
                  "onFilterDropdownVisibleChange": {
                    "type": "string",
                    "format": "Function",
                    "description": "(visible: boolean) => void"
                  },
                  "sorter": {
                    "type": "string",
                    "oneOf": [
                      {
                        "type": "boolean"
                      },
                      {
                        "type": "string",
                        "format": "Function",
                        "description": "((a: T, b: T) => number)"
                      }
                    ]
                  },
                  "defaultSortOrder": {
                    "type": "string",
                    "enum": [
                      "ascend",
                      "descend"
                    ]
                  },
                  "colSpan": {
                    "type": "number"
                  },
                  "width": {
                    "type": "string",
                    "oneOf": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "number"
                      }
                    ]
                  },
                  "className": {
                    "type": "string"
                  },
                  "fixed": {
                    "type": "string",
                    "oneOf": [
                      {
                        "type": "boolean"
                      },
                      {
                        "type": "string",
                        "format": "Function",
                        "description": "('left'"
                      },
                      {
                        "type": "string",
                        "enum": [
                          "right)"
                        ]
                      }
                    ]
                  },
                  "filterIcon": {
                    "type": "string",
                    "format": "Element"
                  },
                  "filteredValue": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string",
                        "format": "Element"
                      }
                    ]
                  },
                  "sortOrder": {
                    "type": "string",
                    "oneOf": [
                      {
                        "type": "boolean"
                      },
                      {
                        "type": "string",
                        "format": "Function",
                        "description": "('ascend'"
                      },
                      {
                        "type": "string",
                        "enum": [
                          "descend)"
                        ]
                      }
                    ]
                  }
                }
              },
              "onCellClick": {
                "type": "string",
                "format": "Function",
                "description": "(record: T, event: any) => void"
              },
              "onCell": {
                "type": "string",
                "format": "Function",
                "description": "(record: T) => any"
              }
            },
            "required": []
          },
          {
            "type": "null"
          }
        ]
      },
      "sortOrder": {
        "type": "string"
      }
    },
    "required": [
      "pagination",
      "filters",
      "sortColumn",
      "sortOrder"
    ]
  },
  "SelectionItem": {
    "type": "object",
    "properties": {
      "key": {
        "type": "string"
      },
      "text": {
        "type": "string",
        "format": "Element"
      },
      "onSelect": {
        "type": "string",
        "format": "Function",
        "description": "(key: string[]) => any"
      }
    },
    "required": [
      "key",
      "text",
      "onSelect"
    ]
  },
  "SelectionCheckboxAllProps": {
    "type": "object",
    "properties": {
      "store": {
        "type": "object",
        "properties": {
          "setState": {
            "type": "string",
            "format": "Function",
            "description": "(partial: Object) => void"
          },
          "getState": {
            "type": "string",
            "format": "Function",
            "description": "() => any"
          },
          "subscribe": {
            "type": "string",
            "format": "Function",
            "description": "(listener: () => void) => () => void"
          }
        },
        "required": [
          "setState",
          "getState",
          "subscribe"
        ]
      },
      "locale": {
        "type": "string",
        "format": "Element"
      },
      "disabled": {
        "type": "boolean"
      },
      "getCheckboxPropsByItem": {
        "type": "string",
        "format": "Function",
        "description": "(item: any, index: number) => any"
      },
      "getRecordKey": {
        "type": "string",
        "format": "Function",
        "description": "(record: any, index?: number) => string"
      },
      "data": {
        "type": "array",
        "items": [
          {
            "type": "string",
            "format": "JSON"
          }
        ]
      },
      "prefixCls": {
        "type": "string",
        "oneOf": [
          {
            "type": "string"
          }
        ]
      },
      "onSelect": {
        "type": "string",
        "format": "Function",
        "description": "(key: string, index: number, selectFunc: any) => void"
      },
      "hideDefaultSelections": {
        "type": "boolean"
      },
      "selections": {
        "type": "string",
        "oneOf": [
          {
            "type": "array",
            "items": {
              "key": {
                "type": "string"
              },
              "text": {
                "type": "string",
                "format": "Element"
              },
              "onSelect": {
                "type": "string",
                "format": "Function",
                "description": "(key: string[]) => any"
              }
            }
          },
          {
            "type": "boolean"
          }
        ]
      },
      "getPopupContainer": {
        "type": "string",
        "format": "Function",
        "description": "(triggerNode?: Element) => HTMLElement"
      }
    },
    "required": [
      "store",
      "locale",
      "disabled",
      "getCheckboxPropsByItem",
      "getRecordKey",
      "data",
      "prefixCls",
      "onSelect",
      "getPopupContainer"
    ]
  },
  "SelectionCheckboxAllState": {
    "type": "object",
    "properties": {
      "checked": {
        "type": "boolean"
      },
      "indeterminate": {
        "type": "boolean"
      }
    },
    "required": [
      "checked",
      "indeterminate"
    ]
  },
  "SelectionBoxProps": {
    "type": "object",
    "properties": {
      "store": {
        "type": "object",
        "properties": {
          "setState": {
            "type": "string",
            "format": "Function",
            "description": "(partial: Object) => void"
          },
          "getState": {
            "type": "string",
            "format": "Function",
            "description": "() => any"
          },
          "subscribe": {
            "type": "string",
            "format": "Function",
            "description": "(listener: () => void) => () => void"
          }
        },
        "required": [
          "setState",
          "getState",
          "subscribe"
        ]
      },
      "type": {
        "type": "string",
        "enum": [
          "checkbox",
          "radio"
        ]
      },
      "defaultSelection": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "rowIndex": {
        "type": "string"
      },
      "disabled": {
        "type": "boolean"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(value: string[]) => any"
      }
    },
    "required": [
      "store",
      "defaultSelection",
      "rowIndex",
      "onChange"
    ]
  },
  "SelectionBoxState": {
    "type": "object",
    "properties": {
      "checked": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "FilterMenuProps": {
    "type": "object",
    "properties": {
      "locale": {
        "type": "object",
        "properties": {
          "filterTitle": {
            "type": "string"
          },
          "filterConfirm": {
            "type": "string"
          },
          "filterReset": {
            "type": "string"
          },
          "emptyText": {
            "type": "string"
          },
          "selectAll": {
            "type": "string"
          },
          "selectInvert": {
            "type": "string"
          }
        },
        "required": []
      },
      "selectedKeys": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "column": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "format": "Element"
          },
          "key": {
            "type": "string"
          },
          "dataIndex": {
            "type": "string"
          },
          "render": {
            "type": "string",
            "format": "Function",
            "description": "(text: any, record: T, index: number) => React.ReactNode"
          },
          "filters": {
            "type": "array",
            "items": {
              "text": {
                "type": "string"
              },
              "value": {
                "type": "string"
              },
              "children": {
                "type": "string",
                "format": "Element"
              }
            }
          },
          "onFilter": {
            "type": "string",
            "format": "Function",
            "description": "(value: any, record: T) => boolean"
          },
          "filterMultiple": {
            "type": "boolean"
          },
          "filterDropdown": {
            "type": "string",
            "format": "Element"
          },
          "filterDropdownVisible": {
            "type": "boolean"
          },
          "onFilterDropdownVisibleChange": {
            "type": "string",
            "format": "Function",
            "description": "(visible: boolean) => void"
          },
          "sorter": {
            "type": "string",
            "oneOf": [
              {
                "type": "boolean"
              },
              {
                "type": "string",
                "format": "Function",
                "description": "((a: T, b: T) => number)"
              }
            ]
          },
          "defaultSortOrder": {
            "type": "string",
            "enum": [
              "ascend",
              "descend"
            ]
          },
          "colSpan": {
            "type": "number"
          },
          "width": {
            "type": "string",
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "number"
              }
            ]
          },
          "className": {
            "type": "string"
          },
          "fixed": {
            "type": "string",
            "oneOf": [
              {
                "type": "boolean"
              },
              {
                "type": "string",
                "format": "Function",
                "description": "('left'"
              },
              {
                "type": "string",
                "enum": [
                  "right)"
                ]
              }
            ]
          },
          "filterIcon": {
            "type": "string",
            "format": "Element"
          },
          "filteredValue": {
            "type": "array",
            "items": [
              {
                "type": "string",
                "format": "Element"
              }
            ]
          },
          "sortOrder": {
            "type": "string",
            "oneOf": [
              {
                "type": "boolean"
              },
              {
                "type": "string",
                "format": "Function",
                "description": "('ascend'"
              },
              {
                "type": "string",
                "enum": [
                  "descend)"
                ]
              }
            ]
          },
          "children": {
            "type": "array",
            "items": {
              "title": {
                "type": "string",
                "format": "Element"
              },
              "key": {
                "type": "string"
              },
              "dataIndex": {
                "type": "string"
              },
              "render": {
                "type": "string",
                "format": "Function",
                "description": "(text: any, record: T, index: number) => React.ReactNode"
              },
              "filters": {
                "type": "array",
                "items": {
                  "text": {
                    "type": "string"
                  },
                  "value": {
                    "type": "string"
                  },
                  "children": {
                    "type": "string",
                    "format": "Element"
                  }
                }
              },
              "onFilter": {
                "type": "string",
                "format": "Function",
                "description": "(value: any, record: T) => boolean"
              },
              "filterMultiple": {
                "type": "boolean"
              },
              "filterDropdown": {
                "type": "string",
                "format": "Element"
              },
              "filterDropdownVisible": {
                "type": "boolean"
              },
              "onFilterDropdownVisibleChange": {
                "type": "string",
                "format": "Function",
                "description": "(visible: boolean) => void"
              },
              "sorter": {
                "type": "string",
                "oneOf": [
                  {
                    "type": "boolean"
                  },
                  {
                    "type": "string",
                    "format": "Function",
                    "description": "((a: T, b: T) => number)"
                  }
                ]
              },
              "defaultSortOrder": {
                "type": "string",
                "enum": [
                  "ascend",
                  "descend"
                ]
              },
              "colSpan": {
                "type": "number"
              },
              "width": {
                "type": "string",
                "oneOf": [
                  {
                    "type": "string"
                  },
                  {
                    "type": "number"
                  }
                ]
              },
              "className": {
                "type": "string"
              },
              "fixed": {
                "type": "string",
                "oneOf": [
                  {
                    "type": "boolean"
                  },
                  {
                    "type": "string",
                    "format": "Function",
                    "description": "('left'"
                  },
                  {
                    "type": "string",
                    "enum": [
                      "right)"
                    ]
                  }
                ]
              },
              "filterIcon": {
                "type": "string",
                "format": "Element"
              },
              "filteredValue": {
                "type": "array",
                "items": [
                  {
                    "type": "string",
                    "format": "Element"
                  }
                ]
              },
              "sortOrder": {
                "type": "string",
                "oneOf": [
                  {
                    "type": "boolean"
                  },
                  {
                    "type": "string",
                    "format": "Function",
                    "description": "('ascend'"
                  },
                  {
                    "type": "string",
                    "enum": [
                      "descend)"
                    ]
                  }
                ]
              }
            }
          },
          "onCellClick": {
            "type": "string",
            "format": "Function",
            "description": "(record: T, event: any) => void"
          },
          "onCell": {
            "type": "string",
            "format": "Function",
            "description": "(record: T) => any"
          }
        },
        "required": []
      },
      "confirmFilter": {
        "type": "string",
        "format": "Function",
        "description": "(column: ColumnProps<T>, selectedKeys: string[]) => any"
      },
      "prefixCls": {
        "type": "string"
      },
      "dropdownPrefixCls": {
        "type": "string"
      },
      "getPopupContainer": {
        "type": "string",
        "format": "Function",
        "description": "(triggerNode?: Element) => HTMLElement"
      }
    },
    "required": [
      "locale",
      "selectedKeys",
      "column",
      "confirmFilter",
      "prefixCls",
      "dropdownPrefixCls",
      "getPopupContainer"
    ]
  },
  "FilterMenuState": {
    "type": "object",
    "properties": {
      "selectedKeys": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "keyPathOfSelectedItem": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          }
        },
        "required": [
          "key"
        ]
      }
    },
    "required": [
      "selectedKeys",
      "keyPathOfSelectedItem"
    ]
  },
  "TabsProps": {
    "type": "object",
    "properties": {
      "activeKey": {
        "type": "string"
      },
      "defaultActiveKey": {
        "type": "string"
      },
      "hideAdd": {
        "type": "boolean"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(activeKey: string) => void"
      },
      "onTabClick": {
        "type": "string",
        "format": "Function"
      },
      "onPrevClick": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "onNextClick": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "tabBarExtraContent": {
        "type": "string",
        "oneOf": [
          {
            "type": "string",
            "format": "Element"
          },
          {
            "type": "null"
          }
        ]
      },
      "tabBarStyle": {
        "type": "object",
        "properties": {},
        "format": "CSS"
      },
      "type": {
        "type": "string",
        "enum": [
          "line",
          "card",
          "editable-card"
        ]
      },
      "tabPosition": {
        "type": "string",
        "enum": [
          "top",
          "right",
          "bottom",
          "left"
        ]
      },
      "onEdit": {
        "type": "string",
        "format": "Function",
        "description": "(targetKey: string | React.MouseEvent<HTMLElement>, action: any) => void"
      },
      "size": {
        "type": "string",
        "enum": [
          "large",
          "default",
          "small"
        ]
      },
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "animated": {
        "type": "string",
        "oneOf": [
          {
            "type": "boolean"
          },
          {
            "type": "object",
            "properties": {
              "inkBar": {
                "type": "boolean"
              },
              "tabPane": {
                "type": "boolean"
              }
            },
            "required": [
              "inkBar",
              "tabPane"
            ]
          }
        ]
      }
    },
    "required": []
  },
  "TabPaneProps": {
    "type": "object",
    "properties": {
      "tab": {
        "type": "string",
        "oneOf": [
          {
            "type": "string",
            "format": "Element"
          },
          {
            "type": "string"
          }
        ]
      },
      "closable": {
        "type": "boolean"
      },
      "className": {
        "type": "string"
      },
      "disabled": {
        "type": "boolean"
      },
      "forceRender": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "CheckableTagProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "checked": {
        "type": "boolean"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(checked: boolean) => void"
      }
    },
    "required": [
      "checked"
    ]
  },
  "TagProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "color": {
        "type": "string"
      },
      "closable": {
        "type": "boolean"
      },
      "onClose": {
        "type": "string",
        "format": "Function"
      },
      "afterClose": {
        "type": "string",
        "format": "Function"
      }
    },
    "required": []
  },
  "TagState": {
    "type": "object",
    "properties": {
      "closing": {
        "type": "boolean"
      },
      "closed": {
        "type": "boolean"
      }
    },
    "required": [
      "closing",
      "closed"
    ]
  },
  "TimelineProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "pending": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": []
  },
  "TimeLineItemProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "color": {
        "type": "string"
      },
      "dot": {
        "type": "string",
        "format": "Element"
      },
      "pending": {
        "type": "boolean"
      },
      "last": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "TimePickerProps": {
    "type": "object",
    "properties": {
      "className": {
        "type": "string"
      },
      "size": {
        "type": "string",
        "enum": [
          "large",
          "default",
          "small"
        ]
      },
      "value": {
        "type": "string",
        "format": "Moment"
      },
      "defaultValue": {
        "type": "string",
        "format": "Moment"
      },
      "open": {
        "type": "boolean"
      },
      "format": {
        "type": "string"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(time: moment.Moment, timeString: string) => void"
      },
      "onOpenChange": {
        "type": "string",
        "format": "Function",
        "description": "(open: boolean) => void"
      },
      "disabled": {
        "type": "boolean"
      },
      "placeholder": {
        "type": "string"
      },
      "prefixCls": {
        "type": "string"
      },
      "hideDisabledOptions": {
        "type": "boolean"
      },
      "disabledHours": {
        "type": "string",
        "format": "Function",
        "description": "() => number[]"
      },
      "disabledMinutes": {
        "type": "string",
        "format": "Function",
        "description": "(selectedHour: number) => number[]"
      },
      "disabledSeconds": {
        "type": "string",
        "format": "Function",
        "description": "(selectedHour: number, selectedMinute: number) => number[]"
      },
      "getPopupContainer": {
        "type": "string",
        "format": "Function",
        "description": "(triggerNode: Element) => HTMLElement"
      },
      "addon": {
        "type": "string",
        "format": "Function"
      },
      "use12Hours": {
        "type": "boolean"
      },
      "focusOnOpen": {
        "type": "boolean"
      },
      "hourStep": {
        "type": "number"
      },
      "minuteStep": {
        "type": "number"
      },
      "secondStep": {
        "type": "number"
      },
      "allowEmpty": {
        "type": "boolean"
      },
      "clearText": {
        "type": "string"
      },
      "defaultOpenValue": {
        "type": "string",
        "format": "Moment"
      },
      "popupClassName": {
        "type": "string"
      }
    },
    "required": []
  },
  "TimePickerLocale": {
    "type": "object",
    "properties": {
      "placeholder": {
        "type": "string"
      }
    },
    "required": [
      "placeholder"
    ]
  },
  "AbstractTooltipProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "overlayClassName": {
        "type": "string"
      },
      "overlayStyle": {
        "type": "object",
        "properties": {},
        "format": "CSS"
      },
      "placement": {
        "type": "string",
        "enum": [
          "top",
          "left",
          "right",
          "bottom",
          "topLeft",
          "topRight",
          "bottomLeft",
          "bottomRight",
          "leftTop",
          "leftBottom",
          "rightTop",
          "rightBottom"
        ]
      },
      "builtinPlacements": {
        "type": "object",
        "properties": {},
        "required": []
      },
      "defaultVisible": {
        "type": "boolean"
      },
      "visible": {
        "type": "boolean"
      },
      "onVisibleChange": {
        "type": "string",
        "format": "Function",
        "description": "(visible: boolean) => void"
      },
      "mouseEnterDelay": {
        "type": "number"
      },
      "mouseLeaveDelay": {
        "type": "number"
      },
      "transitionName": {
        "type": "string"
      },
      "trigger": {
        "type": "string",
        "enum": [
          "hover",
          "focus",
          "click"
        ]
      },
      "openClassName": {
        "type": "string"
      },
      "arrowPointAtCenter": {
        "type": "boolean"
      },
      "autoAdjustOverflow": {
        "type": "string",
        "oneOf": [
          {
            "type": "boolean"
          },
          {
            "type": "object",
            "properties": {},
            "required": []
          }
        ]
      },
      "getTooltipContainer": {
        "type": "string",
        "format": "Function",
        "description": "(triggerNode: Element) => HTMLElement"
      },
      "getPopupContainer": {
        "type": "string",
        "format": "Function",
        "description": "(triggerNode: Element) => HTMLElement"
      },
      "children": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": []
  },
  "TooltipProps": {
    "type": "object",
    "properties": {
      "title": {
        "type": "string",
        "oneOf": [
          {
            "type": "string",
            "format": "Element"
          },
          {
            "type": "string",
            "format": "Function",
            "description": "() => React.ReactNode"
          }
        ]
      },
      "overlay": {
        "type": "string",
        "oneOf": [
          {
            "type": "string",
            "format": "Element"
          },
          {
            "type": "string",
            "format": "Function",
            "description": "() => React.ReactNode"
          }
        ]
      }
    },
    "required": []
  },
  "AdjustOverflow": {
    "type": "object",
    "properties": {
      "adjustX": {
        "type": "string",
        "enum": [
          "0",
          "1"
        ]
      },
      "adjustY": {
        "type": "string",
        "enum": [
          "0",
          "1"
        ]
      }
    },
    "required": []
  },
  "PlacementsConfig": {
    "type": "object",
    "properties": {
      "arrowWidth": {
        "type": "number"
      },
      "horizontalArrowShift": {
        "type": "number"
      },
      "verticalArrowShift": {
        "type": "number"
      },
      "arrowPointAtCenter": {
        "type": "boolean"
      },
      "autoAdjustOverflow": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": []
  },
  "TransferItem": {
    "type": "object",
    "properties": {
      "key": {
        "type": "string"
      },
      "title": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "disabled": {
        "type": "boolean"
      }
    },
    "required": [
      "key",
      "title"
    ]
  },
  "TransferProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "dataSource": {
        "type": "array",
        "items": {
          "key": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "disabled": {
            "type": "boolean"
          }
        }
      },
      "targetKeys": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "selectedKeys": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "render": {
        "type": "string",
        "format": "Function",
        "description": "(record: TransferItem) => React.ReactNode"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(targetKeys: string[], direction: string, moveKeys: any) => void"
      },
      "onSelectChange": {
        "type": "string",
        "format": "Function",
        "description": "(sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void"
      },
      "listStyle": {
        "type": "object",
        "properties": {},
        "format": "CSS"
      },
      "titles": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "operations": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "showSearch": {
        "type": "boolean"
      },
      "filterOption": {
        "type": "string",
        "format": "Function",
        "description": "(inputValue: any, item: any) => boolean"
      },
      "searchPlaceholder": {
        "type": "string"
      },
      "notFoundContent": {
        "type": "string",
        "format": "Element"
      },
      "footer": {
        "type": "string",
        "format": "Function",
        "description": "(props: TransferListProps) => React.ReactNode"
      },
      "body": {
        "type": "string",
        "format": "Function",
        "description": "(props: TransferListProps) => React.ReactNode"
      },
      "rowKey": {
        "type": "string",
        "format": "Function",
        "description": "(record: TransferItem) => string"
      },
      "onSearchChange": {
        "type": "string",
        "format": "Function",
        "description": "(direction: TransferDirection, e: React.ChangeEvent<HTMLInputElement>) => void"
      }
    },
    "required": [
      "dataSource"
    ]
  },
  "TransferLocale": {
    "type": "object",
    "properties": {
      "titles": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "notFoundContent": {
        "type": "string"
      },
      "searchPlaceholder": {
        "type": "string"
      },
      "itemUnit": {
        "type": "string"
      },
      "itemsUnit": {
        "type": "string"
      }
    },
    "required": [
      "titles",
      "notFoundContent",
      "searchPlaceholder",
      "itemUnit",
      "itemsUnit"
    ]
  },
  "TransferListProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "titleText": {
        "type": "string"
      },
      "dataSource": {
        "type": "array",
        "items": {
          "key": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "disabled": {
            "type": "boolean"
          }
        }
      },
      "filter": {
        "type": "string"
      },
      "filterOption": {
        "type": "string",
        "format": "Function",
        "description": "(filterText: any, item: any) => boolean"
      },
      "checkedKeys": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "handleFilter": {
        "type": "string",
        "format": "Function",
        "description": "(e: any) => void"
      },
      "handleSelect": {
        "type": "string",
        "format": "Function",
        "description": "(selectedItem: any, checked: boolean) => void"
      },
      "handleSelectAll": {
        "type": "string",
        "format": "Function",
        "description": "(dataSource: any[], checkAll: boolean) => void"
      },
      "handleClear": {
        "type": "string",
        "format": "Function",
        "description": "() => void"
      },
      "render": {
        "type": "string",
        "format": "Function",
        "description": "(item: any) => any"
      },
      "showSearch": {
        "type": "boolean"
      },
      "searchPlaceholder": {
        "type": "string"
      },
      "notFoundContent": {
        "type": "string",
        "format": "Element"
      },
      "itemUnit": {
        "type": "string"
      },
      "itemsUnit": {
        "type": "string"
      },
      "body": {
        "type": "string",
        "format": "Function",
        "description": "(props: any) => any"
      },
      "footer": {
        "type": "string",
        "format": "Function",
        "description": "(props: any) => void"
      }
    },
    "required": [
      "prefixCls",
      "titleText",
      "dataSource",
      "filter",
      "checkedKeys",
      "handleFilter",
      "handleSelect",
      "handleSelectAll",
      "handleClear",
      "searchPlaceholder",
      "notFoundContent",
      "itemUnit",
      "itemsUnit"
    ]
  },
  "TransferOperationProps": {
    "type": "object",
    "properties": {
      "className": {
        "type": "string"
      },
      "leftArrowText": {
        "type": "string"
      },
      "rightArrowText": {
        "type": "string"
      },
      "moveToLeft": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "moveToRight": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "leftActive": {
        "type": "boolean"
      },
      "rightActive": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "AntTreeNodeProps": {
    "type": "object",
    "properties": {
      "disabled": {
        "type": "boolean"
      },
      "disableCheckbox": {
        "type": "boolean"
      },
      "title": {
        "type": "string",
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "string",
            "format": "Element"
          }
        ]
      },
      "key": {
        "type": "string"
      },
      "isLeaf": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "AntTreeNode": {
    "type": "object",
    "properties": {},
    "required": []
  },
  "AntTreeNodeEvent": {
    "type": "object",
    "properties": {
      "event": {
        "type": "string",
        "enum": [
          "check",
          "select"
        ]
      },
      "node": {
        "type": "object",
        "properties": {
          "disabled": {
            "type": "boolean"
          },
          "disableCheckbox": {
            "type": "boolean"
          },
          "title": {
            "type": "string",
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "string",
                "format": "Element"
              }
            ]
          },
          "key": {
            "type": "string"
          },
          "isLeaf": {
            "type": "boolean"
          }
        },
        "required": []
      },
      "checked": {
        "type": "boolean"
      },
      "checkedNodes": {
        "type": "array",
        "items": {
          "disabled": {
            "type": "boolean"
          },
          "disableCheckbox": {
            "type": "boolean"
          },
          "title": {
            "type": "string",
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "string",
                "format": "Element"
              }
            ]
          },
          "key": {
            "type": "string"
          },
          "isLeaf": {
            "type": "boolean"
          }
        }
      },
      "selected": {
        "type": "boolean"
      },
      "selectedNodes": {
        "type": "array",
        "items": {
          "disabled": {
            "type": "boolean"
          },
          "disableCheckbox": {
            "type": "boolean"
          },
          "title": {
            "type": "string",
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "string",
                "format": "Element"
              }
            ]
          },
          "key": {
            "type": "string"
          },
          "isLeaf": {
            "type": "boolean"
          }
        }
      }
    },
    "required": [
      "event",
      "node"
    ]
  },
  "AntTreeNodeMouseEvent": {
    "type": "object",
    "properties": {
      "node": {
        "type": "object",
        "properties": {
          "disabled": {
            "type": "boolean"
          },
          "disableCheckbox": {
            "type": "boolean"
          },
          "title": {
            "type": "string",
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "string",
                "format": "Element"
              }
            ]
          },
          "key": {
            "type": "string"
          },
          "isLeaf": {
            "type": "boolean"
          }
        },
        "required": []
      },
      "event": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      }
    },
    "required": [
      "node",
      "event"
    ]
  },
  "TreeProps": {
    "type": "object",
    "properties": {
      "showLine": {
        "type": "boolean"
      },
      "className": {
        "type": "string"
      },
      "multiple": {
        "type": "boolean"
      },
      "autoExpandParent": {
        "type": "boolean"
      },
      "checkStrictly": {
        "type": "boolean"
      },
      "checkable": {
        "type": "boolean"
      },
      "defaultExpandAll": {
        "type": "boolean"
      },
      "defaultExpandedKeys": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "expandedKeys": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "checkedKeys": {
        "type": "string",
        "oneOf": [
          {
            "type": "array",
            "items": [
              {
                "type": "string"
              }
            ]
          },
          {
            "type": "object",
            "properties": {
              "checked": {
                "type": "array",
                "items": [
                  {
                    "type": "string"
                  }
                ]
              },
              "halfChecked": {
                "type": "array",
                "items": [
                  {
                    "type": "string"
                  }
                ]
              }
            },
            "required": [
              "checked",
              "halfChecked"
            ]
          }
        ]
      }
    },
    "required": []
  },
  "TreeData": {
    "type": "object",
    "properties": {
      "key": {
        "type": "string"
      },
      "value": {
        "type": "string"
      },
      "label": {
        "type": "string",
        "format": "Element"
      },
      "children": {
        "type": "array",
        "items": {
          "key": {
            "type": "string"
          },
          "value": {
            "type": "string"
          },
          "label": {
            "type": "string",
            "format": "Element"
          }
        }
      }
    },
    "required": [
      "key",
      "value",
      "label"
    ]
  },
  "TreeSelectProps": {
    "type": "object",
    "properties": {
      "value": {
        "type": "string",
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "array",
            "items": [
              {
                "type": "string",
                "format": "Element"
              }
            ]
          }
        ]
      },
      "defaultValue": {
        "type": "string",
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "array",
            "items": [
              {
                "type": "string",
                "format": "Element"
              }
            ]
          }
        ]
      },
      "multiple": {
        "type": "boolean"
      },
      "onSelect": {
        "type": "string",
        "format": "Function",
        "description": "(value: any) => void"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(value: any, label: any) => void"
      },
      "onSearch": {
        "type": "string",
        "format": "Function",
        "description": "(value: any) => void"
      },
      "searchPlaceholder": {
        "type": "string"
      },
      "dropdownStyle": {
        "type": "object",
        "properties": {},
        "format": "CSS"
      },
      "dropdownMatchSelectWidth": {
        "type": "boolean"
      },
      "treeDefaultExpandAll": {
        "type": "boolean"
      },
      "treeCheckable": {
        "type": "string",
        "oneOf": [
          {
            "type": "boolean"
          },
          {
            "type": "string",
            "format": "Element"
          }
        ]
      },
      "treeDefaultExpandedKeys": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "filterTreeNode": {
        "type": "string",
        "format": "Function",
        "description": "(inputValue: string, treeNode: any) => boolean | boolean"
      },
      "treeNodeFilterProp": {
        "type": "string"
      },
      "treeNodeLabelProp": {
        "type": "string"
      },
      "treeData": {
        "type": "array",
        "items": {
          "key": {
            "type": "string"
          },
          "value": {
            "type": "string"
          },
          "label": {
            "type": "string",
            "format": "Element"
          },
          "children": {
            "type": "array",
            "items": {
              "key": {
                "type": "string"
              },
              "value": {
                "type": "string"
              },
              "label": {
                "type": "string",
                "format": "Element"
              }
            }
          }
        }
      },
      "treeDataSimpleMode": {
        "type": "string",
        "oneOf": [
          {
            "type": "boolean"
          },
          {
            "type": "object",
            "properties": {},
            "required": []
          }
        ]
      },
      "loadData": {
        "type": "string",
        "format": "Function",
        "description": "(node: any) => void"
      },
      "showCheckedStrategy": {
        "type": "string",
        "enum": [
          "SHOW_ALL",
          "SHOW_PARENT",
          "SHOW_CHILD"
        ]
      },
      "labelInValue": {
        "type": "boolean"
      },
      "treeCheckStrictly": {
        "type": "boolean"
      },
      "getPopupContainer": {
        "type": "string",
        "format": "Function",
        "description": "(triggerNode: Element) => HTMLElement"
      }
    },
    "required": []
  },
  "HttpRequestHeader": {
    "type": "object",
    "properties": {
      "key": {
        "type": "string"
      }
    },
    "required": [
      "key"
    ]
  },
  "UploadFile": {
    "type": "object",
    "properties": {
      "uid": {
        "type": "number"
      },
      "size": {
        "type": "number"
      },
      "name": {
        "type": "string"
      },
      "filename": {
        "type": "string"
      },
      "lastModified": {
        "type": "string"
      },
      "lastModifiedDate": {
        "type": "string",
        "format": "DATE"
      },
      "url": {
        "type": "string"
      },
      "status": {
        "type": "string",
        "enum": [
          "error",
          "success",
          "done",
          "uploading",
          "removed"
        ]
      },
      "percent": {
        "type": "number"
      },
      "thumbUrl": {
        "type": "string"
      },
      "originFileObj": {
        "type": "string",
        "format": "File"
      },
      "response": {
        "type": "string",
        "format": "Element"
      },
      "error": {
        "type": "string",
        "format": "Element"
      },
      "linkProps": {
        "type": "string",
        "format": "Element"
      },
      "type": {
        "type": "string"
      }
    },
    "required": [
      "uid",
      "size",
      "name",
      "type"
    ]
  },
  "UploadChangeParam": {
    "type": "object",
    "properties": {
      "file": {
        "type": "object",
        "properties": {
          "uid": {
            "type": "number"
          },
          "size": {
            "type": "number"
          },
          "name": {
            "type": "string"
          },
          "filename": {
            "type": "string"
          },
          "lastModified": {
            "type": "string"
          },
          "lastModifiedDate": {
            "type": "string",
            "format": "DATE"
          },
          "url": {
            "type": "string"
          },
          "status": {
            "type": "string",
            "enum": [
              "error",
              "success",
              "done",
              "uploading",
              "removed"
            ]
          },
          "percent": {
            "type": "number"
          },
          "thumbUrl": {
            "type": "string"
          },
          "originFileObj": {
            "type": "string",
            "format": "File"
          },
          "response": {
            "type": "string",
            "format": "Element"
          },
          "error": {
            "type": "string",
            "format": "Element"
          },
          "linkProps": {
            "type": "string",
            "format": "Element"
          },
          "type": {
            "type": "string"
          }
        },
        "required": [
          "uid",
          "size",
          "name",
          "type"
        ]
      },
      "fileList": {
        "type": "array",
        "items": {
          "uid": {
            "type": "number"
          },
          "size": {
            "type": "number"
          },
          "name": {
            "type": "string"
          },
          "filename": {
            "type": "string"
          },
          "lastModified": {
            "type": "string"
          },
          "lastModifiedDate": {
            "type": "string",
            "format": "DATE"
          },
          "url": {
            "type": "string"
          },
          "status": {
            "type": "string",
            "enum": [
              "error",
              "success",
              "done",
              "uploading",
              "removed"
            ]
          },
          "percent": {
            "type": "number"
          },
          "thumbUrl": {
            "type": "string"
          },
          "originFileObj": {
            "type": "string",
            "format": "File"
          },
          "response": {
            "type": "string",
            "format": "Element"
          },
          "error": {
            "type": "string",
            "format": "Element"
          },
          "linkProps": {
            "type": "string",
            "format": "Element"
          },
          "type": {
            "type": "string"
          }
        }
      },
      "event": {
        "type": "object",
        "properties": {
          "percent": {
            "type": "number"
          }
        },
        "required": [
          "percent"
        ]
      }
    },
    "required": [
      "file",
      "fileList"
    ]
  },
  "ShowUploadListInterface": {
    "type": "object",
    "properties": {
      "showRemoveIcon": {
        "type": "boolean"
      },
      "showPreviewIcon": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "UploadLocale": {
    "type": "object",
    "properties": {
      "uploading": {
        "type": "string"
      },
      "removeFile": {
        "type": "string"
      },
      "uploadError": {
        "type": "string"
      },
      "previewFile": {
        "type": "string"
      }
    },
    "required": []
  },
  "UploadProps": {
    "type": "object",
    "properties": {
      "type": {
        "type": "string",
        "enum": [
          "drag",
          "select"
        ]
      },
      "name": {
        "type": "string"
      },
      "defaultFileList": {
        "type": "array",
        "items": {
          "uid": {
            "type": "number"
          },
          "size": {
            "type": "number"
          },
          "name": {
            "type": "string"
          },
          "filename": {
            "type": "string"
          },
          "lastModified": {
            "type": "string"
          },
          "lastModifiedDate": {
            "type": "string",
            "format": "DATE"
          },
          "url": {
            "type": "string"
          },
          "status": {
            "type": "string",
            "enum": [
              "error",
              "success",
              "done",
              "uploading",
              "removed"
            ]
          },
          "percent": {
            "type": "number"
          },
          "thumbUrl": {
            "type": "string"
          },
          "originFileObj": {
            "type": "string",
            "format": "File"
          },
          "response": {
            "type": "string",
            "format": "Element"
          },
          "error": {
            "type": "string",
            "format": "Element"
          },
          "linkProps": {
            "type": "string",
            "format": "Element"
          },
          "type": {
            "type": "string"
          }
        }
      },
      "fileList": {
        "type": "array",
        "items": {
          "uid": {
            "type": "number"
          },
          "size": {
            "type": "number"
          },
          "name": {
            "type": "string"
          },
          "filename": {
            "type": "string"
          },
          "lastModified": {
            "type": "string"
          },
          "lastModifiedDate": {
            "type": "string",
            "format": "DATE"
          },
          "url": {
            "type": "string"
          },
          "status": {
            "type": "string",
            "enum": [
              "error",
              "success",
              "done",
              "uploading",
              "removed"
            ]
          },
          "percent": {
            "type": "number"
          },
          "thumbUrl": {
            "type": "string"
          },
          "originFileObj": {
            "type": "string",
            "format": "File"
          },
          "response": {
            "type": "string",
            "format": "Element"
          },
          "error": {
            "type": "string",
            "format": "Element"
          },
          "linkProps": {
            "type": "string",
            "format": "Element"
          },
          "type": {
            "type": "string"
          }
        }
      },
      "action": {
        "type": "string"
      },
      "data": {
        "type": "string",
        "oneOf": [
          {
            "type": "object",
            "properties": {},
            "required": []
          },
          {
            "type": "string",
            "format": "Function",
            "description": "((file: UploadFile) => any)"
          }
        ]
      },
      "headers": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          }
        },
        "required": [
          "key"
        ]
      },
      "showUploadList": {
        "type": "string",
        "oneOf": [
          {
            "type": "boolean"
          },
          {
            "type": "object",
            "properties": {
              "showRemoveIcon": {
                "type": "boolean"
              },
              "showPreviewIcon": {
                "type": "boolean"
              }
            },
            "required": []
          }
        ]
      },
      "multiple": {
        "type": "boolean"
      },
      "accept": {
        "type": "string"
      },
      "beforeUpload": {
        "type": "string",
        "format": "Function",
        "description": "(file: UploadFile, FileList: UploadFile[]) => boolean | PromiseLike<any>"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(info: UploadChangeParam) => void"
      },
      "listType": {
        "type": "string",
        "enum": [
          "text",
          "picture",
          "picture-card"
        ]
      },
      "className": {
        "type": "string"
      },
      "onPreview": {
        "type": "string",
        "format": "Function",
        "description": "(file: UploadFile) => void"
      },
      "onRemove": {
        "type": "string",
        "format": "Function",
        "description": "(file: UploadFile) => void | boolean"
      },
      "supportServerRender": {
        "type": "boolean"
      },
      "disabled": {
        "type": "boolean"
      },
      "prefixCls": {
        "type": "string"
      },
      "customRequest": {
        "type": "string",
        "format": "Function",
        "description": "(option: any) => void"
      },
      "withCredentials": {
        "type": "boolean"
      }
    },
    "required": []
  },
  "UploadState": {
    "type": "object",
    "properties": {
      "fileList": {
        "type": "array",
        "items": {
          "uid": {
            "type": "number"
          },
          "size": {
            "type": "number"
          },
          "name": {
            "type": "string"
          },
          "filename": {
            "type": "string"
          },
          "lastModified": {
            "type": "string"
          },
          "lastModifiedDate": {
            "type": "string",
            "format": "DATE"
          },
          "url": {
            "type": "string"
          },
          "status": {
            "type": "string",
            "enum": [
              "error",
              "success",
              "done",
              "uploading",
              "removed"
            ]
          },
          "percent": {
            "type": "number"
          },
          "thumbUrl": {
            "type": "string"
          },
          "originFileObj": {
            "type": "string",
            "format": "File"
          },
          "response": {
            "type": "string",
            "format": "Element"
          },
          "error": {
            "type": "string",
            "format": "Element"
          },
          "linkProps": {
            "type": "string",
            "format": "Element"
          },
          "type": {
            "type": "string"
          }
        }
      },
      "dragState": {
        "type": "string"
      }
    },
    "required": [
      "fileList",
      "dragState"
    ]
  },
  "UploadListProps": {
    "type": "object",
    "properties": {
      "listType": {
        "type": "string",
        "enum": [
          "text",
          "picture",
          "picture-card"
        ]
      },
      "onPreview": {
        "type": "string",
        "format": "Function",
        "description": "(file: UploadFile) => void"
      },
      "onRemove": {
        "type": "string",
        "format": "Function",
        "description": "(file: UploadFile) => void | boolean"
      },
      "items": {
        "type": "array",
        "items": {
          "uid": {
            "type": "number"
          },
          "size": {
            "type": "number"
          },
          "name": {
            "type": "string"
          },
          "filename": {
            "type": "string"
          },
          "lastModified": {
            "type": "string"
          },
          "lastModifiedDate": {
            "type": "string",
            "format": "DATE"
          },
          "url": {
            "type": "string"
          },
          "status": {
            "type": "string",
            "enum": [
              "error",
              "success",
              "done",
              "uploading",
              "removed"
            ]
          },
          "percent": {
            "type": "number"
          },
          "thumbUrl": {
            "type": "string"
          },
          "originFileObj": {
            "type": "string",
            "format": "File"
          },
          "response": {
            "type": "string",
            "format": "Element"
          },
          "error": {
            "type": "string",
            "format": "Element"
          },
          "linkProps": {
            "type": "string",
            "format": "Element"
          },
          "type": {
            "type": "string"
          }
        }
      },
      "progressAttr": {
        "type": "object",
        "properties": {},
        "required": []
      },
      "prefixCls": {
        "type": "string"
      },
      "showRemoveIcon": {
        "type": "boolean"
      },
      "showPreviewIcon": {
        "type": "boolean"
      },
      "locale": {
        "type": "object",
        "properties": {
          "uploading": {
            "type": "string"
          },
          "removeFile": {
            "type": "string"
          },
          "uploadError": {
            "type": "string"
          },
          "previewFile": {
            "type": "string"
          }
        },
        "required": []
      }
    },
    "required": [
      "locale"
    ]
  },
  "RadioProps": {
    "type": "object",
    "properties": {
      "prefixCls": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "defaultChecked": {
        "type": "boolean"
      },
      "checked": {
        "type": "boolean"
      },
      "disabled": {
        "type": "boolean"
      },
      "onChange": {
        "type": "string",
        "format": "Function",
        "description": "(value: string[]) => any"
      },
      "onMouseEnter": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "onMouseLeave": {
        "type": "string",
        "format": "Function",
        "description": "(event: EventHandler) => any"
      },
      "value": {
        "type": "string",
        "format": "Element"
      },
      "name": {
        "type": "string"
      },
      "children": {
        "type": "string",
        "format": "Element"
      }
    },
    "required": []
  }
}