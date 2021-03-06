// ant design 3.x版本
import FormRender from 'form-render/lib/antd';

const propSchema = {
  "type": "object",
  "properties": {
    "stringDemo": {
      "title": "字符串",
      "description": "英文或数字组合",
      "type": "string",
      "pattern": "^[A-Za-z0-9]+$",
      "message": {
        "pattern": "请输入正确格式"
      }
    },
    "imgDemo": {
      "title": "图片",
      "type": "string",
      "format": "image",
      "default": "https://img.alicdn.com/tfs/TB1P8p2uQyWBuNjy0FpXXassXXa-750-1334.png"
    },
    "disabledDemo": {
      "title": "不可用",
      "type": "string",
      "default": "我是一个被 disabled 的值"
    },
    "enumDemo": {
      "title": "枚举",
      "enum": ["A", "B"],
      "enumNames": ["养成", "动作"]
    },
    "dateDemo": {
      "title": "时间",
      "format": "dateTime",
      "type": "string"
    },
    "objDemo": {
      "title": "单个对象",
      "description": "这是一个对象类型",
      "type": "object",
      "properties": {
        "isLike": {
          "title": "单选项",
          "type": "boolean",
          "default": true
        },
        "background": {
          "title": "颜色选择",
          "description": "特殊面板",
          "format": "color",
          "type": "string"
        }
      }
    },
    "arrDemo": {
      "title": "对象数组",
      "description": "对象数组嵌套功能",
      "type": "array",
      "minItems": 1,
      "maxItems": 3,
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "title": "字符名称",
            "description": "string类型",
            "type": "string",
            "pattern": "^[A-Za-z0-9]+$"
          },
          "num": {
            "title": "数字参数",
            "description": "number类型",
            "type": "number"
          }
        }
      }
    }
  },
  "required": ["stringDemo", "dateDemo"]
}


class Playground extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: {}
    };
  }

  // 数据变化回调
  onChange = value => {
    console.info(value)

    this.setState({
      formData: value
    });
  }

  // 数据格式校验回调
  onValidate = list => {
    // 数组返回未通过校验单的
    console.log('校验回调')
    console.log(list);
  }

  render() {
    const { formData } = this.state;
    return (
      <FormRender
        name="表单配置"
        // propsSchema 是配置 FormRender 的必备参数，使用标准的 JSON Schema 来描述表单结构
        propsSchema={propSchema}

        // 通过uiSchema可以增强 FormRender 展示的丰富性
        uiSchema={{
          dateDemo: {
            // 比如说日历视图
            'ui:widget': 'date'
          }
        }}

        formData={formData}
        onChange={this.onChange}
        onValidate={this.onValidate}
      />
    );
  }
}


// cdn引入
ReactDOM.render(<Playground />, mountNode);

