import http from '../interface'

// 获取治理列表
const request = async (id) => {
	const res = await http.get(`/gov/proposals/${id}`)
	const item = res.data.result
	// 标题 描述
	const {
		title,
		description
	} = item.content && item.content.value || {}
	item.title = title
	item.description = description
	// 投票结果比例
	const {
		yes,
		no,
		abstain,
		no_with_veto
	} = item.final_tally_result
	const total = Number(yes) + Number(no) + Number(abstain) + Number(no_with_veto)
	item.yes = ((Number(yes) / total) * 100).toFixed(2) + '%'
	item.no = ((Number(no) / total) * 100).toFixed(2) + '%'
	item.abstain = ((Number(abstain) / total) * 100).toFixed(2) + '%'
	item.no_with_veto = ((Number(no_with_veto) / total) * 100).toFixed(2) + '%'

	return item
}

export default request