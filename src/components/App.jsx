import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// now pb hocche ekta varible or parameter jeta arrayfile take access korte pare
// or whole emojipedia.jsx array file tar aar ekta copy  pb r modhe ei ache
// pb r kache ektai array element asche ie one by one method
// map fn hocche for loop
function createEntry(emojipedia) {
  return (
    <Entry
      key={emojipedia.id}
      img={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      {/* Method 3  map method
        syntax of map method

        {arrayname.map(function_name)}
        eibar ei function_name r modhe gota array_name ta dhuke jacche 
        i.e. fn_name can access everything of a_name

        
        */}
        {emojipedia.map(createEntry)}

        {/* method 1 */}

        {/* <Entry img="😘" name="chumu" meaning="kiss u baby" /> */}

        {/*method 2  */}

        {/* <Entry
          img={emojipedia[0].emoji}
          name={emojipedia[0].name}
          meaning={emojipedia[0].meaning}
        />
        <Entry
          img={emojipedia[1].emoji}
          name={emojipedia[1].name}
          meaning={emojipedia[1].meaning}
        />
        <Entry
          img={emojipedia[2].emoji}
          name={emojipedia[2].name}
          meaning={emojipedia[2].meaning}
        /> */}

 {/* <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              💪
            </span>
            <span>Tense Biceps</span>
          </dt>
          <dd>
            “You can do that!” or “I feel strong!” Arm with tense biceps. Also
            used in connection with doing sports, e.g. at the gym.
          </dd>
        </div> */}
        {/* <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              🙏
            </span>
            <span>Person With Folded Hands</span>
          </dt>
          <dd>
            Two hands pressed together. Is currently very introverted, saying a
            prayer, or hoping for enlightenment. Is also used as a “high five”
            or to say thank you.
          </dd>
        </div>
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              🤣
            </span>
            <span>Rolling On The Floor, Laughing</span>
          </dt>
          <dd>
            This is funny! A smiley face, rolling on the floor, laughing. The
            face is laughing boundlessly. The emoji version of “rofl“. Stands
            for „rolling on the floor, laughing“.
          </dd>
        </div> */}
      </dl>
    </div>
  );
}

export default App;

