<template>
  <div class="container h-100 ">
    <div class="row">
      <div class="col-12 col-md-3  bg-white py-2">
        <img :src="image" alt="" style="height: 130px; width: 100%; object-fit: cover; border: 1px dashed green;">
        <input type="file" class="form-control mt-1" id="image" accept="image/*" @change="onFileChange">
        <p v-if="isInvalidFile" style="color: red;">Please select a valid image file.</p>
      </div>
      <div class="col-12 col-md-9 ">
        <input type="text" class="form-control mb-2" placeholder="Tiêu đề">
        <ckeditor :editor="editor" v-model="data.description"></ckeditor>

      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Cookies from 'js-cookie';
import { onMounted, reactive, computed , ref} from "vue"
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import noimg from '../../../../img/noimg.png';

export default {
  name: 'Add',
  setup() {
    //....
    const data = reactive({
      description: '',
    })
    const image = ref(noimg);
    const isInvalidFile = ref(false);
    const onFileChange = (event) => {
      const file = event.target.files[0];
      if (file && file.type.startsWith('image/')) {
      image.value = URL.createObjectURL(file);
      isInvalidFile.value = false;
    } else {
      image.value=noimg;
      isInvalidFile.value = true;
    }
    };

    return {
      data,
      image,
      onFileChange,
      editor: ClassicEditor,
      isInvalidFile
    }
  }
}
</script>
<style>
.ck-content,
.ck-editor__editable_inline,
.ck-blurred {
  overflow-y: auto;
  /* max-height: calc(100vh - 100px);  */
  min-height: 73vh;
}
</style>