import { PROJECT_QUERYResult } from '@/sanity/types';
import { Title } from '@/components/Title';
import dayjs from 'dayjs';
import { ProjectDetails } from '@/components/ProjectDetails';
import { ProjectImage } from '@/components/ProjectImage';
import { PortableText } from 'next-sanity';
import { components } from '@/sanity/portableTextComponents';

export function Project(props: NonNullable<PROJECT_QUERYResult>) {
  const {
    title,
    mainImage,
    description,
    categories,
    publishedAt,
    technologies,
    keyFeatures,
    purpose,
    challenge,
    solution,
  } = props;

  return (
    <section className='relative container mx-auto max-w-4xl py-10'>
      <Title>{title}</Title>
      <div className='mt-6 flex flex-col gap-5'>
        <ProjectDetails label='Overview'>
          <p className='text-balance'>{description}</p>
        </ProjectDetails>

        <div className='flex flex-col gap-2'>
          <ProjectDetails label='Categories'>
            {categories?.map((category, idx) => (
              <span key={category} className='flex items-center text-sm'>
                {category}
                {idx < categories.length - 1 && <span className='ml-2'>•</span>}
              </span>
            ))}
          </ProjectDetails>

          <ProjectDetails label='Technologies'>
            {technologies?.map((tech, idx) => (
              <span key={tech} className='flex items-center text-sm'>
                {tech}
                {idx < technologies.length - 1 && (
                  <span className='ml-2'>•</span>
                )}
              </span>
            ))}
          </ProjectDetails>

          <ProjectDetails label='Year'>
            <span className='font-jetbrains-mono text-sm'>
              {publishedAt ? dayjs(publishedAt).year() : '-'}
            </span>
          </ProjectDetails>

          <ProjectDetails label='Key Features'>
            <div>
              <ul className='ml-5 list-disc space-y-1 text-sm'>
                {keyFeatures!.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </ProjectDetails>
        </div>
      </div>

      {mainImage?.asset?._ref && (
        <div className='my-10 w-full'>
          <ProjectImage {...props} />
        </div>
      )}

      <div className='mt-10 flex flex-col gap-10'>
        {[
          { label: 'Purpose', content: purpose },
          { label: 'Challenge', content: challenge },
          { label: 'Solution', content: solution, extraClass: 'space-y-5' },
        ].map(({ label, content, extraClass }, idx) =>
          content ? (
            <ProjectDetails
              key={label}
              label={
                <>
                  <span className='font-jetbrains-mono text-sm'>
                    ({(idx + 1).toString().padStart(2, '0')})
                  </span>{' '}
                  {label}
                </>
              }
            >
              <div className={`text-balance ${extraClass || ''}`}>
                <PortableText
                  value={
                    Array.isArray(content)
                      ? content
                      : [
                          {
                            _type: 'block',
                            _key: `block-${idx}`,
                            style: 'normal',
                            children: [
                              {
                                _type: 'span',
                                _key: `span-${idx}`,
                                text: content as string,
                              },
                            ],
                          },
                        ]
                  }
                  components={components}
                />
              </div>
            </ProjectDetails>
          ) : null,
        )}
      </div>
    </section>
  );
}
