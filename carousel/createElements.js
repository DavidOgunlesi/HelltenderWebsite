// Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
if ('content' in document.createElement('template')) {
    // Instantiate the table with the existing HTML tbody
    // and the row with the template
    const targetEl = document.querySelector(".carousel__list");
    const template = document.querySelector('#carousel__template');

    const gallery = [
        { caption: "", video: "./gallery/helltenderScreenAnim.webm"},
        { caption: "", video: "./gallery/dooropenbetter.webm"},
        { caption: "", video: "./gallery/glassPickupSmooth.webm"},
        { caption: "", video: "./gallery/helltenderVaccum.webm"},
        { caption: "", video: "./gallery/helltenderScreenAnim.webm"},
        { caption: "", video: "./gallery/helltenderScreenAnim.webm"},
        { caption: "", video: "./gallery/helltenderScreenAnim.webm"},
        { caption: "", video: "./gallery/helltenderScreenAnim.webm"},
        { caption: "", video: "./gallery/helltenderScreenAnim.webm"},
        { caption: "", video: "./gallery/helltenderScreenAnim.webm"},
    ];

    for (let i = 0; i < gallery.length; i++) {
        // Clone the new row and insert it into the table
        const clone = template.content.cloneNode(true);
        let img = clone.querySelector("video");
        img.src = gallery[i].video;
        let caption = clone.querySelector(".slide__title");
        caption.textContent = gallery[i].caption;

        targetEl.appendChild(clone);
    }

} else {
  // Find another way to add the rows to the table because
  // the HTML template element is not supported.
}