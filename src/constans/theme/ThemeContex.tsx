import {ThemeProvider} from 'styled-components';
import {defaultTheme} from '$src/constans/theme/defaultTheme';

const ManageThemeProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[] | null;
}) => {
  const theme = {
    ...defaultTheme,
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ManageThemeProvider;
