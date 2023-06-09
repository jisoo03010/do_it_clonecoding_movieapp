import {action, makeObservable, observable} from 'mobx';
class CountStore{
    count=0;

    constructor(){ // 생성자 
        makeObservable(this, {
            count: observable,
            plus: action,
            minus: action,
        }); //대상자
        //옵저버 : 관찰자
    }

    plus=(data)=>{
        this.count+= data;
    }
    minus=()=>{
        this.count--;
    }
}

const countStore = new  CountStore();
export default countStore;