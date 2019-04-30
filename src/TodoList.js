import React, { Component, Fragment } from 'react';
class Todolist extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue:'hello11',
            list:[]
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input type="text" 
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    />
                    <button>提交</button>
                </div>
                <ul>
                   
                    {
                        //  this.state.list
                        this.state.list.map(function(x,i){ // 函数里面的第二个参数是小标
                            return (
                                <li key={i}>
                                    {x}
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    // 这里是不用加逗号的
    handleInputChange(e){

        /**如何跟新数组里面的list 的值 这是第一种利用类似于微信小程序的的方法*/
        // this.state.list.push(e.target.value)
        // this.setState({
        //     inputValue:e.target.value,
        //     list:this.state.list
        // })

        

        /**第二种方法是es6 的展开运算符号 */
        this.state.list.push(e.target.value)
        this.setState({
            inputValue:e.target.value,
            list:[...this.state.list,e.target.value]// 展开运算
        })

       
    }   
}

export default Todolist;