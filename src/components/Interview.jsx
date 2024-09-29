import React, { useState } from "react";

function Interview() {
  const [data, setdata] = useState({
    root: {
      type: "root",
      children: {
        public: {
          type: "public",
          children: {
            "index.html": {
              type: "file",
            },
            "favicon.ico": {
              type: "file",
            },
            "manifest.json": {
              type: "file",
            },
          },
        },
        src: {
          type: "src",
          children: {
            "App.js": {
              type: "file",
            },
            "index.js": {
              type: "file",
            },
            "App.css": {
              type: "file",
            },
            "index.css": {
              type: "file",
            },
            components: {
              type: "folder",
              children: {
                "Header.js": {
                  type: "file",
                },
                "Footer.js": {
                  type: "file",
                },
              },
            },
          },
        },
        "package.json": {
          type: "file",
        },
        "README.md": {
          type: "file",
        },
        ".gitignore": {
          type: "file",
        },
      },
    },
  });

  const [val, setVal] = useState(false);
  const [open, setopen] = useState(false);
  const [opensrc, setopensrc] = useState(false);
  const [input1, setinput1] = useState(false);
  const [input2, setinput2] = useState(false);
  const [input3, setinput3] = useState("");





  const handleOpen = () => {
    setVal(!val);
  };
  const handleClick = () => {
    setopen(!open);
  }
  const handleClicksrc = () => {
    setopensrc(!opensrc);
    }
    const inputBox1 = () => {
       setinput1(!input1);
    }
    const inputBox2 = () => {
        setinput2(!input2);
    }
return (
    <>
        <div className="m-10 text-xl p-10 w-1/2">
            <span onClick={handleOpen} className="text-zinc-600 p-3 border-2 flex gap-3">
                📁 {data.root.type} 
                <button onClick={inputBox1}>file+</button>
                { input1 && <input value={setinput3} onChange={(e) => e.target.value} type="text" name="" className="border-2 border-black" id="" /> }
                <button onClick={inputBox2}>folder+</button>
                { input2 && <input type="text" name="" className="border-2 border-black" id=""  /> }
            </span>

            <div className={`${val ? "hidden" : "block"} mt-4 ml-10`}>
                <div className="ml-10">
                    <span onClick={handleClick} className="text-zinc-600">
                        📁 {data.root.children.public.type} <br/>

                        {open && (
                            <>
                            <div className="ml-10 ">
                                {Object.keys(data.root.children.public.children).map((file) => (
                                    <div key={file}>🗃️ {file}</div>
                                ))}
                            </div>
                            </>
                        )}
                    </span>
                </div>
                <div className="ml-10">
                    <span onClick={handleClicksrc} className="text-zinc-600 ">
                        📁 {data.root.children.src.type} <br/>

                        {opensrc && (
                            <>
                            <div className="ml-10">
                                {Object.keys(data.root.children.src.children).map((file) => (
                                    <div key={file}>🗃️ {file}</div>
                                ))}
                            </div>
                            </>
                        )}
                    </span>
                </div>
            </div>
        </div>
    </>
);
}

export default Interview;
