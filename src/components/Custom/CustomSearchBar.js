import "../../styles/customSearchBarStyle.css";

const CustomSearchBar = () => {
  function searchToggle(obj, evt) {
    var container = obj.closest(".search-wrapper");
    if (!container.hasClass("active")) {
      container.addClass("active");
      evt.preventDefault();
    } else if (
      container.hasClass("active") &&
      obj.closest(".input-holder").length == 0
    ) {
      container.removeClass("active");
      // clear input
      container.find(".search-input").val("");
    }
  }

  return (
    <>
      <div className="search-wrapper">
        <div className="input-holder">
          <input
            type="text"
            className="search-input"
            placeholder="Type to search"
          />
          <button className="search-icon" onclick="searchToggle(this, event);">
            <span></span>
          </button>
        </div>
        <span className="close" onclick="searchToggle(this, event);"></span>
      </div>
    </>
  );
};

export default CustomSearchBar;
