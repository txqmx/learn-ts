import {Component, Prop, Vue, Emit, Watch} from 'vue-property-decorator';
import {ITodo} from '@/types/todo';

// 装饰器包装 Vue.extend
@Component
export default class TodoItem extends Vue {
    public i: number = 1;
    @Prop(Object) public item !: ITodo; // 强制人为是对象类型
    @Prop(Number) public index !: number;
    @Emit('say')
    public save() {
        return 'hello';
    }
    @Watch('i')
    public fn() {
        console.log(this.i);
    }
    public increment() {
        this.i += 1;
    }
    public render() {
        return <h1>{this.item.text}<button on-click={this.save}>触发</button>
            {this.i}
            <button on-click={this.increment}></button>
        </h1>;
    }
}
