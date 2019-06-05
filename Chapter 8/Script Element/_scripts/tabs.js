//declare global variables to hold all the links and all the panel elements
var tabLinks;
var tabPanels;
//tabbed panels
//window represents the actually webpage window
//onload means lets execute/run as soon as the webpage is open
window.onload = function()
{
    //when the page loads, grab the li elements from the id=tabs
    tabLinks = document.getElementById("tabs").getElementsByTagName("li");
    //now grab the div elements from the id=containers
    tabPanels = document.getElementById("containers").getElementsByTagName("div");

    //activate the _first_ one
    //sets the initial display of the active tab and the active panel
    DisplayPanel(tabLinks[0]);

    //attach even listener to links using onclick and onfocus,
    //fire the DisplayPanel function, return false to disable the link
    for(var i = 0; i < tabLinks.length; i++)
    {
      //foreach tablink that is clicked, display the panel that was clicked
      //by returning false, we disable the jump to link that was clicked
        tabLinks[i].onclick = function()
        {
          DisplayPanel(this);
          return false;
        }

        //does same thing as about but for people who are unable to use a mouse
        tabLinks[i].onfocus = function()
        {
          DisplayPanel(this);
          return false;
        }
    }
}

function DisplayPanel(tabToActivate)
{
    //go through all the <li> elements
    for (var i = 0; i < tabLinks.length; i++)
    {
      //go through all tabs and turn off ones that are not supposed to be visible
      //turn on the one that is supposed to be visible
      //makes sure the proper tab uptop is being displayed properly
      if(tabLinks[i] == tabToActivate)
      {
          //if it's the tab that was clicked, change its class
          tabLinks[i].classList.add("active");
          //and display the correct panel
          tabPanels[i].style.display = "block";
      }
      else
      {
          //remove the tab that is active on the link
          tabLinks[i].classList.remove("active");
          //hide the other panels
          tabPanels[i].style.display = "none";
      }
    }
}
