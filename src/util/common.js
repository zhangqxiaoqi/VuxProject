export default {
    validate: (refs) => {//验证方法，input的验证依赖VUX的valid值，textarea值验证是否为空
        let checkFlag = true;
        refs = typeof (refs) === 'object' ? Object.values(refs) : refs;
        for (let ref of refs) {
            switch (ref.$options._componentTag) {
                case 'x-input':
                    if (!ref.valid) {
                        checkFlag = false;
                        return false;
                    }
                    break;
                case 'x-textarea':
                    if (ref._data.currentValue === undefined || ref._data.currentValue.trim().length == 0) {
                        checkFlag = false;
                        return false;
                    }
                    break;
            }
        }
        return checkFlag;
    }
}