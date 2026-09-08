# MiranDinc

A personal portfolio site styled as a retro desktop environment: icons open draggable, resizable windows, each running a distinct app.

## Language

**Desktop**:
The retro desktop environment a visitor sees after logging in — the icon grid and taskbar.

**Window**:
A draggable, resizable frame that hosts one App's content. Several Windows can be open at once; only one is topmost.

**Icon**:
A double-clickable desktop shortcut that opens a Window running a specific App.

**App**:
The content a Window displays. Each Icon opens a Window running one App.

**AppType**:
The identity of an App (e.g. "trash", "pokedex"), distinct from a Window's display title. Renaming a Window's title never changes which App it's running.
_Avoid_: title (the display name a user sees is a separate concept from the app's identity)

**Trash**:
The App intended to receive files removed from other Apps (e.g. Projects). Not yet functional — nothing in the product can create or delete files yet.

**Virtual filesystem** _(anticipated, not yet built)_:
A shared store of files that multiple Apps — Projects, Trash, and others — would read and write, so that deleting a file in one App is what makes it appear in Trash. No concrete design exists yet; flagged here as an open direction for a future architecture pass, not a commitment.
