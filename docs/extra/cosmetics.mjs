const rawCosmetics = await (await fetch("https://dl.labymod.net/cosmetics/index.json")).json();
let cosmetics = [];
for (const cosmetic of Object.values(rawCosmetics.cosmetics)) {
    cosmetics.push({
        id: cosmetic.id,
        type: cosmetic.type,
        name: cosmetic.name,
        default_images: (cosmetic.default_data || []).filter(d => d.length === 36).map(d => `https://dl.labymod.net/textures/${cosmetic.id}/${d}`),
        category: cosmetic.category,
        image: `https://www.labymod.net/page/tpl/assets/images/shop/products/${cosmetic.name.toLowerCase().replaceAll(" ", "-")}_0.png`
    });
}

let markdownTable = "| ID | Type | Name | Category | Image | Default Images |\n| --- | --- | --- | --- | --- | --- |\n";

for (const cosmetic of cosmetics)
    markdownTable += `| ${cosmetic.id} | ${cosmetic.type} | ${cosmetic.name} | ${cosmetic.category} | ![${cosmetic.name}](${cosmetic.image}) | ${cosmetic.default_images.map(d => `![${cosmetic.name}](${d})`).join(" ")} |\n`;

console.log(markdownTable);