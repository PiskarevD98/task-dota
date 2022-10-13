const Pagination = ({ limitTeams, totalTeams, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalTeams / limitTeams); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumber.map((number) => (
          <li key={number} className="numberPage">
            <a
              href="/#"
              onClick={() => paginate(number)}
              className="currentPage"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
