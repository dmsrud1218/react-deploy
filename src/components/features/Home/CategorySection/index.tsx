import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { useGetCategories } from '@/api/hooks/useGetCategorys';
import { Container } from '@/components/common/layouts/Container';
import { Grid } from '@/components/common/layouts/Grid';
import { getDynamicPath } from '@/routes/path';
import { breakpoints } from '@/styles/variants';

import { CategoryItem } from './CategoryItem';

interface Category {
  id: number;
  name: string;
  image_url: string;
}

export const CategorySection = () => {
  const { data, isLoading, isError } = useGetCategories();

  if (isLoading || isError) return null;
  if (!data) return null;

  return (
    <Wrapper>
      <Container>
        <Grid
          columns={{
            initial: 4,
            md: 6,
          }}
        >
          {data.map((category: Category) => (
            <Link
              key={category.id?.toString()}
              to={getDynamicPath.category(category.id?.toString() || '')}
            >
              <CategoryItem image={category.image_url} label={category.name} />
            </Link>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 14px 14px 3px;

  @media screen and (min-width: ${breakpoints.sm}) {
    padding: 45px 52px 23px;
  }
`;
