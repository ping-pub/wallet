// 根据版本对应的接口和数据处理
import v0327 from './v0.32.7/index.js'

import store from '../../store'  

const versions = {
	'0.32.7': v0327
}

const api = () => {
	const version = store.state.current.version
	return versions[version]
}

export default api
