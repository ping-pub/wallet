import axios from '../axios'

const request = async (id) => {
  const res = await axios.get(`/gov/proposals/${id}`)
  const item = res.data.result
  // 标题 描述
  const {
    title,
    description
  } = item.content && item.content.value || {}
  item.title = title
  item.description = description && (description.substr(0, 80) + '...')
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
  item.rate = {
    yes: item.yes,
    no: item.no,
    abstain: item.abstain,
    no_with_veto: item.no_with_veto
  }
  return item
}

export default request
