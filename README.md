# NodeJs-MongoDb
NodeJs, Mongo Db, Express, microservice developments

Updated readme file address: http://rasimsen.com/index.php?title=MongoDB_and_NodeJs#MongoDB_with_Node_and_Express

<h1 id="firstHeading" class="firstHeading">MongoDB and NodeJs</h1>
<div class="toctitle" lang="en-GB" dir="ltr"><h2>Contents</h2></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#MongoDB"><span class="tocnumber">1</span> <span class="toctext">MongoDB</span></a></li>
<li class="toclevel-1 tocsection-2"><a href="#NodeJs"><span class="tocnumber">2</span> <span class="toctext">NodeJs</span></a></li>
<li class="toclevel-1 tocsection-3"><a href="#Installation"><span class="tocnumber">3</span> <span class="toctext">Installation</span></a></li>
<li class="toclevel-1 tocsection-4"><a href="#NodeJs-Mongo"><span class="tocnumber">4</span> <span class="toctext">NodeJs-Mongo</span></a>
<ul>
<li class="toclevel-2 tocsection-5"><a href="#Create_a_project"><span class="tocnumber">4.1</span> <span class="toctext">Create a project</span></a></li>
<li class="toclevel-2 tocsection-6"><a href="#package.json_-_project_details_and_depencies_file"><span class="tocnumber">4.2</span> <span class="toctext">package.json - project details and depencies file</span></a></li>
<li class="toclevel-2 tocsection-7"><a href="#Mocha_-_Unit_Test"><span class="tocnumber">4.3</span> <span class="toctext">Mocha - Unit Test</span></a>
<ul>
<li class="toclevel-3 tocsection-8"><a href="#Creating_data_on_MongoDb.2FTest"><span class="tocnumber">4.3.1</span> <span class="toctext">Creating data on MongoDb/Test</span></a></li>
<li class="toclevel-3 tocsection-9"><a href="#Search.2FFind_Record_on_Mongo"><span class="tocnumber">4.3.2</span> <span class="toctext">Search/Find Record on Mongo</span></a></li>
<li class="toclevel-3 tocsection-10"><a href="#Deleting.2Fremoving_records"><span class="tocnumber">4.3.3</span> <span class="toctext">Deleting/removing records</span></a></li>
<li class="toclevel-3 tocsection-11"><a href="#Updating_records"><span class="tocnumber">4.3.4</span> <span class="toctext">Updating records</span></a></li>
<li class="toclevel-3 tocsection-12"><a href="#Run_the_test_:_npm_run_test"><span class="tocnumber">4.3.5</span> <span class="toctext">Run the test&#160;: npm run test</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-13"><a href="#Automating_Test"><span class="tocnumber">4.4</span> <span class="toctext">Automating Test</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-14"><a href="#MongoDB_with_Node_and_Express"><span class="tocnumber">5</span> <span class="toctext">MongoDB with Node and Express</span></a>
<ul>
<li class="toclevel-2 tocsection-15"><a href="#Create_a_new_project"><span class="tocnumber">5.1</span> <span class="toctext">Create a new project</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-16"><a href="#Errors"><span class="tocnumber">6</span> <span class="toctext">Errors</span></a></li>
</ul>
</div>

<h1><span class="mw-headline" id="MongoDB"><a href="/index.php?title=MongoDB&amp;action=edit&amp;redlink=1" class="new" title="MongoDB (page does not exist)">MongoDB</a></span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/index.php?title=MongoDB_and_NodeJs&amp;action=edit&amp;section=1" title="Edit section: MongoDB">edit</a><span class="mw-editsection-bracket">]</span></span></h1>
<h1><span class="mw-headline" id="NodeJs"><a href="/index.php?title=NodeJs" title="NodeJs">NodeJs</a></span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/index.php?title=MongoDB_and_NodeJs&amp;action=edit&amp;section=2" title="Edit section: NodeJs">edit</a><span class="mw-editsection-bracket">]</span></span></h1>
<h1><span class="mw-headline" id="Installation">Installation</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/index.php?title=MongoDB_and_NodeJs&amp;action=edit&amp;section=3" title="Edit section: Installation">edit</a><span class="mw-editsection-bracket">]</span></span></h1>
<p>We will install&#160;: 
</p>
<ul><li>MongoDb</li>
<li>Node</li>
<li>Robomongo - editor</li></ul>
<p>brew - package manager can be used on MacOs
</p>
<div class="mw-highlight mw-content-ltr" dir="ltr"><pre>/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</pre></div>
<p><a rel="nofollow" class="external free" href="https://brew.sh/">https://brew.sh/</a>
</p><p>Mongo Installation:
</p>
<div class="mw-highlight mw-content-ltr" dir="ltr"><pre>&gt;brew install mongo
&gt;mongod
&gt;sudo mkdir -p /data/db
&gt;sudo chown -Rv rasimsen /data/db
&gt;brew services start mongo #start/stop/status</pre></div>
<h1><span class="mw-headline" id="NodeJs-Mongo">NodeJs-Mongo</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/index.php?title=MongoDB_and_NodeJs&amp;action=edit&amp;section=4" title="Edit section: NodeJs-Mongo">edit</a><span class="mw-editsection-bracket">]</span></span></h1>
<h2><span class="mw-headline" id="Create_a_project">Create a project</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/index.php?title=MongoDB_and_NodeJs&amp;action=edit&amp;section=5" title="Edit section: Create a project">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<div class="mw-highlight mw-content-ltr" dir="ltr"><pre>$ mkdir users =&gt; cd users
$ mkdir src
$ mkdir test</pre></div>
<div class="mw-highlight mw-content-ltr" dir="ltr"><pre>$ npm install request --save #url için
$ npm install --save mocha nodemon mongoose</pre></div>
<p>mocha: unit test 
nodemon: 
mongoose&#160;: mongo db driver
</p><p><b>src/user.js:</b>
</p>
<div class="mw-highlight mw-content-ltr" dir="ltr"><pre><span></span><span class="kr">const</span> <span class="nx">mongoose</span><span class="o">=</span><span class="nx">require</span><span class="p">(</span><span class="s1">&#39;mongoose&#39;</span><span class="p">);</span>
<span class="kr">const</span> <span class="nx">Schema</span><span class="o">=</span><span class="nx">mongoose</span><span class="p">.</span><span class="nx">Schema</span><span class="p">;</span>

<span class="kr">const</span> <span class="nx">UserSchema</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Schema</span><span class="p">({</span>
    <span class="nx">name</span><span class="o">:</span><span class="nb">String</span>
<span class="p">});</span>

<span class="kr">const</span> <span class="nx">User</span> <span class="o">=</span> <span class="nx">mongoose</span><span class="p">.</span><span class="nx">model</span><span class="p">(</span><span class="s1">&#39;User&#39;</span><span class="p">,</span><span class="nx">UserSchema</span><span class="p">);</span>

<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">User</span><span class="p">;</span>
</pre></div>
<p><br />
</p>
<h2><span class="mw-headline" id="package.json_-_project_details_and_depencies_file">package.json - project details and depencies file</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/index.php?title=MongoDB_and_NodeJs&amp;action=edit&amp;section=6" title="Edit section: package.json - project details and depencies file">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<p><b>package.json file:</b>
</p>
<div class="mw-highlight mw-content-ltr" dir="ltr"><pre><span></span><span class="p">{</span>
  <span class="s2">&quot;name&quot;</span><span class="o">:</span> <span class="s2">&quot;users&quot;</span><span class="p">,</span>
  <span class="s2">&quot;version&quot;</span><span class="o">:</span> <span class="s2">&quot;1.0.0&quot;</span><span class="p">,</span>
  <span class="s2">&quot;description&quot;</span><span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">,</span>
  <span class="s2">&quot;main&quot;</span><span class="o">:</span> <span class="s2">&quot;index.js&quot;</span><span class="p">,</span>
  <span class="s2">&quot;scripts&quot;</span><span class="o">:</span> <span class="p">{</span>
    <span class="s2">&quot;test&quot;</span><span class="o">:</span> <span class="s2">&quot;mocha&quot;</span>
  <span class="p">},</span>
  <span class="s2">&quot;author&quot;</span><span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">,</span>
  <span class="s2">&quot;license&quot;</span><span class="o">:</span> <span class="s2">&quot;ISC&quot;</span><span class="p">,</span>
  <span class="s2">&quot;dependencies&quot;</span><span class="o">:</span> <span class="p">{</span>
    <span class="s2">&quot;mocha&quot;</span><span class="o">:</span> <span class="s2">&quot;^5.2.0&quot;</span><span class="p">,</span>
    <span class="s2">&quot;mongoose&quot;</span><span class="o">:</span> <span class="s2">&quot;^5.3.10&quot;</span><span class="p">,</span>
    <span class="s2">&quot;nodemon&quot;</span><span class="o">:</span> <span class="s2">&quot;^1.18.6&quot;</span><span class="p">,</span>
    <span class="s2">&quot;request&quot;</span><span class="o">:</span> <span class="s2">&quot;^2.88.0&quot;</span>
  <span class="p">}</span>
<span class="p">}</span>
</pre></div>
<h2><span class="mw-headline" id="Mocha_-_Unit_Test">Mocha - Unit Test</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/index.php?title=MongoDB_and_NodeJs&amp;action=edit&amp;section=7" title="Edit section: Mocha - Unit Test">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<p>Mocha is most famous test framework for javascript..
</p>
<h3><span id="Creating_data_on_MongoDb/Test"></span><span class="mw-headline" id="Creating_data_on_MongoDb.2FTest">Creating data on MongoDb/Test</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/index.php?title=MongoDB_and_NodeJs&amp;action=edit&amp;section=8" title="Edit section: Creating data on MongoDb/Test">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p><b>test/create_test.js(test file):</b>
</p>
<div class="mw-highlight mw-content-ltr" dir="ltr"><pre><span></span><span class="kr">const</span> <span class="nx">assert</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;assert&#39;</span><span class="p">);</span>

<span class="nx">describe</span><span class="p">(</span><span class="s1">&#39;Creating records&#39;</span><span class="p">,()=&gt;{</span>
    <span class="nx">it</span><span class="p">(</span><span class="s1">&#39;saves a user&#39;</span><span class="p">,()=&gt;{</span>
        <span class="nx">assert</span><span class="p">(</span><span class="mi">1</span><span class="o">+</span><span class="mi">1</span> <span class="o">===</span><span class="mi">2</span><span class="p">);</span>
    <span class="p">});</span>
<span class="p">});</span>
</pre></div>
<p><b>test/create_test.js(another sample): </b>
</p>
<div class="mw-highlight mw-content-ltr" dir="ltr"><pre><span></span><span class="kr">const</span> <span class="nx">assert</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;assert&#39;</span><span class="p">);</span>
<span class="kr">const</span> <span class="nx">User</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;../src/user&#39;</span><span class="p">);</span>


<span class="nx">describe</span><span class="p">(</span><span class="s1">&#39;Creating records&#39;</span><span class="p">,()=&gt;{</span>
    <span class="nx">it</span><span class="p">(</span><span class="s1">&#39;saves a user&#39;</span><span class="p">,(</span><span class="nx">done</span><span class="p">)=&gt;{</span> <span class="c1">//&lt;------------ 1.callback </span>
        <span class="kr">const</span> <span class="nx">joe</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">User</span><span class="p">({</span> <span class="nx">name</span><span class="o">:</span> <span class="s1">&#39;Joe&#39;</span><span class="p">});</span>
        
        <span class="c1">//joe.save();</span>
        <span class="nx">joe</span><span class="p">.</span><span class="nx">save</span><span class="p">()</span>
        <span class="p">.</span><span class="nx">then</span><span class="p">((</span><span class="nx">result</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span>
            <span class="c1">//Has joe been saved successfully?</span>
            <span class="nx">assert</span><span class="p">(</span><span class="o">!</span><span class="nx">joe</span><span class="p">.</span><span class="nx">isNew</span><span class="p">);</span>
            <span class="nx">done</span><span class="p">();</span> <span class="c1">//&lt;------------------- 2.callback: we should use </span>
        <span class="p">}).</span><span class="k">catch</span><span class="p">((</span><span class="nx">err</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span>
            <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;Error&#39;</span><span class="p">);</span>
        <span class="p">});</span>

    <span class="p">});</span>
<span class="p">});</span>
</pre></div>
<h3><span id="Search/Find_Record_on_Mongo"></span><span class="mw-headline" id="Search.2FFind_Record_on_Mongo">Search/Find Record on Mongo</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/index.php?title=MongoDB_and_NodeJs&amp;action=edit&amp;section=9" title="Edit section: Search/Find Record on Mongo">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p><b>reading_test.js</b>:
</p>
<div class="mw-highlight mw-content-ltr" dir="ltr"><pre><span></span><span class="kr">const</span> <span class="nx">assert</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;assert&#39;</span><span class="p">);</span>
<span class="kr">const</span> <span class="nx">User</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;../src/user&#39;</span><span class="p">);</span>

<span class="nx">describe</span><span class="p">(</span><span class="s1">&#39;Reading users out of the database&#39;</span><span class="p">,</span> <span class="p">()=&gt;{</span>
    <span class="kd">let</span> <span class="nx">joe</span><span class="p">;</span>

    <span class="nx">beforeEach</span><span class="p">((</span><span class="nx">done</span><span class="p">)=&gt;{</span>
        <span class="nx">joe</span><span class="o">=</span><span class="k">new</span> <span class="nx">User</span><span class="p">({</span><span class="nx">name</span><span class="o">:</span><span class="s1">&#39;Joe&#39;</span><span class="p">});</span>
        <span class="nx">joe</span><span class="p">.</span><span class="nx">save</span><span class="p">()</span>
        <span class="p">.</span><span class="nx">then</span><span class="p">((</span><span class="nx">result</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span>
            <span class="nx">done</span><span class="p">();</span> 
        <span class="p">}).</span><span class="k">catch</span><span class="p">((</span><span class="nx">err</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span>
            <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;Error..&#39;</span><span class="p">);</span>
        <span class="p">});</span>
    <span class="p">});</span>
    
    <span class="nx">it</span><span class="p">(</span><span class="s1">&#39;finds all users with a name of joe&#39;</span><span class="p">,(</span><span class="nx">done</span><span class="p">)=&gt;{</span>
        <span class="nx">User</span><span class="p">.</span><span class="nx">find</span><span class="p">({</span> <span class="nx">name</span><span class="o">:</span><span class="s1">&#39;Joe&#39;</span> <span class="p">})</span>
           <span class="p">.</span><span class="nx">then</span><span class="p">((</span><span class="nx">users</span><span class="p">)=&gt;{</span>
               <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">users</span><span class="p">);</span>
               <span class="nx">assert</span><span class="p">(</span><span class="nx">users</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">_id</span><span class="p">.</span><span class="nx">toString</span><span class="p">()</span> <span class="o">===</span> <span class="nx">joe</span><span class="p">.</span><span class="nx">_id</span><span class="p">.</span><span class="nx">toString</span><span class="p">());</span>
               <span class="nx">done</span><span class="p">();</span>
           <span class="p">});</span>
    <span class="p">});</span>

    <span class="nx">it</span><span class="p">(</span><span class="s1">&#39;find a user with a particular id&#39;</span><span class="p">,</span> <span class="p">(</span><span class="nx">done</span><span class="p">)=&gt;{</span>
        <span class="nx">User</span><span class="p">.</span><span class="nx">findOne</span><span class="p">({</span><span class="nx">_id</span><span class="o">:</span><span class="nx">joe</span><span class="p">.</span><span class="nx">_id</span><span class="p">})</span>
        <span class="p">.</span><span class="nx">then</span><span class="p">((</span><span class="nx">user</span><span class="p">)=&gt;{</span>
            <span class="nx">assert</span><span class="p">(</span><span class="nx">user</span><span class="p">.</span><span class="nx">name</span> <span class="o">===</span> <span class="s1">&#39;Joe&#39;</span><span class="p">);</span>
            <span class="nx">done</span><span class="p">();</span>
        <span class="p">});</span>
    <span class="p">});</span>
<span class="p">});</span>
</pre></div>
<h3><span id="Deleting/removing_records"></span><span class="mw-headline" id="Deleting.2Fremoving_records">Deleting/removing records</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/index.php?title=MongoDB_and_NodeJs&amp;action=edit&amp;section=10" title="Edit section: Deleting/removing records">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p><b>delete_test.js</b>
</p>
<div class="mw-highlight mw-content-ltr" dir="ltr"><pre><span></span><span class="kr">const</span> <span class="nx">assert</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;assert&#39;</span><span class="p">);</span>
<span class="kr">const</span> <span class="nx">User</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;../src/user&#39;</span><span class="p">);</span>

<span class="nx">describe</span><span class="p">(</span><span class="s1">&#39;Deleting a user&#39;</span><span class="p">,()=&gt;{</span>
    <span class="kd">let</span> <span class="nx">joe</span><span class="p">;</span>

    <span class="nx">beforeEach</span><span class="p">((</span><span class="nx">done</span><span class="p">)=&gt;{</span>
        <span class="nx">joe</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">User</span><span class="p">({</span><span class="nx">name</span><span class="o">:</span><span class="s1">&#39;Joe&#39;</span><span class="p">});</span>
        <span class="nx">joe</span><span class="p">.</span><span class="nx">save</span><span class="p">()</span>
        <span class="p">.</span><span class="nx">then</span><span class="p">((</span><span class="nx">result</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span>
            <span class="nx">done</span><span class="p">();</span>
        <span class="p">}).</span><span class="k">catch</span><span class="p">((</span><span class="nx">err</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span>
            <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;delete:error in beforeEach!&#39;</span><span class="p">);</span>
        <span class="p">});</span>
    <span class="p">});</span>

    <span class="nx">it</span><span class="p">(</span><span class="s1">&#39;model instance remove&#39;</span><span class="p">,(</span><span class="nx">done</span><span class="p">)=&gt;{</span>
        <span class="nx">joe</span><span class="p">.</span><span class="nx">remove</span><span class="p">()</span><span class="c1">//it remove joe instance that we created in beforeEach method</span>
        <span class="p">.</span><span class="nx">then</span><span class="p">(()</span> <span class="p">=&gt;</span> <span class="nx">User</span><span class="p">.</span><span class="nx">findOne</span><span class="p">({</span><span class="nx">name</span><span class="o">:</span><span class="s1">&#39;Joe&#39;</span><span class="p">}))</span><span class="c1">//to test that the object deleted, it should return null</span>
        <span class="p">.</span><span class="nx">then</span><span class="p">((</span><span class="nx">user</span><span class="p">)=&gt;{</span><span class="c1">//then: they work sequentially</span>
            <span class="nx">assert</span><span class="p">(</span><span class="nx">user</span> <span class="o">===</span> <span class="kc">null</span><span class="p">);</span>
            <span class="nx">done</span><span class="p">();</span>
        <span class="p">})</span>
        <span class="p">;</span>
    <span class="p">});</span>

    <span class="nx">it</span><span class="p">(</span><span class="s1">&#39;class method remove&#39;</span><span class="p">,(</span><span class="nx">done</span><span class="p">)=&gt;{</span>
        <span class="c1">//remove a bunch of records with some given criteria</span>
        <span class="nx">User</span><span class="p">.</span><span class="nx">remove</span><span class="p">({</span> <span class="nx">name</span><span class="o">:</span><span class="s1">&#39;Joe&#39;</span> <span class="p">})</span>
        <span class="p">.</span><span class="nx">then</span><span class="p">(()=&gt;</span><span class="nx">User</span><span class="p">.</span><span class="nx">findOne</span><span class="p">({</span><span class="nx">name</span><span class="o">:</span><span class="s1">&#39;Joe&#39;</span><span class="p">}))</span>
        <span class="p">.</span><span class="nx">then</span><span class="p">((</span><span class="nx">user</span><span class="p">)=&gt;{</span>
            <span class="nx">assert</span><span class="p">(</span><span class="nx">user</span> <span class="o">===</span> <span class="kc">null</span><span class="p">);</span>
            <span class="nx">done</span><span class="p">();</span>
        <span class="p">});</span>
    <span class="p">});</span>
 
    <span class="nx">it</span><span class="p">(</span><span class="s1">&#39;class method findAndRemove&#39;</span><span class="p">,(</span><span class="nx">done</span><span class="p">)=&gt;{</span>
        <span class="nx">User</span><span class="p">.</span><span class="nx">findOneAndRemove</span><span class="p">({</span><span class="nx">name</span><span class="o">:</span><span class="s1">&#39;Joe&#39;</span><span class="p">})</span>
        <span class="p">.</span><span class="nx">then</span><span class="p">(()=&gt;</span><span class="nx">User</span><span class="p">.</span><span class="nx">findOne</span><span class="p">({</span><span class="nx">name</span><span class="o">:</span><span class="s1">&#39;Joe&#39;</span><span class="p">}))</span>
        <span class="p">.</span><span class="nx">then</span><span class="p">((</span><span class="nx">user</span><span class="p">)=&gt;{</span>
            <span class="nx">assert</span><span class="p">(</span><span class="nx">user</span> <span class="o">===</span> <span class="kc">null</span><span class="p">);</span>
            <span class="nx">done</span><span class="p">();</span>
        <span class="p">});</span>
    <span class="p">});</span>

    <span class="nx">it</span><span class="p">(</span><span class="s1">&#39;class method findByIdAndRemove&#39;</span><span class="p">,(</span><span class="nx">done</span><span class="p">)=&gt;{</span>
        <span class="nx">User</span><span class="p">.</span><span class="nx">findByIdAndRemove</span><span class="p">(</span><span class="nx">joe</span><span class="p">.</span><span class="nx">_id</span><span class="p">)</span>
        <span class="p">.</span><span class="nx">then</span><span class="p">(()=&gt;</span><span class="nx">User</span><span class="p">.</span><span class="nx">findOne</span><span class="p">({</span><span class="nx">name</span><span class="o">:</span><span class="s1">&#39;Joe&#39;</span><span class="p">}))</span>
        <span class="p">.</span><span class="nx">then</span><span class="p">((</span><span class="nx">user</span><span class="p">)=&gt;{</span>
            <span class="nx">assert</span><span class="p">(</span><span class="nx">user</span> <span class="o">===</span> <span class="kc">null</span><span class="p">);</span>
            <span class="nx">done</span><span class="p">();</span>
        <span class="p">});</span>
    <span class="p">});</span>


<span class="p">});</span>
</pre></div>
<h3><span class="mw-headline" id="Updating_records">Updating records</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/index.php?title=MongoDB_and_NodeJs&amp;action=edit&amp;section=11" title="Edit section: Updating records">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p><b>update_test.js</b>:
</p>
<div class="mw-highlight mw-content-ltr" dir="ltr"><pre><span></span><span class="kr">const</span> <span class="nx">assert</span><span class="o">=</span><span class="nx">require</span><span class="p">(</span><span class="s1">&#39;assert&#39;</span><span class="p">);</span>
<span class="kr">const</span> <span class="nx">User</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;../src/user&#39;</span><span class="p">);</span>

<span class="nx">describe</span><span class="p">(</span><span class="s1">&#39;Updating records&#39;</span><span class="p">,()=&gt;{</span>
    <span class="kd">let</span> <span class="nx">joe</span><span class="p">;</span>

    <span class="nx">beforeEach</span><span class="p">((</span><span class="nx">done</span><span class="p">)=&gt;{</span>
        <span class="nx">joe</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">User</span><span class="p">({</span><span class="nx">name</span><span class="o">:</span><span class="s1">&#39;Joe&#39;</span><span class="p">});</span>
        <span class="nx">joe</span><span class="p">.</span><span class="nx">save</span><span class="p">()</span>
        <span class="p">.</span><span class="nx">then</span><span class="p">(()=&gt;</span><span class="nx">done</span><span class="p">());</span>
    <span class="p">});</span>

    <span class="kd">function</span> <span class="nx">assertName</span><span class="p">(</span><span class="nx">operation</span><span class="p">,</span> <span class="nx">done</span><span class="p">){</span>
        <span class="nx">operation</span>
            <span class="p">.</span><span class="nx">then</span><span class="p">(()=&gt;</span><span class="nx">User</span><span class="p">.</span><span class="nx">find</span><span class="p">({}))</span>
            <span class="p">.</span><span class="nx">then</span><span class="p">((</span><span class="nx">users</span><span class="p">)=&gt;{</span>
                <span class="nx">assert</span><span class="p">(</span><span class="nx">users</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span><span class="p">);</span>
                <span class="nx">assert</span><span class="p">(</span><span class="nx">users</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">name</span> <span class="o">===</span> <span class="s1">&#39;Alex&#39;</span><span class="p">);</span>
                <span class="nx">done</span><span class="p">();</span>
            <span class="p">});</span>
    <span class="p">}</span>

    <span class="c1">//set and save: when you update more record(emaıl, phone, address), </span>
    <span class="c1">//like a transactional update,</span>
    <span class="c1">//we can update all data, and then save all.</span>
    <span class="nx">it</span><span class="p">(</span><span class="s1">&#39;instance type using set n save&#39;</span><span class="p">,(</span><span class="nx">done</span><span class="p">)=&gt;{</span>
       <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">joe</span><span class="p">);</span>
       <span class="nx">joe</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="s1">&#39;name&#39;</span><span class="p">,</span><span class="s1">&#39;Alex&#39;</span><span class="p">);</span>
       <span class="nx">assertName</span><span class="p">(</span><span class="nx">joe</span><span class="p">.</span><span class="nx">save</span><span class="p">(),</span><span class="nx">done</span><span class="p">);</span>
       <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">joe</span><span class="p">);</span> 
    <span class="p">});</span>

    <span class="c1">//update : directly update</span>
    <span class="nx">it</span><span class="p">(</span><span class="s1">&#39;A model instance can update&#39;</span><span class="p">,(</span><span class="nx">done</span><span class="p">)=&gt;{</span>
        <span class="nx">assertName</span><span class="p">(</span><span class="nx">joe</span><span class="p">.</span><span class="nx">update</span><span class="p">({</span><span class="nx">name</span><span class="o">:</span><span class="s1">&#39;Alex&#39;</span><span class="p">}),</span><span class="nx">done</span><span class="p">);</span>
    <span class="p">});</span>  

    <span class="nx">it</span><span class="p">(</span><span class="s1">&#39;A model class can update&#39;</span><span class="p">,</span> <span class="p">(</span><span class="nx">done</span><span class="p">)=&gt;{</span>
        <span class="nx">assertName</span><span class="p">(</span>
            <span class="nx">User</span><span class="p">.</span><span class="nx">update</span><span class="p">({</span><span class="nx">name</span><span class="o">:</span><span class="s1">&#39;Joe&#39;</span><span class="p">,</span><span class="nx">name</span><span class="o">:</span><span class="s1">&#39;Alex&#39;</span><span class="p">}),</span>
            <span class="nx">done</span>
        <span class="p">);</span>
    <span class="p">});</span>

    <span class="nx">it</span><span class="p">(</span><span class="s1">&#39;A model class can update one record&#39;</span><span class="p">,</span> <span class="p">(</span><span class="nx">done</span><span class="p">)=&gt;{</span>
        <span class="nx">assertName</span><span class="p">(</span>
            <span class="nx">User</span><span class="p">.</span><span class="nx">findOneAndUpdate</span><span class="p">({</span><span class="nx">name</span><span class="o">:</span><span class="s1">&#39;Joe&#39;</span><span class="p">,</span><span class="nx">name</span><span class="o">:</span><span class="s1">&#39;Alex&#39;</span><span class="p">}),</span>
            <span class="nx">done</span>
        <span class="p">);</span>
    <span class="p">});</span>

    <span class="nx">it</span><span class="p">(</span><span class="s1">&#39;A model class can find a record with an Id and update&#39;</span><span class="p">,(</span><span class="nx">done</span><span class="p">)=&gt;{</span>
        <span class="nx">assertName</span><span class="p">(</span>
            <span class="nx">User</span><span class="p">.</span><span class="nx">findByIdAndUpdate</span><span class="p">(</span><span class="nx">joe</span><span class="p">.</span><span class="nx">_id</span><span class="p">,{</span><span class="nx">name</span><span class="o">:</span><span class="s1">&#39;Alex&#39;</span><span class="p">}),</span>
            <span class="nx">done</span>
        <span class="p">);</span>
    <span class="p">});</span>

<span class="p">});</span>
</pre></div>
<h3><span class="mw-headline" id="Run_the_test_:_npm_run_test">Run the test&#160;: npm run test</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/index.php?title=MongoDB_and_NodeJs&amp;action=edit&amp;section=12" title="Edit section: Run the test : npm run test">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<div class="mw-highlight mw-content-ltr" dir="ltr"><pre>$ npm run test</pre></div>
<h2><span class="mw-headline" id="Automating_Test">Automating Test</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/index.php?title=MongoDB_and_NodeJs&amp;action=edit&amp;section=13" title="Edit section: Automating Test">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<pre>   "test": "nodemon --exec 'mocha -R min'"&#160;: formats and clear the output
</pre>
<p>If I change the code, it runs test again for changes.
</p>
<div class="mw-highlight mw-content-ltr" dir="ltr"><pre><span></span><span class="p">{</span>
  <span class="s2">&quot;name&quot;</span><span class="o">:</span> <span class="s2">&quot;users&quot;</span><span class="p">,</span>
  <span class="s2">&quot;version&quot;</span><span class="o">:</span> <span class="s2">&quot;1.0.0&quot;</span><span class="p">,</span>
  <span class="s2">&quot;description&quot;</span><span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">,</span>
  <span class="s2">&quot;main&quot;</span><span class="o">:</span> <span class="s2">&quot;index.js&quot;</span><span class="p">,</span>
  <span class="s2">&quot;scripts&quot;</span><span class="o">:</span> <span class="p">{</span>
    <span class="s2">&quot;test&quot;</span><span class="o">:</span> <span class="s2">&quot;nodemon --exec &#39;mocha -R min&#39;&quot;</span>
  <span class="p">},</span>
  <span class="s2">&quot;author&quot;</span><span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">,</span>
  <span class="s2">&quot;license&quot;</span><span class="o">:</span> <span class="s2">&quot;ISC&quot;</span><span class="p">,</span>
  <span class="s2">&quot;dependencies&quot;</span><span class="o">:</span> <span class="p">{</span>
    <span class="s2">&quot;mocha&quot;</span><span class="o">:</span> <span class="s2">&quot;^5.2.0&quot;</span><span class="p">,</span>
    <span class="s2">&quot;mongoose&quot;</span><span class="o">:</span> <span class="s2">&quot;^5.3.10&quot;</span><span class="p">,</span>
    <span class="s2">&quot;nodemon&quot;</span><span class="o">:</span> <span class="s2">&quot;^1.18.6&quot;</span><span class="p">,</span>
    <span class="s2">&quot;request&quot;</span><span class="o">:</span> <span class="s2">&quot;^2.88.0&quot;</span>
  <span class="p">}</span>
<span class="p">}</span>
</pre></div>
<h1><span class="mw-headline" id="MongoDB_with_Node_and_Express">MongoDB with Node and Express</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/index.php?title=MongoDB_and_NodeJs&amp;action=edit&amp;section=14" title="Edit section: MongoDB with Node and Express">edit</a><span class="mw-editsection-bracket">]</span></span></h1>
<p><b>Node</b>:Engine for running JavaScript outside of a browser environment. Can work with HTTP requests.
</p><p><b>Express</b>:Framework to simplify working with HTTP requests.
</p><p><img src="http://rasimsen.com/images/node-express-mongo-rest-api.png" alt="node-express-mongo-rest-api.png" />
</p><p><br />
</p>
<h2><span class="mw-headline" id="Create_a_new_project">Create a new project</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/index.php?title=MongoDB_and_NodeJs&amp;action=edit&amp;section=15" title="Edit section: Create a new project">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<div class="mw-highlight mw-content-ltr" dir="ltr"><pre>$ mkdir muber
$ cd muber
$ npm init
$ code . #to open in a editor(atom, code)</pre></div>
<p>to install some dependencies..
you can use <b>SuperTest</b> which is can be used to test HTTP endpoints.
</p>
<div class="mw-highlight mw-content-ltr" dir="ltr"><pre>$ sudo npm install --save nodemon mongoose express mocha
$ sudo npm install --save supertest #you can use SuperTest which is can be used to test HTTP endpoints.
$ sudo npm install --save body-parser #Parse incoming request bodies in a middleware before your handlers, available under the req.body property.</pre></div>
<p><br />
</p><p><br />
</p>
<div class="mw-highlight mw-content-ltr" dir="ltr"></div>
<h1><span class="mw-headline" id="Errors">Errors</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/index.php?title=MongoDB_and_NodeJs&amp;action=edit&amp;section=16" title="Edit section: Errors">edit</a><span class="mw-editsection-bracket">]</span></span></h1>
<div class="mw-highlight mw-content-ltr" dir="ltr"><pre>(node:27919) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.</pre></div>
<p>Solution:
Check your mongo version
</p>
<div class="mw-highlight mw-content-ltr" dir="ltr"><pre>mongo --version
If you are using version &gt;= 3.1.0 change you mongo connection file to -&gt;

MongoClient.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true })
or your mongoose connection file to -&gt;

mongoose.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true });
Ideally, it's a version 4 feature but v3.1.0 and above is supporting it too. Check out MongoDB Github for details.</pre></div>
<p>Error: TypeError: User is not a constructor
Solution: Node is a case-sensetive language. Check your model or object..
</p>
