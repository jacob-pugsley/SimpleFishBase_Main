# Simple FishBase (main front end)

This is a search engine for <a href="https://fishbase.org">FishBase</a>, a scientific database of fish species. The system was designed to be easier for aquarium owners to search than a research database, with an intuitive and simple interface and useful data. The front end uses Vue and Semantic UI.

The front end of this project is in two repositories. <a href="https://github.com/jacob-pugsley/SimpleFishBase_Details">View details page repository</a><br>
<a href="https://github.com/jacob-pugsley/SimpleFishBase_Back">View back end repository</a>

<h1><a href="https://jacob-pugsley.github.io/SimpleFishBase_Main/">Live Site</a></h1>

# Screenshots
![Search results](/images/searchresults.png?raw=true)  &nbsp; ![Details](/images/details.png?raw=true)

# Features
<ul>
  <li>Search by taxonomy, common name, pH range, or temperature range</li>
  <li>Data visualizations including a map and scales for pH and temperature</li>
  <li>Sample of compatible species (based on pH an temperature) for community tanks</li>
</ul>

# Contributors
<ul>
  <li>Jacob Pugsley - front end UI and web search system</li>
  <li>Patrick Kent - data scraping</li>
</ul>

# Special thanks
rOpenSci/Carl Boettiger - Developers of rFishBase, a tool for getting data from FishBase.org

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
