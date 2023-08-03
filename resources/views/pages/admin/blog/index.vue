<template>
    <div>
        <ckeditor :editor="editor" v-model="data.description"></ckeditor>
  </div>
</template>
<script>
import axios from 'axios';
import Cookies from 'js-cookie';
import {onMounted, reactive, computed} from "vue"
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default{
     name:'Add',
     setup() {
          //....
          const data = reactive({
           description: 'dsadsddddddddddddddddddddd',
          })

         return {
             data,
             editor: ClassicEditor
         }
     }
}
</script>

