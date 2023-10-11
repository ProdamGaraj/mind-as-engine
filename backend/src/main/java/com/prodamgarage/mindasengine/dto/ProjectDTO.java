package com.prodamgarage.mindasengine.dto;

import com.prodamgarage.mindasengine.models.Project;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@RequiredArgsConstructor
public class ProjectDTO {
    @NonNull
    private Project project;
    @NonNull
    private List<String> files;
}
