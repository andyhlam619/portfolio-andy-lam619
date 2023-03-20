const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://gitlab.com/andyhlam619">
        <i className="fa-brands fa-gitlab" aria-hidden="true" title="Michael Yeates' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/andy-h-lam/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Michael Yeates' LinkedIn Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
