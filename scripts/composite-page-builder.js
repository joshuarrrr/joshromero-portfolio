hexo.extend.helper.register('addsection', function(part){
    var partDirectory = 'pieces';
    var requested = partDirectory+'/'+ part;
    var section;
    this.site.pages.each(function(post){ 
        if ( post.path.split('.')[0] === requested) {
            section = post.content;
        }
        
    });
    return section;
});