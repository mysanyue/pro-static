<script>
export default {
  functional: true,
  props: {
    row: { type: Object, required: true },
    render: { type: Function, required: true },
    index: { type: Number, required: true },
    column: { type: Object, default: null },
  },
  render: (h, data) => {
    const props = data.props
    const params = {
      row: props.row,
      index: props.index,
    }
    if (props.column) params.column = props.column
    return props.render(params, h)
  },
}
</script>
