<template>
  <div>
    <label for="">{{ label }}</label> <br />
    <input :type="type" :placeholder="placeholder" :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<script>
export default {
  emits: ["update:modelValue"], props: { labelInput: { type: String }, placeholder: { type: String, default: "Digite aqui!" }, type: { type: String, default: "text" }, modelValue: { type: String, default: "" }, },
  name: "Input",
  model: {
    prop: "value",
    event: 'onChange',
  },

  data() {
    return {
      valor: this.value
    };
  },

};
</script>

<style scoped>
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0px;
  display: inline-block;
  border: 1px solid #ddd;
  outline: none;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>