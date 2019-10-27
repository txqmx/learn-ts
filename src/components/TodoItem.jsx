import * as tslib_1 from "tslib";
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';
// 装饰器包装 Vue.extend
let TodoItem = class TodoItem extends Vue {
    // 装饰器包装 Vue.extend
    constructor() {
        super(...arguments);
        this.i = 1;
    }
    save() {
        return 'hello';
    }
    fn() {
        console.log(this.i);
    }
    increment() {
        this.i += 1;
    }
    render() {
        return <h1>{this.item.text}<button on-click={this.save}>触发</button>
            {this.i}
            <button on-click={this.increment}></button>
        </h1>;
    }
};
tslib_1.__decorate([
    Prop(Object)
], TodoItem.prototype, "item", void 0);
tslib_1.__decorate([
    Prop(Number)
], TodoItem.prototype, "index", void 0);
tslib_1.__decorate([
    Emit('say')
], TodoItem.prototype, "save", null);
tslib_1.__decorate([
    Watch('i')
], TodoItem.prototype, "fn", null);
TodoItem = tslib_1.__decorate([
    Component
], TodoItem);
export default TodoItem;
//# sourceMappingURL=TodoItem.jsx.map