import {observable, action} from 'mobx';

class FormStore {

    @observable form = {
        name: '沈冬明',
        identity: '310xxx19931104xxxx',
        phone: '150xxxxx145',
        signature:'',
        face:''
    };
    @observable checked = false;

    @observable image = '';

    @action update = (key, value)=> {
        this.form[key] = value;
    };

    @action agree = (bool = true)=> {
        this.checked = bool;
    };

    @action setImage = (base64)=> {
        this.image = base64;
    }

}

export default new FormStore();