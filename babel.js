require('babel-core/register');
require('babel-polyfill');
require('./server/index');
//require('./server/database/init')

let state = 1
if(state) {
    require('./server/index');
}else {
    require('./server/database/init')
}