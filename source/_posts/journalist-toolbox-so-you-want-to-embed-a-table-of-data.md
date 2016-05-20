title: 'Journalist Toolbox: So You Want to Embed a Table of Data...'
tags:
- data
- JavaScript
- journalism
- libraries
- Python
- tables
category: Tools
date: 2014-08-12 16:15:30
---

You're a writer/editor/web producer on a deadline and you have a table of data that you'd like to embed in your story: What's the best way to do that? (For the sake of this post, let's assume that you really do want a table, not a chart or graph.)

<!-- more -->

It seems like a simple problem to solve--after all, many of us remember the days when all web pages were just a soup of `<tr>` and `<td>` tags. But before you start building HTML tables by hand (or [dumping your CSV into Mr. Data Converter](http://shancarter.github.io/mr-data-converter/)), it's worth considering what features you'd like your table to have. 

Below, I've compiled and compared four viable alternatives, and ranked them in a rough order based on my personal preferences. But not all newsrooms have the same priorities or technical skill, so make sure to check out the trade-offs of each option. If you'd like to mix-and-match features into your own custom solution, I've also listed the underlying libraries that power each package.

## What I'm Looking for in a Table

One feature I consider essential for most tables is **the option to re-sort the rows according to different columns**, and for me, it's the main reason to avoid HTML-only tables. Two other common interactions--the ability to search within the table and to paginate the data--are also helpful for larger datasets.

**Ease of use** is also an important factor. I'm biased toward simple solutions for simple problems, and when you're on deadline, the less time you have to spend configuring your table, the better. Helpful documentation and examples are always high on my list when evaluating a new tool or library. 

The tables you create should also look good without extra effort. One of my top priorities is making sure everything I create is mobile-friendly, so I'm very interested in **tables that are responsive by default**. It's also worth considering how easy it is to tweak or fully-customize the look and feel of the table to fit your publication's visual style and brand.

Finally, it's worth thinking about how the table solution you choose fits into the rest of your workflow and infrastructure. Do you want to be able to quickly and easily update and add data to the table? If so, you might want to consider a solution that **pulls data from a Google Spreadsheet rather than one that requires static CSV updates**. Do you have the technical capability to host your own static files, or do you need the table to be hosted somewhere else? Hopefully, the comparisons below will offer options regardless of the answer.

## 1. [Responsive Table Generator](http://inn.github.io/responsive-tables/) ([on GitHub](https://github.com/INN/responsive-tables/))

This is the newest entry on my list (it [only debuted in June](http://nerds.investigativenewsnetwork.org/2014/06/09/responsive-tables/)), and I think the folks at INN have managed to build a tool that will satisfy a lot of newsrooms. I like that their table generator is a two-tiered system: less technically savvy users can easily [hit the ground running with the web app](http://nerds.investigativenewsnetwork.org/2014/07/09/a-simple-way-to-create-responsive-tables-directly-in-your-browser/), while the downloadable Python utility provides more configuration options for advanced users. This approach gives journalists an easy way to experiment and prototype now,  while providing the option for further customization and integration in the future.

Responsive Table Generator is specifically aimed at creating tables from Google Spreadsheets, and to do that it leverages [Tabletop.js](https://github.com/jsoma/tabletop), which provides easy interaction with the Google Spreadsheet API.

My favorite thing about this tool is that it creates mobile-friendly, responsive tables by default. I'm already a fan of using [Pym.js](http://blog.apps.npr.org/pym.js/) for responsive iframes, and [Tablesaw.js](https://github.com/filamentgroup/tablesaw/) provides the nice stacked layout for tables on small displays. I would, however, like to see a bit more control over the responsiveness, especially because the full Tablesaw library has some interesting alternatives to the "stacked" layout. I'd also like to be able to customize the mobile breakpoint, which is set to a fixed size.

Another minor nitpick is that every time you create a table with the tool, you end up generating a build directory that includes all the underlying libraries (Tabletop, Pym, Tablesaw, etc.). If you're a publication that is planning to create multiple tables, it would be better for each table to reference a common set of libraries. In the past, changes to the Google Docs API have broken Tabletop.js--if that happens again, I'd rather update a single directory rather than fix all past tables individually.

**Pros:**
- Pulls live data from a Google Spreadsheet (via [Tabletop.js](https://github.com/jsoma/tabletop))
- Good responsive layouts (via [Pym.js](http://blog.apps.npr.org/pym.js/) and [Tablesaw](https://github.com/filamentgroup/tablesaw/))
- Good documentation and easy-to-use web app makes it easy for non-coders to use
- Uses CSS to automatically truncate long links without requiring additional formatting

**Cons:**
- No pagination or search function

**In the Wild:** 
- INN uses the tool for their table of other tools: [The INN Toolbox](http://nerds.investigativenewsnetwork.org/toolbox/)

## 2. [Datawrapper](https://datawrapper.de/)

Datawrapper has been around for a while and it's always been a good resource for journalists looking to do quick data visualizations. If you're not that comfortable with JavaScript, or if you don't have a way to upload static files to your site, it can be a good choice. (It's what Vox used for their embedded charts when they launched, although [not without some difficulties](http://www.vox.com/2014/4/8/5593258/how-come-the-links-in-charts-dont-work).)

To use Datawrapper, you first have to sign up for a free account. And once you create a table (or other kind of chart), it will be hosted for you on the Datawrapper site. If you need to update or make changes to your table in the future, you'll need to go back to the Datawrapper site and login to your account. 

Having your chart hosted by a third-party has advantages and disadvantages. It certainly makes embedding the table simple--you get an embed code to copy and paste, just like when embedding a YouTube video. But it also means that if Datawrappers servers go down, or they decide to stop supporting free accounts, your charts could one day stop working, and you wouldn't necessarily know about it.

Datawrapper's tables also aren't responsive, and unlike most of the other options here, they only work with static data that you copy and paste or upload into the tool. And because it's focused on ease-of-use, there's not much you can do to customize the design of your table.

**Pros:**
- Web app is the easiest to use for non-coders
- No need to self-hosting files
- Minimal layout 

**Cons:**
- Requires account
- 3rd-party hosting
- Relies on copy-pasting CSV data
- Includes Datawrapper branding
- Limited ability to customize look and feel
- Inconsistent column widths when sorting

## 3. [DataTables](http://datatables.net/)

If you're comfortable with JavaScript, DataTables has long been the standard jQuery library for building the type of interactive tables we're looking for. It was originally designed to add interactivity [to existing HTML tables](http://editorialmatters.lee.net/blogs/data_journalism/article_fac5c678-55e9-11e2-8674-0019bb2963f4.html), but it can also handle data from other sources, like Google Spreadsheets (via [Tabletop.js](https://github.com/jsoma/tabletop)). If you're interested in using the two libraries together, there are a couple of good guides for doing so: [Demo: tabletop to datatables](https://github.com/chrislkeller/projects.chrislkeller.com/tree/master/demos/tabletop_to_datatables) and [The Absurdly Illustrated Guide to Sortable, Searchable, Online Data Tables](http://dataforradicals.com/the-absurdly-illustrated-guide-to-sortable-searchable-online-data-tables/). (It's worth mentioning that there's no need to use the Bootstrap components listed in those guides; DataTables can provide its own pagination and search components, even if the default styling isn't great).

DataTables is very powerful, but that means it's not necessarily easy to use--as [one Hacker News commenter wrote](https://news.ycombinator.com/item?id=8161035), "[it] can do everything under the sun but often feels like you're performing unanaesthetised emergency dentistry on yourself in the process.") The naming conventions aren't exactly intuitive, so you'll probably have to wade through the docs. 

*(UPDATE: It looks like DataTables came out with a major update in the middle of July, unfortunately just after I played around with it for the sake of this demo. The new release [has a much friendlier naming convention for properties](http://datatables.net/upgrade/1.10-convert), which should make it easier to just jump right in. Even better, it looks like they've [built a responsive add-on](http://datatables.net/blog/2014-07-16). I can't wait to try it out and I'll update this post when I do.)*

**Pros:**
- *Lots* of configuration options and features
- Can be used to add features to existing HTML tables

**Cons:**
- Powerful feature-set limits ease of use
- Requires JavaScript knowledge
- ~~You're on your own for making the tables responsive~~ ([maybe not anymore!](http://datatables.net/blog/2014-07-16))

## 4. [Sheetsee.js](http://jlord.github.io/sheetsee.js/)

When I first discovered sheetsee (a well-named library, IMHO), it looked like a more approachable starting-point for JavaScript beginners interested in using Tabletop.js . After digging a little deeper, I'm not convinced  that it provides a lot of added value over just using the underlying libraries--at least when it comes to creating tables, which is handled by the ["sheetsee-tables" module](http://jlord.github.io/sheetsee.js/docs/sheetsee-tables.html). 

The tables sheetsee creates look pretty nice without any customization. But there are several small missing desgin details that make the project seem a bit unfinished: the way the sort icon never changes to indicate the current sorting direction, for instance, and the fact that the sortable headers don't switch your cursor to a pointer when hovering.

Sheetsee has an approachable-looking set of documentation, but the docs also suffer from some small gaps that might trip up the beginner audience that it seems to be trying to serve. It also requires that you set up your HTML table as a Mustache template (via [ICanHaz.js](http://icanhazjs.com/)). I find this to be a bit inelegant compared to the other options here, but it's probably easier than DataTables to get the exact formatting you want.

Ultimately, sheetsee-tables is probably the least impressive part of a more general-purpose tool for turning Google spreadsheets to maps and charts. If you only want a table, I'd recommend one of the other options on this list. But if you want the option to do some easy charting and mapping, it's worth considering.

**Pros:**
- Pulls live data from a Google Spreadsheet (via [Tabletop.js](https://github.com/jsoma/tabletop))
- Decent documentation, although it could be improved
- Easy to transition from table to chart

**Cons:**
- Inconsistent column widths when sorting
- Styling feels a bit incomplete

## Other Options 

I also looked at some other potential solutions to this problem, but they weren't really a good fit for what I was trying to do:

- If you do just want a static HTML table, [Mr. Data Converter](http://shancarter.github.io/mr-data-converter/) is a useful way to convert your CSV or Excel spreadsheets. (Or you can use it to [generate HTML tables for DataTables](http://datadrivenjournalism.2013.journalism.cuny.edu/tag/datatables/).)

- The Los Angeles Times has a Python tool called [table-stacker](https://github.com/datadesk/latimes-table-stacker) that's worth looking at. (It's a Python version of ProPublica's Ruby-based [TableSetter](http://propublica.github.io/table-setter/)) It's a pretty maximalist approach to the problem and it leverages Django (like most of their newsroom apps do) to create a database of spreadsheets. I get the impression that it's more designed for handling big dumps of government or external data than for creating small, editor curated tables. They currently have [no plans to support responsive tables](https://github.com/datadesk/latimes-table-stacker/issues/107).

- The now-defunct Project Thunderdome built [thunderdome.js](https://github.com/thunderdome-data/thunderdome) for creating maps and tables. You *could* use it for just tables, but it's a weird combination of Tabletop, Backbone.js, and Google Charts (see below). Even if I were doing a combination of tables and maps, I'd probably look to sheetsee first.

- The [Google Charts API](https://developers.google.com/chart/interactive/docs/gallery/table) is also an option, although ironically I ran into problems [getting it to properly load Google Spreadsheet data](https://google-developers.appspot.com/chart/interactive/docs/spreadsheets). I'd rather just use Tabletop to pull the data instead. You could also [just embed a Google Spreadsheet with the default embed code](https://support.google.com/docs/answer/55244?hl=en), but the resulting fixed-size iframe (usually with scrollbars) is worse than anything else on this list.

## Quick Compare: A Table of Table-makers

Finally, I'd be somewhat remiss if I didn't include an embedded table in a post about embedded tables: 

<div id="rtg-iframe-container"></div>

<script src="/tables/RTG/pym.js">
	
</script>
<script type="text/javascript">

    (function() {
    var pymParent = new pym.Parent(
        'rtg-iframe-container',
        '/tables/RTG/index.html', {});
    }());

</script>

(This table is made with Responsive Table Generator. To see the same data as rendered by each of the options, [check out the sample page](/tables/).)

### Have other ideas or suggestions? Tell me about them: [@joshuarrrr](https://twitter.com/joshuarrrr)
