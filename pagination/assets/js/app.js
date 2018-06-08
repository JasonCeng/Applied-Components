(function () {
  $(function () {
    var contentHandler = function (el, tempEl, paginationEl, paginationTempEl) {
      //该组件原理如下：
      //  执行.changePage()方法，在闭包中修改storage.page对象，并执行.getAsserts()
      //  执行.getAsserts()方法，page统一从storage中获取，ajax获取后执行各个render方法渲染视图
      var storage = {
        el: $(el),
        tempEl: $(tempEl),
        paginationEl: $(paginationEl),
        paginationTempEl: $(paginationTempEl),
        page: 1,
        totalPage: 1
      }
      if (!storage.el || !storage.tempEl) {
        alert('请正确设置')
        return
      }
      return {
        getCurrentPage: function () {
          return storage.page
        },
        getAsserts: function () {
          var _this = this
          //这里进行异步请求获取
          // storage.page 需要请求的页码数
          $.ajax({
            url: './data/contentData.json',
            type: 'GET',
            success: function (res) {
              console.log(res)
              //渲染内容列表
              _this.renderContent(res.data)
              //重新渲染分页器
              _this.renderPagination(storage.page, res.totalPage)
            }
          })
        },
        changePage: function (page) {
          //用于切换页面
          storage.page = page
          this.getAsserts()
        },
        renderContent: function (data) {
          // 渲染内容列表
          var resource = storage.tempEl.html()
          var html = template.render(resource, {data: data });
          storage.el.html(html)
        },
        renderPagination: function (page, totalPage) {
          //渲染分页器
          console.log('set page:', page)
          console.log('set totalPage: ', totalPage)
          var resource = storage.paginationTempEl.html()
          var html = template.render(resource, { page: page, totalPage: totalPage, arr: new Array(totalPage)});
          storage.paginationEl.html(html)
        },
        initPage: function () {
          //初始化
          console.log('Page has been initialized')
          this.getAsserts()
        }
      }
    }

    var content = new contentHandler('#content-items-group', '#content-item-template', '#paginations-group', '#pagination-template')
    // 创建运行实例
    content.initPage()
    // define events
    $('#paginations-group').on('click', '.pageNum', function () {
      var page = $(this).data('page')
      content.changePage(page)
    })
    $('#paginations-group').on('click', '.prev', function () {
      var page = content.getCurrentPage()
      content.changePage(page - 1)
    })
    $('#paginations-group').on('click', '.next', function () {
      var page = content.getCurrentPage()
      content.changePage(page + 1)
    })
  })
})()