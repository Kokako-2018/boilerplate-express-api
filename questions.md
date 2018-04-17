# In the package.json:
In the start script (node server). It has been shown as node index in the original boilerplate. Does it matter?

# Path
What is that all about (re: webpack.config.js)

# Tests
Not a question, just a note. We have ignored out tests folder.

# import vs require
To confirm, do we need to use 'require' in js files. And 'import' in jsx files?  What happens if we do 'import' in both?

# server.js CORS port
This is port 8080, but we are still directing everything through port 3000. What's that about?

# index.js
Not a question, just a note: If move the index.js out of the main folder into a server folder, need to update the package.json to reflect this (e.g. updated to "main": "server/index.js").

# All those errors...
Fixed! This was all about that Webpack version. When we changed it to version 3, we then needed to run yarn again in the cosole, as otherwise it was still bringing in version 4. When we add/remove things directly in our package.json, we have to run yarn in the console for the changes to be picked up. If we add packages via the console directly (e.g. yarn add xxx) then this is done automatically. AMAZING!