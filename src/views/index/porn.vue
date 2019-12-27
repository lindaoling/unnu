<template>
<mu-container style="margin: 80px auto 26px auto;padding:0;">
  <mu-form :model="form" label-position="top" label-width="100">
    <mu-form-item prop="k" label="Search" :label-float="true">
      <mu-text-field v-model="form.k" @keyup.enter.native="filter"></mu-text-field>
    </mu-form-item>
  </mu-form>
  <mu-paper :z-depth="1">
    <mu-data-table 
    style="width:100%;" 
    :loading="loadingData" 
    :columns="columns" 
    :sort.sync="sort" 
    @sort-change="handleSortChange" 
    :data="list">
      <template slot-scope="scope">
        <td>{{scope.row.title}}</td>
        <!-- <td>{{scope.row.category}}</td> -->
        <!-- <td>
          <mu-button :href="scope.row.torrent_link" flat color="primary">Torrent</mu-button>
          <mu-button :href="`magnet:?xt=urn:btih:${scope.row.info_hash}&dn=${scope.row.title}&tr=http%3A%2F%2Fsukebei.tracker.wf%3A8888%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce`" flat color="primary">Magnet</mu-button>
        </td> -->
        <td class="is-right"> 
          <!-- <span>magnet:?xt=urn:btih:{{ scope.row.info_hash}}</span> -->
          <mu-button flat color="primary" v-clipboard:copy="`magnet:?xt=urn:btih:${scope.row.info_hash}`" v-clipboard:success="clipboardSuccess">复制磁链</mu-button>
        </td>
        <!-- <td class="is-right">{{scope.row.size}}</td> -->
      </template>
    </mu-data-table>
    <div style="padding:8px 10px;">
      <mu-flex justify-content="center">
         <mu-pagination v-show="pagination.total_count>20" @change="pageChange" :total="pagination.total_count"
          :page-size="20" :page-count="5" :current="currentPage" style="margin: 20px 0px;">
        </mu-pagination>
      </mu-flex>
    </div>
  </mu-paper>
</mu-container>
</template>
<script>
import { getList } from "@/api/porn";
import clipboard from '@/directive/clipboard' // use clipboard by v-directive
import { scrollTo } from '@/utils/scrollTo' // use clipboard by v-directive
export default {
  name:'PornList',
  directives: {
    clipboard
  },
  data () {
    return {
      loadingData:true,
      pagination: {
        total_count: 0,
        total_page: 0
      },
      form:{
        k:'',
        p:1
      },
      columns: [
          { title: 'Title', align: 'center',},
          // { title: 'Category',width: 150, align: 'left'},
          { title: 'Link', width: 140,align: 'center'}
          // { title: 'Size',width: 120, align: 'left'}
      ],
      list: []
    };
  },
  watch: {
      '$route.query': {
      handler() {
        this.getRemoteList()
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    currentPage: function () {
      return this.$route.query.p ? parseInt(this.$route.query.p) : 1
    }
  },
  methods:{
    clipboardSuccess(){
      this.$toast.success('复制成功！');
    },
    filter(){
      this.$router.push(
        {
          query:this.form
        }
      )
    },
    getRemoteList(){
      this.loadingData=true
      getList(this.$route.query).then(response=>{
        this.loadingData=false
        this.list=response.data
        this.pagination = response.pagination
        scrollTo(0)
      })
    },
    pageChange(p) {
      const queryParams = Object.assign({}, this.$route.query, {
        p: p
      })
      this.$router.push({
        query: queryParams
      })
    },
  }
};
</script>