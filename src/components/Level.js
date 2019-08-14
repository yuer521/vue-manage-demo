export default {
  props: {
    t: String,
    default: 0
  },
  render (h) {
    console.log('aaaaa');
    let ele = 'h' + this.t
    return <ele on-click={() => { alert(this.t) }}>{this.$slots.default}</ele>
  }
}