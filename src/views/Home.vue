<!--suppress ALL -->
<template>
  <div class="home">
    <ul>
      <li v-for="(item,index) in lists" :key="index">
        <TodoItem :item="item" :index =index @say="say"></TodoItem>
      </li>
    </ul>
    {{this.count}}{{this.lists}}
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';
import TodoItem from '../components/TodoItem';
import {ITodo} from '../types/todo';
import {State} from 'vuex-class'


@Component({
    name : 'home',
    components: {
        TodoItem,
    },
})

export default class Home extends Vue {
    @State('lists') public  lists !:[];
    // ts 类中需要有修饰符 public private protected

  // data中的数据
  // public lists: ITodo[] = [
  //     {text: '吃饭', complete: false},
  //     {text: '睡觉', complete: true},
  // ];
  // 生命周期
  public mounted(){
      console.log(1);
  }
  // 计算属性
  get count() {
      return this.lists.length;
  }
  say(msg: string):void{
      console.log(msg);
  }
}
</script>
