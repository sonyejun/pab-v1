## Lego Store Search Project README

### Project Overview
This project is a web application for managing and searching Lego store information. The main features include displaying store lists by region or searching by store name to view the results.

### Feature Description
1. **Import Feature**
   - The store information in the `import.json` file is inserted into the `regions`, `countries`, and `stores` tables in the database via the `import.php` file.

2. **Search Feature**
   - In the `database.php` file, results corresponding to the selected region or keyword searched by the user are retrieved.
   - When the user clicks on a region button, the store list for that region is displayed, and when searching by store name, a list of stores with names containing the search term is displayed. The region buttons disappear during store name searches.
   - To view the search results again, the user can click the region filter button below the search box to display the store lists by region.

3. **Dynamic List Generation**
   - In the `index.js` file, the results retrieved from `database.php` are used to dynamically generate store elements and display the list to the user.

### Workflow
1. When the user clicks on each region button in the result area, the store list for the corresponding region is displayed.
2. When searching by store name, a list of stores with names containing the search term is displayed. The region buttons disappear during store name searches.
3. To view the search results again, the user can click the region filter button below the search box to display the store lists by region.

### Usage
1. Clone or download the project.
2. Add or modify store information in the `import.json` file.
3. Execute the `import.php` file to insert store information into the database.
4. Open the `index.html` file in a web browser to run the project.
5. Click on the region buttons in the result area to view the lists by region.
6. Enter a keyword in the search box and click the search button to search by store name.
7. To hide the search results and view the lists by region again, click the region filter button below the search box.

### Tech Stack
- PHP
- JavaScript
- HTML
- CSS

### The End
Now, enjoy exploring the Lego Store Search Project! 🚀
