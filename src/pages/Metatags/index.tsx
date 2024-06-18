import { ChangeEvent, useState } from "react";

export default function Metatags() {
  const [title, setTitle] = useState<string>('Current Title');

  const updatePageTitleTag = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    
    setTitle(event.target.value);
  };

  return (
    <>
      <div>
        <title>{title}</title>
      </div>
      <div>
        <h1>Metatags</h1>
        <p>Metatags allows add more info to html metatags. In this case the Title Tag</p>

          <h3>Type another name to this page</h3>

          <input type="text" name="title" value={title} onChange={(e) => updatePageTitleTag(e)} placeholder="Type title of this page" />
          
          <div>
            <a href='https://github.com/gregsvieira/react-19-new-features/blob/main/src/pages/Metatags/index.tsx' target='_blank' rel='noopener noreferrer'>
              &lt;code /&gt;
            </a>
          </div>
        </div>
    </>
  )
}
