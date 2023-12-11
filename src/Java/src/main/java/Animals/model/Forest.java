package Animals.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Animals.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Forest
 */
@Entity(name = "IISAnimalsForest")
@Table(schema = "public", name = "Forest")
public class Forest {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Name")
    private String name;

    @Column(name = "Coordinates")
    private String coordinates;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Country")
    @Convert("Country")
    @Column(name = "Country", length = 16, unique = true, nullable = false)
    private UUID _countryid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Country", insertable = false, updatable = false)
    private Country country;


    public Forest() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getName() {
      return name;
    }

    public void setName(String name) {
      this.name = name;
    }

    public String getCoordinates() {
      return coordinates;
    }

    public void setCoordinates(String coordinates) {
      this.coordinates = coordinates;
    }


}