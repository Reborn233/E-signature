import {observable, action} from 'mobx';

class FormStore {

    @observable form = {
        name: 'Reborn',
        identity: '310112199311041817',
        phone: '15021209145',
        signature:'',
        image:''
    };

    @action update = (key, value)=> {
        this.form[key] = value;
    }

}

export default new FormStore();