# Cascading Style Sheet (CSS) Interview Questions
1. What is the Box model in CSS? Which CSS properties are a part of it?
   + A rectangle box is wrapped around every HTML element. The box model is used to determine the height and width of the rectangular box. The CSS Box consists of Width and height (or in the absence of that, default values and the content inside), padding, borders, margin.
     + Content:  Actual Content of the box where the text or image is placed.
     + Padding: Area surrounding the content (Space between the border and content).
     + Border: Area surrounding the padding.
     + Margin: Area surrounding the border.


2. What are the advantages of using CSS?
   + Separation of content from presentation - CSS provides a way to present the same content in multiple presentation formats in mobile or desktop or laptop.
   + Easy to maintain - CSS, built effectively can be used to change the look and feel complete by making small changes. To make a global change, simply change the style, and all elements in all the web pages will be updated automatically.
   + Bandwidth - Used effectively, the style sheets will be stored in the browser cache and they can be used on multiple pages, without having to download again.

3. What are the limitations of CSS?
   + Browser Compatibility: Some style selectors are supported and some are not. We have to determine which style is supported or not using the @support selector).
   + Cross Browser issue: Some selectors behave differently in a different browser).
   + There is no parent selector: Currently, Using CSS, you can’t select a parent tag.

4. How to include CSS in the webpage?
   + External Style Sheet: An external file linked to your HTML document: Using link tag, we can link the style sheet to the HTML page.
     + `<link rel="stylesheet" type="text/css" href="mystyles.css" />`
   + Embed CSS with a style tag: A set of CSS styles included within your HTML page.
     + ```
      <style type="text/css">

      /*Add style rules here*/

      </style>
      ```
   + Add inline styles to HTML elements(CSS rules applied directly within an HTML tag.): Style can be added directly to the HTML element using a style tag.
     + `<h2 style="color:red;background:black">Inline Style</h2>`
   + Import a stylesheet file (An external file imported into another CSS file): Another way to add CSS is by using the @import rule. This is to add a new CSS file within CSS itself.
     + `@import "path/to/style.css";`


5. What are the different types of Selectors in CSS?
   + Universal Selector: The universal selector works like a wildcard character, selecting all elements on a page. In the given example, the provided styles will get applied to all the elements on the page.
     + ```
       * {
         color: "green";
         font-size: 20px;
         line-height: 25px;
       }
       ```
    + Element Type Selector: This selector matches one or more HTML elements of the same name. In the given example, the provided styles will get applied to all the ul elements on the page.
     + ```
        ul {
          line-style: none;
          border: solid 1px #ccc;
        }
       ```
    + ID Selector: This selector matches any HTML element that has an ID attribute with the same value as that of the selector. In the given example, the provided styles will get applied to all the elements having ID as a container on the page.
      + ```
          #container {
            width: 960px;
            margin: 0 auto;
          }

          <div id="container"></div>
        ```
    + Class Selector: The class selector also matches all elements on the page that have their class attribute set to the same value as the class.  In the given example, the provided styles will get applied to all the elements having ID as the box on the page.
      + ```
          .box {
            padding: 10px;
            margin: 10px;
            width: 240px;
          }

          <div class="box"></div>
        ```
    + Descendant Combinator: The descendant selector or, more accurately, the descendant combinator lets you combine two or more selectors so you can be more specific in your selection method.
      + ```
          #container .box {
            float: left;
            padding-bottom: 15px;
          }

          <div id="container">
            <div class="box"></div>

            <div class="box-2"></div>
          </div>

          <div class=”box”></div>
        ```
      + This declaration block will apply to all elements that have a class of box that is inside an element with an ID of the container. It’s worth noting that the .box element doesn’t have to be an immediate child: there could be another element wrapping .box, and the styles would still apply.
    + Child Combinator: A selector that uses the child combinator is similar to a selector that uses a descendant combinator, except it only targets immediate child elements.
      + ```
          #container> .box {
            float: left;
            padding-bottom: 15px;
          }

          <div id="container">
            <div class="box"></div>

            <div>
              <div class="box"></div>
            </div>
          </div>
        ```
      + The selector will match all elements that have a class of box and that are immediate children of the `#container` element. That means, unlike the descendant combinator, there can’t be another element wrapping `.box` it has to be a direct child element.
    + General Sibling Combinator: A selector that uses a general sibling combinator to match elements based on sibling relationships. The selected elements are beside each other in the HTML.
      + ```
          h2 ~ p {
            margin-bottom: 20px;
          }

          <h2>Title</h2>
          <p>Paragraph example.</p>
          <p>Paragraph example.</p>
          <p>Paragraph example.</p>
          <div class=”box”>
            <p>Paragraph example.</p>
          </div>
        ```
      + In this example, all paragraph elements (<p>) will be styled with the specified rules, but only if they are siblings of `<h2>` elements. There could be other elements in between the `<h2>` and `<p>`, and the styles would still apply.
    + Adjacent Sibling Combinator: A selector that uses the adjacent sibling combinator uses the plus symbol (+), and is almost the same as the general sibling selector. The difference is that the targeted element must be an immediate sibling, not just a general sibling.
      + ```
          p + p {
            text-indent: 1.Sem;
            margin-bottom: 0;
          }

          <h2>Title</h2>
          <p>Paragraph example.</p>
          <p>Paragraph example.</p>
          <p>Paragraph example.</p>

          <div class=”box”>
            <p>Paragraph example.</p>
            <p>Paragraph example.</p>
          </div>
        ```
      + The above example will apply the specified styles only to paragraph elements that immediately follow other paragraph elements. This means the first paragraph element on a page would not receive these styles. Also, if another element appeared between two paragraphs, the second paragraph of the two wouldn’t have the styles applied.
    + Attribute Selector: The attribute selector targets elements based on the presence and/or value of HTML attributes, and is declared using square brackets.
      + ```
          input [type=”text”] {
            background-color: #444;
            width: 200px;
          }

          <input type="text">
        ```

6. What is a CSS Preprocessor? What are Sass, Less, and Stylus? Why do people use them?
   + A CSS Preprocessor is a tool used to extend the basic functionality of default vanilla CSS through its own scripting language. It helps us to use complex logical syntax like – variables, functions, mixins, code nesting, and inheritance to name a few, supercharging your vanilla CSS.
   + SASS: Sass is the acronym for “Syntactically Awesome Style Sheets”. SASS can be written in two different syntaxes using SASS or SCSS
   + SASS vs SCSS
     + SASS is based on indentation and SCSS(Sassy CSS) is not.
     + SASS uses .sass extension while SCSS uses .scss extension.
     + SASS doesn’t use curly brackets or semicolons. SCSS uses it, just like the CSS.
   + SASS Syntax
      + ```
        $font-color: #fff
        $bg-color: #00f

        #box
          color: $font-color
          background: $bg-color
        ```
    + SCSS Syntax
      + ```
          $font-color: #fff;
          $bg-color: #00f;

          #box{
            color: $font-color;
            background: $bg-color;
          }
        ```
    + LESS: LESS is an acronym for “Leaner Stylesheets”. LESS is easy to add to any javascript projects by using NPM or less.js file. It uses the extension .less. LESS syntax is the same as the SCSS with some exceptions. LESS uses @ to define the variables.
      + ```
          @font-color: #fff;
          @bg-color: #00f

          #box{
            color: @font-color;
            background: @bg-color;
          }
        ```
    + Stylus: Stylus offers a great deal of flexibility in writing syntax, supports native CSS as well as allows omission of brackets, colons, and semicolons. It doesn’t use @ or $ for defining variables.
      + ```
          /* STYLUS SYNTAX WRITTEN LIKE NATIVE CSS */
          font-color= #fff;
          bg-color = #00f;

          #box {
            color: font-color;
            background: bg-color;
          }

          /* OR */

          /* STYLUS SYNTAX WITHOUT CURLY BRACES */
          font-color= #fff;
          bg-color = #00f;

          #box
            color: font-color;
            background: bg-color;
        ```

7. What is VH/VW (viewport height/ viewport width) in CSS?
   + It’s a CSS unit used to measure the height and width in percentage with respect to the viewport. It is used mainly in responsive design techniques. The measure VH is equal to 1/100 of the height of the viewport. If the height of the browser is 1000px, 1vh is equal to 10px. Similarly, if the width is 1000px, then 1 vw is equal to 10px.



8. Difference between reset vs normalize CSS?. How do they differ?
   + Reset CSS: CSS resets aim to remove all built-in browser styling. For example margins, paddings, font-sizes of all elements are reset to be the same.
   + Normalize CSS: Normalize CSS aims to make built-in browser styling consistent across browsers. It also corrects bugs for common browser dependencies.


9.  What is the difference between inline, inline-block, and block?
   + Block Element: The block elements always start on a new line. They will also take space for an entire row or width. List of block elements are `<div>`, `<p>`.
   + Inline Elements: Inline elements don't start on a new line, they appear on the same line as the content and tags beside them. Some examples of inline elements are `<a>`, `<span>`, `<strong>`, and `<img>` tags.
   + Inline Block Elements: Inline-block elements are similar to inline elements, except they can have padding and margins and set height and width values.



10. Is it important to test the webpage in different browsers?
   + It’s most important to test a website in different browsers when you’re first designing it, or when making major changes. However, it’s also important to repeat these tests periodically, since browsers go through a lot of updates and changes.



11. What are Pseudo elements and Pseudo classes?
   + Pseudo-elements allows us to create items that do not normally exist in the document tree, for example ::after.
     + ::before
     + ::after
     + ::first-letter
     + ::first-line
     + ::selection
     + In the below example, the color will appear only on the first line of the paragraph.
      + ```
          p: :first-line {
            color: #ffOOOO;
            font-variant: small-caps;
          }
        ```
   + Pseudo-classes select regular elements but under certain conditions like when the user is hovering over the link.
     + :link
     + :visited
     + :hover
     + :active
     + :focus
     + Example of the pseudo-class, In the below example, the color applies to the anchor tag when it’s hovered.
       + ```
          /* mouse over link */
          a:hover {
            color: #FFOOFF;
          }
         ```

12. How do you specify units in the CSS?. What are the different ways to do it?
   + There are different ways to specify units in CSS like px, em, pt, percentage (%). px(Pixel) gives fine-grained control and maintains alignment because 1 px or multiple of 1 px is guaranteed to look sharp. px is not cascade. em maintains relative size. you can have responsive fonts. Em, will cascade 1em is equal to the current font-size of the element or the browser default. If u sent font-size to 16px then 1em = 16px. The common practice is to set default body font-size to 62.5% (equal to 10px).
   + pt(point) are traditionally used in print. 1pt = 1/72 inch and it is a fixed-size unit.
   + %(percentage) sets font-size relative to the font size of the body. Hence, you have to set the font-size of the body to a reasonable size.



13. Does margin-top or margin-bottom have an effect on inline elements?
   + No, it doesn’t affect the inline elements. Inline elements flow with the contents of the page.



14. What property is used for changing the font face?
   + We can use the font-family property for achieving this. The `font-family` property is used for specifying what font needs to be applied on the targeted DOM element. It can hold several font names as part of “fallback” mechanism in case the browser does not support the fonts. For example, we can use:
     + ```
        p {
          font-family: "Times New Roman", Times, serif;
        }
       ```
       + In the above piece of code, we are applying font-family property to the paragraph element.
         + It tells the browser to look for “Times New Roman” font and apply it
         + If the “Times New Roman” font is not installed or supported, then it asks the browser to use Times font.
         + If both “Times New Roman” and Times are not supported, then it asks the browser to use any supported generic font belonging to serif.
     + If you do not want the font-face of the paragraph element to be Times New Roman/Times/serif font, and you want to use the Arial/Helvetica/sans-serif font, then we can just update the CSS property of paragraph element as:
       + ```
          p {
            font-family: Arial, Helvetica, sans-serif;
          }
         ```

15. What are the differences between adaptive design and responsive design?
   + 

16. How are the CSS selectors matched against the elements by the browser?
   + The order of matching selectors goes from right to left of the selector expression. The elements in the DOM are filtered by browsers based on the key selectors and are then traversed up to the parent elements for determining the matches. The speed of determining the elements depends on the length of the chain of selectors. Consider an example:
     + ```
        p span {
            color: black;
        }
       ```
     + Here, the browser first finds all `span` elements in the DOM and then it traverses to each of its parent elements to check if they are the paragraph `p` elements.
     + Once the browser finds all matching span tags having paragraph elements as parent and applies the color of black to the content, the matching process is stopped.



17. How is border-box different from content-box?
   + `content-box` is the default value box-sizing property. The height and the width properties consist only of the content by excluding the border and padding. Consider an example as shown:
     + ```
        div {
            width:300px;
            height:200px;
            padding:15px;
            border: 5px solid grey;
            margin:30px;
            -moz-box-sizing:content-box;
            -webkit-box-sizing:content-box;
            box-sizing:content-box;
        }
       ```
       + Here, the box-sizing for the div element is given as content-box. That means, the height and width considered for the div content exclude the padding and border. We will get full height and width parameters specified for the content as shown in the below image.
   + `border-box` property includes the content, padding and border in the height and width properties.
     + ```
        div {
            width:300px;
            height:200px;
            padding:15px;
            border: 5px solid grey;
            margin:30px;
            -moz-box-sizing:border-box;
            -webkit-box-sizing:border-box;
            box-sizing:border-box;
        }
       ```
       + Here, the box-sizing for the div element is given as border-box. That means the height and width considered for the div content will also include the padding and border. This means that the actual height of the div content will be:
         + ```
            actual height = height -
                            padding on top and bottom -
                            border on top and bottom
                          = 200 - (15*2) - (5*2)
                          = 160 px
           ```
           + and the actual width of the div content would be:
             + ```
                actual width  = width -
                                padding on right and left -
                                border on right and left
                              = 300 - (15*2) - (5*2)
                              = 260 px
               ```

18. How is opacity specified in CSS3?
   + Opacity refers to the degree to which the content is transparent or opaque. We can use the property named opacity which takes the values ranging from 0 to 1. 0 specifies that the element is completely transparent where 1 means that the element is completely opaque. We can use the opacity property as follows:
     + ```
        div {
            opacity: 0.6;
        }
       ```
       + In the above example, an opacity of 60% is applied to the div section. The opacity property is not supported by the internet explorer browser. To make it work there, we need to use filter property as polyfill as shown in the example below.
         + ```
            div {
                opacity: 0.6;
                filter: alpha(opacity=60);
            }
           ```

19. Why should we use float property in CSS?
   + The float property is used for positioning the HTML elements horizontally either towards the left or right of the container. For instance,
     + ```
        float-demo {
            float: right;
        }
       ```
       + Here, the element to which the class is applied ensures that the element is positioned on the right of the container. If you specify the value of float as left, then the element will be placed on the left side of the container.



20. What is a z-index, how does it function?
   + z-index is used for specifying the vertical stacking of the overlapping elements that occur at the time of its positioning. It specifies the vertical stack order of the elements positioned that helps to define how the display of elements should happen in cases of overlapping.
   + The default value of this property is 0 and can be either positive or negative. Apart from 0, the values of the z-index can be:
     + Auto: The stack order will be set equal to the parent.
     + Number: The number can be positive or negative. It defines the stack order.
     + Initial: The default value of 0 is set to the property.
     + Inherit: The properties are inherited from the parent.
   + The elements having a lesser value of z-index is stacked lower than the ones with a higher z-index.
     + IMAGE
       + From the above figure, we can see that as the value of the z-index increases along the z-axis, the order of stacking would be towards the top of other elements along the vertical axis.



21. What do the following CSS selectors mean?
   + div, p
     + This selector implies selecting all div elements and all p elements
     + ```
        <h1>Heading 1</h1>
          <div>
              Division 1
              <p> paragraph 1</p> <!-- Will be selected -->
          </div>
          <p> paragraph 2</p>
          <p> paragraph 3</p>
          <div>
              Division 2
          </div>
          <span> Span 1 </span>
       ```
       + Here, all the `div` elements and the `p` elements would be selected by the browser irrespective of their parents or where they are placed. The remaining tags like `h1` and `span` are ignored.
   + div p
     + This selector tells to select all p elements that are inside div elements.
     + ```
        <h1>Heading 1</h1>
        <div>
            Division 1
            <p> paragraph 1</p> <!-- Will be selected -->
            <div>
                <p> Inner Div Paragraph </p> <!-- Will be selected -->
            </div>
        </div>
        <p> paragraph 2</p>
        <p> paragraph 3</p>
        <div>
            Division 2
        </div>
        <span> Span 1 </span>
       ```
       + Here, `<p>paragraph 1</p>` and `<p> Inner Div Paragraph </p>` would be selected by the browser and the properties are applied. The rest of the paragraph tags are not selected.
   + div ~ p
     + This selector tells to select all p elements that have div elements preceeded anywhere.
     + ```
        <h1>Heading 1</h1>
        <div>
          Division 1
          <p> paragraph 1</p>
        </div>
        <p> paragraph 2</p> <!-- Will be selected -->
        <p> paragraph 3</p> <!-- Will be selected -->
        <div>
          Division 2
        </div>
        <span> Span 1 </span>
       ```
       + Here, paragraph 2 and paragraph 3 elements would be selected as marked in the code above.
   + div + p
     + This selector says to select all p elements placed immediately after the div element.
     + ```
        <h1>Heading 1</h1>
        <div>
            Division 1
            <p> paragraph 1</p>
        </div>
        <p> paragraph 2</p> <!-- Will be selected -->
        <p> paragraph 3</p> 
        <div>
            Division 2
        </div>
        <span> Span 1 </span>
       ```
       + In this case, we have paragraph 2 element immediately after the div tag.
   + div > p
     + This selector says to select all p elements which has div as an immediate parent.
     + ```
        <h1>Heading 1</h1>
        <div>
            Division 1
            <p> paragraph 1</p> <!-- Will be selected -->
        </div>
        <p> paragraph 2</p>
        <p> paragraph 3</p>
        <div>
            Division 2
        </div>
        <span> Span 1 </span>
       ```
       + Only `<p> paragraph 1</p>` will be selected in this case because it has immediate div as the parent.



22. What are the properties of flexbox?
   + Flexbox stands for flexible box and it was introduced around 2017 in CSS with the purpose of providing an efficient way to handle layouts, align elements within them and distribute spaces amongst the items in dynamic/responsive conditions. It provides an enhanced ability to alter the dimensions of the items and make use of the available space in the container efficiently. In order to achieve this, CSS3 provides some properties.
   + flex-direction: This property helps in defining the direction the container should stack the items targetted for flex. The values of this property can be
     + row: Stacks items horizontally from left to right in the flex container.
     + column: Stacks items vertically from top to bottom in the flex container.
     + row-reverse: Stacks items horizontally from right to left in the flex container.
     + column-reverse: Stacks items vertically from bottom to top in the flex container.
   + flex-wrap: This property specifies of the flex items should be wrapped or not Possible values are:
     + wrap: The flex items would be wrapped if needed.
     + nowrap: This is the default value that says the items won’t be wrapped.
     + wrap-reverse: This specifies that the items will be wrapped if needed but in reverse order.
   + flex-flow: This property is used for setting both flex-direction and flex-wrap properties in one statement.
   + justify-content: Used for aligning the flex items. Possible values are:
     + center: It means that all the flex items are present at the center of the container.
     + flex-start: This value states that the items are aligned at the start of the container. This is the default value.
     + flex-end: This value ensures the items are aligned at the end of the container.
     + space-around: This value displays the items having space between, before, around the items.
     + space-between: This value displays items with spaces between the lines.
   + align-items: This is used for aligning flex items.
   + align-content: This is used for aligning the flex lines.


23. What is cascading in CSS?
   + 

24. Explain CSS position property?
   + 

25. When does DOM reflow occur?
   + 

26. Different Box Sizing Property?
   + 

27. How to center align a div inside another div?
   + 

28. Can you name the four types of @media properties?
   + 

29. What is the grid system?
   + 

30. What are the different ways to hide the element using CSS?
   + 

31. What does the `:root` pseudo-class refer to?
   + 

32. What does Accessibility (a11y) mean?
   + 

33. How do I restore the default value of a property?
   + 

34. Difference between CSS grid vs flexbox?
   + 

35. How does Calc work?
   + 

36. What do CSS Custom properties variables mean?
   + 

37. What is the difference between CSS variables and preprocessor(SASS, LESS, Stylus) variables?
   + 

38. What does `* { box-sizing: border-box; }` do? What are its advantages?
   + 

39. What does `!important` mean in CSS?
   + 

40. What is specificity? How to calculate specificity?
   + 

41. What is progressive rendering? How do you implement progressive rendering in the website?. What are the advantages of it?
   + 

42. What are the advantages of using `translate()` instead of absolute position?
   + 

43. Does style1.css have to be downloaded and parsed before style2.css can be fetched?
   + 

44. How to determine if the browser supports a certain feature?
   + 

45. How does the absolute positioning work?
   + 

46. How does this property work `overflow: hidden`?
   + 

47. How will you align content inside the p tag at the exact center inside the div?
   + 

48. How is margin different from padding in CSS?
   + 

49. What do you have to do to automatically number the heading values of sections and categories?
   + 

50. How is the `nth-child()` different from nth of type selectors?
   + 

51. What is the importance of CSS Sprites?
   + 

52. What do you understand by tweening in CSS?
   + 

53. Why do we need to use clear property along with floats in CSS?
   + 

54. How will you fix browser-specific styling issues?
   + 
