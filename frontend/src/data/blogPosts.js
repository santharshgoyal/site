// Sample blog posts — used by archives list + post detail pages
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat hendrerit nulla quis congue. Nullam luctus bibendum lectus sit amet efficitur. Vestibulum lacinia sodales libero nec egestas. Integer erat nulla, convallis ac lacus iaculis, dapibus sodales nunc. Nulla ut tortor nec risus molestie ornare. Quisque libero dolor, sodales et dui vitae, porttitor viverra nisl. Curabitur quis semper nibh, ut maximus enim. Aenean a ligula et massa fermentum porttitor. Morbi eu purus in metus mollis laoreet commodo tincidunt orci. Nunc volutpat, nunc semper egestas molestie, lectus ligula tincidunt tellus, nec feugiat felis massa at metus. Donec posuere euismod augue, vitae fermentum sem tempor eget. Mauris pellentesque mollis odio, quis eleifend ligula interdum sit amet.

Aenean laoreet eu lorem nec suscipit. Phasellus ultrices auctor enim dapibus porttitor. Aenean fermentum viverra justo et rutrum. Proin diam nibh, maximus ut porttitor ut, consequat sit amet dui. Proin id aliquet tortor, iaculis ultricies nibh. Aenean in elementum turpis, sed pretium nibh. Cras risus tortor, varius id mi non, dictum luctus lectus.

Praesent elementum dignissim dui quis aliquet. Praesent urna mi, luctus id odio eget, consequat accumsan lorem. Vestibulum dapibus in metus quis eleifend. Maecenas posuere, felis id ultricies elementum, elit libero ornare arcu, eget faucibus elit urna eu nisl. Proin tellus velit, viverra quis lacus a, rhoncus suscipit justo. In pellentesque eros id odio laoreet pharetra. Vivamus porttitor ipsum a est facilisis cursus. Mauris dui nulla, venenatis aliquam nulla ac, consequat porttitor orci. Maecenas aliquet egestas erat, sit amet auctor enim. Pellentesque ex nunc, sagittis non dolor vitae, bibendum pellentesque est. Vivamus tincidunt, ante at commodo facilisis, sem quam semper felis, sed tincidunt libero dui vitae sem.

Sed nibh ipsum, viverra non malesuada ac, tempor at erat. Sed et pellentesque ligula. Etiam tempor non dolor eu tincidunt. Donec iaculis sapien sed lorem posuere, et feugiat lorem mollis. Etiam dui orci, tempor sed felis sed, laoreet finibus sapien. Etiam egestas consequat leo, at rutrum ligula porta eget. Vestibulum risus nulla, viverra eget est vel, fringilla congue ipsum. Donec rhoncus eros ut lorem luctus, vitae rutrum tellus lobortis. Nunc eget tempor tellus. Mauris vel efficitur mi. Donec dapibus volutpat ullamcorper. Donec consectetur enim vel magna commodo egestas ut ut erat. Nulla porttitor aliquet urna nec cursus. Nullam sollicitudin ex at elit pulvinar consectetur.

Sed porta tincidunt auctor. Nullam placerat consectetur tellus sed imperdiet. Cras eleifend elit vitae risus lobortis pretium. Nulla leo arcu, maximus nec odio quis, lacinia tincidunt turpis. Morbi vitae elit at mi ultrices feugiat. Maecenas venenatis tempor purus, sed suscipit neque faucibus a. Donec pulvinar purus purus, porttitor aliquet nibh vestibulum id. Nulla faucibus metus ac consectetur vulputate. Duis quis diam at sem lobortis fermentum. Proin congue, ante eget lobortis auctor, felis dui sodales ex, et dictum leo nisi eu nibh. Ut nec ex imperdiet, elementum odio non, consectetur eros. Fusce sem lorem, malesuada eu ex eu, feugiat tempus tellus. Suspendisse potenti. Fusce sed fermentum arcu.`;

export const BLOG_POSTS = [
  { slug: "title-8", title: "Title 8", date: "2025-11-25", category: "Law", body: lorem },
  { slug: "title-7", title: "Title 7", date: "2025-09-26", category: "Economics", body: lorem },
  { slug: "title-6", title: "Title 6", date: "2025-01-04", category: "Random", body: lorem },
  { slug: "title-5", title: "Title 5", date: "2025-11-25", category: "Law", body: lorem },
  { slug: "title-4", title: "Title 4", date: "2025-11-25", category: "Economics", body: lorem },
  { slug: "title-3", title: "Title 3", date: "2025-11-25", category: "Random", body: lorem },
  { slug: "title-2", title: "Title 2", date: "2025-11-25", category: "Law", body: lorem },
  { slug: "title-1", title: "Title 1", date: "2025-11-25", category: "Economics", body: lorem },
];

export const CATEGORIES = ["All", "Law", "Economics", "Random"];

export function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  const month = d.toLocaleString("en-US", { month: "long" });
  const day = d.getDate();
  const year = d.getFullYear();
  const suffix = (n) => {
    if (n >= 11 && n <= 13) return "th";
    switch (n % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };
  return `${month} ${day}${suffix(day)}, ${year}`;
}
