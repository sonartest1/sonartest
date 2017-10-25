/*
 *  Copyright 2015 Adobe Systems Incorporated
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

// Server-side JavaScript for the topnav logic
use(function () {
    // RECURSIVE CYCLE ON PAGE CHILDREN
    var pageTreeGenerator = function (root, maxDepth, depth) {
        depth = depth || 0;
        var items = [];
        var iterator = root.listChildren(new Packages.com.day.cq.wcm.api.PageFilter(false, true));
        while (iterator.hasNext()) {
            var page = iterator.next();
            if(page.name != "home") {
                items.push({
                    title: page.title,
                    href: page.isHideInNav() ? 'javascript:void(0);' : page.getPath()+".html",
                    children: depth < maxDepth ? pageTreeGenerator(page, maxDepth, depth+1) : undefined
                });
            }
        }
        return items;
    };

    // THIS TO GET ONLY THE CHILDREN OF HERITAGE TREE
    var root = currentPage.getAbsoluteParent(3);
    var iterator = root.listChildren(new Packages.com.day.cq.wcm.api.PageFilter(false, true));
    var heritageRoot = iterator.hasNext() ? iterator.next() : null;

    return {
        menu: heritageRoot ? pageTreeGenerator(heritageRoot, 2) : []
    };
});