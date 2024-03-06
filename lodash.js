const _ = require('lodash');

const LodHash = {    
    getHash: function (obj) {
        return _.hash(obj);
    }
};

export default LodHash;