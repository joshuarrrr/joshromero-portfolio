title: How to Choose the Right Online Charting Tool
tags:
  - data
  - JavaScript
  - journalism
  - libraries
  - D3
  - charts
  - news apps
category: Tools
date: 2016-05-03 00:40:07
---


Although interactive data visualizations can be found nearly anywhere you look, many publications have just started to experiment with creating web-native graphs and charts. If your newsroom is currently considering a transition from static, image-based graphics, here are some points to consider.

<!-- more -->

##Identify Your Needs
Before diving into choosing a new charting tool, it's helpful to have a clear goal in mind. Having specific intentions makes it much easier to choose from the dozens of options available. And at least initially, the new way of doing things will probably be slower and more difficult than what you were doing before, so it's important that the benefits are enough to justify the extra effort. Here are a few reasons why a newsroom might want to explore interactive graphics.

- **Better Scaling, Improved Responsiveness:** Web content simply has to be readable, regardless of the device used to view it. When image-based graphics contain text, it's likely to be rendered illegible on a small screens, or fuzzy on large ones. This was the main reason that the *New York Times* [created ai2html](http://ai2html.org/#frequently-asked-questions), a plugin that converts Adobe Illustrator documents to HTML and CSS. Separating the text from the graphic allows the two to be scaled independently.
- **Greater Explanatory and Narrative Power:** Going interactive allows information designers to use a whole new bag of tricks when it comes to communicating data.
- **Deeper Engagement:** Involving the reader in data exploration can make the story more sticky, understandable, and likely to be shared.
- **Dynamic Data:** It's easy to update interactive graphics with new data. In some cases, connecting the interactive to a realtime data feed means it will never be out of date.
- **Expanding Your Expertise and Capabilities:** For both publishers and designers, the ability to produce quality interactive graphics is highly valued in the industry. But in the future, it's likely to be required.

##Embedded Graphics vs News Apps
The size and scope of the interactives you want to build will also affect your choices. For "feature" interactives, where the graphic stands alone in telling the story, you might want a flexible solution that's easy to customize and fully control. But if you're more interested in smaller, simpler graphics to enhance existing stories, it makes sense to find a tool that's quick and efficient for creating common charts.

##Be Realistic About Your Resources
Newsrooms come in many shapes and sizes. Some have dedicated graphics teams that work in parallel with the editorial staff. Others may have a few designers with lots of roles and responsibilities. Still others may have writers that need to do everything themselves. The tool you choose needs to fit the skills, resources, and time available to the people who will be using them.

For example, if you're a print designer who only creates a few graphics a year, it may not be worth investing in the programming skills needed to learn a full JavaScript framework. Instead, you might look to leverage your design skills to create a template that the editorial staff can use to create graphics with a unified look and feel. (This is essentially the approach that *Quartz* took when they decided to build their [ChartBuilder tool](http://quartz.github.io/Chartbuilder/).) Or you might want to choose a tool that lets spend more time designing and less time coding.

But if you're a group of developers at a graphics desk that needs to quickly produce interactives on demand, a standardized framework for doing so might be better. ([*NPR's* dailygraphics rig](https://github.com/nprapps/dailygraphics) is a great example of standardizing common graphics)

##Select a Tool and Come Up with a Process
Being able to make an interactive chart is great, but you need to make sure you have a plan for publishing it on your site, not to mention maintenance and archiving. (It's common for newsroom interactives to be built partially or wholly outside of the normal CMS, which means they're most likely to be broken or disabled in a future IT upgrade). Some questions to consider:
- How will you keep track of changes and modifications?
- How will you store the data?
- How will you integrate the graphic with copy (including fact-checking and copy editing)?
- How important is if for you to be able to leverage or re-use your work to make similar graphics?
- How much fine control over styling do you want or need?
- If you rely on a third-party, what happens to your graphics if they go out of business or if management decides to stop paying for service?
