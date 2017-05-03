var typogr = require('typogr');
var titlecase = require('titlecase');

hexo.extend.filter.register('before_post_render', function(data){
  if (data.title) {
  	data.typTitle = data.title.replace("--","—");
  	data.typTitle = titlecase(data.typTitle);
  	data.typTitle = typogr.typogrify(data.typTitle);
  	// data.title = data.typTitle;
  }
  return data;
});