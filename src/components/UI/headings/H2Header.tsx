import './Header.styles.scss';

const SectionHeader = ({
  sectionType,
  sectionExtraClass,
  children,
}: {
  sectionType: string;
  sectionExtraClass?: string;
  children: string;
}) => {
  return (
    <div className={`${sectionType}__header`}>
      <h2 className={`${sectionType}__title`}>{children}</h2>
    </div>
  );
};

export default SectionHeader;
